import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ion-reorder',
    templateUrl: './ion-reorder.component.html',
    styleUrls: ['./ion-reorder.component.scss'],
})
export class IonReorderComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    public toggleReorder() {
        const reorderGroup: any = document.getElementById('reorder');
        reorderGroup.disabled = !reorderGroup.disabled;
    }

    public ionItemReorder(event) {
        event.target.complete(true);
    }

}
