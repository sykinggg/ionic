import { AndroidPermissionsComponent } from './android-permissions';
import { AppRateComponent } from './app-rate';
import { AppVersionComponent } from './app-version';
import { AppBadgeComponent } from './app-badge';
import { AppCalendarComponent } from './app-calendar';
import { AppCallDirectoryComponent } from './app-call-directory';
import { AppCallLogComponent } from './app-call-log';
import { AppCallNumberComponent } from './app-call-number';
import { AppCameraComponent } from './app-camera';
import { AppCardIoComponent } from './app-card-io';
import { AppChooserComponent } from './app-chooser';
import { AppFingerprintAioComponent } from './app-fingerprint-aio';
import { AppFirebaseAnalyticsComponent } from './app-firebase-analytics';
import { AppGeolocationComponent } from './app-geolocation';

export * from './android-permissions';
export * from './app-rate';
export * from './app-version';
export * from './app-badge';
export * from './app-calendar';
export * from './app-call-directory';
export * from './app-call-log';
export * from './app-call-number';
export * from './app-camera';
export * from './app-card-io';
export * from './app-chooser';
export * from './app-fingerprint-aio';
export * from './app-firebase-analytics';
export * from './app-geolocation';

export const tab2DynamicComponents = {
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
};

export const tab2ChoiceComponentInput: any = [
    {
        name: 'AndroidPermissionsComponent',
        type: 'radio',
        label: 'android 权限',
        value: 'AndroidPermissionsComponent',
        checked: false
    },
    {
        name: 'AppRateComponent',
        type: 'radio',
        label: 'app 评分',
        value: 'AppRateComponent',
        checked: false
    },
    {
        name: 'AppVersionComponent',
        type: 'radio',
        label: 'app 版本信息',
        value: 'AppVersionComponent',
        checked: false
    },
    {
        name: 'AppBadgeComponent',
        type: 'radio',
        label: 'app badge',
        value: 'AppBadgeComponent',
        checked: false
    },
    {
        name: 'AppCalendarComponent',
        type: 'radio',
        label: 'app 日历',
        value: 'AppCalendarComponent',
        checked: false
    },
    {
        name: 'AppCallDirectoryComponent',
        type: 'radio',
        label: 'app 通话目录',
        value: 'AppCallDirectoryComponent',
        checked: false
    },
    {
        name: 'AppCallLogComponent',
        type: 'radio',
        label: 'app 通话记录',
        value: 'AppCallLogComponent',
        checked: false
    },
    {
        name: 'AppCallNumberComponent',
        type: 'radio',
        label: 'app 拨打电话',
        value: 'AppCallNumberComponent',
        checked: false
    },
    {
        name: 'AppCameraComponent',
        type: 'radio',
        label: 'app 相机',
        value: 'AppCameraComponent',
        checked: false
    },
    {
        name: 'AppCardIoComponent',
        type: 'radio',
        label: 'app 卡扫描',
        value: 'AppCardIoComponent',
        checked: false
    },
    {
        name: 'AppChooserComponent',
        type: 'radio',
        label: 'app 文件选择',
        value: 'AppChooserComponent',
        checked: false
    },
    {
        name: 'AppFingerprintAioComponent',
        type: 'radio',
        label: 'app 指纹解锁',
        value: 'AppFingerprintAioComponent',
        checked: false
    },
    {
        name: 'AppFirebaseAnalyticsComponent',
        type: 'radio',
        label: 'app Firebase分析',
        value: 'AppFirebaseAnalyticsComponent',
        checked: false
    },
    // AppGeolocationComponent
    {
        name: 'AppGeolocationComponent',
        type: 'radio',
        label: 'app 获取GPS',
        value: 'AppGeolocationComponent',
        checked: false
    },
];
