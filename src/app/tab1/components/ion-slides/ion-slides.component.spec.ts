import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSlidesComponent } from './ion-slides.component';

describe('IonSlidesComponent', () => {
    let component: IonSlidesComponent;
    let fixture: ComponentFixture<IonSlidesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonSlidesComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonSlidesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
