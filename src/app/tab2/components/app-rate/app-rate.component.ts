import { Component, OnInit } from '@angular/core';
import { AppRate } from '@ionic-native/app-rate/ngx';

@Component({
    selector: 'app-app-rate',
    templateUrl: './app-rate.component.html',
    styleUrls: ['./app-rate.component.scss'],
})
export class AppRateComponent implements OnInit {

    constructor(
        public appRate: AppRate
    ) { }

    ngOnInit() { }

    public storeAppURL() {
        // set certain preferences
        this.appRate.preferences.storeAppURL = {
            ios: '<app_id>',
            android: 'market://details?id=<package_name>',
            windows: 'ms-windows-store://review/?ProductId=<store_id>'
        };

        this.appRate.promptForRating(true);
    }

    public preferences() {
        this.appRate.preferences = {
            usesUntilPrompt: 3,
            storeAppURL: {
                ios: '<app_id>',
                android: 'market://details?id=<package_name>',
                windows: 'ms-windows-store://review/?ProductId=<store_id>'
            }
        };

        this.appRate.promptForRating(false);
    }

}
