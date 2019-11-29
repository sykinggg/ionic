import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCallLogComponent } from './app-call-log.component';

describe('AppCallLogComponent', () => {
    let component: AppCallLogComponent;
    let fixture: ComponentFixture<AppCallLogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppCallLogComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppCallLogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
