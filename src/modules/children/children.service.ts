import { Model, Schema } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import {Children} from './interfaces/children.interface';
import {ChildrenModelToken, InstrumentsModelToken, SpecializationModelName, SpecializationModelToken} from '../constants';
import {CreateChildrenDto} from './dto/create-children.dto';
import {Specialization} from '../others/interface/specialization.interface';
import {Instruments} from '../others/interface/instruments.interface';
import ObjectId = Schema.Types.ObjectId;

@Component()
export class ChildrenService {
  constructor(@Inject(ChildrenModelToken) private readonly childrenModel: Model<Children>,
              @Inject(InstrumentsModelToken) private readonly instrumentsModel: Model<Instruments>,
              @Inject(SpecializationModelToken) private readonly specializationModel: Model<Specialization>) {
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
      .populate({path: 'competitions.competition', select: '-files', populate: [{path: 'level'}, {path: 'specialization'}]});
      // .populate({path: 'competitions.competition', populate: {path: 'level'}});
  }

  async findAllInstruments(specializationId: ObjectId) {
    return this.instrumentsModel.find({specialization: specializationId});
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
      return await this.childrenModel.find(obj).populate('schools').populate('instruments');
    }

    return await this.childrenModel.find(obj);
  }

  public remove(id: Schema.Types.ObjectId) {
    return this.childrenModel.remove({_id: id});
  }
}
