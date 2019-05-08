import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatButtonModule
} from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { HttpClientModule } from '@angular/common/http';


/******  Utils ******/
import { TURKISH_DATE_FORMATS, TurkishDateFormat } from './assets/turkish-date-format';
import { SettingsComponent } from './settings/settings.component';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { SettingsService } from './services/settings.service';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
  imports: [
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    NgxChartsModule,

    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,

    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  declarations: [
    SettingsComponent,
    ChartContainerComponent,
    BarchartComponent
  ],
  providers: [
    SettingsService,
    { provide: DateAdapter, useClass: TurkishDateFormat },
    { provide: MAT_DATE_FORMATS, useValue: TURKISH_DATE_FORMATS },
  ],
  exports: [ChartContainerComponent]
})
export class CEnergyChartModule { }
