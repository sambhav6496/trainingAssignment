import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-log',
  templateUrl: './click-log.component.html',
  styleUrls: ['./click-log.component.css'],
})
export class ClickLogComponent implements OnInit {
  startClicks: number = 0;
  pauseClicks: number = 0;

  constructor() {}

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
}
