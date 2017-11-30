import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as path from 'path';
import * as express from 'express';
import * as serveStatic from 'serve-static';

async function bootstrap() {

  let s = express();

  s.use(serveStatic(path.join(__dirname, '../dist_main')));
  s.use(serveStatic(path.join(__dirname, '../public')));
  s.use(serveStatic(path.join(__dirname, '../node_modules/@angular/material/prebuilt-themes')));

  const app = await NestFactory.create(ApplicationModule, s);
  app.use(bodyParser.json());
  app.setGlobalPrefix('api');

  app.use((req, res, next) => {
    if(req.originalUrl.startsWith('/api')) {
      next();
    } else {
      res.sendFile('index.html', {root: 'dist_main'});
    }
  });


  await app.listen(3001);
}
bootstrap();
