import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonPopoverSubComponent } from './ion-popover-sub.component';

describe('IonPopoverSubComponent', () => {
    let component: IonPopoverSubComponent;
    let fixture: ComponentFixture<IonPopoverSubComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonPopoverSubComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonPopoverSubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
