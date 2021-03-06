import { NgModule } from '@angular/core';
import {ODCommonModule} from '../core/od-common.module';
import {ChildrenPageComponent} from './children-page.component';
import {ChildrenRoutingModule} from './children-routing.module';
import {CommonModule} from '@angular/common';
import {ChildrenModule} from '../admin/edit/children/children.module';
import {MatInputModule, MatPaginatorModule, MatSelectModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import { ChildrenTableRatingComponent } from './children-table-rating/children-table-rating.component';
import {CdkTableModule} from '@angular/cdk/table';
import { ChildrenEntrantComponent } from './children-entrant/children-entrant.component';
import {ChildrenTableEntrantComponent} from './children-entrant/children-table-entrant/children-table-entrant.component';

@NgModule({
  imports: [
    ODCommonModule,
    CommonModule,
    ChildrenRoutingModule,
    ChildrenModule,

    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    CdkTableModule,
    MatSelectModule,
    MatInputModule
  ],
  declarations: [
    ChildrenPageComponent,
    ChildrenTableRatingComponent,
    ChildrenTableEntrantComponent,
    ChildrenEntrantComponent,
  ],
  providers: []
})
export class ChildrenPageModule {
}
