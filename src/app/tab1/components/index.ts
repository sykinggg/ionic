import { BaseAlertComponent } from './base-alert';
import { BadgeComponent } from './badge';
import { RippleEffectComponent } from './ripple-effect';
import { IonCardComponent } from './ion-card';
import { IonCheckboxComponent } from './ion-checkbox';
import { IonChipComponent } from './ion-chip';
import { IonContentComponent } from './ion-content';
import { IonDatetimeComponent } from './ion-datetime';
import { IonFabComponent } from './ion-fab';
import { IonBaseFabComponent } from './ion-base-fab';
import { IonGridComponent } from './ion-grid';
import { IonScrollComponent } from './ion-scroll';
import { IonInputComponent } from './ion-input';
import { IonItemComponent } from './ion-item';
import { IonListComponent } from './ion-list';
import { IonAvatarComponent } from './ion-avatar';
import { IonMenuComponent } from './ion-menu';
import { IonModalComponent } from './ion-modal';
import { IonBackdropComponent } from './ion-backdrop';
import { IonNavComponent } from './ion-nav';
import { IonPopoverComponent } from './ion-popover';
import { IonLoadingComponent } from './ion-loading';
import { IonProgressBarComponent } from './ion-progress-bar';
import { IonSkeletonTextComponent } from './ion-skeleton-text';
import { IonSpinnerComponent } from './ion-spinner';
import { IonRangeComponent } from './ion-range';
import { IonRefresherComponent } from './ion-refresher';
import { IonReorderComponent } from './ion-reorder';
import { IonSearchbarComponent } from './ion-searchbar';
import { IonSegmentComponent } from './ion-segment';
import { IonSelectComponent } from './ion-select';
import { IonSlidesComponent } from './ion-slides';
import { IonTabsComponent } from './ion-tabs';
import { IonToastComponent } from './ion-toast';
import { IonToggleComponent } from './ion-toggle';
import { IonToolbarComponent } from './ion-toolbar';
import { IonBackButtonComponent } from './ion-back-button';
import { IonTextComponent } from './ion-text';

export * from './base-alert';
export * from './badge';
export * from './ripple-effect';
export * from './ion-card';
export * from './ion-checkbox';
export * from './ion-chip';
export * from './ion-content';
export * from './ion-datetime';
export * from './ion-fab';
export * from './ion-base-fab';
export * from './ion-grid';
export * from './ion-scroll';
export * from './ion-input';
export * from './ion-item';
export * from './ion-list';
export * from './ion-avatar';
export * from './ion-menu';
export * from './ion-modal';
export * from './ion-modal-sub';
export * from './ion-backdrop';
export * from './ion-nav';
export * from './ion-nav-sub';
export * from './ion-popover';
export * from './ion-popover-sub';
export * from './ion-loading';
export * from './ion-progress-bar';
export * from './ion-skeleton-text';
export * from './ion-spinner';
export * from './ion-range';
export * from './ion-refresher';
export * from './ion-reorder';
export * from './ion-searchbar';
export * from './ion-segment';
export * from './ion-select';
export * from './ion-slides';
export * from './ion-tabs';
export * from './ion-toast';
export * from './ion-toggle';
export * from './ion-toolbar';
export * from './ion-back-button';
export * from './ion-back-button-sub';
export * from './ion-text';

export const dynamicComponents = {
    BaseAlertComponent,
    BadgeComponent,
    RippleEffectComponent,
    IonCardComponent,
    IonCheckboxComponent,
    IonChipComponent,
    IonContentComponent,
    IonDatetimeComponent,
    IonFabComponent,
    IonBaseFabComponent,
    IonGridComponent,
    IonScrollComponent,
    IonInputComponent,
    IonItemComponent,
    IonListComponent,
    IonAvatarComponent,
    IonMenuComponent,
    IonModalComponent,
    IonBackdropComponent,
    IonNavComponent,
    IonPopoverComponent,
    IonLoadingComponent,
    IonProgressBarComponent,
    IonSkeletonTextComponent,
    IonSpinnerComponent,
    IonRangeComponent,
    IonRefresherComponent,
    IonReorderComponent,
    IonSearchbarComponent,
    IonSegmentComponent,
    IonSelectComponent,
    IonSlidesComponent,
    IonTabsComponent,
    IonToastComponent,
    IonToggleComponent,
    IonToolbarComponent,
    IonBackButtonComponent,
    IonTextComponent,
};

export const choiceComponentInput: any = [
    {
        name: 'BaseAlertComponent',
        type: 'radio',
        label: 'button && alert ui 组件',
        value: 'BaseAlertComponent',
        checked: false
    },
    {
        name: 'BadgeComponent',
        type: 'radio',
        label: '角标识',
        value: 'BadgeComponent',
        checked: false
    },
    {
        name: 'RippleEffectComponent',
        type: 'radio',
        label: '水波纹效果',
        value: 'RippleEffectComponent',
        checked: false
    },
    {
        name: 'IonCardComponent',
        type: 'radio',
        label: '卡片类型容器',
        value: 'IonCardComponent',
        checked: false
    },
    {
        name: 'IonCheckboxComponent',
        type: 'radio',
        label: '复选框',
        value: 'IonCheckboxComponent',
        checked: false
    },
    {
        name: 'IonChipComponent',
        type: 'radio',
        label: '提示型按钮',
        value: 'IonChipComponent',
        checked: false
    },
    {
        name: 'IonContentComponent',
        type: 'radio',
        label: '回到顶部&&回到底部',
        value: 'IonContentComponent',
        checked: false
    },
    {
        name: 'IonDatetimeComponent',
        type: 'radio',
        label: '选择时间组件',
        value: 'IonDatetimeComponent',
        checked: false
    },
    {
        name: 'IonFabComponent',
        type: 'radio',
        label: '可视区域按钮集',
        value: 'IonFabComponent',
        checked: false
    },
    {
        name: 'IonBaseFabComponent',
        type: 'radio',
        label: '可视区域按钮集基础样式',
        value: 'IonBaseFabComponent',
        checked: false
    },
    {
        name: 'IonGridComponent',
        type: 'radio',
        label: '栅格布局',
        value: 'IonGridComponent',
        checked: false
    },
    {
        name: 'IonScrollComponent',
        type: 'radio',
        label: '上划一定距离触发事件',
        value: 'IonScrollComponent',
        checked: false
    },
    {
        name: 'IonInputComponent',
        type: 'radio',
        label: 'angular form',
        value: 'IonInputComponent',
        checked: false
    },
    {
        name: 'IonItemComponent',
        type: 'radio',
        label: '列表项 样式',
        value: 'IonItemComponent',
        checked: false
    },
    {
        name: 'IonListComponent',
        type: 'radio',
        label: '列表 样式',
        value: 'IonListComponent',
        checked: false
    },
    {
        name: 'IonAvatarComponent',
        type: 'radio',
        label: '用户头像',
        value: 'IonAvatarComponent',
        checked: false
    },
    {
        name: 'IonMenuComponent',
        type: 'radio',
        label: '滑动按钮侧边栏',
        value: 'IonMenuComponent',
        checked: false
    },
    {
        name: 'IonModalComponent',
        type: 'radio',
        label: '弹出框组件',
        value: 'IonModalComponent',
        checked: false
    },
    {
        name: 'IonBackdropComponent',
        type: 'radio',
        label: '遮罩',
        value: 'IonBackdropComponent',
        checked: false
    },
    {
        name: 'IonNavComponent',
        type: 'radio',
        label: '动态加载组建',
        value: 'IonNavComponent',
        checked: false
    },
    {
        name: 'IonPopoverComponent',
        type: 'radio',
        label: '动态弹框加载组件',
        value: 'IonPopoverComponent',
        checked: false
    },
    {
        name: 'IonLoadingComponent',
        type: 'radio',
        label: '页面加载动画',
        value: 'IonLoadingComponent',
        checked: false
    },
    {
        name: 'IonProgressBarComponent',
        type: 'radio',
        label: '加载柱状示意图',
        value: 'IonProgressBarComponent',
        checked: false
    },
    {
        name: 'IonSkeletonTextComponent',
        type: 'radio',
        label: '页面预加载动画',
        value: 'IonSkeletonTextComponent',
        checked: false
    },
    {
        name: 'IonSpinnerComponent',
        type: 'radio',
        label: '列表中具体项加载动画',
        value: 'IonSpinnerComponent',
        checked: false
    },
    {
        name: 'IonRangeComponent',
        type: 'radio',
        label: '拖动数值组件',
        value: 'IonRangeComponent',
        checked: false
    },
    {
        name: 'IonRefresherComponent',
        type: 'radio',
        label: '拉出边界得操作',
        value: 'IonRefresherComponent',
        checked: false
    },
    {
        name: 'IonReorderComponent',
        type: 'radio',
        label: '列表项得拖动组件',
        value: 'IonReorderComponent',
        checked: false
    },
    {
        name: 'IonSearchbarComponent',
        type: 'radio',
        label: '搜索组件',
        value: 'IonSearchbarComponent',
        checked: false
    },
    {
        name: 'IonSegmentComponent',
        type: 'radio',
        label: 'tab选项组件',
        value: 'IonSegmentComponent',
        checked: false
    },
    {
        name: 'IonSelectComponent',
        type: 'radio',
        label: '选择组件',
        value: 'IonSelectComponent',
        checked: false
    },
    {
        name: 'IonSlidesComponent',
        type: 'radio',
        label: '全屏动画组件',
        value: 'IonSlidesComponent',
        checked: false
    },
    {
        name: 'IonTabsComponent',
        type: 'radio',
        label: '下方定位导航组件',
        value: 'IonTabsComponent',
        checked: false
    },
    {
        name: 'IonToastComponent',
        type: 'radio',
        label: '通知消息弹窗',
        value: 'IonToastComponent',
        checked: false
    },
    {
        name: 'IonToggleComponent',
        type: 'radio',
        label: '开关组件',
        value: 'IonToggleComponent',
        checked: false
    },
    {
        name: 'IonToolbarComponent',
        type: 'radio',
        label: 'ui 框架实例组件',
        value: 'IonToolbarComponent',
        checked: false
    },
    {
        name: 'IonBackButtonComponent',
        type: 'radio',
        label: 'ion back button',
        value: 'IonBackButtonComponent',
        checked: false
    },
    {
        name: 'IonTextComponent',
        type: 'radio',
        label: '文本展示默认ui',
        value: 'IonTextComponent',
        checked: true
    },
];
