import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickLogComponent } from './click-log/click-log.component';
import { TimerLogComponent } from './timer-log/timer-log.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @ViewChild(TimerLogComponent) private timerLog : TimerLogComponent
  @ViewChild(ClickLogComponent) private clickLog : ClickLogComponent
  timer : number = 0 ;
  interval; 

  constructor() { }

  ngOnInit(): void {
  }

  setTimer(e){
    this.timer = e
  }

  timerAction(e){
    if(e == 'start'){
      this.startTimer()
    }else{
      this.pauseTimer()
    }
    this.timerLog.timerActions(e);
    this.clickLog.clickActions(e)
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timer>0){
        this.timer --
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
