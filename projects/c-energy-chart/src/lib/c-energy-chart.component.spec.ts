import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEnergyChartComponent } from './c-energy-chart.component';

describe('CEnergyChartComponent', () => {
  let component: CEnergyChartComponent;
  let fixture: ComponentFixture<CEnergyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEnergyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEnergyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
