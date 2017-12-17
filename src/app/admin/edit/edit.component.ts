import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'od-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  navLinks = [
    {path: '/admin/edit/news', label: 'Новости'},
    {path: '/admin/edit/regions', label: 'Район, город'},
    {path: '/admin/edit/schools', label: 'ДШИ'},
    {path: '/admin/edit/history', label: 'История'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
