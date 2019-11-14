import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ion-backdrop',
    templateUrl: './ion-backdrop.component.html',
    styleUrls: ['./ion-backdrop.component.scss'],
})
export class IonBackdropComponent implements OnInit {

    public enableBackdropDismiss: boolean;
    public showBackdrop: boolean;
    public shouldPropagate: boolean;

    constructor() {
        this.enableBackdropDismiss = false;
        this.shouldPropagate = false;
        this.showBackdrop = false;
    }

    ngOnInit() { }

}
