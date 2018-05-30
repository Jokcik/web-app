import {Component} from '@nestjs/common';
import {TYPES} from './uploads.constants';
import * as uniqid from 'uniqid';
import * as path from 'path';
import * as mv from 'mv';
import * as _ from 'lodash';
import * as sharp from 'sharp';

@Component()
export class UploadsService {
  public async uploadFile(host, files, fields) {
    if (!_.includes(TYPES, fields.type)) {
      fields.type = 'uploads';
    }

    const filename = uniqid();
    const mime = path.extname(files.logo.name);
    const type = fields.type;
    const srcPath = this.getPath(filename, mime, type);
    await mv(files.logo.path, srcPath, err => {console.log(err)});

    sharp(srcPath)
      .resize(400)
      .toFile(this.getPath(filename + '_preview', mime, type), (err) => err && console.log(err));

    const url = this.getPath(filename, mime, type, false);
    return {url: host + url};
  }

  public getPath(filename, mime, type, full = true) {
    return `${full ? './public' : ''}/images/${type}/${filename}${mime}`;
  }
}
