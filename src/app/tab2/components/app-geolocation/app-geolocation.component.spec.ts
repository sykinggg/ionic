import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGeolocationComponent } from './app-geolocation.component';

describe('AppGeolocationComponent', () => {
    let component: AppGeolocationComponent;
    let fixture: ComponentFixture<AppGeolocationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppGeolocationComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppGeolocationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
