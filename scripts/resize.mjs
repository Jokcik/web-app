import {default as fs} from 'fs';
import {default as path} from 'path';
import {default as sharp} from 'sharp';

class Resize {
  constructor(path) {
    this.path = path;
  }

  getFiles() {
    const files_ = [];
    const files = fs.readdirSync(this.path);
    for (const i in files){
      const name = this.path + '/' + files[i];
      if (!fs.statSync(name).isDirectory() && files[i].indexOf('_preview') === -1) {
        files_.push(name);
      }
    }
    return files_;
  }

  resize(file, width = 400) {
    const mime = path.extname(file);
    const filename = path.basename(file, mime);
    const dir = path.dirname(file);

    sharp(file)
      .resize(width)
      .toFile(dir + '/' + filename + '_preview' + mime, (err) => err && console.log(err));
  }
}

const resize = new Resize('./public/images/test');
const files = resize.getFiles();
files.forEach(file => resize.resize(file));
// resize.resize('./public/images/test/12ub18nijht8vis2.png');
