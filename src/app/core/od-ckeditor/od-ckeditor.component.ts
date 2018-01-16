import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {CKEditorComponent} from 'ngx-ckeditor/lib/ck-editor.component';

@Component({
  selector: 'od-ckeditor',
  template: `<ck-editor [ngModel]="value" (valueChange)="changeValue($event)" skin="office2013" [language]="'ru'" [config]="config" #ckEditor></ck-editor>`
})

export class ODCkeditorComponent implements OnInit, OnDestroy {
  @Input('config') newConfig: any = {};
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(CKEditorComponent) ck: CKEditorComponent;

  constructor() {
  }

  ngOnInit() {
    Object.assign(this.config, this.newConfig);
  }

  ngOnDestroy() {
    this.ck.ngOnDestroy();
  }

  public changeValue(value) {
    this.value = value;
    this.valueChange.emit(value);
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
    removePlugins: 'contextmenu, tabletools,tableselection,liststyle,elementspath,sourcedialog,dropler'
  };
}
