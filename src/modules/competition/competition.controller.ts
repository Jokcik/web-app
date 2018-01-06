import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {CompetitionService} from './competition.service';
import {CreateCompetitionDto} from './dto/create-competition.dto';
import {Schema} from 'mongoose';
import ObjectId = Schema.Types.ObjectId;
import {Instruments} from '../others/interface/instruments.interface';
import {Specialization} from '../others/interface/specialization.interface';
import {CompetitionPlace} from '../others/interface/competition-place.interface';
import {CompetitionLevel} from '../others/interface/competition-level.interface';

@Controller('competitions')
export class CompetitionController {
  constructor(private readonly competitionsService: CompetitionService) {
  }

  @Get('levels')
  async findAllLevels(): Promise<CompetitionLevel[]> {
    return this.competitionsService.findAllLevels();
  }

  @Get('places')
  async findAllPlaces(): Promise<CompetitionPlace[]> {
    return this.competitionsService.findAllPlaces();
  }

  @Get()
  async findAll() {
    return this.competitionsService.findAll();
  }

  @Post()
  async createCompetition(@Body() competition: CreateCompetitionDto) {
    return this.competitionsService.createCompetition(competition);
  }

  @Put(':id')
  async updateCompetition(@Param('id') id: ObjectId, @Body() competition: CreateCompetitionDto) {
    return this.competitionsService.updateCompetition(id, competition);
  }

  @Delete(':id')
  async removeCompetition(@Param('id') id: ObjectId): Promise<any> {
    return this.competitionsService.removeCompetition(id);
  }
}
