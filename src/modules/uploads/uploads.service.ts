import {BadRequestException, Component} from '@nestjs/common';
import {TYPES} from './uploads.constants';
import * as uniqid from 'uniqid';
import * as path from 'path';
import * as mv from 'mv';
import * as _ from 'lodash';

@Component()
export class UploadsService {
  public async uploadFile(host, files, fields) {
    if (!_.includes(TYPES, fields.type)) {
      fields.type = 'uploads';
    }

    let url = '/images/' + fields.type + '/' + uniqid() + path.extname(files.logo.name);
    mv(files.logo.path, './public' + url, err => {console.log(err)});
    // fs.renameSync(files.logo.path, './public' + url);
    return {url: host + url}
  }
}
