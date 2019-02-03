import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3RoutingModule } from './tab3-routing.module';
import { Tab3Page } from './tab3.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab3RoutingModule,
    ],
    declarations: [Tab3Page]
})
export class Tab3PageModule { }
