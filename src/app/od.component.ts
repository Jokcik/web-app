import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter} from 'rxjs/operators';
import {DocumentsService} from './documents/documents.service';
import {Observable} from 'rxjs';
import {Documents} from './documents/shared/documents';

@Component({
  selector: 'od-root',
  templateUrl: './od.component.html',
})
export class ODComponent implements OnInit {
  historyShow: boolean;
  historyAddress: boolean;
  showEvent: boolean;
  showDocuments: boolean;

  public documents$: Observable<Documents[]>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private documentService: DocumentsService,
              private titleService: Title) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => this.changeTitle());
  }

  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  private changeTitle() {
    const title = this.getDeepestTitle(this.router.routerState.snapshot.root);
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.documents$ = this.documentService.query().$observable;
  }
}
