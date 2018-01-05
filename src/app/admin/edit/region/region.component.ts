import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Region} from '../shared/region';
import {RegionService} from './region.service';
import {RegionDialogAdd} from './region-dialog-add';
import {Dummy} from '../../../core/dummy';
import {UserService} from '../../../core/user-service/user.service';

@Component({
  selector: 'od-region',
  templateUrl: './region.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RegionComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['title', 'telephone', 'edit', 'delete'];
  public dataSource: MatTableDataSource<Region>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private regions: Region[] = Dummy.factory(Region, 10);

  public editable: boolean = false;
  public currentIndex: number = -2;

  constructor(private regionService: RegionService,
              public userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.regions);
    this.updateRegion();
  }

  public updateRegion() {
    this.regionService.query().$observable.subscribe(regions => {
      this.currentIndex = this.currentIndex == -2 ? -1 : this.currentIndex;
      this.regions.length = 0;
      this.regions.push(...regions);
      this.dataSource._updateChangeSubscription();
    });
  }

  public openDialog(): void {
    this.dialog.open(RegionDialogAdd, {width: '400px'}).afterClosed().subscribe(result => {
      if (!result) return;
      this.regionService.save(result);
      this.updateRegion()
    });
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public editRegion(region: any, index: number) {
    if (index != this.currentIndex) {
      this.editable = true;
      this.currentIndex = index;
    } else {
      this.regionService.update(region);
      this.close();
    }
  }

  public deleteRegion(row) {
    if (window.confirm('Действительно хотите удалить этот регион?')) {
      this.regionService.remove({_id: row._id}).$observable.subscribe(() => this.updateRegion());
    }
  }

  public close() {
    this.editable = false;
    this.currentIndex = -1;
  }
}
