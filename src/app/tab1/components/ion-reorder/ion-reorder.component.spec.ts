import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonReorderComponent } from './ion-reorder.component';

describe('IonReorderComponent', () => {
    let component: IonReorderComponent;
    let fixture: ComponentFixture<IonReorderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonReorderComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonReorderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
