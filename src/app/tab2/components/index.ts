import { AndroidPermissionsComponent } from './android-permissions';
import { AppRateComponent } from './app-rate';
import { AppVersionComponent } from './app-version';
import { AppBadgeComponent } from './app-badge';
import { AppCalendarComponent } from './app-calendar';
import { AppCallDirectoryComponent } from './app-call-directory';
import { AppCallLogComponent } from './app-call-log';

export * from './android-permissions';
export * from './app-rate';
export * from './app-version';
export * from './app-badge';
export * from './app-calendar';
export * from './app-call-directory';
export * from './app-call-log';

export const tab2DynamicComponents = {
    AndroidPermissionsComponent,
    AppRateComponent,
    AppVersionComponent,
    AppBadgeComponent,
    AppCalendarComponent,
    AppCallDirectoryComponent,
    AppCallLogComponent,
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
];
