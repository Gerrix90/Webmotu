import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodWithFrancesComponent } from './food-with-frances.component';

describe('FoodWithFrancesComponent', () => {
  let component: FoodWithFrancesComponent;
  let fixture: ComponentFixture<FoodWithFrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodWithFrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodWithFrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
