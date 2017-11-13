import { Component, OnInit } from '@angular/core';
import {MainpageService} from '../../mainpage/mainpage.service';
import {Materials} from '../../news/shared/materials';

@Component({
  selector: 'od-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  materials: Materials[] = [];

  constructor(private mainpageService: MainpageService) { }

  ngOnInit() {
    this.materials = this.mainpageService.query();
  }

  public saveHistory(material: Materials) {
    let a = JSON.parse(JSON.stringify(material, (key, value) => key.startsWith('$') ? undefined : value));
    this.mainpageService.update(a);
  }

  public config = {
    toolbar: 'full',
    format_tags: 'p',
    language: 'ru',
    allowedContent: true,
    disableNativeSpellChecker: false,
    forcePasteAsPlainText: true,
    title: false,
    autoGrow_onStartup: true,
    disableAutoInline: true,
    enableContextMenu: false,
    sharedSpaces: {
      top: 'top',
      bottom: 'bottom'
    },
    resize_enabled: false,
    extraPlugins: 'autogrow,sharedspace,divarea,removeformat',
    // removePlugins: 'contextmenu,tabletools,liststyle'
    removePlugins:'contextmenu, tabletools,tableselection,liststyle,elementspath,sourcedialog,dropler'
};
}
