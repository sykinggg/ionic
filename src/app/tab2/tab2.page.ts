import { Component, OnInit, OnDestroy } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { AlertController } from '@ionic/angular';
import { tab2ChoiceComponentInput, tab2DynamicComponents } from './components';
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

    public asyncComponentArr: any[];
    public stateChoiceComponentInput: any;
    public asyncComponentObjArr: any[];

    constructor(
        public alertController: AlertController
    ) {
        this.asyncComponentArr = [];
        this.asyncComponentObjArr = [];
        this.stateChoiceComponentInput = tab2ChoiceComponentInput;
    }

    ngOnInit(): void {
    }
    ngOnDestroy(): void {
    }

    public defaultAsyncComponentObjArr() {
        this.asyncComponentObjArr = [];
        this.asyncComponentArr.forEach(item => {
            this.asyncComponentObjArr.push({ component: tab2DynamicComponents[item.type] });
        });
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
                        this.defaultAsyncComponentObjArr();
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
