import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCallDirectoryComponent } from './app-call-directory.component';

describe('AppCallDirectoryComponent', () => {
    let component: AppCallDirectoryComponent;
    let fixture: ComponentFixture<AppCallDirectoryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppCallDirectoryComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppCallDirectoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
