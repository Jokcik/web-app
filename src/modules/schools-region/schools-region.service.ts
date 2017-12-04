import { Model, Schema } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import {SchoolsRegion} from './interfaces/schools-region.interface';
import {CreateSchoolsRegionDto} from './dto/create-schools-region.dto';
import ObjectId = Schema.Types.ObjectId;
import {SchoolsRegionModelToken} from '../constants';

@Component()
export class SchoolsRegionService {
  constructor(@Inject(SchoolsRegionModelToken) private readonly schoolsRegionModel: Model<SchoolsRegion>) {
  }

  async create(createSchoolsRegionDto: CreateSchoolsRegionDto): Promise<SchoolsRegion> {
    const news = new this.schoolsRegionModel(createSchoolsRegionDto);
    return await news.save();
  }

  async update(id: ObjectId, createSchoolsRegionDto: CreateSchoolsRegionDto): Promise<SchoolsRegion> {
    return await this.schoolsRegionModel.findByIdAndUpdate(id, createSchoolsRegionDto, {new: true});
  }

  async remove(id: ObjectId): Promise<any> {
    return await this.schoolsRegionModel.findByIdAndRemove(id);
  }

  async findAll(): Promise<SchoolsRegion[]> {
    return await this.schoolsRegionModel.find().sort({region: 1, title: -1}).populate('region');
  }
}
