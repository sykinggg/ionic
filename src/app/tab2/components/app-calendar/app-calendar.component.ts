import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
    selector: 'app-app-calendar',
    templateUrl: './app-calendar.component.html',
    styleUrls: ['./app-calendar.component.scss'],
})
export class AppCalendarComponent implements OnInit {

    // 检查是否有权从日历中读取/写入日历
    public hasReadWritePermission: boolean;

    // 检查是否具有阅读权限
    public hasReadPermission: boolean;

    // 检查我们是否具有写权限
    public hasWritePermission: boolean;

    // 返回默认的日历选项
    public getCalendarOptions: any;

    constructor(
        public calendar: Calendar
    ) { }

    ngOnInit() {
        // this.defaultCalendar();
        this.defaultCalendarContent();
    }

    public async defaultCalendarContent() {
        // tslint:disable-next-line:forin
        // for (const i in this.calendar) {
        //     alert('name: ' + i + ' desc: ' + this.calendar[i]);
        // }

        this.hasReadWritePermission = await this.calendar.hasReadWritePermission();
        this.hasReadPermission = await this.calendar.hasReadPermission();
        this.hasWritePermission = await this.calendar.hasWritePermission();
    }

    /**
     * 要求写权限
     */
    public requestWritePermission() {
        this.calendar.requestWritePermission().then(
            async (msg) => { alert(msg); this.hasWritePermission = await this.calendar.hasWritePermission(); },
            (err) => { alert(err); }
        );
    }

    /**
     * 要求读取权限
     */
    public requestReadPermission() {
        this.calendar.requestReadPermission().then(
            async (msg) => { alert(msg); this.hasReadPermission = await this.calendar.hasReadPermission(); },
            (err) => { alert(err); }
        );
    }

    /**
     * 请求读/写权限
     */
    public requestReadWritePermission() {
        this.calendar.requestReadWritePermission().then(
            async (msg) => { alert(msg); this.hasReadWritePermission = await this.calendar.hasReadWritePermission(); },
            (err) => { alert(err); }
        );
    }

    /**
     * 创建一个日历。（仅限iOS）
     */
    public createCalendar() {
        this.calendar.createCalendar('MyCalendar').then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

    /**
     * 删除日历。（仅限iOS）
     */
    public deleteCalendar() {
        this.calendar.deleteCalendar('MyCalendar').then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

    /**
     * 返回默认的日历选项
     */
    public async defaultGetCalendarOptions() {
        this.getCalendarOptions = await this.calendar.getCalendarOptions();
    }

    /**
     * 在指定的日期打开日历
     */
    public openCalendar() {
        this.calendar.openCalendar(new Date()).then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

    public defaultCalendar() {
        this.calendar.createCalendar('MyCalendar').then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

}
