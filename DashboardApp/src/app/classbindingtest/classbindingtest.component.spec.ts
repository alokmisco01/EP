import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbindingtestComponent } from './classbindingtest.component';

describe('ClassbindingtestComponent', () => {
  let component: ClassbindingtestComponent;
  let fixture: ComponentFixture<ClassbindingtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassbindingtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassbindingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
