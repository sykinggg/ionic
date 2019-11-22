import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    public status: any;
    public addEventListenerCallback: any;
    public imageSrc: any;

    constructor() {
        this.status = 'default';
    }

    ngOnInit() {
        this.defaultAddEventListener();
    }

    public defaultAddEventListener() {
        alert(window);
        alert('defaultAddEventListener');
        function onBatteryStatus(status) {
            alert(`Level: ${status.level}, plugged: ${status.isPlugged}`);
        }
        window.addEventListener('batterystatus', onBatteryStatus, false);
    }

    public captureImage() {
        const navigator: any = window.navigator;
        let a = '';
        // tslint:disable-next-line:forin
        for (const i in navigator) {
            a += navigator[i];
        }
        alert(a);
        alert(navigator.camera);
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
