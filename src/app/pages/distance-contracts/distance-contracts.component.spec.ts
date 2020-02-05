import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceContractsComponent } from './distance-contracts.component';

describe('DistanceContractsComponent', () => {
  let component: DistanceContractsComponent;
  let fixture: ComponentFixture<DistanceContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
