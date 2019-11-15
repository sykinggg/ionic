import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonRefresherComponent } from './ion-refresher.component';

describe('IonRefresherComponent', () => {
    let component: IonRefresherComponent;
    let fixture: ComponentFixture<IonRefresherComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonRefresherComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonRefresherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
