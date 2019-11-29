import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRateComponent } from './app-rate.component';

describe('AppRateComponent', () => {
    let component: AppRateComponent;
    let fixture: ComponentFixture<AppRateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppRateComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppRateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
