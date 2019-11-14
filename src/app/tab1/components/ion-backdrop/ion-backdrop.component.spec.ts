import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonBackdropComponent } from './ion-backdrop.component';

describe('IonBackdropComponent', () => {
    let component: IonBackdropComponent;
    let fixture: ComponentFixture<IonBackdropComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonBackdropComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonBackdropComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
