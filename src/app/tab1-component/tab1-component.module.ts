import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetComponent } from './action-sheet/action-sheet.component';
import { AlertComponent } from './alert/alert.component';
import { IonicModule } from '@ionic/angular';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipComponent } from './chip/chip.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { FloatActionButtonComponent } from './float-action-button/float-action-button.component';
import { GridComponent } from './grid/grid.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        ActionSheetComponent,
        AlertComponent,
        BadgeComponent,
        ButtonComponent,
        CheckboxComponent,
        ChipComponent,
        DateTimeComponent,
        FloatActionButtonComponent,
        GridComponent,
        InfiniteScrollComponent,
        InputTextareaComponent
    ],
    exports: [
        ActionSheetComponent,
        AlertComponent,
        BadgeComponent,
        ButtonComponent,
        CheckboxComponent,
        ChipComponent,
        DateTimeComponent,
        FloatActionButtonComponent,
        GridComponent,
        InfiniteScrollComponent,
        InputTextareaComponent
    ]
})
export class Tab1ComponentModule { }
