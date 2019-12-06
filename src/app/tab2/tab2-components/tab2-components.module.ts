import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab2ShareModule } from '../tab2-share';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Badge } from '@ionic-native/badge/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { CallDirectory } from '@ionic-native/call-directory/ngx';
import { CallLog } from '@ionic-native/call-log/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { CardIO } from '@ionic-native/card-io/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import {
    AndroidPermissionsComponent,
    AppRateComponent,
    AppVersionComponent,
    AppBadgeComponent,
    AppCalendarComponent,
    AppCallDirectoryComponent,
    AppCallLogComponent,
    AppCallNumberComponent,
    AppCameraComponent,
    AppCardIoComponent,
    AppChooserComponent,
    AppFingerprintAioComponent,
    AppFirebaseAnalyticsComponent,
    AppGeolocationComponent,
} from '../components';



@NgModule({
    imports: [
        CommonModule,
        Tab2ShareModule,
    ],
    declarations: [
        AndroidPermissionsComponent,
        AppRateComponent,
        AppVersionComponent,
        AppBadgeComponent,
        AppCalendarComponent,
        AppCallDirectoryComponent,
        AppCallLogComponent,
        AppCallNumberComponent,
        AppCameraComponent,
        AppCardIoComponent,
        AppChooserComponent,
        AppFingerprintAioComponent,
        AppFirebaseAnalyticsComponent,
        AppGeolocationComponent,
    ],
    entryComponents: [
        AndroidPermissionsComponent,
        AppRateComponent,
        AppVersionComponent,
        AppBadgeComponent,
        AppCalendarComponent,
        AppCallDirectoryComponent,
        AppCallLogComponent,
        AppCallNumberComponent,
        AppCameraComponent,
        AppCardIoComponent,
        AppChooserComponent,
        AppFingerprintAioComponent,
        AppFirebaseAnalyticsComponent,
        AppGeolocationComponent,
    ],
    exports: [
        AndroidPermissionsComponent,
        AppRateComponent,
        AppVersionComponent,
        AppBadgeComponent,
        AppCalendarComponent,
        AppCallDirectoryComponent,
        AppCallLogComponent,
        AppCallNumberComponent,
        AppCameraComponent,
        AppCardIoComponent,
        AppChooserComponent,
        AppFingerprintAioComponent,
        AppFirebaseAnalyticsComponent,
        AppGeolocationComponent,
    ],
    providers: [
        AndroidPermissions,
        AppRate,
        AppVersion,
        Badge,
        Calendar,
        CallDirectory,
        CallLog,
        CallNumber,
        Camera,
        CardIO,
        FileChooser,
        FingerprintAIO,
        Geolocation,
        HTTP,
    ]
})
export class Tab2ComponentsModule { }
