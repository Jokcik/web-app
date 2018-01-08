import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {ODModule} from './od.module';
import {ODComponent} from './od.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    // The ODServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    ODModule,
    ServerModule,
    NoopAnimationsModule,
    ModuleMapLoaderModule,
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [ODComponent],
})
export class ODServerModule {}
