import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-ion-loading',
    templateUrl: './ion-loading.component.html',
    styleUrls: ['./ion-loading.component.scss'],
})
export class IonLoadingComponent implements OnInit {

    constructor(public loadingController: LoadingController) { }

    ngOnInit() { }

    public handleButtonClick() {
        this.loadingController.create({
            message: 'Please wait...',
            duration: 3000
        }).then(loading => loading.present());
    }

}
