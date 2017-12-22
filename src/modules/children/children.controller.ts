import {Controller, Get, Post, Body, Param, Put, Delete, Query} from '@nestjs/common';
import { Schema } from 'mongoose';
import {ChildrenService} from './children.service';
import {CreateChildrenDto} from './dto/create-children.dto';
import {Children} from './interfaces/children.interface';
import ObjectId = Schema.Types.ObjectId;
import {Specialization} from '../others/interface/specialization.interface';
import {Instruments} from '../others/interface/instruments.interface';

@Controller('children')
export class ChildrenController {
  constructor(private readonly childrenService: ChildrenService) {
  }

  @Post()
  async create(@Body() createChildrenDto: CreateChildrenDto) {
    return this.childrenService.create(createChildrenDto);
  }

  @Get()
  async findAll(@Query('school_id') schoolId: ObjectId, @Query('long') long: boolean): Promise<Children[]> {
    return this.childrenService.findAll(schoolId, long);
  }

  @Get('specializations')
  async findAllSpecialization(): Promise<Specialization[]> {
    return this.childrenService.findAllSpecialization();
  }

  @Get('instruments')
  async findAllInstruments(@Query('specialization_id') specializationId: ObjectId): Promise<Instruments[]> {
    return this.childrenService.findAllInstruments(specializationId);
  }

  @Put(':id')
  async update(@Param('id') id: ObjectId, @Body() createChildrenDto: CreateChildrenDto): Promise<Children> {
    return this.childrenService.update(id, createChildrenDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId): Promise<any> {
    return this.childrenService.remove(id);
  }
}
