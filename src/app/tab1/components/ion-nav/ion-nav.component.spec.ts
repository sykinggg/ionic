import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonNavComponent } from './ion-nav.component';

describe('IonNavComponent', () => {
    let component: IonNavComponent;
    let fixture: ComponentFixture<IonNavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonNavComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
