import { Component, OnInit } from '@angular/core';
import { CardIO } from '@ionic-native/card-io/ngx';

@Component({
    selector: 'app-app-card-io',
    templateUrl: './app-card-io.component.html',
    styleUrls: ['./app-card-io.component.scss'],
})
export class AppCardIoComponent implements OnInit {

    constructor(
        private cardIO: CardIO,
    ) { }

    ngOnInit() { }

    public canScan() {
        // this.cardIO.canScan()
        //     .then(
        //         (res: boolean) => {
        //             alert(res);
        //             if (res) {
        //                 const options = {
        //                     requireExpiry: true,


        //                     requireCVV: false,
        //                     requirePostalCode: false
        //                 };
        //                 this.cardIO.scan(options);
        //             }
        //         },
        //         (err) => {
        //             alert(err);
        //         }
        //     );
    }

}
