import { Component, OnInit } from '@angular/core';
import {DshiDialogAdd} from '../admin/edit/dshi-edit/dshi-dialog-add';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'od-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openDialog() {
    this.dialog.open(DshiDialogAdd, {width: '500px'}).afterClosed().subscribe(result => {
      console.log('1234', result);
    });
  }

}
