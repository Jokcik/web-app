import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {CKEditorComponent} from 'ngx-ckeditor/lib/ck-editor.component';
import {MultipartItem, ODMultipartSendService} from '../od-multipart-send.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'od-ckeditor',
  template: `
    <ck-editor [ngModel]="value" (ngModelChange)="changeValue($event)" skin="office2013" [language]="'ru'" [config]="config"
               #ckEditor></ck-editor>`
})

export class ODCkeditorComponent implements OnInit, AfterViewInit {
  @Input('config') newConfig: any = {};
  @Input() value: string;
  @Input() name: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(CKEditorComponent) ckEditor: CKEditorComponent;

  constructor(private multipart: ODMultipartSendService) {
  }

  ngOnInit() {
    if (this.name) {
      this.ckEditor.ck.nativeElement.setAttribute('name', this.name);
      this.ckEditor.ck.nativeElement.setAttribute('contenteditable', true);
    }

    Object.assign(this.config, this.newConfig);
  }

  ngAfterViewInit(): void {
    if (!this.name) return;

    this.initUploadFile();
  }

  private initUploadFile() {
    const editor = window['CKEDITOR'].instances[this.name];

    editor.on('fileUploadRequest', async (evt) => {
      const fileLoader = evt.data.fileLoader;
      const formData = new FormData();

      formData.append('logo', fileLoader.file, fileLoader.fileName);
      formData.append('type', 'uploads');
      fileLoader.xhr.send(formData);

      evt.stop();
    });

    editor.on('fileUploadResponse', function (evt) {
      evt.stop();

      const response = evt.data.fileLoader.xhr.responseText.split('|');
      if (response[1]) {
        evt.data.message = response[1]; // An error occurred during upload.
        evt.cancel();
      } else {
        evt.data.url = JSON.parse(response[0]).url;
      }
    });
  }


  // public loadFile(file: File) {
  //   if (!file) return;
  //
  //   let multipartItems: MultipartItem[] = [
  //     {name: 'logo', value: file},
  //     {name: 'type', value: 'news'}
  //   ];
  //
  //   return this.multipart.sendMultipart<{ url: string }>(`upload`, multipartItems).toPromise();
  // }

  public changeValue(value) {
    this.value = value;
    this.valueChange.emit(value);
  }

  public config = {
    toolbarGroups: [
      {name: 'document', groups: ['mode', 'document', 'doctools']},
      {name: 'clipboard', groups: ['clipboard', 'undo']},
      {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
      {name: 'forms', groups: ['forms']},
      {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
      {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
      {name: 'links', groups: ['links']},
      '/',
      {name: 'insert', groups: ['insert']},
      {name: 'colors', groups: ['colors']},
      {name: 'tools', groups: ['tools']},
      {name: 'others', groups: ['others']},
      {name: 'about', groups: ['about']},
      {name: 'styles', groups: ['styles']},
    ],

    removeButtons: 'Source,Save,NewPage,Format,Preview,Print,Templates,Copy,Paste,PasteText,PasteFromWord,Cut,Find,Replace,' +
    'SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,' +
    'RemoveFormat,NumberedList,BulletedList,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,Flash,Table,Smiley,' +
    'SpecialChar,PageBreak,Iframe,Maximize,About,ShowBlocks',

    extraPlugins: 'uploadwidget,uploadfile,autogrow,sharedspace,divarea,removeformat',
    imageResize: {maxWidth: 800, maxHeight: 800},
    toolbar: 'full',
    format_tags: 'p',
    language: 'ru',
    allowedContent: true,
    disableNativeSpellChecker: false,
    forcePasteAsPlainText: true,
    title: false,
    disableAutoInline: true,
    enableContextMenu: true,
    sharedSpaces: {
      top: 'top',
      bottom: 'bottom'
    },
    uploadUrl: environment.host + 'upload',
    resize_enabled: false,
    autoGrow_minHeight: 550,
    autoGrow_onStartup: true,
    removePlugins: 'contextmenu,tabletools,tableselection,liststyle,elementspath,sourcedialog,dropler'
  };
}
