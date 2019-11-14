import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-ion-modal-sub',
    templateUrl: './ion-modal-sub.component.html',
    styleUrls: ['./ion-modal-sub.component.scss'],
})
export class IonModalSubComponent implements OnInit {

    @Input() firstName;
    @Input() lastName;
    @Input() middleInitial;

    constructor(public modalController: ModalController) { }

    ngOnInit() { }

    public dismissModal() {
        this.modalController.dismiss({
            dismiss: true
        });
    }

}
