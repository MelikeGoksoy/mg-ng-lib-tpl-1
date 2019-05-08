import { TestBed } from '@angular/core/testing';

import { CAlarmService } from './c-alarm.service';

describe('CAlarmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CAlarmService = TestBed.get(CAlarmService);
    expect(service).toBeTruthy();
  });
});
