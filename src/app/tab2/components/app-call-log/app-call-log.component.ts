import { Component, OnInit } from '@angular/core';
import { CallLog } from '@ionic-native/call-log/ngx';

@Component({
    selector: 'app-app-call-log',
    templateUrl: './app-call-log.component.html',
    styleUrls: ['./app-call-log.component.scss'],
})
export class AppCallLogComponent implements OnInit {

    // 通话记录
    public callLogObject: any[];

    // 通话记录过滤条件
    public callFilter: any;

    // 检查权限
    public hasReadPermission: boolean;


    constructor(
        public callLog: CallLog
    ) {
        this.callLogObject = [];
    }

    ngOnInit() { }

    /**
     * 该函数返回通话记录
     */
    public getCallLog() {
        const self = this;
        this.callLog.getCallLog(this.callFilter).then(
            (msg) => { alert(msg); self.callLogObject = msg; },
            (err) => { alert(err); }
        );
    }

    /**
     * 检查权限
     */
    public async defaultHasReadPermission() {
        const self = this;
        this.callLog.hasReadPermission().then(
            (msg) => { alert(msg); self.hasReadPermission = msg; },
            (err) => { alert(err); }
        );
    }

    /**
     * 请求权限
     */
    public requestReadPermission() {
        this.callLog.requestReadPermission().then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

}
