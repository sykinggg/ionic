import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonBackButtonComponent } from './ion-back-button.component';

describe('IonBackButtonComponent', () => {
    let component: IonBackButtonComponent;
    let fixture: ComponentFixture<IonBackButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonBackButtonComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonBackButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
