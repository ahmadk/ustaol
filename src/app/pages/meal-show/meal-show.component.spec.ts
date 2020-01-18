import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealShowComponent } from './meal-show.component';

describe('MealShowComponent', () => {
  let component: MealShowComponent;
  let fixture: ComponentFixture<MealShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
