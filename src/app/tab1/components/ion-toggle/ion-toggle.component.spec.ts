import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonToggleComponent } from './ion-toggle.component';

describe('IonToggleComponent', () => {
    let component: IonToggleComponent;
    let fixture: ComponentFixture<IonToggleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonToggleComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
