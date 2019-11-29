import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1RouterModule } from './tab1-router';
import { Tab1ShareModule } from './tab1-share';
import { Tab1ComponentsModule } from './tab1-components';
import { DynamicDirective, DynamicComponentContainerComponent } from '../components';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab1RouterModule,
        Tab1ShareModule,
        Tab1ComponentsModule
    ],
    declarations: [],
    entryComponents: [],
    exports: []
})
export class Tab1PageModule { }
