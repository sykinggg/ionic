import { Component, OnInit } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
    selector: 'app-android-permissions',
    templateUrl: './android-permissions.component.html',
    styleUrls: ['./android-permissions.component.scss'],
})
export class AndroidPermissionsComponent implements OnInit {

    public androidPermissionsArrr: any[];

    constructor(
        public androidPermissions: AndroidPermissions
    ) {
        this.androidPermissionsArrr = [];
    }

    ngOnInit() {
        this.defaultAndroidPermissions();
    }

    public defaultAndroidPermissions() {
        // tslint:disable-next-line:forin
        for (const i in this.androidPermissions) {
            this.androidPermissionsArrr.push({
                type: i,
                value: this.androidPermissions[i]
            });
        }
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
            result => alert('Has permission?' + result.hasPermission),
            err => {
                alert('error');
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
            }
        );

        this.androidPermissions.requestPermissions(
            [
                this.androidPermissions.PERMISSION.CAMERA,
                this.androidPermissions.PERMISSION.GET_ACCOUNTS
            ]
        );
    }

}
