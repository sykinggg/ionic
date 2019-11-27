import { Component, OnInit, OnDestroy } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

    public status: any;
    public addEventListenerCallback: any;
    public imageSrc: any;
    public currentImage: any;
    public subscription: any;

    constructor(private batteryStatus: BatteryStatus) {
        this.status = 'default';
    }

    ngOnInit() {
        this.defaultAddEventListener();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    public defaultAddEventListener() {

        this.subscription = this.batteryStatus.onChange().subscribe(status => {
            alert('status.level: ' + status.level + 'status.isPlugged: ' + status.isPlugged);
        });
    }

    public captureImage() {
        // const options: CameraOptions = {
        //     quality: 100,
        //     destinationType: this.camera.DestinationType.DATA_URL,
        //     encodingType: this.camera.EncodingType.JPEG,
        //     mediaType: this.camera.MediaType.PICTURE
        // };
        // alert(this.camera);
        // alert(this.camera.getPicture);
        // alert(options);
        // this.camera.getPicture(options).then((imageData) => {
        //     alert(imageData);
        //     this.currentImage = 'data:image/jpeg;base64,' + imageData;
        // }, (err) => {
        //     // Handle error
        //     console.log('Camera issue:' + err);
        // });
        const navigator: any = window.navigator;
        let a = '';
        // tslint:disable-next-line:forin
        for (const i in navigator) {
            a += navigator[i];
        }
        alert(a);
        alert(navigator.camera);
        alert(this);
        // tslint:disable-next-line:no-string-literal
        alert(window['camera']);
        // tslint:disable-next-line:no-string-literal
        alert(window['camera']['getPicture']);
        if (navigator && navigator.camera) {
            navigator.camera.getPicture(
                data => { // 如果成功
                    this.imageSrc = `data:image/jpeg;base64,${data}`;
                },
                () => { // 如果失败
                    // this.$q.notify('Could not access device camera.');
                    alert('Could not access device camera.');
                },
                {
                    // 相机选项
                }
            );
        }
    }

}
