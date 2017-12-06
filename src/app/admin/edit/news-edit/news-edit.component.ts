import { Component, OnInit } from '@angular/core';
import {MainpageService} from '../../../mainpage/mainpage.service';

@Component({
  selector: 'od-news-edit',
  templateUrl: './news-edit.component.html',
})
export class NewsEditComponent implements OnInit {
  public title: string = '1234';

  constructor(private service: MainpageService) { }

  ngOnInit() {
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
    removePlugins:'contextmenu, tabletools,tableselection,liststyle,elementspath,sourcedialog,dropler'
  };
}
