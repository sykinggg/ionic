import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
    selector: 'app-app-geolocation',
    templateUrl: './app-geolocation.component.html',
    styleUrls: ['./app-geolocation.component.scss'],
})
export class AppGeolocationComponent implements OnInit {

    public watcher: Observable<Geoposition>;

    public address: any;

    public addressObj: any;

    constructor(
        private geolocation: Geolocation,
        private http: HTTP
    ) {
        this.address = {
            province: 'a',
            city: 'b'
        };
    }

    ngOnInit() {
        this.defaultGeolocation();
        // this.defaultWatcher();
    }

    public defaultGeolocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            alert('resp: ' + resp);
            alert('resp.coords: ' + resp.coords);
            alert('resp.coords.latitude' + resp.coords.latitude);
            alert('resp.coords.longitude' + resp.coords.longitude);
            this.aMapRegeo(resp.coords.longitude, resp.coords.latitude);
        }).catch((error) => {
            alert('Error getting location' + error);
        });
    }

    public defaultWatcher() {
        this.watcher = this.geolocation.watchPosition();

        this.watcher.subscribe((resp) => {
            alert('watcher_resp: ' + resp);
            alert('watcher_resp.coords: ' + resp.coords);
            alert('watcher_resp.coords.latitude' + resp.coords.latitude);
            alert('watcher_resp.coords.longitude' + resp.coords.longitude);
            this.aMapRegeo(resp.coords.longitude, resp.coords.latitude);
        });
    }

    public aMapRegeo(longitude, latitude) {
        const self = this;
        // lng, lat
        // 'https://restapi.amap.com/v3/geocode/regeo?key=51e99a6da79f0f561514e8b50c3d6f7a&location=116.481488,39.990464';
        // ip
        // 'https://restapi.amap.com/v3/ip?parameters&key=51e99a6da79f0f561514e8b50c3d6f7';

        // tslint:disable-next-line:max-line-length
        this.http.get(`https://restapi.amap.com/v3/geocode/regeo?key=51e99a6da79f0f561514e8b50c3d6f7a&location=${longitude},${latitude}`, {}, {}).then((resp: any) => {
            const datas = JSON.parse(resp.data);
            alert('data: ' + JSON.stringify(datas));
            // alert(JSON.stringify(data));
            alert('data.regeocode: ' + JSON.stringify(datas.regeocode));
            // alert(JSON.stringify(data.regeocode));
            alert('data.regeocode.addressComponent: ' + JSON.stringify(datas.regeocode.addressComponent));
            // alert(JSON.stringify(data.regeocode.addressComponent));
            // this.addressObj = datas;
            if (datas && datas.regeocode && datas.regeocode.addressComponent) {
                self.address.province = datas.regeocode.addressComponent.province.replace(/省|市/g, '');
                if (datas.regeocode.addressComponent.city && datas.regeocode.addressComponent.city.length === 0) {
                    self.address.city = '  ' + datas.regeocode.addressComponent.province.replace(/省|市/g, '');
                } else if (typeof datas.regeocode.addressComponent.city === 'string') {
                    self.address.city = '  ' + datas.regeocode.addressComponent.city.replace(/省|市/g, '');
                }
            }
            alert(JSON.stringify(self.address));
        });
    }

}
