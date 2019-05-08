import { TestBed } from '@angular/core/testing';

import { CEnergyChartService } from './c-energy-chart.service';

describe('CEnergyChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CEnergyChartService = TestBed.get(CEnergyChartService);
    expect(service).toBeTruthy();
  });
});
