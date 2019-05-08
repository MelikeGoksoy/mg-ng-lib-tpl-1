import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.css']
})
export class ChartContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 flipped = false;

  flipIt() {
    this.flipped = !this.flipped;
   
   
  }

 
}