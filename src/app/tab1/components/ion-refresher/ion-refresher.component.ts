import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ion-refresher',
    templateUrl: './ion-refresher.component.html',
    styleUrls: ['./ion-refresher.component.scss'],
})
export class IonRefresherComponent implements OnInit {

    public name: any[];

    constructor() {
        this.name = [
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
    }

    ngOnInit() { }

}
