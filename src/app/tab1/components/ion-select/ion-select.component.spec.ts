import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSelectComponent } from './ion-select.component';

describe('IonSelectComponent', () => {
    let component: IonSelectComponent;
    let fixture: ComponentFixture<IonSelectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonSelectComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
