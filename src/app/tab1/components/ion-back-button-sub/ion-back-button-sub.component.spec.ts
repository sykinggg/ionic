import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonBackButtonSubComponent } from './ion-back-button-sub.component';

describe('IonBackButtonSubComponent', () => {
    let component: IonBackButtonSubComponent;
    let fixture: ComponentFixture<IonBackButtonSubComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonBackButtonSubComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonBackButtonSubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
