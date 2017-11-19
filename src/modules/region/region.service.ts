import { Model, Schema } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import {Region} from './interfaces/region.interface';
import {RegionModelToken} from '../constants';
import {CreateRegionDto} from './dto/create-regin.dto';
import ObjectId = Schema.Types.ObjectId;

@Component()
export class RegionService {
  constructor(@Inject(RegionModelToken) private readonly regionModel: Model<Region>) {
  }

  async create(createRegionDto: CreateRegionDto): Promise<Region> {
    const news = new this.regionModel(createRegionDto);
    return await news.save();
  }

  async update(id: ObjectId, createRegionDto: CreateRegionDto): Promise<Region> {
    return await this.regionModel.findByIdAndUpdate(id, createRegionDto, {new: true});
  }

  async findAll(): Promise<Region[]> {
    return await this.regionModel.find();
  }
}
