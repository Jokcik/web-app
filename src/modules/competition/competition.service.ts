import {Model, Schema} from 'mongoose';
import {Component, Inject} from '@nestjs/common';
import {Competition} from './interfaces/competition.interface';
import {
  CompetitionLevelModelName, CompetitionLevelModelToken, CompetitionModelName, CompetitionModelToken,
  CompetitionPlaceModelToken, SpecializationModelName
} from '../constants';
import {CreateCompetitionDto} from './dto/create-competition.dto';
import {CompetitionLevel} from '../others/interface/competition-level.interface';
import {CompetitionPlace} from '../others/interface/competition-place.interface';
import ObjectId = Schema.Types.ObjectId;

@Component()
export class CompetitionService {
  constructor(@Inject(CompetitionModelToken) private readonly competitionsModel: Model<Competition>,
              @Inject(CompetitionLevelModelToken) private readonly competitionLevelModel: Model<CompetitionLevel>,
              @Inject(CompetitionPlaceModelToken) private readonly competitionPlaceModel: Model<CompetitionPlace>) {
    console.log('constructor', new ObjectId("0"));
  }

  async findAll() {
    return await this.competitionsModel.find()
      .populate({path: 'level', model: CompetitionLevelModelName})
      .populate({path: 'specialization', model: SpecializationModelName});
  }

  async findAllLevels() {
    return await this.competitionLevelModel.find();
  }

  async findAllPlaces() {
    return this.competitionPlaceModel.find();
  }

  async createCompetition(competition: CreateCompetitionDto) {
    if (!competition.specialization) {
      Object.assign(competition, {specialization: "000000000000"});
    }

    return await this.competitionsModel.create(competition)
  }

  async updateCompetition(id: ObjectId, competition: CreateCompetitionDto) {
    if (!competition.specialization) {
      Object.assign(competition, {specialization: "000000000000"});
    }

    return await this.competitionsModel.findByIdAndUpdate(id, competition, {new: true});
  }

  async removeCompetition(id: ObjectId) {
    return await this.competitionsModel.findByIdAndRemove(id);
  }
}
