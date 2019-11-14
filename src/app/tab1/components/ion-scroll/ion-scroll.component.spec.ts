import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonScrollComponent } from './ion-scroll.component';

describe('IonScrollComponent', () => {
    let component: IonScrollComponent;
    let fixture: ComponentFixture<IonScrollComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonScrollComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonScrollComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
