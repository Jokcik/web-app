import { Component, OnInit } from '@angular/core';
import {Teacher} from '../shared/teacher';
import {TeacherService} from './teacher.service';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {empty} from 'rxjs/observable/empty';
import {MatSnackBar} from '@angular/material';
import {MultipartItem, ODMultipartSendService} from '../../../core/od-multipart-send.service';
import {UserService} from '../../../core/user-service/user.service';

@Component({
  selector: 'od-teacher',
  templateUrl: './teacher.component.html',
})
export class TeacherComponent implements OnInit {
  public type = 0;
  public teacher: Teacher = new Teacher();

  public teacherControl: FormControl = new FormControl('');
  public teachers: Teacher[] = [];
  public teacherEdit: Teacher;

  constructor(private teacherService: TeacherService,
              public userService: UserService,
              public multipart: ODMultipartSendService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.teacherControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => value ? this.teacherService.search({name: value}).$observable : empty<any>())
    ).subscribe(teachers => this.teachers = teachers);
  }

  public async loadFile(file: File) {
    const multipartItems: MultipartItem[] = [
      {name: 'files', value: file},
      {name: 'type', value: 'files'}
    ];

    const data = await this.multipart.sendMultipart<{ url: string }>(`upload`, multipartItems).toPromise();
    if (this.type === 0) {
      this.teacher.file = {};
      this.teacher.file.url = data.url;
      this.teacher.file.name = file.name;
      return;
    }

    this.teacherEdit.file = {};
    this.teacherEdit.file.url = data.url;
    this.teacherEdit.file.name = file.name;
  }

  public saveTeacher(a) {
    this.teacherEdit = a.option.value;
    this.teacherControl.setValue(this.teacherEdit.suname + ' ' + this.teacherEdit.name + ' ' + this.teacherEdit.middleName);
  }

  public deleteTeacher() {
    if (!window.confirm('Вы действительно хотите удалить этого преподавателя?')) { return; }

    this.teacherService.remove({_id: this.teacherEdit._id}).$observable.subscribe(() => {
      const name = this.teacherEdit.suname + ' ' + this.teacherEdit.name + ' ' + this.teacherEdit.middleName;
      this.snackBar.open(`Преподаватель '${name}' успешно удален с базы`, 'ОК', {duration: 2000});
      this.teacherEdit = null;
      this.teacherControl.setValue('', {emitEvent: false});
    }, (err) => window.alert('Ошибка ' + JSON.stringify(err.message)));
  }

  public addTeacher() {
    if (this.type === 0) {
      this.deleteEmpty(this.teacher);
      this.teacherService.save(this.teacher).$observable.subscribe(teacher => {
        const name = this.teacher.name + ' ' + this.teacher.suname + ' ' + this.teacher.middleName;
        this.snackBar.open( `Преподаватель '${name}' успешно добавлен`, 'ОК', {duration: 4000});
        this.teacher = new Teacher();
      }, err => window.alert('Ошибка ' + JSON.stringify(err.message)));
      return;
    }

    this.deleteEmpty(this.teacherEdit);
    this.teacherService.update(this.teacherEdit).$observable.subscribe(teacher => {
      const name = this.teacher.name + ' ' + this.teacher.suname + ' ' + this.teacher.middleName;
        this.snackBar.open(`Преподаватель '${name}' успешно изменен`, 'ОК', {duration: 2000});
        this.teacherEdit = teacher;
      }, err => window.alert('Ошибка ' + JSON.stringify(err.message))
    );
  }

  public deleteEmpty(teacher: Teacher) {
    teacher.middleName = teacher.middleName.trim();
    teacher.name = teacher.name.trim();
    teacher.suname = teacher.suname.trim();
  }
}
