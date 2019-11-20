import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-ion-toast',
    templateUrl: './ion-toast.component.html',
    styleUrls: ['./ion-toast.component.scss'],
})
export class IonToastComponent implements OnInit {

    constructor(public toastController: ToastController) { }

    ngOnInit() { }

    public handleButtonClick() {
        this.toastController.create({
            color: 'dark',
            duration: 2000,
            message: 'Paired successfully',
            showCloseButton: true
        }).then(toast => {
            toast.present();
        });
    }

}
