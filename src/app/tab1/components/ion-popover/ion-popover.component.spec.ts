import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonPopoverComponent } from './ion-popover.component';

describe('IonPopoverComponent', () => {
    let component: IonPopoverComponent;
    let fixture: ComponentFixture<IonPopoverComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonPopoverComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonPopoverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
