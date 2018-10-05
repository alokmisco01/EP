import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylebindingtestComponent } from './stylebindingtest.component';

describe('StylebindingtestComponent', () => {
  let component: StylebindingtestComponent;
  let fixture: ComponentFixture<StylebindingtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylebindingtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylebindingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
