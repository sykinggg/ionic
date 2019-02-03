import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    constructor(
        public actionSheetController: ActionSheetController,
        public alertController: AlertController
    ) { }

    /**
     * 底部弹出框 Action Sheet
     */
    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Albums',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: 'share',
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play (open modal)',
                    icon: 'arrow-dropright-circle',
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: 'heart',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
            ],
        });
        await actionSheet.present();
    }

    /**
     * 弹窗 Alert
     */
    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: ['OK']
        });

        await alert.present();
    }
    async presentAlertMultipleButtons() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: ['Cancel', 'Open Modal', 'Delete']
        });

        await alert.present();
    }
    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Message text!!!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        console.log('Confirm Okay');
                    }
                }
            ]
        });

        await alert.present();
    }
    async presentAlertPrompt() {
        const alert = await this.alertController.create({
            header: 'Prompt!',
            inputs: [
                {
                    name: 'name1',
                    type: 'text',
                    placeholder: 'Placeholder 1'
                },
                {
                    name: 'name2',
                    type: 'text',
                    id: 'name2-id',
                    value: 'hello',
                    placeholder: 'Placeholder 2'
                },
                {
                    name: 'name3',
                    value: 'http://ionicframework.com',
                    type: 'url',
                    placeholder: 'Favorite site ever'
                },
                // input date with min & max
                {
                    name: 'name4',
                    type: 'date',
                    min: '2017-03-01',
                    max: '2018-01-12'
                },
                // input date without min nor max
                {
                    name: 'name5',
                    type: 'date'
                },
                {
                    name: 'name6',
                    type: 'number',
                    min: -5,
                    max: 10
                },
                {
                    name: 'name7',
                    type: 'number'
                }
            ],
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
                    handler: () => {
                        console.log('Confirm Ok');
                    }
                }
            ]
        });

        await alert.present();
    }
    async presentAlertRadio() {
        const alert = await this.alertController.create({
            header: 'Radio',
            inputs: [
                {
                    name: 'radio1',
                    type: 'radio',
                    label: 'Radio 1',
                    value: 'value1',
                    checked: true
                },
                {
                    name: 'radio2',
                    type: 'radio',
                    label: 'Radio 2',
                    value: 'value2'
                },
                {
                    name: 'radio3',
                    type: 'radio',
                    label: 'Radio 3',
                    value: 'value3'
                },
                {
                    name: 'radio4',
                    type: 'radio',
                    label: 'Radio 4',
                    value: 'value4'
                },
                {
                    name: 'radio5',
                    type: 'radio',
                    label: 'Radio 5',
                    value: 'value5'
                },
                {
                    name: 'radio6',
                    type: 'radio',
                    label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
                    value: 'value6'
                }
            ],
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
                    handler: () => {
                        console.log('Confirm Ok');
                    }
                }
            ]
        });

        await alert.present();
    }
    async presentAlertCheckbox() {
        const alert = await this.alertController.create({
            header: 'Checkbox',
            inputs: [
                {
                    name: 'checkbox1',
                    type: 'checkbox',
                    label: 'Checkbox 1',
                    value: 'value1',
                    checked: true
                },

                {
                    name: 'checkbox2',
                    type: 'checkbox',
                    label: 'Checkbox 2',
                    value: 'value2'
                },

                {
                    name: 'checkbox3',
                    type: 'checkbox',
                    label: 'Checkbox 3',
                    value: 'value3'
                },

                {
                    name: 'checkbox4',
                    type: 'checkbox',
                    label: 'Checkbox 4',
                    value: 'value4'
                },

                {
                    name: 'checkbox5',
                    type: 'checkbox',
                    label: 'Checkbox 5',
                    value: 'value5'
                },

                {
                    name: 'checkbox6',
                    type: 'checkbox',
                    label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
                    value: 'value6'
                }
            ],
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
                    handler: () => {
                        console.log('Confirm Ok');
                    }
                }
            ]
        });

        await alert.present();
    }
}
