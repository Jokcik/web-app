import {Component, OnInit} from '@angular/core';
import {Schools} from '../shared/school';
import {Region} from '../shared/region';
import {Children} from '../shared/children';
import {RegionService} from '../region/region.service';
import {SchoolsService} from '../../../schools/schools.service';
import {ChildrenService} from '../../../bank-data-od/children.service';
import {MatDialog} from '@angular/material';
import {ChildrenDialogAdd} from './children-dialog-add';

@Component({
  selector: 'od-children',
  templateUrl: './children.component.html'
})
export class ChildrenComponent implements OnInit {
  public regions: Region[] = [];
  public schools: Schools[] = [];
  public childrens: Children[] = [];

  public currentRegion: number;
  public currentSchool: number;
  public currentChildren: number;

  constructor(private regionService: RegionService,
              private schoolsService: SchoolsService,
              private childrenService: ChildrenService,
              public dialog: MatDialog) {
  }

  public ngOnInit() {
    this.regions = this.regionService.query();
  }

  public selectedRegion(regionIdx: number) {
    this.currentRegion = regionIdx;
    this.currentSchool = -1;
    this.currentChildren = -1;
    this.schools = this.schoolsService.query({region_id: this.regions[regionIdx]._id});
    this.childrens = null;
  }

  public selectedSchools(schoolIdx: number) {
    this.currentSchool = schoolIdx;
    this.currentChildren = -1;
    this.childrens = this.childrenService.query({school_id: this.schools[schoolIdx]._id, long: true})
  }

  public selectedChildren(childrenIdx: number) {
    this.currentChildren = childrenIdx;
  }

  public update() {

  }

  public remove() {

  }

  public openDialog() {
    let data = {regions: this.regions, currentRegion: this.currentRegion, currentSchool: this.currentSchool, schools: this.schools};
    this.dialog.open(ChildrenDialogAdd, {width: '900px', data: data}).afterClosed().subscribe(result => {
      if (!result) return;

      if (result._id) {
        this.childrenService.update(result).$observable.subscribe(res => window.alert('успешно сохранено'));
      } else {
        this.childrenService.save(result).$observable.subscribe(res => window.alert('Ученик добавлен в базу'));
      }
    });
  }
}
