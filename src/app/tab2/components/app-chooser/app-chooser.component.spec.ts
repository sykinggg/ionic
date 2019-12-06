import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChooserComponent } from './app-chooser.component';

describe('AppChooserComponent', () => {
    let component: AppChooserComponent;
    let fixture: ComponentFixture<AppChooserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppChooserComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppChooserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
