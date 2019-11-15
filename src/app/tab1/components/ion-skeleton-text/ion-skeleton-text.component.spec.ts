import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSkeletonTextComponent } from './ion-skeleton-text.component';

describe('IonSkeletonTextComponent', () => {
    let component: IonSkeletonTextComponent;
    let fixture: ComponentFixture<IonSkeletonTextComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IonSkeletonTextComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IonSkeletonTextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
