import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-ion-content',
    templateUrl: './ion-content.component.html',
    styleUrls: ['./ion-content.component.scss'],
})
export class IonContentComponent implements OnInit, AfterViewInit {

    public arr: any;

    constructor() {
        this.arr = [];
    }

    ngOnInit() {
        for (let i = 0; i < 15; i++) {
            this.arr.push({
                num: i
            });
        }

        console.log(this.arr);
    }

    ngAfterViewInit() {
    }

    public contentDom() {
        return document.querySelector('ion-content');
    }

    public scrollToBottom() {
        // console.log(this.contentDom);
        this.contentDom().scrollToBottom(500);
    }

    public scrollToTop() {
        this.contentDom().scrollToTop(500);
    }

}
