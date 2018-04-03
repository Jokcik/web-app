import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCompetitionTableComponent } from './children-competition-table.component';
import {BrowserStack} from 'protractor/built/driverProviders';

describe('ChildrenCompetitionTableComponent', () => {
  let component: ChildrenCompetitionTableComponent;
  let fixture: ComponentFixture<ChildrenCompetitionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenCompetitionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenCompetitionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
