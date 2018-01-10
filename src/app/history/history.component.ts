import {Component, OnInit} from '@angular/core';
import {HistoryService} from './history.service';
import {Materials} from '../news/shared/materials';
import {Dummy} from '../core/dummy';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'od-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {
  public descriptions: Materials[] = Dummy.factory(Materials, 1);
  public isFull: boolean = false;

  constructor(private mainpageService: HistoryService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mainpageService.querySafeHtml({type: 0, url: params['id']}).subscribe(descriptions => this.descriptions = descriptions);
    });
  }

  public imageSources: string[] = [
    'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
    'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
    'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg'
  ];
}
