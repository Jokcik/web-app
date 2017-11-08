import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {MainpageNewsService} from './mainpage-news.service';
import {CreateMainpageNewsDto} from './dto/create-mainpage-news.dto';
import {MainpageNews} from './interfaces/mainpage-news.interface';

@Controller('mainpage-news')
export class MainpageNewsController {
  constructor(private readonly mainpageNewsService: MainpageNewsService) {}

  @Post()
  async create(@Body() createCatDto: CreateMainpageNewsDto) {
    return this.mainpageNewsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<MainpageNews[]> {
    return this.mainpageNewsService.findAll();
  }
}
