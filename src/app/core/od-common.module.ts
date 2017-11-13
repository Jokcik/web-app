import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ],
})
export class ODCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ODCommonModule,
      providers: [
      ]
    };
  }
}
