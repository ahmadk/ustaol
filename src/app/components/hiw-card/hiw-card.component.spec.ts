import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HIWCardComponent } from './hiw-card.component';

describe('HIWCardComponent', () => {
  let component: HIWCardComponent;
  let fixture: ComponentFixture<HIWCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HIWCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HIWCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
