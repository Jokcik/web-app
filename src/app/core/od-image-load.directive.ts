import {Directive, ElementRef, EventEmitter, Input, Output} from "@angular/core";
import {SafeUrl} from "@angular/platform-browser";
import {ODUtils} from './od-utils';

/**
 * Директива для загрузки изображения:
 * <input type="file" ggImageLoad [(src)]="url" [(file)]="file"/>
 */
@Directive({
  selector: '[odImageLoad]',
  host: {
    '(change)': 'onChange($event)'
  },
})
export class ODImageDirective {
  @Input() public file: File;
  @Output() public fileChange: EventEmitter<File | File[]> = new EventEmitter();

  @Input() public src: SafeUrl;
  @Output() public srcChange: EventEmitter<SafeUrl | SafeUrl[]> = new EventEmitter();


  constructor(private elRef: ElementRef,
              private utils: ODUtils) {
  }

  public onChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      if (this.elRef.nativeElement.attributes['multiple']) {
        let urls: SafeUrl[] = [];
        let files: File[] = [];
        for (let i = 0; i < fileList.length; ++i) {
          urls.push(this.utils.getSafeUrl(URL.createObjectURL(fileList.item(i))));
          files.push(fileList.item(i));
        }

        this.fileChange.emit(files);
        this.srcChange.emit(urls);
      } else {

        let file = fileList[0];

        let url = this.utils.getSafeUrl(URL.createObjectURL(file));

        this.fileChange.emit(file);
        this.srcChange.emit(<any> url);
      }
    }
  }
}