import {Model, Schema} from 'mongoose';
import {Component, Inject} from '@nestjs/common';
import {SchoolsRegion} from './interfaces/schools-region.interface';
import {CreateSchoolsRegionDto} from './dto/create-schools-region.dto';
import ObjectId = Schema.Types.ObjectId;
import {SchoolsRegionModelToken} from '../constants';

@Component()
export class SchoolsRegionService {
  constructor(@Inject(SchoolsRegionModelToken) private readonly schoolsRegionModel: Model<SchoolsRegion>) {
  }

  async create(createSchoolsRegionDto: CreateSchoolsRegionDto): Promise<SchoolsRegion> {
    const schoolsRegion = new this.schoolsRegionModel(createSchoolsRegionDto);
    return await schoolsRegion.save();
  }

  async update(id: ObjectId, createSchoolsRegionDto: CreateSchoolsRegionDto): Promise<SchoolsRegion> {
    return await this.schoolsRegionModel.findByIdAndUpdate(id, createSchoolsRegionDto, {new: true});
  }

  async remove(id: ObjectId): Promise<any> {
    return await this.schoolsRegionModel.findByIdAndRemove(id);
  }

  async findAll(regionId: ObjectId, type: number): Promise<SchoolsRegion[]> {
    let obj = regionId ? {region: regionId, type: type ? type : 0} : {};
    let school = await this.schoolsRegionModel.find(obj).populate('region');
    return school.sort((a, b) => a.region.title.localeCompare(b.region.title) ||
      b.type - a.type || a.title.localeCompare(b.title));

  }
}
