import { Component, OnInit } from '@angular/core';
import {Teacher} from '../shared/teacher';
import {TeacherService} from './teacher.service';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {empty} from 'rxjs/observable/empty';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'od-teacher',
  templateUrl: './teacher.component.html',
})
export class TeacherComponent implements OnInit {
  public type: number = 0;
  public teacher: Teacher = new Teacher();

  public teacherControl: FormControl = new FormControl('');
  public teachers: Teacher[] = [];
  public teacherEdit: Teacher;

  constructor(private teacherService: TeacherService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.teacherControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => value ? this.teacherService.search({name: value}).$observable : empty<any>())
    ).subscribe(teachers => this.teachers = teachers);
  }

  public saveTeacher(a) {
    this.teacherEdit = a.option.value;
    this.teacherControl.setValue(this.teacherEdit.name + ' ' + this.teacherEdit.suname + ' ' + this.teacherEdit.middleName);
  }

  public deleteTeacher() {
    if (!window.confirm('Вы действительно хотите удалить этого преподавателя?')) { return; }

    this.teacherService.remove({_id: this.teacherEdit._id}).$observable.subscribe(() => {
      this.snackBar.open('Преподаватель успешно удален с базы', 'ОК', {duration: 2000});
      this.teacherEdit = null;
      this.teacherControl.setValue('', {emitEvent: false});
    }, (err) => window.alert('Ошибка ' + JSON.stringify(err)));
  }

  public addTeacher() {
    if (this.type === 0) {
      this.teacherService.save(this.teacher).$observable.subscribe(teacher => {
        const name = this.teacher.name + ' ' + this.teacher.suname + ' ' + this.teacher.middleName;
        this.snackBar.open(`Преподаватель '${name}' успешно добавлен`, 'ОК', {duration: 4000});
        this.teacher = new Teacher();
      }, err => window.alert('Ошибка ' + JSON.stringify(err)));
      return;
    }

    this.teacherService.update(this.teacherEdit).$observable.subscribe(teacher => {
        this.snackBar.open('Преподаватель успешно изменен', 'ОК', {duration: 2000});
        this.teacherEdit = teacher;
      }, err => window.alert('Ошибка ' + JSON.stringify(err))
    );
  }
}
