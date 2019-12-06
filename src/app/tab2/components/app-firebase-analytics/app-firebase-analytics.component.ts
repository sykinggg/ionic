import { Component, OnInit } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';


@Component({
    selector: 'app-app-firebase-analytics',
    templateUrl: './app-firebase-analytics.component.html',
    styleUrls: ['./app-firebase-analytics.component.scss'],
})
export class AppFirebaseAnalyticsComponent implements OnInit {

    constructor(private firebaseAnalytics: FirebaseAnalytics) { }

    ngOnInit() { }

    public defaultLogEvent() {
        this.firebaseAnalytics.logEvent('page_view', { page: 'dashboard' })
            .then((res: any) => alert(res))
            .catch((error: any) => alert(error));
    }

}
