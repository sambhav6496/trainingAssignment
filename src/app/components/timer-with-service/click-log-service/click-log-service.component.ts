import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-click-log-service',
  templateUrl: './click-log-service.component.html',
  styleUrls: ['./click-log-service.component.css'],
})
export class ClickLogServiceComponent implements OnInit, OnDestroy {
  startClicks: number = 0;
  pauseClicks: number = 0;
  timerSubscription: Subscription;
  constructor(private timerService: TimerService) {
    this.timerSubscription = this.timerService.timerAction.subscribe((data) => {
      this.clickActions(data);
    });
  }

  ngOnInit(): void {}

  clickActions(action) {
    if (action == 'start') {
      this.startClicks++;
    }
    if (action == 'pause') {
      this.pauseClicks++;
    }
    if (action == 'stop') {
      this.startClicks = 0;
      this.pauseClicks = 0;
    }
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
