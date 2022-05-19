import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-service',
  templateUrl: './timer-service.component.html',
  styleUrls: ['./timer-service.component.css'],
})
export class TimerServiceComponent implements OnInit, OnDestroy {
  timerActionsArray = [];
  timerSubscription: Subscription;
  constructor(private timerService: TimerService) {
    this.timerSubscription = this.timerService.timerAction.subscribe((data) => {
      this.timerActions(data);
    });
  }

  ngOnInit(): void {}

  timerActions(action) {
    if (action == 'stop') {
      this.timerActionsArray = [];
    } else {
      this.timerActionsArray.push({
        action: action,
        date: this.currentDate(),
      });
    }
  }

  currentDate() {
    let date = new Date();
    let currentDate = date.getDate() + '-';
    currentDate += date.getMonth() + '-';
    currentDate += date.getFullYear() + ' ';
    let hours = date.getHours();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    currentDate +=
      hours + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + ampm;
    return currentDate;
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
