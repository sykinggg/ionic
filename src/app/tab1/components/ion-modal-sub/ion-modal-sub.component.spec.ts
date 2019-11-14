import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonModalSubComponent } from './ion-modal-sub.component';

describe('IonModalSubComponent', () => {
    let component: IonModalSubComponent;
    let fixture: ComponentFixture<IonModalSubComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonModalSubComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonModalSubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
