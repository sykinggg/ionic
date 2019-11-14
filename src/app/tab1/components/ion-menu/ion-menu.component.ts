import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-ion-menu',
    templateUrl: './ion-menu.component.html',
    styleUrls: ['./ion-menu.component.scss'],
})
export class IonMenuComponent implements OnInit {

    constructor(private menu: MenuController) { }

    ngOnInit() {
        // this.openFirst();
        // this.openEnd();
        this.openCustom();
    }

    public openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }

    public openEnd() {
        this.menu.open('end');
    }

    public openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }

}
