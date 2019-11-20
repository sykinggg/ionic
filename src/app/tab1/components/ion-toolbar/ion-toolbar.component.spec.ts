import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonToolbarComponent } from './ion-toolbar.component';

describe('IonToolbarComponent', () => {
    let component: IonToolbarComponent;
    let fixture: ComponentFixture<IonToolbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonToolbarComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
