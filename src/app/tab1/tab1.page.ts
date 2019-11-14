import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { choiceComponentInput } from './components';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    public asyncComponentArr: any[];
    public stateChoiceComponentInput: any;

    constructor(
        public alertController: AlertController
    ) {
        this.asyncComponentArr = [];
        this.stateChoiceComponentInput = choiceComponentInput;
    }

    async choiceComponents() {
        const alert = await this.alertController.create({
            header: 'Checkbox',
            inputs: this.stateChoiceComponentInput,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: (res: any) => {
                        this.asyncComponentArr = [];
                        if ((res instanceof Array) && res && res.length) {
                            res.forEach((item: any) => {
                                this.asyncComponentArr.push({
                                    type: item
                                });
                            });
                        } else {
                            this.asyncComponentArr.push({
                                type: res
                            });
                        }
                        this.stateChoiceComponentInput.forEach(element => {
                            if (element.value === res) {
                                element.checked = true;
                            } else {
                                element.checked = false;
                            }
                        });
                    }
                }
            ]
        });

        await alert.present();
    }

}
