import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeStyle, SafeUrl} from '@angular/platform-browser';

@Pipe({
  name: 'odSafe'
})
export class OdSafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  private bypassStyle(style: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  private bypassUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  private bypassHtml(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }

  transform(value: string, param: string): any {

    let res: any;

    switch(param) {
      case 'html': {
        res = this.bypassHtml(value);
        break;
      }
      case 'url': {
        res = this.bypassUrl(value);
        break;
      }
      case 'style': {
        res = this.bypassStyle(value);
        break;
      }
    }

    return res;
  }

}
