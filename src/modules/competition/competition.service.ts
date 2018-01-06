import {Model, Schema} from 'mongoose';
import {Component, Inject} from '@nestjs/common';
import {Competition} from './interfaces/competition.interface';
import {CompetitionLevelModelToken, CompetitionModelToken, CompetitionPlaceModelToken} from '../constants';
import {CreateCompetitionDto} from './dto/create-competition.dto';
import {CompetitionLevel} from '../others/interface/competition-level.interface';
import {CompetitionPlace} from '../others/interface/competition-place.interface';
import ObjectId = Schema.Types.ObjectId;

@Component()
export class CompetitionService {
  constructor(@Inject(CompetitionModelToken) private readonly competitionsModel: Model<Competition>,
              @Inject(CompetitionLevelModelToken) private readonly competitionLevelModel: Model<CompetitionLevel>,
              @Inject(CompetitionPlaceModelToken) private readonly competitionPlaceModel: Model<CompetitionPlace>) {
  }

  async findAll() {
    return await this.competitionsModel.find().populate('level').populate('place');
  }

  async findAllLevels() {
    return await this.competitionLevelModel.find();
  }

  async findAllPlaces() {
    return this.competitionPlaceModel.find();
  }

  async createCompetition(competition: CreateCompetitionDto) {
    return await this.competitionsModel.create(competition)
  }

  async updateCompetition(id: ObjectId, competition: CreateCompetitionDto) {
    return await this.competitionsModel.findByIdAndUpdate(id, competition, {new: true});
  }

  async removeCompetition(id: ObjectId) {
    return await this.competitionsModel.findByIdAndRemove(id);
  }
}
