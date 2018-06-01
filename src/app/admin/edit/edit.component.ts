import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'od-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  navLinks = [
    {path: '/admin/edit/news', label: 'Добавить событие', role: 5},
    {path: '/admin/edit/competition', label: 'Конкурсы', role: 5},
    {path: '/admin/edit/children', label: 'Банк данных ОД', role: 1},
    {path: '/admin/edit/teacher', label: 'Преподаватели', role: 1},
    {path: '/admin/edit/regions', label: 'Район, город', role: 5},
    {path: '/admin/edit/schools', label: 'ДШИ', role: 5},
    {path: '/admin/edit/gallery', label: 'Галерея', role: 5},
    {path: '/admin/edit/history', label: 'История', role: 5},
  ];

  constructor(public userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      if (!user) {
        this.router.navigate(['/403-forbidden'], {skipLocationChange: true});
      }
    });
  }

}
