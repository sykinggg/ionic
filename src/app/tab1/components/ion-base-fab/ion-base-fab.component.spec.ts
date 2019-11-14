import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonBaseFabComponent } from './ion-base-fab.component';

describe('IonBaseFabComponent', () => {
    let component: IonBaseFabComponent;
    let fixture: ComponentFixture<IonBaseFabComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonBaseFabComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonBaseFabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
