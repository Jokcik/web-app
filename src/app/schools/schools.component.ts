import {Component, OnInit} from '@angular/core';
import {SchoolsService} from './schools.service';
import {Schools} from '../admin/edit/shared/school';
import {Region} from '../admin/edit/shared/region';
import {RegionService} from '../admin/edit/region/region.service';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {Dummy} from '../core/dummy';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'od-schools',
  templateUrl: './schools.component.html'
})
export class SchoolsComponent implements OnInit {
  public regions: Region[] = Dummy.factory(Region, 1);
  public schools: Schools[] = [];

  public currentRegionId: string = this.regions[0]._id;
  public currentSchools: Schools[] = Dummy.factory(Schools, 2);

  public type: number = 0;

  constructor(private schoolsService: SchoolsService,
              private route: ActivatedRoute,
              private regionService: RegionService) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.route.params.subscribe(param => {
      this.type = param['id'] == 'administration' ? 1 : 0;
      this.updateSchools(this.currentRegionId);
    });

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
    if (!id) return;

    this.currentRegionId = id;
    this.currentSchools = this.schools.filter(school => school.region._id == this.currentRegionId && school.type == this.type);
  }
}
