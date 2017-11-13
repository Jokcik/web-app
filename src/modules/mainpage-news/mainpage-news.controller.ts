import {Controller, Get, Post, Body, Param, Put} from '@nestjs/common';
import { Schema } from 'mongoose';
import {MainpageNewsService} from './mainpage-news.service';
import {CreateMainpageNewsDto} from './dto/create-mainpage-news.dto';
import {MainpageNews} from './interfaces/mainpage-news.interface';

@Controller('mainpage-news')
export class MainpageNewsController {
  constructor(private readonly mainpageNewsService: MainpageNewsService) {
  }

  @Post()
  async create(@Body() createMainpageNewsDto: CreateMainpageNewsDto) {
    return this.mainpageNewsService.create(createMainpageNewsDto);
  }

  @Put(':id')
  async update(@Param('id') id: Schema.Types.ObjectId, @Body() createMainpageNewsDto: CreateMainpageNewsDto): Promise<MainpageNews> {
    return this.mainpageNewsService.update(id, createMainpageNewsDto);
  }

  @Get()
  async findAll(): Promise<MainpageNews[]> {
    return this.mainpageNewsService.findAll();
  }
}
