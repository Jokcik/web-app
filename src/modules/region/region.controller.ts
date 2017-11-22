import {Controller, Get, Post, Body, Param, Put} from '@nestjs/common';
import { Schema } from 'mongoose';
import {RegionService} from './region.service';
import {CreateRegionDto} from './dto/create-regin.dto';
import {Region} from './interfaces/region.interface';
import ObjectId = Schema.Types.ObjectId;

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {
  }

  @Post()
  async create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @Put(':id')
  async update(@Param('id') id: ObjectId, @Body() createRegionDto: CreateRegionDto): Promise<Region> {
    return this.regionService.update(id, createRegionDto);
  }

  @Get()
  async findAll(): Promise<Region[]> {
    return this.regionService.findAll();
  }
}