import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Page } from '../tab1.page';
import { RouterModule } from '@angular/router';
import { Tab1ShareModule } from '../tab1-share';
import { Tab1ComponentsModule } from '../tab1-components';

const RouterList = [
    {
        path: '',
        component: Tab1Page
    }
];

@NgModule({
    imports: [
        CommonModule,
        Tab1ShareModule,
        Tab1ComponentsModule,
        RouterModule.forChild(RouterList)
    ],
    declarations: [
        Tab1Page
    ],
    entryComponents: [
        Tab1Page
    ],
    exports: [
        RouterModule,
        Tab1Page
    ]
})
export class Tab1RouterModule { }
