import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Planetside2Component } from './planetside2.component';

describe('Planetside2Component', () => {
  let component: Planetside2Component;
  let fixture: ComponentFixture<Planetside2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Planetside2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Planetside2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
