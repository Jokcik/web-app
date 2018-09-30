import { Component, OnInit } from '@angular/core';
import {DocumentsService} from './documents.service';
import {Observable} from 'rxjs';
import {Documents} from './shared/documents';
import {first} from 'rxjs/operators';
import {UserService} from '../core/user-service/user.service';
import {ItemDocument} from './shared/item-document';

@Component({
  templateUrl: './documents.component.html',
})
export class DocumentsComponent implements OnInit {
  public documents$: Observable<Documents[]>;
  public edit: boolean = true;

  constructor(private documentsService: DocumentsService,
              public userService: UserService) {
  }

  ngOnInit() {
    this.findDocuments();
  }

  public findDocuments() {
    this.documents$ = this.documentsService.query().$observable;
  }

  public async changeTitleDocument(document: Documents, title: string) {
    if (!title.trim()) { return; }

    await this.documentsService.update({ _id: document._id, title }).$observable.pipe(first()).toPromise();
    this.findDocuments();
  }

  public async saveDocuments(title: string) {
    if (!title.trim()) { return; }

    await this.documentsService.save({ title }).$observable.pipe(first()).toPromise();
    this.findDocuments();
  }

  public async saveItemDocuments(document: Documents, title: string, url: string) {
    if (!title.trim() || !url.trim()) { return; }

    await this.documentsService.saveItem({ _id: document._id, title, url }).$observable.pipe(first()).toPromise();
    this.findDocuments();
  }

  public async deleteItem(document: Documents, item: ItemDocument) {
    await this.documentsService.deleteItem({ _id: document._id, itemId: item._id }).$observable.pipe(first()).toPromise();
    this.findDocuments();
  }

  public async deleteDocument(document: Documents) {
    await this.documentsService.remove({ _id: document._id }).$observable.pipe(first()).toPromise();
    this.findDocuments();
  }
}
