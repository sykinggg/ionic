import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ion-refresher',
    templateUrl: './ion-refresher.component.html',
    styleUrls: ['./ion-refresher.component.scss'],
})
export class IonRefresherComponent implements OnInit {

    public names: any[];
    public list: any[];

    constructor() {
        this.names = [
            'Burt Bear',
            'Charlie Cheetah',
            'Donald Duck',
            'Eva Eagle',
            'Ellie Elephant',
            'Gino Giraffe',
            'Isabella Iguana',
            'Karl Kitten',
            'Lionel Lion',
            'Molly Mouse',
            'Paul Puppy',
            'Rachel Rabbit',
            'Ted Turtle'
        ];
        this.list = [];
    }

    ngOnInit() {
        this.prependMessages(5, true);
    }

    public ionRefresh(event) {
        setTimeout(() => {
            this.prependMessages(5, true);
            event.target.complete();
        }, 500);
    }

    public chooseRandomName() {
        return this.names[Math.floor(Math.random() * this.names.length)];
    }

    public prependMessages(numMessages = 1, unread) {
        this.list.forEach(item => {
            item.unread = false;
        });
        for (let i = 0; i < numMessages; i++) {
            this.list.unshift({
                chooseRandomName: this.chooseRandomName(),
                unread
            });
        }
    }

}
