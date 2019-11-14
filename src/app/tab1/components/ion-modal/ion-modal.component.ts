import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonModalSubComponent } from '../ion-modal-sub';

@Component({
    selector: 'app-ion-modal',
    templateUrl: './ion-modal.component.html',
    styleUrls: ['./ion-modal.component.scss'],
})
export class IonModalComponent implements OnInit, AfterViewInit {

    constructor(public modalController: ModalController) { }

    ngAfterViewInit(): void {
    }

    ngOnInit() {
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: IonModalSubComponent,
            componentProps: {
                firstName: 'Douglas',
                lastName: 'Adams',
                middleInitial: 'N'
            }
        });
        // 神他妈执行顺序 顺序固定 垃圾
        await modal.present();
        const onWillDismissData = await modal.onWillDismiss();
        console.log('onWillDismissData', onWillDismissData);
        const onDidDismissData = await modal.onDidDismiss();
        console.log('onDidDismissData', onDidDismissData);
    }

}
