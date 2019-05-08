import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAlarmComponent } from './c-alarm.component';

describe('CAlarmComponent', () => {
  let component: CAlarmComponent;
  let fixture: ComponentFixture<CAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
