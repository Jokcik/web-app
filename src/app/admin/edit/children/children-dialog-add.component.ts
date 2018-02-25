import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Schools} from '../shared/school';
import {Region} from '../shared/region';
import {Children, Instruments, Specialization} from '../shared/children';
import {ChildrenPageService} from '../../../children-page/children-page.service';
import {SchoolsService} from '../../../schools/schools.service';

@Component({
  templateUrl: 'children-dialog-add.component.html',
})
export class ChildrenDialogAddComponent {
  public currentChildren: Children = new Children();
  public regions: Region[] = [];
  public schools: Schools[] = [];
  public specializations: Specialization[] = [];
  public instruments: Instruments[] = [];

  public currentRegion: number;
  public currentSchool: number;
  public currentSpecialization: number;
  public ssuz = false;

  constructor(public dialogRef: MatDialogRef<ChildrenDialogAddComponent>,
              private childrenService: ChildrenPageService,
              private schoolService: SchoolsService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.regions = data.regions;
    this.schools = data.schools;

    this.currentRegion = data.currentRegion;
    this.currentSchool = data.currentSchool;

    this.currentChildren = data.children ? data.children : this.currentChildren;
    if (this.currentSchool) {
      this.currentChildren.schools = this.schools[this.currentSchool]._id;
    }

    this.specializations = this.childrenService.querySpecializations();
  }

  public selectedRegion(regionId: number) {
    this.currentRegion = regionId;
    this.schools = this.schoolService.query({region_id: this.regions[regionId]._id});
  }

  public selectedSpecializations(specializationId: number) {
    this.currentSpecialization = specializationId;
    this.instruments = this.childrenService.queryInstruments({specialization_id: this.specializations[specializationId]._id});
  }

  public add(): void {
    // this.currentSchool.region = <any>this.currentSchool.region._id;
    this.dialogRef.close(this.currentChildren);
  }

}