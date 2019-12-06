import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCameraComponent } from './app-camera.component';

describe('AppCameraComponent', () => {
    let component: AppCameraComponent;
    let fixture: ComponentFixture<AppCameraComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppCameraComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppCameraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
