import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
    selector: 'app-app-version',
    templateUrl: './app-version.component.html',
    styleUrls: ['./app-version.component.scss'],
})
export class AppVersionComponent implements OnInit {

    public versionOption: any;

    constructor(
        public appVersion: AppVersion
    ) {
        this.versionOption = {};
    }

    ngOnInit() {
        this.defaultVersionOption();
    }

    public async defaultVersionOption() {
        alert(this.appVersion);
        // tslint:disable-next-line:forin
        for (const i in this.appVersion) {
            alert(' name: ' + i + ' desc: ' + this.appVersion[i]);
        }
        this.versionOption = {
            name: await this.appVersion.getAppName(),
            packageName: await this.appVersion.getPackageName(),
            versionCode: await this.appVersion.getVersionCode(),
            versionNumber: await this.appVersion.getVersionNumber()
        };
    }

}
