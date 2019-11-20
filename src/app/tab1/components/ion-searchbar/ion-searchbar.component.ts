import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ion-searchbar',
    templateUrl: './ion-searchbar.component.html',
    styleUrls: ['./ion-searchbar.component.scss'],
})
export class IonSearchbarComponent implements OnInit {

    public items: any[];

    constructor() { }

    ngOnInit() { }

    public defaultItems() {
        if (!this.items) {
            this.items = Array.from(document.querySelector('ion-list').children);
        }
    }

    public handleInput(event) {
        this.defaultItems();
        const query = event.target.value.toLowerCase();
        requestAnimationFrame(() => {
            this.items.forEach(item => {
                const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
                item.style.display = shouldShow ? 'block' : 'none';
            });
        });
    }

}
