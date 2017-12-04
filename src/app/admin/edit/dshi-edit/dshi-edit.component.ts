import { Component, OnInit } from '@angular/core';
import {Schools} from '../shared/school';
import {DshiEditService} from './dshi-edit.service';
import {RegionDialogAdd} from '../region/region-dialog-add';
import {MatDialog} from '@angular/material';
import {DshiDialogAdd} from './dshi-dialog-add';
import {RegionService} from '../region/region.service';
import {Region} from '../shared/region';

@Component({
  selector: 'od-dshi-edit',
  templateUrl: './dshi-edit.component.html'
})
export class DshiEditComponent implements OnInit {
  public schools: Schools[] = [];
  public currentSchool: Schools;
  public regions: Region[] = [];

  constructor(private schoolService: DshiEditService,
              private regionService: RegionService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.schools = this.schoolService.query();
    this.regions = this.regionService.query();
  }

  public openDialog(): void {
    this.dialog.open(DshiDialogAdd, {width: '900px', data: this.regions}).afterClosed().subscribe(result => {
      if (!result) return;
      this.schoolService.save(result.school);
      window.alert('Данные успешно сохранены');
    });
  }

  public update() {
    this.currentSchool.region = <any>this.currentSchool.region._id;
    this.schoolService.update(this.currentSchool).$observable.subscribe(res => window.alert('Данные успешно сохранены'));
  }

  public remove() {
    if (window.confirm('Вы действительно хотите удалить школу, управление?')) {
      this.schoolService.remove({_id: this.currentSchool._id}).$observable.subscribe(() => {
        window.alert('Данные успешно удалены');
        this.currentSchool = null;
      })
    }
  }

}
