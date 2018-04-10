import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'od-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  navLinks = [
    {path: '/admin/edit/news', label: 'Добавить событие', class: 'col-lg-2'},
    {path: '/admin/edit/competition', label: 'Конкурсы', class: 'col-lg-2'},
    {path: '/admin/edit/children', label: 'Банк данных ОД', class: 'col-lg-2'},
    {path: '/admin/edit/teacher', label: 'Преподаватели', class: 'col-lg-2'},
    {path: '/admin/edit/regions', label: 'Район, город', class: 'col-lg-2'},
    {path: '/admin/edit/schools', label: 'ДШИ', class: 'col-lg-1'},
    {path: '/admin/edit/gallery', label: 'Галерея', class: 'col-lg-2'},
    {path: '/admin/edit/history', label: 'История', class: 'col-lg-1'},
  ];

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    // this.userService.getUser().subscribe(user => {
    //   if (!user) {
    //     this.router.navigate(['/403-forbidden'], {skipLocationChange: true});
    //   }
    // });
  }

}
