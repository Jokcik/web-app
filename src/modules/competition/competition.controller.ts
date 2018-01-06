import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CompetitionService} from './competition.service';
import {CreateCompetitionDto} from './dto/create-competition.dto';
import {Schema} from 'mongoose';
import ObjectId = Schema.Types.ObjectId;

@Controller('competitions')
export class CompetitionController {
  constructor(private readonly competitionsService: CompetitionService) {
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
