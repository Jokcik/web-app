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


  async remove(id: Schema.Types.ObjectId): Promise<News> {
    return await this.newsModel.findByIdAndRemove(id);
  }

  async update(id: ObjectId, createNewsDto: CreateNewsDto): Promise<News> {
    return await this.newsModel.findByIdAndUpdate(id, createNewsDto, {new: true});
  }

  async findAll(type: number, url: string): Promise<News[]> {
    let obj = {};
    obj = Object.assign(obj, type ? {type} : {});
    obj = Object.assign(obj, url ? {url} : {});

    let model = this.newsModel.find(obj);
    if (type == 2) {
      model = model.where({date: {$lte: Date.now()}})
    }

    if (type != 0) {
      model = model.sort({date: -1}).limit(10);
    }

    return await model;
  }
}
