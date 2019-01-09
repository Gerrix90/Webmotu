import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudyalbrechtComponent } from './judyalbrecht.component';

describe('JudyalbrechtComponent', () => {
  let component: JudyalbrechtComponent;
  let fixture: ComponentFixture<JudyalbrechtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudyalbrechtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudyalbrechtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
