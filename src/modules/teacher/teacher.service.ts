import { Model, Schema } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import {Teacher} from './interfaces/teacher.interface';
import {TeacherModelToken} from '../constants';
import {CreateTeacherDto} from './dto/create-teacher.dto';
import ObjectId = Schema.Types.ObjectId;

@Component()
export class TeacherService {
  constructor(@Inject(TeacherModelToken) private readonly teacherModel: Model<Teacher>) {
  }

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const news = new this.teacherModel(createTeacherDto);
    return await news.save();
  }

  async update(id: ObjectId, createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return await this.teacherModel.findByIdAndUpdate(id, createTeacherDto, {new: true});
  }

  async findAll(): Promise<Teacher[]> {
    return await this.teacherModel.find().sort('title');
  }

  async search(name: string): Promise<Teacher[]> {
    let array = name.split(' ');
    array = array.map(value => value.trim());

    const ors = [];
    array.forEach(value => ors.push({
      $or: [
        { name: new RegExp('^' + value, 'i')},
        { suname: new RegExp('^' + value, 'i')},
        { middleName: new RegExp('^' + value, 'i')},
      ]
    }));

    return await this.teacherModel.find({$and: ors});
  }

  public remove(id: Schema.Types.ObjectId) {
    return this.teacherModel.remove({_id: id});
  }
}
