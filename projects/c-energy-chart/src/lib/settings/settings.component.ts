import { Component, OnInit } from '@angular/core';
import { SettingsService, Hede } from '../services/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings :Hede;
  constructor(private _setService: SettingsService) { }

  ngOnInit() {
    this.fetchSettings();
  }
  fetchSettings() {
    this._setService.getSettings()
      .subscribe((result:Hede) => {
        this.settings = result;
      });
    console.log("settings: " + this.settings);
  }


}