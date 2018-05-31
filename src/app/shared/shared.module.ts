import { ModuleWithProviders, NgModule } from '@angular/core';
import { TransferHttpModule } from '@gorniv/ngx-transfer-http';

@NgModule({
  exports: [
    TransferHttpModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
