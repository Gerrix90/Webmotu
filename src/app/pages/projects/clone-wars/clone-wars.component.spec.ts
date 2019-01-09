import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneWarsComponent } from './clone-wars.component';

describe('CloneWarsComponent', () => {
  let component: CloneWarsComponent;
  let fixture: ComponentFixture<CloneWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
