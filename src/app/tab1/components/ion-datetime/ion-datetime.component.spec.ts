import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonDatetimeComponent } from './ion-datetime.component';

describe('IonDatetimeComponent', () => {
    let component: IonDatetimeComponent;
    let fixture: ComponentFixture<IonDatetimeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonDatetimeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonDatetimeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
