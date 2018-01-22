import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Materials} from '../../../news/shared/materials';
import {HistoryService} from '../../../history/history.service';
import {Dummy} from '../../../core/dummy';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'od-main',
  templateUrl: './main.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  @Input() materials: Materials[] = Dummy.factory(Materials, 1);
  public currentMaterial: Materials;

  constructor(private mainpageService: HistoryService,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar) {
  }

  async ngOnInit() {
    this.materials = await this.mainpageService.queryMainpage({type: 0});
    let params = await this.route.params.toPromise();
    this.currentMaterial = this.materials.find(material => material.url == params['url']) || this.materials[0];
  }

  public saveHistory(material: Materials) {
    let a = JSON.parse(JSON.stringify(material, (key, value) => key.startsWith('$') ? undefined : value));
    this.mainpageService.update(a).then(() => this.snackBar.open('История успешно изменена', 'ОК', {duration: 2000}));
  }
}
