import {Model, Schema} from 'mongoose';
import {Component, Inject} from '@nestjs/common';
import {Competition} from './interfaces/competition.interface';
import {CompetitionModelToken} from '../constants';
import {CreateCompetitionDto} from './dto/create-competition.dto';
import ObjectId = Schema.Types.ObjectId;

@Component()
export class CompetitionService {
  constructor(@Inject(CompetitionModelToken) private readonly competitionsModel: Model<Competition>) {
  }

  async findAll() {
    return await this.competitionsModel.find().populate('level').populate('place');
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
