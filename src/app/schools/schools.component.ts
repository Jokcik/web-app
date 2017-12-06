import {Component, OnInit} from '@angular/core';
import {DshiEditService} from '../admin/edit/dshi-edit/dshi-edit.service';
import {Schools} from '../admin/edit/shared/school';
import {Region} from '../admin/edit/shared/region';
import {RegionService} from '../admin/edit/region/region.service';
import {combineLatest} from 'rxjs/observable/combineLatest';

@Component({
  selector: 'od-schools',
  templateUrl: './schools.component.html'
})
export class SchoolsComponent implements OnInit {
  public regions: Region[] = [];
  public schools: Schools[] = [];

  public currentRegionId: string;
  public currentSchools: Schools[] = [];

  constructor(private schoolsService: DshiEditService,
              private regionService: RegionService) {
  }

  ngOnInit() {
    combineLatest(
      this.regionService.query().$observable,
      this.schoolsService.query().$observable
    )
      .subscribe(([regions, schools]) => {
        this.schools = schools;
        this.regions = regions;
        this.updateSchools(regions[0]._id);
      }
    );
  }

  public updateSchools(id: string) {
    this.currentRegionId = id;
    this.currentSchools = this.schools.filter(school => school.region._id == this.currentRegionId);
  }
}
