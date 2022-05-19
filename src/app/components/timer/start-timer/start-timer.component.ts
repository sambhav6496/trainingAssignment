import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start-timer',
  templateUrl: './start-timer.component.html',
  styleUrls: ['./start-timer.component.css'],
})
export class StartTimerComponent implements OnInit {
  @Output() timerEvent = new EventEmitter<number>();
  @Output() timerActionEvent = new EventEmitter<string>();
  @Input() timer: number = 0;
  showTimerInput: boolean = true;
  timerStamps = [];
  start: boolean = true;
  stop: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  timerActions(action) {
    if (action == 'pause' && this.timer > 0) {
      this.timerStamps.push(this.timer);
    }
    if (this.timer > 0 && action == 'start') {
      this.start = false;
      this.showTimerInput = false;
      this.timerEvent.emit(this.timer);
      this.timerActionEvent.emit('start');
    }
    if (this.timer > 0 && action == 'pause') {
      this.start = true;
      this.timerActionEvent.emit('pause');
    }
    if (action == 'stop') {
      this.timerStamps = [];
      this.showTimerInput = true;
      this.timer = 0;
      this.start = true;
      this.timerEvent.emit(0);
      this.timerActionEvent.emit('stop');
    }
  }
}
