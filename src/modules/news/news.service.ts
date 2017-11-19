import { Model, Schema } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import {News} from './interfaces/news.interface';
import {NewsModelToken} from '../constants';
import {CreateNewsDto} from './dto/create-news.dto';
import ObjectId = Schema.Types.ObjectId;

@Component()
export class NewsService {
  constructor(@Inject(NewsModelToken) private readonly newsModel: Model<News>) {
  }

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    const news = new this.newsModel(createNewsDto);
    return await news.save();
  }

  async update(id: ObjectId, createNewsDto: CreateNewsDto): Promise<News> {
    return await this.newsModel.findByIdAndUpdate(id, createNewsDto, {new: true});
  }

  async findAll(): Promise<News[]> {
    return await this.newsModel.find();
  }
}
