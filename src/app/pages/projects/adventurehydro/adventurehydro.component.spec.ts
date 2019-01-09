import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurehydroComponent } from './adventurehydro.component';

describe('AdventurehydroComponent', () => {
  let component: AdventurehydroComponent;
  let fixture: ComponentFixture<AdventurehydroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventurehydroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventurehydroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
