import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonItemComponent } from './ion-item.component';

describe('IonItemComponent', () => {
    let component: IonItemComponent;
    let fixture: ComponentFixture<IonItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonItemComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
