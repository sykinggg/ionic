import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { CallLog } from '@ionic-native/call-log/ngx';

@Component({
    selector: 'app-app-call-number',
    templateUrl: './app-call-number.component.html',
    styleUrls: ['./app-call-number.component.scss'],
})
export class AppCallNumberComponent implements OnInit {

    // 通话记录
    public callLogObject: any[];

    constructor(
        public callNumber: CallNumber,
        public callLog: CallLog
    ) { }

    ngOnInit() {
        this.defaultCallLogObject();
    }

    public isCallSupported() {
        this.callNumber.isCallSupported()
            .then(res => alert(res))
            .catch(err => alert(err));
    }

    public defaultCallNumber(phoneNumber = '15193141765') {
        this.callNumber.callNumber(phoneNumber, true)
            .then(res => alert(res))
            .catch(err => alert(err));
    }

    public defaultCallLogObject() {
        const self = this;
        this.callLog.getCallLog([]).then(
            (msg) => {
                self.callLogObject = msg;
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

}
