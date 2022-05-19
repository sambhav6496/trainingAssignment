import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.css'],
})
export class TimerLogComponent implements OnInit {
  timerActionsArray = [];

  constructor() {}

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
}
