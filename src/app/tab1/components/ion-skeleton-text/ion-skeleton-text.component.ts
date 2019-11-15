import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ion-skeleton-text',
    templateUrl: './ion-skeleton-text.component.html',
    styleUrls: ['./ion-skeleton-text.component.scss'],
})
export class IonSkeletonTextComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    public toggleSkeleton() {
        const skeletonEl = document.getElementById('skeleton'),
            skeletonStyle = window.getComputedStyle(skeletonEl),
            skeletonDisplay = skeletonStyle.getPropertyValue('display');
        const dataEl = document.getElementById('data'),
            dataStyle = window.getComputedStyle(dataEl),
            dataDisplay = dataStyle.getPropertyValue('display');
        document.getElementById('skeleton').style.display = skeletonDisplay === 'none' ? 'block' : 'none';
        document.getElementById('data').style.display = dataDisplay === 'none' ? 'block' : 'none';
    }

}
