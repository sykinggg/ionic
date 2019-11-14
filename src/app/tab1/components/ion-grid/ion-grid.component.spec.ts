import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonGridComponent } from './ion-grid.component';

describe('IonGridComponent', () => {
    let component: IonGridComponent;
    let fixture: ComponentFixture<IonGridComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonGridComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
