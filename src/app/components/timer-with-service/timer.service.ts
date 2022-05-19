import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timer: number = 0;
  timerValue = new Subject<number>();
  timerAction = new Subject<string>();

  constructor() {}

  updatetimer(value) {
    this.timer = value;
    this.timerValue.next(this.timer);
  }

  startTimer() {
    if (this.timer > 0) {
      this.timerValue.next(this.timer);
      this.timerAction.next('start');
    }
  }

  pauseTimer() {
    if (this.timer > 0) {
      this.timerAction.next('pause');
    }
  }

  stopTimer() {
    this.timerValue.next(0);
    this.timerAction.next('stop');
  }
}
