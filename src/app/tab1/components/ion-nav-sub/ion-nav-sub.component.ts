import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-ion-nav-sub',
    templateUrl: './ion-nav-sub.component.html',
    styleUrls: ['./ion-nav-sub.component.scss'],
})
export class IonNavSubComponent implements OnInit {

    @Input() tech;
    @Input() nav;

    constructor() { }

    ngOnInit() { }

    public closeItem() {
        const sub = document.querySelector('app-ion-nav-sub');
        if (this.nav) {
            this.nav.removeChild(sub);
        }
    }

}
