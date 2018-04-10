import {Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import { Schema } from 'mongoose';
import {CreateTeacherDto} from './dto/create-teacher.dto';
import {Teacher} from './interfaces/teacher.interface';
import ObjectId = Schema.Types.ObjectId;
import {TeacherService} from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacher: TeacherService) {
  }

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacher.create(createTeacherDto);
  }

  @Put(':id')
  async update(@Param('id') id: ObjectId, @Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teacher.update(id, createTeacherDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId): Promise<any> {
    return this.teacher.remove(id);
  }

  @Get('search/:name')
  async search(@Param('name') name: string): Promise<Teacher[]> {
    return this.teacher.search(name);
  }

  @Get()
  async findAll(): Promise<Teacher[]> {
    return this.teacher.findAll();
  }
}
