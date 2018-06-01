import {Injectable} from '@angular/core';

@Injectable()
export class ODEngineService {
  isBigDesktop() {
    return document.body.clientWidth > 1300;
  }

  isSmallDesktop() {
    return document.body.clientWidth < 1300;
  }

}
