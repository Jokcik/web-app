import {Component} from '@angular/core';

@Component({
  selector: 'od-root',
  templateUrl: './od.component.html',
})
export class ODComponent {
  title = process.env.PORT;
}
