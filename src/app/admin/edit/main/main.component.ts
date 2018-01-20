import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Materials} from '../../../news/shared/materials';
import {HistoryService} from '../../../history/history.service';
import {Dummy} from '../../../core/dummy';
import {MatSnackBar} from '@angular/material';
import {switchMap, tap} from 'rxjs/operators';
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

  ngOnInit() {
    this.mainpageService.queryMainpage({type: 0}).$observable
      .pipe(
        tap((histories => this.materials = histories)),
        switchMap(() => this.route.params)
      )
      .subscribe(params => this.currentMaterial = this.materials.find(material => material.url == params['url']) || this.materials[0]);
  }

  public saveHistory(material: Materials) {
    let a = JSON.parse(JSON.stringify(material, (key, value) => key.startsWith('$') ? undefined : value));
    this.mainpageService.update(a).$observable.subscribe(() => this.snackBar.open('История успешно изменена', 'ОК', {duration: 2000}));
  }

  public config = {
    toolbar: 'full',
    format_tags: 'p',
    language: 'ru',
    allowedContent: true,
    disableNativeSpellChecker: false,
    forcePasteAsPlainText: true,
    title: false,
    filebrowserUploadUrl: 'http://localhost:3001/api/upload',
    autoGrow_onStartup: true,
    disableAutoInline: true,
    enableContextMenu: false,
    sharedSpaces: {
      top: 'top',
      bottom: 'bottom'
    },
    resize_enabled: false,
    extraPlugins: 'uploadimage,image2,autogrow,sharedspace,divarea,removeformat',
    removePlugins: 'contextmenu, tabletools,tableselection,liststyle,elementspath,sourcedialog,dropler'
  };
}
