import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonRangeComponent } from './ion-range.component';

describe('IonRangeComponent', () => {
    let component: IonRangeComponent;
    let fixture: ComponentFixture<IonRangeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonRangeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonRangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
