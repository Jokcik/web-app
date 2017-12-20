import { Model, Schema } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import {Children} from './interfaces/children.interface';
import {ChildrenModelToken, InstrumentsModelToken, SpecializationModelToken} from '../constants';
import {CreateChildrenDto} from './dto/create-children.dto';
import {Specialization} from '../others/interface/specialization.interface';
import {Instruments} from '../others/interface/instruments.interface';
import ObjectId = Schema.Types.ObjectId;

@Component()
export class ChildrenService {
  constructor(@Inject(ChildrenModelToken) private readonly childrenModel: Model<Children>,
              @Inject(InstrumentsModelToken) private readonly instrumentsModel: Model<Instruments>,
              @Inject(SpecializationModelToken) private readonly specializationModel: Model<Specialization>) {
  }

  async findAllSpecialization() {
    await this.specializationModel.create({title: 'proba'});
    return await this.specializationModel.find();
  }

  async findAllInstruments() {
    return this.instrumentsModel.find();
  }

  async create(createChildrenDto: CreateChildrenDto): Promise<Children> {
    const news = new this.childrenModel(createChildrenDto);
    return await news.save();
  }

  async update(id: ObjectId, createChildrenDto: CreateChildrenDto): Promise<Children> {
    return await this.childrenModel.findByIdAndUpdate(id, createChildrenDto, {new: true});
  }

  async findAll(): Promise<Children[]> {
    return await this.childrenModel.find().sort('title');
  }

  public remove(id: Schema.Types.ObjectId) {
    return this.childrenModel.remove({_id: id});
  }
}
