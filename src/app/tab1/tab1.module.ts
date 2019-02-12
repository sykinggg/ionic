import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1RoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';
import { Tab1ComponentModule } from '../tab1-component/tab1-component.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab1RoutingModule,
        Tab1ComponentModule
    ],
    declarations: [Tab1Page]
})
export class Tab1PageModule { }
