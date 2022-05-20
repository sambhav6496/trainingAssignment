import { newArray } from '@angular/compiler/src/util';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamically-div',
  templateUrl: './dynamically-div.component.html',
  styleUrls: ['./dynamically-div.component.css'],
})
export class DynamicallyDivComponent implements OnInit {
  myArray = [];
  currentPosition;

  constructor() {}
  @HostListener('window:scroll', ['$event.target'])
  onScroll(e) {
    let scroll = window.pageYOffset;
    if (scroll > this.currentPosition) {
      this.myArray.length++;
    } else {
    }
    this.currentPosition = scroll;
  }
  ngOnInit(): void {
    this.currentPosition = window.pageYOffset;
    this.myArray = new Array(5);
  }
  divClicked(value) {
    alert('div' + ' ' + value + ' is clicked');
  }
}
