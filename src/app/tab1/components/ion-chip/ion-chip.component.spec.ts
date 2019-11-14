import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonChipComponent } from './ion-chip.component';

describe('IonChipComponent', () => {
    let component: IonChipComponent;
    let fixture: ComponentFixture<IonChipComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonChipComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonChipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
