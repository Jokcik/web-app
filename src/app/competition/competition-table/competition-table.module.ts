import {NgModule} from '@angular/core';
import {ODCommonModule} from '../../core/od-common.module';
import {CompetitionTableComponent} from './competition-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule,
  MatSortModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {CompetitionsDialogAdd} from './competitions-dialog-add';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ChildrenPageService} from '../../children-page/children-page.service';
import { ExpansionYearFilesComponent } from './expansion-year-files/expansion-year-files.component';
import {ODMultipartSendService} from '../../core/od-multipart-send.service';

@NgModule({
  imports: [
    CommonModule,
    ODCommonModule,
    FormsModule,

    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule
  ],
  declarations: [
    CompetitionTableComponent,
    CompetitionsDialogAdd,
    ExpansionYearFilesComponent
  ],
  entryComponents: [
    CompetitionsDialogAdd
  ],
  exports: [
    CompetitionTableComponent
  ],
  providers: [ChildrenPageService, ODMultipartSendService]
})
export class CompetitionTableModule {

}
