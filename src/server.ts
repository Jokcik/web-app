import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as path from 'path';
import * as express from 'express';
import * as serveStatic from 'serve-static';
import * as cors from 'express-cors';
import * as nconf from 'nconf'
import {HttpExceptionFilter} from './modules/exception/http-exception.filter';

let s = express();
// s.set('port', 4200);
s.set('port', process.env.PORT || 3001);

async function bootstrap() {

  s.use(serveStatic(path.join(__dirname, '../dist')));
  s.use(serveStatic(path.join(__dirname, '../public')));
  s.use(serveStatic(path.join(__dirname, '../node_modules/@angular/material/prebuilt-themes')));

  const app = await NestFactory.create(ApplicationModule, s);
  app.use(bodyParser.json());
  app.use(cors({allowedOrigins: ['localhost:4200', 'localhost:3001', 'rumc31.ru', '85.143.175.134'], headers: ['Content-Type', 'enctype', 'Authorization']}));
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use((req, res, next) => {
    if(req.originalUrl.startsWith('/api')) {
      next();
    } else {
      res.sendFile('index.html', {root: 'dist'});
    }
  });


  await app.listen(s.get('port'));
  console.log('star server port ' + s.get('port'))
}
bootstrap();

