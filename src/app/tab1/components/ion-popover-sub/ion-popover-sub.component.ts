import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-ion-popover-sub',
    templateUrl: './ion-popover-sub.component.html',
    styleUrls: ['./ion-popover-sub.component.scss'],
})
export class IonPopoverSubComponent implements OnInit {

    constructor(public popoverController: PopoverController) { }

    ngOnInit() { }

    public dismissPopover() {
        if (this.popoverController) {
            this.popoverController.dismiss({close: false});
        }
    }

}
