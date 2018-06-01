import {Component} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'od-root',
  templateUrl: './od.component.html',
})
export class ODComponent {
  historyShow: boolean;
  historyAddress: boolean;
  showEvent: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
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
}
