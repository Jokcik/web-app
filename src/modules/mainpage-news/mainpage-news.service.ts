import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import {MainpageNews} from './interfaces/mainpage-news.interface';
import {MainpageNewsModelToken} from '../constants';
import {CreateMainpageNewsDto} from './dto/create-mainpage-news.dto';

@Component()
export class MainpageNewsService {
  constructor(@Inject(MainpageNewsModelToken) private readonly mainpageNewsModel: Model<MainpageNews>) {
  }

  async create(createCatDto: CreateMainpageNewsDto): Promise<MainpageNews> {
    const createdCat = new this.mainpageNewsModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<MainpageNews[]> {
    return await this.mainpageNewsModel.find().exec();
  }
}
