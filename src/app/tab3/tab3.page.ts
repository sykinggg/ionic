import { Component } from '@angular/core';
import * as SpeedtestModule from './speed.js';
// import './speedtest_worker.js';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    public speedObj: any;
    public disabled: boolean;

    constructor() { 
        this.speedObj = {
            download: '',
            upload: '',
            ping: ''
        };
        this.disabled = false;
    }

    public tab3Page() {
        if(this.disabled) return;
        this.disabled = true;
        // console.log(SpeedtestModule.Speedtest);
        const self = this;
        const s=new SpeedtestModule.Speedtest();
        s.onupdate = function (data) { // when status is received, put the values in the appropriate fields
            console.log(data);
            self.speedObj = {
                download: (data.dlStatus || 0) + ' Mbit/s',
                upload: (data.ulStatus || 0) + ' Mbit/s',
                ping: (data.pingStatus || 0) + ' ms, ' + (data.jitterStatus || 0) + ' ms jitter'
            }
            if(data.testState == 4) {
                self.disabled = true;
            }
            // document.getElementById('download').textContent = data.dlStatus + ' Mbit/s'
            // document.getElementById('upload').textContent = data.ulStatus + ' Mbit/s'
            // document.getElementById('ping').textContent = data.pingStatus + ' ms, ' + data.jitterStatus + ' ms jitter'
            // document.getElementById('ip').textContent = data.clientIp
        }
        s.start();
    }
}
