import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefeVarTestComponent } from './template-refe-var-test.component';

describe('TemplateRefeVarTestComponent', () => {
  let component: TemplateRefeVarTestComponent;
  let fixture: ComponentFixture<TemplateRefeVarTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefeVarTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefeVarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
