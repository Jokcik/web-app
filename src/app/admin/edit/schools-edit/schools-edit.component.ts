import {Component, OnInit} from '@angular/core';
import {Schools} from '../shared/school';
import {SchoolsService} from '../../../schools/schools.service';
import {RegionDialogAdd} from '../region/region-dialog-add';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DshiDialogAdd} from './schools-dialog-add';
import {RegionService} from '../region/region.service';
import {Region} from '../shared/region';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'od-dshi-edit',
  templateUrl: './schools-edit.component.html'
})
export class SchoolEditComponent implements OnInit {
  public schools: Schools[] = [];
  public currentSchool: Schools;
  public regions: Region[] = [];

  constructor(private schoolService: SchoolsService,
              private regionService: RegionService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog) {
  }

  async ngOnInit() {
    this.regions = await this.regionService.query();
    this.updateSchools();
  }

  async updateSchools() {
    this.schools = await this.schoolService.query();
  }

  public openDialog(): void {
    this.dialog.open(DshiDialogAdd, {width: '900px', data: this.regions}).afterClosed().subscribe(result => {
      if (!result) return;
      this.schoolService.save(result.school).then(() => {
        this.currentSchool = null;
        this.updateSchools();
        this.snackBar.open('Данные успешно сохранены', 'ОК', {duration: 2000})
      });
    });
  }

  public update() {
    this.currentSchool.region = <any>this.currentSchool.region._id;
    this.schoolService.update(this.currentSchool).then(res => {
      this.updateSchools();
      this.currentSchool = null;
      this.snackBar.open('Данные успешно сохранены', 'ОК', {duration: 2000})
    });
  }

  public remove() {
    if (window.confirm('Вы действительно хотите удалить школу, управление?')) {
      this.schoolService.remove({_id: this.currentSchool._id}).then(() => {
        this.currentSchool = null;
        this.updateSchools();
        this.snackBar.open('Данные успешно удалены', 'ОК', {duration: 2000})
      });
    }
  }

}
