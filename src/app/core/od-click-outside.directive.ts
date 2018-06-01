import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

/**
 * Директива для внешнего клика:
 * <input (ggClickOutside)="onClick()" ignore="inputData.ingoreArea"/>
 * <input (ggClickOutside)="onClick()" ignore="'#main'"/>
 * <input (ggClickOutside)="onClick()" ignore="['.classA', '#id1']"/>
 */
@Directive({
  selector: '[odClickOutside]',
})
export class OdClickOutsideDirective {
  @Output('odClickOutside') public event: EventEmitter<Event> = new EventEmitter();
  @Input('ignore') public ignoreElements: (HTMLElement[] | string)[];

  constructor(private elRef: ElementRef) {
  }

  @HostListener('document:mousedown', ['$event', '$event.target'])
  public clickHandler(event: MouseEvent, targetElement: HTMLElement): void {
    const checkInterection = (array: HTMLElement[], target) => array.some(el => el.contains(target));
    const ignore = [];
    if (!(this.ignoreElements instanceof Array)) {
      this.ignoreElements = [this.ignoreElements];
    }

    this.ignoreElements.forEach(value => {
        if (typeof value === 'string') {
          const arr = document.querySelectorAll(value);
          for (let i = 0; i < arr.length; ++i) {
            ignore.push(arr[i]);
          }
        } else if (value instanceof HTMLElement) {
          ignore.push(value);
        }
    });

    if (!this.elRef.nativeElement.contains(targetElement) && !checkInterection(ignore, targetElement)) {
      this.event.emit(event);
    }
  }
}
