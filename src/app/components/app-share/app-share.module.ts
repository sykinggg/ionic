import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDirective } from '../dynamic';
import { DynamicComponentContainerComponent } from '../dynamic-component-container';



@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DynamicDirective,
        DynamicComponentContainerComponent
    ],
    entryComponents: [
        DynamicComponentContainerComponent
    ],
    exports: [
        DynamicDirective,
        DynamicComponentContainerComponent
    ]
})
export class AppShareModule { }
