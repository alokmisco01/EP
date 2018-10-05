import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingtestComponent } from './eventbindingtest.component';

describe('EventbindingtestComponent', () => {
  let component: EventbindingtestComponent;
  let fixture: ComponentFixture<EventbindingtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbindingtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbindingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
