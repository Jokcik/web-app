import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'od-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  navLinks = [
    {path: '/admin/edit/news', label: 'Добавить событие'},
    {path: '/admin/edit/competition', label: 'Конкурсы'},
    {path: '/admin/edit/children', label: 'Банк данных ОД'},
    {path: '/admin/edit/regions', label: 'Район, город'},
    {path: '/admin/edit/schools', label: 'ДШИ'},
    {path: '/admin/edit/history', label: 'История'},
  ];

  constructor(private userService: UserService,
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
