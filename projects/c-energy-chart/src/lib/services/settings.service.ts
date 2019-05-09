import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { find, first, filter, map, delay, concatMap } from 'rxjs/operators';

export class Hede{
  powermeters:any[]
  consumption:any[]
  money:any[]
  timeperiod:any[]
}

const mockdata:Hede={
  "powermeters": [
    "Nar Depo-1",
    "Nar Depo-2",
    "Nar Depo-3",
    "Nar Depo-4",
    "Nar Depo-5",
    "Nar Depo-6"
  ],
  "consumption": [
    "Kwh",
    "Watt"
  ],
  "money": [
    "TL",
    "USD"
  ],
  "timeperiod": [
    "Saatlik",
    "Haftalık",
    "Aylık"
  ]
};

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) { }

  getSettings(): Observable<any> {
    //return this.http.get<any[]>("../../assets/settingsdata.json");
    return of(mockdata);
  }

}

