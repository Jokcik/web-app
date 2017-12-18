import {SafeHtml} from '@angular/platform-browser';

export class Materials {
  _id: string;
  title: SafeHtml;
  url: string;
  img: string;
  date: Date;
  type: number = 1;
  description: Description = new Description();
}

export class Description {
  description: SafeHtml;
  short_description: SafeHtml;
}
