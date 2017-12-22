import {Component, OnInit} from '@angular/core';
import {SchoolsService} from './schools.service';
import {Schools} from '../admin/edit/shared/school';
import {Region} from '../admin/edit/shared/region';
import {RegionService} from '../admin/edit/region/region.service';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {Dummy} from '../core/dummy';

@Component({
  selector: 'od-schools',
  templateUrl: './schools.component.html'
})
export class SchoolsComponent implements OnInit {
  public regions: Region[] = Dummy.factory(Region, 1);
  public schools: Schools[] = [];

  public currentRegionId: string = this.regions[0]._id;
  public currentSchools: Schools[] = Dummy.factory(Schools, 2);

  constructor(private schoolsService: SchoolsService,
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
