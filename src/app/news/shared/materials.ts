import {SafeHtml} from '@angular/platform-browser';

export class Materials {
  id: string;
  title: SafeHtml;
  url: string;
  img?: string;
  main: boolean = false;
  description: Description = new Description();
}

export class Description {
  description: SafeHtml;
  short_description: SafeHtml;
}
