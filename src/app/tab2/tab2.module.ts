import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2RoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab2RoutingModule,
    ],
    declarations: [
        Tab2Page
    ]
})
export class Tab2PageModule { }
