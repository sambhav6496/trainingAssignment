import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTimerServiceComponent } from './start-timer-service.component';

describe('StartTimerServiceComponent', () => {
  let component: StartTimerServiceComponent;
  let fixture: ComponentFixture<StartTimerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartTimerServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTimerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
