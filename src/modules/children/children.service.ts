import { Model, Schema } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import {Children, ChildrenCompetition} from './interfaces/children.interface';
import {ChildrenModelToken, InstrumentsModelToken, SpecializationModelName, SpecializationModelToken} from '../constants';
import {CreateChildrenDto} from './dto/create-children.dto';
import {Specialization} from '../others/interface/specialization.interface';
import {Instruments} from '../others/interface/instruments.interface';
import ObjectId = Schema.Types.ObjectId;
import {RatingService} from './rating';
import * as _ from 'lodash';

@Component()
export class ChildrenService {
  constructor(@Inject(ChildrenModelToken) private readonly childrenModel: Model<Children>,
              @Inject(InstrumentsModelToken) private readonly instrumentsModel: Model<Instruments>,
              @Inject(SpecializationModelToken) private readonly specializationModel: Model<Specialization>,
              private readonly ratingService: RatingService) {
  }

  async findAllSpecialization() {
    return await this.specializationModel.find();
  }

  async findById(id: string) {
    return this.childrenModel.findById(id)
      .populate({path: 'instruments', populate: {path: 'specialization'}})
      .populate({path: 'schools', populate: {path: 'region'}})
      .populate({path: 'ssuzInfo.specialization'})
      .populate({path: 'competitions.place'})
      .populate({path: 'competitions.level'})
      .populate({path: 'competitions.specialization'})
      .populate({path: 'competitions.teacher'})
      .populate({path: 'competitions.competition', select: '-files', populate: [{path: 'level'}, {path: 'specialization'}]});
      // .populate({path: 'competitions.competition', populate: {path: 'level'}});
  }

  async findAllInstruments(specializationId: ObjectId) {
    return this.instrumentsModel.find({specialization: specializationId});
  }

  async getRating(id: string) {
    const childrens = await this.childrenModel.find()
      .populate({path: 'competitions.place'})
      .populate({path: 'competitions.level'});

    const result = [];
    childrens.forEach(children => {
      const rating = this.getRatingByChidren(children);
      return result.push({rating, name: children.surname + children.name});
    });

    return _.sortBy(result, 'rating');
  }

  private getRatingByChidren(children: Children) {
    let rating = 0;
    for (let i = 0; i < children.competitions.length; ++i) {
      const [rateLevel, ratePlace] = this.getRatingByCompetition(children.competitions[i]);
      rating += this.ratingService.getRating(rateLevel, ratePlace);
    }

    return rating;
  }

  private getRatingByCompetition(competition: ChildrenCompetition) {
    const rateCompetitionLevel = competition.level.rate;
    const rateCompetitionPlace = competition.place.rate;

    return [rateCompetitionLevel, rateCompetitionPlace];
  }

  async create(createChildrenDto: CreateChildrenDto): Promise<Children> {
    const children = new this.childrenModel(createChildrenDto);
    return await children.save();
  }

  async update(id: ObjectId, createChildrenDto: CreateChildrenDto): Promise<Children> {
    return await this.childrenModel.findByIdAndUpdate(id, createChildrenDto, {new: true});
  }

  async findAll(schoolId: ObjectId, long: boolean): Promise<Children[]> {
    let obj = schoolId ? {schools: schoolId} : {};
    if (long) {
      const childrens = await this.childrenModel.find(obj)
        .populate('schools')
        .populate('instruments')
        .populate({path: 'competitions.place'})
        .populate({path: 'competitions.level'});

      const result = [];
      childrens.forEach(children => {
        const childrenObj = children.toObject();
        childrenObj['rating'] = this.getRatingByChidren(children);

        result.push(childrenObj);
      });


      return <any[]>_.sortBy(result, [function(o) { return -o.rating; }]);

    }

    return await this.childrenModel.find(obj);
  }

  public remove(id: Schema.Types.ObjectId) {
    return this.childrenModel.remove({_id: id});
  }
}
