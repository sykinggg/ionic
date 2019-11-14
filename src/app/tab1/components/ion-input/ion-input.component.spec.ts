import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonInputComponent } from './ion-input.component';

describe('IonInputComponent', () => {
    let component: IonInputComponent;
    let fixture: ComponentFixture<IonInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonInputComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
