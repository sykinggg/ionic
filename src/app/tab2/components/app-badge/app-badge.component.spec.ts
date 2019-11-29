import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBadgeComponent } from './app-badge.component';

describe('AppBadgeComponent', () => {
    let component: AppBadgeComponent;
    let fixture: ComponentFixture<AppBadgeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBadgeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBadgeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
