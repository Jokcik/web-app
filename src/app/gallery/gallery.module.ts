import {NgModule} from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {GalleryRoutingModule} from './gallery-routing.module';
import {GalleryComponent} from './gallery.component';
import {GalleryService} from './gallery.service';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {GalleryDialogAdd} from './gallery-dialog-add';
import {FormsModule} from '@angular/forms';
import {ODMultipartSendService} from '../core/od-multipart-send.service';
import {NgxGalleryModule} from 'ngx-gallery';

@NgModule({
  imports: [
    GalleryRoutingModule,
    ODCommonModule,
    CommonModule,
    FormsModule,
    NgxGalleryModule,

    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,

    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: [
    GalleryComponent,
    GalleryDialogAdd,
  ],
  entryComponents:[
    GalleryDialogAdd
  ],
  providers: [GalleryService, ODMultipartSendService]
})
export class GalleryModule {
}
