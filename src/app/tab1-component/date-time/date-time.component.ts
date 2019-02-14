import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-time',
    templateUrl: './date-time.component.html',
    styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {

    private customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
    private customDayShortNames = [
        's\u00f8n',
        'man',
        'tir',
        'ons',
        'tor',
        'fre',
        'l\u00f8r'
    ];
    private customPickerOptions = {
        buttons: [{
            text: 'Save',
            handler: () => console.log('Clicked Save!')
        }, {
            text: 'Log',
            handler: () => {
                console.log('Clicked Log. Do not Dismiss.');
                return false;
            }
        }]
    };
    constructor() { }

    ngOnInit() {
    }

}
