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

  async resize(file, width = 400) {
    try {

      const mime = path.extname(file);
      const filename = path.basename(file, mime);
      const dir = path.dirname(file);

      return await sharp(file)
        .resize(width)
        .toFile(dir + '/' + filename + '_preview' + mime);
    }catch (e) {
      console.log(e);
    }

  }
}

async function init() {
  const resize = new Resize('./public/images/news');
  const files = resize.getFiles();
  for (let i = 0; i < files.length; ++i) {
    console.log(i, files[i]);
    // resize.resize(files[i]);
    // await timeout(100);
    const result = await resize.resize(files[i]);
    console.log(JSON.stringify(result));
  }
}

const timeout = async (time) => new Promise(res => setTimeout(res, time));

init();
// files.forEach(file => );
// resize.resize('./public/images/test/12ub18nijht8vis2.png');
