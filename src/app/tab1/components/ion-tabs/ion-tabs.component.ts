import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ion-tabs',
    templateUrl: './ion-tabs.component.html',
    styleUrls: ['./ion-tabs.component.scss'],
})
export class IonTabsComponent implements OnInit {

    public tabSelected: string;
    constructor() {
        this.tabSelected = 'calendar';
    }

    ngOnInit() { }

}
