import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DynamicDirective } from '../dynamic';
import { dynamicComponents } from 'src/app/tab1/components';

export interface IDynamicComponent {
    data: any;
}


@Component({
    selector: 'app-dynamic-component-container',
    templateUrl: './dynamic-component-container.component.html',
    styleUrls: ['./dynamic-component-container.component.scss'],
})
export class DynamicComponentContainerComponent implements OnInit {

    @Input() set asyncComponent(ads) {
        if (ads) {
            console.log(ads);
            // this.host.viewContainerRef.clear();
            if (ads.length) {
                ads.forEach(element => {
                    this.loadComponent(element);
                });
            } else if (!(ads instanceof Array)) {
                this.loadComponent(ads);
            }
        }
    }
    @Input() dynamicComponentsArr: any;
    @ViewChild(DynamicDirective, { static: true }) host: DynamicDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() { }

    loadComponent(ads) {

        console.log(ads);
        if (!this.dynamicComponentsArr || !this.dynamicComponentsArr.length) {
            this.dynamicComponentsArr = dynamicComponents;
        }
        // let trueComponent = new CreateDyamicComponent(dynamicComponents[ads.type], ads.data);
        let component: any;
        if (ads.type && typeof ads.type === 'string') {
            component = this.dynamicComponentsArr[ads.type];
        } else if (ads.component) {
            component = ads.component;
        }

        // 控制反转
        const componentFactor = this.componentFactoryResolver.resolveComponentFactory(component);

        // dom清除
        const viewContainerRef = this.host.viewContainerRef;
        viewContainerRef.clear();

        // 创建组件
        const componentRef = viewContainerRef.createComponent(componentFactor);

        // 动态赋值
        (componentRef.instance as IDynamicComponent).data = ads.data;
    }

}
