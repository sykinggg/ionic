import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IonPopoverSubComponent } from '../ion-popover-sub';

@Component({
    selector: 'app-ion-popover',
    templateUrl: './ion-popover.component.html',
    styleUrls: ['./ion-popover.component.scss'],
})
export class IonPopoverComponent implements OnInit {

    constructor(public popoverController: PopoverController) { }

    ngOnInit() { }

    async handleButtonClick(ev) {
        const popover = await this.popoverController.create({
            component: IonPopoverSubComponent,
            event: ev,
            translucent: true
        });
        popover.present();
        const onWillDismissData = await popover.onWillDismiss();
        console.log('onWillDismissData', onWillDismissData);
        const onDidDismissData = await popover.onDidDismiss();
        console.log('onDidDismissData', onDidDismissData);
    }

}
