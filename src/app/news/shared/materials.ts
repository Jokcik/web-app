import {SafeHtml} from '@angular/platform-browser';

export class Description {
  description: SafeHtml;
  short_description: SafeHtml;
}

export class Materials {
  _id: string;
  title: SafeHtml;
  name: string;
  url: string;
  img: string;
  date: Date;
  start_date: Date;
  type = 1;
  description: Description = new Description();

  images: string[] = [];
}
