import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentContainerComponent } from './dynamic-component-container.component';

describe('DynamicComponentContainerComponent', () => {
    let component: DynamicComponentContainerComponent;
    let fixture: ComponentFixture<DynamicComponentContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicComponentContainerComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicComponentContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
