import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonProgressBarComponent } from './ion-progress-bar.component';

describe('IonProgressBarComponent', () => {
    let component: IonProgressBarComponent;
    let fixture: ComponentFixture<IonProgressBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonProgressBarComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonProgressBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
