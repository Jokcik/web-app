import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: []
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
