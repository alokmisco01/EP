import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingtestComponent } from './twowaybindingtest.component';

describe('TwowaybindingtestComponent', () => {
  let component: TwowaybindingtestComponent;
  let fixture: ComponentFixture<TwowaybindingtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaybindingtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybindingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
