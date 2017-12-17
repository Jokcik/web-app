import { Component, OnInit } from '@angular/core';
import {MainpageService} from '../../../mainpage/mainpage.service';
import {Materials} from '../../../news/shared/materials';
import {MultipartItem, ODMultipartSendService} from '../../../core/od-multipart-send.service';
import {Router} from '@angular/router';
import {ODUtils} from '../../../core/od-utils';

@Component({
  selector: 'od-news-edit',
  templateUrl: './news-edit.component.html',
})
export class NewsEditComponent implements OnInit {
  public news: Materials = new Materials();
  public imgFile: File;

  constructor(private service: MainpageService,
              private multipart: ODMultipartSendService,
              private router: Router,
              private utils: ODUtils) {
  }

  ngOnInit() {
  }


  public loadFile() {
    if (!this.imgFile) return;

    let multipartItems: MultipartItem[] = [
      {name: 'logo', value: this.imgFile},
      {name: 'type', value: 'news'}
    ];

    this.multipart.sendMultipart<{ url: string }>(`upload`, multipartItems).subscribe(data => this.news.img = data.url);
  }

  public saveNews() {
    this.news.url = this.utils.translit(<any>this.news.title);
    this.service.save(this.news).$observable.subscribe(res => {
      this.router.navigate(['news', res.url]);
    })
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
