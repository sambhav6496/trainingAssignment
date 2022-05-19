import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickLogServiceComponent } from './click-log-service/click-log-service.component';
import { TimerServiceComponent } from './timer-service/timer-service.component';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer-with-service',
  templateUrl: './timer-with-service.component.html',
  styleUrls: ['./timer-with-service.component.css'],
})
export class TimerWithServiceComponent implements OnInit {
  timer: number = 0;
  interval;
  timerSubscription: Subscription;
  timerActionSubscription: Subscription;

  constructor(private timerService: TimerService) {
    this.timerSubscription = this.timerService.timerValue.subscribe((data) => {
      this.setTimer(data);
    });
    this.timerActionSubscription = this.timerService.timerAction.subscribe(
      (data) => {
        this.timerAction(data);
      }
    );
  }

  ngOnInit(): void {}

  setTimer(e) {
    this.timer = e;
  }

  timerAction(e) {
    if (e == 'start') {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
        this.timerService.updatetimer(this.timer);
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
    this.timerActionSubscription.unsubscribe();
  }
}
