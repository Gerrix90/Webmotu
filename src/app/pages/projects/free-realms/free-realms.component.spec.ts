import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeRealmsComponent } from './free-realms.component';

describe('FreeRealmsComponent', () => {
  let component: FreeRealmsComponent;
  let fixture: ComponentFixture<FreeRealmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeRealmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeRealmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
