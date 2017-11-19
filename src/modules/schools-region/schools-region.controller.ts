import {Controller, Get, Post, Body, Param, Put} from '@nestjs/common';
import { Schema } from 'mongoose';
import {SchoolsRegionService} from './schools-region.service';
import {CreateSchoolsRegionDto} from './dto/create-schools-region.dto';
import {SchoolsRegion} from './interfaces/schools-region.interface';
import ObjectId = Schema.Types.ObjectId;

@Controller('schools-region')
export class SchoolsRegionController {
  constructor(private readonly schoolsRegionService: SchoolsRegionService) {
  }

  @Post()
  async create(@Body() createSchoolsRegionDto: CreateSchoolsRegionDto) {
    return this.schoolsRegionService.create(createSchoolsRegionDto);
  }

  @Put(':id')
  async update(@Param('id') id: ObjectId, @Body() createSchoolsRegionDto: CreateSchoolsRegionDto): Promise<SchoolsRegion> {
    return this.schoolsRegionService.update(id, createSchoolsRegionDto);
  }

  @Get()
  async findAll(): Promise<SchoolsRegion[]> {
    return this.schoolsRegionService.findAll();
  }
}
