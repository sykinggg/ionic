import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFirebaseAnalyticsComponent } from './app-firebase-analytics.component';

describe('AppFirebaseAnalyticsComponent', () => {
    let component: AppFirebaseAnalyticsComponent;
    let fixture: ComponentFixture<AppFirebaseAnalyticsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppFirebaseAnalyticsComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppFirebaseAnalyticsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
