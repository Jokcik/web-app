import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {GalleryRoutingModule} from './gallery-routing.module';
import {GalleryComponent} from './gallery.component';

@NgModule({
  imports: [
    GalleryRoutingModule,
    ODCommonModule
  ],
  declarations: [
    GalleryComponent,
  ],
  providers: []
})
export class GalleryModule {
}
