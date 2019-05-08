import { Component, OnInit } from '@angular/core';
import { single } from './data';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls:['./barchart.component.css' ]
})
export class BarchartComponent {
 single: any[];
 view:any[];
  constructor() { 
    Object.assign(this, { single });
    
     console.log(innerWidth);
  }


onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 250];
}
}
