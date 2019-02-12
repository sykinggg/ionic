import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionSheetComponent } from './action-sheet/action-sheet.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    declarations: [
        ActionSheetComponent,
        AlertComponent
    ],
    imports: [
        CommonModule
    ]
})
export class Tab1ComponentModule { }
