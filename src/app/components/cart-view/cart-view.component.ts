import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  width = 20

  constructor() { }

  ngOnInit(): void {
  }

  changeView(type){
    if(type == 'grid'){
      this.width = 20
    }else{
      this.width = 40
    }
  }

  createBoxes(i: number) {
    return new Array(i);
  }
}
