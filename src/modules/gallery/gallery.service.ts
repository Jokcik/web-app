import {Model, Schema} from 'mongoose';
import {BadRequestException, Body, Component, Inject} from '@nestjs/common';
import {Gallery} from './interfaces/gallery.interface';
import {GalleryModelToken} from '../constants';
import {AuthService} from '../authenticate/auth.service';
import {CreateGalleryDto} from './dto/create-gallery.dto';
import ObjectId = Schema.Types.ObjectId;

@Component()
export class GalleryService {
  constructor(@Inject(GalleryModelToken) private readonly galleriesModel: Model<Gallery>) {
  }

  async findAll() {
    return await this.galleriesModel.find().sort({date: 1});
  }

  async createGallery(gallery: CreateGalleryDto) {
    return await this.galleriesModel.create(gallery)
  }

  async updateGallery(id: ObjectId, gallery: CreateGalleryDto) {
    return await this.galleriesModel.findByIdAndUpdate(id, gallery, {new: true});
  }

  async removeGallery(id: ObjectId) {
    return await this.galleriesModel.findByIdAndRemove(id);
  }
}
