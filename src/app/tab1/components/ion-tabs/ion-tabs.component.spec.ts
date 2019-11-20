import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonTabsComponent } from './ion-tabs.component';

describe('IonTabsComponent', () => {
    let component: IonTabsComponent;
    let fixture: ComponentFixture<IonTabsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonTabsComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
