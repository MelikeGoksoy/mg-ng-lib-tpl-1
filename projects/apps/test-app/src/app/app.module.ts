import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
console.log("app comp" , AppComponent);
import { HelloComponent } from './hello.component';
import { CAlarmModule } from '../../../../c-alarm/src/public_api';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CAlarmModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
