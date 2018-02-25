import {Component, Input, OnInit} from '@angular/core';
import {SchoolsService} from './schools.service';
import {Schools} from '../admin/edit/shared/school';
import {Region} from '../admin/edit/shared/region';
import {RegionService} from '../admin/edit/region/region.service';
import {Dummy} from '../core/dummy';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {Competition} from '../admin/edit/shared/competition';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../core/user-service/user.service';

@Component({
  selector: 'od-schools',
  templateUrl: './schools.component.html'
})
export class SchoolsComponent implements OnInit {
  public isEdit = false;

  public regions: Region[] = [];
  public currentId: any = 0;

  public schools: Schools[] = [];
  public filteredSchools: Schools[] = Dummy.factory(Schools, 10);
  public type = 0;

  constructor(private schoolsService: SchoolsService,
              public snackBar: MatSnackBar,
              private route: ActivatedRoute,
              public userService: UserService,
              private regionService: RegionService) {
  }

  ngOnInit() {
    this.regions = this.regionService.query();
    this.route.data.subscribe(data => this.isEdit = !!data['edit'] || false);
    this.updateSchools();
  }

  updateSchools() {
    combineLatest(
      this.schoolsService.query().$observable,
      this.route.params
    ).subscribe(([schools, params]) => {
      this.type = params['id'] === 'administration' ? 1 : 0;
      this.schools = schools;
      this.formatSchools(this.currentId);
    });
  }

  public formatSchools(id?: string) {
    this.currentId = id || this.currentId;
    this.filteredSchools.length = 0;

    const filterPredicate: (value: Schools) => boolean = value => +value.type === this.type && (!id || value.region._id === id);
    this.filteredSchools.push(...this.schools.filter(value => filterPredicate(value)));

  }

  public openDialog(result: { school: Schools, type: string, region: string }) {
    console.log('redirectToSchool', result);
    if (result.type === 'redirectToSchool') {
      this.redirectToSchool(result.region);
    } else if (result.type === 'add') {
      this.saveSchool(result.school);
    } else if (result.type === 'remove') {
      this.deleteSchool(result.school);
    }
  }


  public saveSchool(school: Schools) {
    if (!school._id) {
      this.schoolsService.save(school).$observable.subscribe(() => {
        this.updateSchools();
        this.snackBar.open(school.type ? 'Управление успешно добавлено' : 'Школа успешно добавлена', 'ОК', {duration: 2000});
      }, error2 => window.alert(`Ошибка сохранения. ${error2}`));
    } else {
      this.schoolsService.update(school).$observable.subscribe(() => {
        this.updateSchools();
        this.snackBar.open(school.type ? 'Управление успешно изменено' : 'Школа успешно изменена', 'ОК', {duration: 2000});
      }, error2 => window.alert(`Ошибка изменения. ${error2}`));
    }
  }

  public deleteSchool(school: Schools) {
    this.schoolsService.remove({_id: school._id}).$observable.subscribe(() => {
      this.updateSchools();
      this.snackBar.open(school.type ? 'Управление успешно удалено' : 'Школа успешно удалена', 'ОК', {duration: 2000});
    }, error2 => window.alert(`Ошибка удаления. ${error2}`));
  }

  public changeType(value: any) {
    this.type = value;
    this.formatSchools(this.currentId);
  }

  private redirectToSchool(regionId: string) {
    this.type = 0;
    this.formatSchools(regionId);
  }
}
