import { Component, OnInit } from '@angular/core';
import {MainpageService} from '../../mainpage/mainpage.service';
import {Description} from '../../news/shared/materials';

@Component({
  selector: 'od-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  descriptions: Description[] = [];

  constructor(private mainpageService: MainpageService) { }

  ngOnInit() {
    this.descriptions = this.mainpageService.get();
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
