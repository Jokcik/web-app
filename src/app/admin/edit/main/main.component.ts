import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Materials} from '../../../news/shared/materials';
import {HistoryService} from '../../../history/history.service';
import {Dummy} from '../../../core/dummy';
import {MatSnackBar} from '@angular/material';
import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';

import * as Image from '@ckeditor/ckeditor5-image/src/image';
import * as ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import * as ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import * as ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';

@Component({
  selector: 'od-main',
  templateUrl: './main.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  @Input() materials: Materials[] = Dummy.factory(Materials, 1);
  public currentMaterial: Materials;

  @ViewChild('ck') ck;
  constructor(private mainpageService: HistoryService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    // console.log('ngOnInit', Image.default);
    console.log('ngOnInit', ImageToolbar);
    setTimeout(() => {
      InlineEditor.create( document.querySelector( '#editor' ), {
      // image: {
      //   toolbar: ['imageStyleFull', 'imageStyleSide', 'imageStyleAlignLeft', 'imageStyleAlignCenter', 'imageStyleAlignRight'],
      //   styles: ['imageStyleFull', 'imageStyleAlignLeft', 'imageStyleAlignRight']
      // }
      // plugins: [ Image, ImageToolbar, ImageCaption, ImageStyle ],
      plugins: [  ],
      image: {
        toolbar: [ 'imageTextAlternative', '|', 'imageStyleFull', 'imageStyleSide' ]
      }
      // plugins: ...,
      // toolbar: ...
    } )
      .then( newEditor => {
        console.log('123', newEditor);
        console.log(InlineEditor.build.plugins)
        // ...
      } );
    }, 3000);
    // console.log('ngOnInit', InlineEditor.create(el));

    this.mainpageService.queryMainpage({type: 0}).$observable.subscribe(histories => {
      this.materials = histories;
      this.currentMaterial = histories[0];
    });

    // window['CKEDITOR'].inline( 'editor1' );
    // console.log('ngOnInit', window['CKEDITOR']);
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
    // fileUploadRequest: () => {console.log('123')},
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
    removePlugins:'contextmenu, tabletools,tableselection,liststyle,elementspath,sourcedialog,dropler'
  };
}
