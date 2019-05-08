import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings = [];
  constructor(private _setService: SettingsService) { }

  ngOnInit() {
    this.fetchSettings();
  }
  fetchSettings() {
    this._setService.getSettings()
      .subscribe(result => {
        this.settings = result;
      });
    console.log("settings: " + this.settings);
  }


}