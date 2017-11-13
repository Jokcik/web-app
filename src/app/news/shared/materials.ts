import {SafeHtml} from '@angular/platform-browser';

export class Materials {
  id: string;
  title: SafeHtml;
  url: string;
  description: Description;
}

export class Description {
  description: SafeHtml;
  short_description: SafeHtml;
}
