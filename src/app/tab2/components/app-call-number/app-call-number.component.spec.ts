import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCallNumberComponent } from './app-call-number.component';

describe('AppCallNumberComponent', () => {
    let component: AppCallNumberComponent;
    let fixture: ComponentFixture<AppCallNumberComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppCallNumberComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppCallNumberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
