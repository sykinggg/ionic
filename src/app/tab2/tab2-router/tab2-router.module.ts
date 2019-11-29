import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab2Page } from '../tab2.page';
import { Tab2ShareModule } from '../tab2-share';
import { Tab2ComponentsModule } from '../tab2-components';
import { RouterModule } from '@angular/router';
import { AppShareModule } from 'src/app/components';

const RouterList = [
    {
        path: '',
        component: Tab2Page
    }
];

@NgModule({
    imports: [
        CommonModule,
        Tab2ShareModule,
        Tab2ComponentsModule,
        AppShareModule,
        RouterModule.forChild(RouterList)
    ],
    declarations: [
        Tab2Page
    ],
    entryComponents: [
        Tab2Page
    ],
    exports: [
        RouterModule,
        Tab2Page
    ]
})
export class Tab2RouterModule { }
