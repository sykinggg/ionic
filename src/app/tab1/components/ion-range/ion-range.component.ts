import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ion-range',
    templateUrl: './ion-range.component.html',
    styleUrls: ['./ion-range.component.scss'],
})
export class IonRangeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.defaultDualRange();
    }

    public defaultDualRange() {
        const dualRange: any = document.querySelector('#dual-range');
        dualRange.value = { lower: 33, upper: 60 };
    }

    public ionBlurRange(event) {
        console.log('ionBlurRange', event.target.value);
    }

    public ionChangeRange(event) {
        console.log('ionChangeRange', event.target.value);
    }

    public ionFocusRange(event) {
        console.log('ionFocusRange', event.target.value);
    }

}
