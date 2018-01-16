import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../../../history/history.service';
import {Materials} from '../../../news/shared/materials';
import {MultipartItem, ODMultipartSendService} from '../../../core/od-multipart-send.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ODUtils} from '../../../core/od-utils';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {UpdateService} from '../../../announce/update.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'od-news-edit',
  templateUrl: './news-edit.component.html',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class NewsEditComponent implements OnInit {
  public news: Materials = new Materials();
  public imgFile: File;

  constructor(private service: HistoryService,
              private multipart: ODMultipartSendService,
              private router: Router,
              private updateService: UpdateService,
              private route: ActivatedRoute,
              private utils: ODUtils) {
  }

  ngOnInit() {
    this.route.params.pipe(switchMap(params => {
      if (params['url']) {
        return this.service.queryMainpage({url: params['url']}).$observable;
      }
      return of([this.news]);
    })).subscribe(news => this.news = news[0]);
  }

  public filterDate(d): boolean {
    let date = new Date(d.format());
    let now = new Date();
    now.setDate(now.getDate() - 1);
    return +now < +date && date.getFullYear() < 2023;
  };

  public loadFile() {
    if (!this.imgFile) return;

    let multipartItems: MultipartItem[] = [
      {name: 'logo', value: this.imgFile},
      {name: 'type', value: 'news'}
    ];

    this.multipart.sendMultipart<{ url: string }>(`upload`, multipartItems).subscribe(data => this.news.img = data.url);
  }

  public saveNews() {
    if (this.news._id) {
      return this.service.update(this.news).$observable.subscribe(res => {
        this.updateMaterials();
        this.router.navigate(['news', res.url]);
      });
    }

    this.news.url = this.utils.translit(<any>this.news.title);
    this.news.date = this.news.type == 2 ? this.news.date  : new Date();

    return this.service.save(this.news).$observable.subscribe(res => {
      this.updateMaterials();
      this.router.navigate(['news', res.url]);
    });
  }

  public updateMaterials() {
    if (this.news.type == 2) {
      this.updateService.changeAnnounce.next();
    } if (this.news.type == 1) {
      this.updateService.changeNews.next();
    }
  }

  public config = {
    toolbarGroups: [
      { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
      { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
      { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
      { name: 'forms', groups: [ 'forms' ] },
      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
      { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
      { name: 'links', groups: [ 'links' ] },
      '/',
      { name: 'insert', groups: [ 'insert' ] },
      { name: 'colors', groups: [ 'colors' ] },
      { name: 'tools', groups: [ 'tools' ] },
      { name: 'others', groups: [ 'others' ] },
      { name: 'about', groups: [ 'about' ] },
      { name: 'styles', groups: [ 'styles' ] },
    ],

    removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Copy,Paste,PasteText,PasteFromWord,Cut,Find,Replace,' +
    'SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,' +
    'RemoveFormat,NumberedList,BulletedList,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,Flash,Table,Smiley,' +
    'SpecialChar,PageBreak,Iframe,Maximize,About,ShowBlocks',
    imageResize: { maxWidth : 800, maxHeight : 800 },
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
    extraPlugins: 'imageresize,autogrow,sharedspace,divarea,removeformat',
    removePlugins: 'contextmenu, tabletools,tableselection,liststyle,elementspath,sourcedialog,dropler,wysiwygarea'
  };
}
