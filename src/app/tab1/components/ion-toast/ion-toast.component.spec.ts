import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonToastComponent } from './ion-toast.component';

describe('IonToastComponent', () => {
    let component: IonToastComponent;
    let fixture: ComponentFixture<IonToastComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonToastComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
