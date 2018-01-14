import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Materials} from '../../../news/shared/materials';
import {HistoryService} from '../../../history/history.service';
import {Dummy} from '../../../core/dummy';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'od-main',
  templateUrl: './main.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  @Input() materials: Materials[] = Dummy.factory(Materials, 1);
  public currentMaterial: Materials;

  constructor(private mainpageService: HistoryService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.mainpageService.queryMainpage({type: 0}).$observable.subscribe(histories => {
      this.materials = histories;
      this.currentMaterial = histories[0];
    });
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
    filebrowserUploadUrl: 'https://rumc31.ru/api/upload',
    autoGrow_onStartup: true,
    disableAutoInline: true,
    enableContextMenu: false,
    sharedSpaces: {
      top: 'top',
      bottom: 'bottom'
    },
    resize_enabled: false,
    extraPlugins: 'uploadimage,image2,autogrow,sharedspace,divarea,removeformat',
    removePlugins:'contextmenu, tabletools,tableselection,liststyle,elementspath,sourcedialog,dropler'
  };
}
