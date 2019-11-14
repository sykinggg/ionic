import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleEffectComponent } from './ripple-effect.component';

describe('RippleEffectComponent', () => {
    let component: RippleEffectComponent;
    let fixture: ComponentFixture<RippleEffectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RippleEffectComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RippleEffectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
