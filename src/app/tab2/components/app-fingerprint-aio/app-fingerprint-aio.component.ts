import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
    selector: 'app-app-fingerprint-aio',
    templateUrl: './app-fingerprint-aio.component.html',
    styleUrls: ['./app-fingerprint-aio.component.scss'],
})
export class AppFingerprintAioComponent implements OnInit {

    constructor(
        private fingerprintAIO: FingerprintAIO
    ) { }

    ngOnInit() { }

    public defaultFingerprintAIO() {
        this.fingerprintAIO.show({
            // clientId: 'Fingerprint-Demo', // Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
            // clientSecret: 'o7aoOMYUbyxaD23oFAnJ', // Necessary for Android encrpytion of keys. Use random secret key.
            disableBackup: true,  // Only for Android(optional)
            // localizedFallbackTitle: 'Use Pin', // Only for iOS
            // localizedReason: 'Please authenticate' // Only for iOS
        })
            .then((result: any) => alert(result))
            .catch((error: any) => alert(error));
    }

}
