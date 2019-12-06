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
            (msg) => {
                self.callLogObject = msg;

                // tslint:disable-next-line:forin
                for (const i in self.callLogObject[0]) {
                    alert('name: ' + i + ' desc: ' + self.callLogObject[0][i]);
                }
                // tslint:disable-next-line:forin
                for (const i in self.callLogObject[3]) {
                    alert('name: ' + i + ' desc: ' + self.callLogObject[0][i]);
                }
                // {
                //     date: '1575255435425',
                //     number: '15228936381',
                //     type: 2,
                //     duration: 0,
                //     new: 1,
                //     cachedName: 'XXX',
                //     cachedNumber: 2,
                //     phoneAccountId: '898602a8221602bb2165',
                //     viaNumber: '',
                //     name: 'XXX',
                //     contact: '',
                //     photo: '',
                //     thumbPhoto: '',
                // }
            },
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
