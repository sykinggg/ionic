import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ion-list',
    templateUrl: './ion-list.component.html',
    styleUrls: ['./ion-list.component.scss'],
})
export class IonListComponent implements OnInit {

    public items: any[] = [];
    public images: any[] = [];
    public rotateImg = 0;
    // tslint:disable-next-line:max-line-length
    public lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    constructor() {
        this.images = [
            'bandit',
            'batmobile',
            'blues-brothers',
            'bueller',
            'delorean',
            'eleanor',
            'general-lee',
            'ghostbusters',
            'knight-rider',
            'mirth-mobile'
        ];
    }

    public defaultItems() {
        for (let i = 0; i < 1000; i++) {
            this.items.push({
                name: i + ' - ' + this.images[this.rotateImg],
                imgSrc: this.getImgSrc(),
                avatarSrc: this.getImgSrc(),
                imgHeight: Math.floor(Math.random() * 50 + 150),
                content: this.lorem.substring(0, Math.random() * (this.lorem.length - 100) + 100)
            });

            this.rotateImg++;
            if (this.rotateImg === this.images.length) {
                this.rotateImg = 0;
            }
        }
    }

    public getImgSrc() {
        const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
        this.rotateImg++;
        if (this.rotateImg === this.images.length) {
            this.rotateImg = 0;
        }
        return src;
    }
    ngOnInit() {
        this.defaultItems();
    }
}


