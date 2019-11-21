import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-ion-scroll',
    templateUrl: './ion-scroll.component.html',
    styleUrls: ['./ion-scroll.component.scss'],
})
export class IonScrollComponent implements OnInit {
    @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

    public isBottomLoadData: boolean;

    constructor() {
        this.isBottomLoadData = true;
    }

    public topLoadData(event) {
        setTimeout(() => {
            console.log('top Done');
            event.target.complete();
        }, 500);
    }

    public bottomLoadData(event) {
        setTimeout(() => {
            console.log('bottom Done');
            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            // if (data.length === 1000) {
            //     event.target.disabled = true;
            // }
        }, 500);
    }

    public toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }

    ngOnInit() {

    }

}
