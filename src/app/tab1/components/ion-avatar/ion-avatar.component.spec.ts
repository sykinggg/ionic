import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonAvatarComponent } from './ion-avatar.component';

describe('IonAvatarComponent', () => {
    let component: IonAvatarComponent;
    let fixture: ComponentFixture<IonAvatarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonAvatarComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonAvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
