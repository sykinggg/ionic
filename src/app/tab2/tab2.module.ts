import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
// import { Camera } from '@ionic-native/camera/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { Tab2ShareModule } from './tab2-share';
import { Tab2RouterModule } from './tab2-router';
import { Tab2ComponentsModule } from './tab2-components';
import { AppShareModule } from '../components';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        AppShareModule,
        Tab2RouterModule,
        Tab2ShareModule,
        Tab2ComponentsModule
    ],
    declarations: [],
    providers: [
        BatteryStatus
    ]
})
export class Tab2PageModule { }
