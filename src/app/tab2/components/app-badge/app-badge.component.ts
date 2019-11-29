import { Component, OnInit } from '@angular/core';
import { Badge } from '@ionic-native/badge/ngx';

@Component({
    selector: 'app-app-badge',
    templateUrl: './app-badge.component.html',
    styleUrls: ['./app-badge.component.scss'],
})
export class AppBadgeComponent implements OnInit {

    public badgeSetInput: number;
    public badgeIncreaseInput: number;

    constructor(private badge: Badge) {
        this.badgeSetInput = 10;
        this.badgeIncreaseInput = 1;
    }

    ngOnInit() {
        this.defaultBadge();
    }

    public defaultBadge() {
        // tslint:disable-next-line:forin
        for (const i in this.badge) {
            alert('name: ' + i + ' desc: ' + this.badge[i]);
        }
    }

    public badgeSet() {
        this.badge.set(this.badgeSetInput);
    }

    public badgeIncrease() {
        this.badge.increase(this.badgeIncreaseInput);
    }

    public badgeClear() {
        this.badge.clear();
    }

}
