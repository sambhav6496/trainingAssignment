import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-start-timer-service',
  templateUrl: './start-timer-service.component.html',
  styleUrls: ['./start-timer-service.component.css'],
})
export class StartTimerServiceComponent implements OnInit, OnDestroy {
  timer: number = 0;
  showTimerInput: boolean = true;
  timerStamps = [];
  start: boolean = true;
  stop: boolean = false;
  isTimerEqualToZero: boolean = false;
  timerSubscription: Subscription;
  constructor(private timerService: TimerService) {
    this.timerSubscription = this.timerService.timerValue.subscribe((data) => {
      this.timer = data;
    });
  }

  ngOnInit(): void {}
  checkIfTimerIsZero() {
    if (this.timer === 0) {
      this.isTimerEqualToZero = true;
    } else {
      this.isTimerEqualToZero = false;
    }
  }
  timerActions(action) {
    if (action == 'pause' && this.timer > 0) {
      this.timerStamps.push(this.timer);
    }
    if (this.timer > 0 && action == 'start') {
      this.start = false;
      this.showTimerInput = false;
      this.timerService.updatetimer(this.timer);
      this.timerService.startTimer();
    }
    if (this.timer > 0 && action == 'pause') {
      this.start = true;
      this.timerService.pauseTimer();
    }
    if (action == 'stop') {
      this.timerStamps = [];
      this.showTimerInput = true;
      this.timer = 0;
      this.start = true;
      this.timerService.updatetimer(0);
      this.timerService.stopTimer();
    }
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
