// angular
import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// libs
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
// shared
// components
import {ODComponent} from './od.component';
import {ODModule} from './od.module';
import {AppStorage} from '@shared/for-storage/universal.inject';
import {UniversalStorage} from '@shared/for-storage/server.storage';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule} from '@angular/material';
import {ODRoutingModule} from './od-routing.module';
import {ODCommonModule} from './core/od-common.module';

@NgModule({
  imports: [
    ODModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    ServerModule,
    ModuleMapLoaderModule,
    ODCommonModule.forRoot(),
    ODRoutingModule,
    MatIconModule,
    MatCardModule,

    MatMenuModule,
    MatButtonModule
  ],
  bootstrap: [ODComponent],
  providers: [
    { provide: AppStorage, useClass: UniversalStorage }
  ],
})
export class OdServerModule {
}
