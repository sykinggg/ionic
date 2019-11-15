import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSpinnerComponent } from './ion-spinner.component';

describe('IonSpinnerComponent', () => {
    let component: IonSpinnerComponent;
    let fixture: ComponentFixture<IonSpinnerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonSpinnerComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
