import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as path from 'path';
import * as express from 'express';
import * as serveStatic from 'serve-static';
import * as cors from 'express-cors';
import * as nconf from 'nconf'

let s = express();
s.set('port', process.env.PORT || nconf.get('port') || nconf.get('PORT') || 3001);

async function bootstrap() {

  s.use(serveStatic(path.join(__dirname, '../dist_main')));
  s.use(serveStatic(path.join(__dirname, '../public')));
  s.use(serveStatic(path.join(__dirname, '../node_modules/@angular/material/prebuilt-themes')));

  const app = await NestFactory.create(ApplicationModule, s);
  app.use(bodyParser.json());
  app.use(cors({allowedOrigins: ['localhost:3001']}));
  app.setGlobalPrefix('api');

  app.use((req, res, next) => {
    if(req.originalUrl.startsWith('/api')) {
      next();
    } else {
      res.sendFile('index.html', {root: 'dist_main'});
    }
  });


  await app.listen(s.get('port'));
}
bootstrap();
