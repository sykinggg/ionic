import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFingerprintAioComponent } from './app-fingerprint-aio.component';

describe('AppFingerprintAioComponent', () => {
    let component: AppFingerprintAioComponent;
    let fixture: ComponentFixture<AppFingerprintAioComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppFingerprintAioComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppFingerprintAioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
