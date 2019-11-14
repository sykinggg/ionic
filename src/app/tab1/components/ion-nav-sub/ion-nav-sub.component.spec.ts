import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonNavSubComponent } from './ion-nav-sub.component';

describe('IonNavSubComponent', () => {
    let component: IonNavSubComponent;
    let fixture: ComponentFixture<IonNavSubComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonNavSubComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonNavSubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
