import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseValueComponent, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import * as i0 from "@angular/core";
export declare class IntegralUIProgressBar extends IntegralUIBaseValueComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    private ctrlPadding;
    protected currentOrientation: IntegralUIOrientation;
    protected contentSize: any;
    protected fadingSize: any;
    set orientation(value: IntegralUIOrientation);
    get orientation(): IntegralUIOrientation;
    orientationChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    private delayTimeout;
    protected animateProgress(): void;
    private removeDelayTimeout;
    processValueChange(): void;
    updateLayout(): void;
    getControlStyle(): any;
    getProgressStyle(): any;
    getProgressFadingStyle(): any;
    static ɵfac: i0.ɵɵFactoryDef<IntegralUIProgressBar, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<IntegralUIProgressBar, "iui-progressbar", never, { "autoUpdate": "autoUpdate"; "controlStyle": "controlStyle"; "data": "data"; "enabled": "enabled"; "name": "name"; "size": "size"; "state": "state"; "value": "value"; "orientation": "orientation"; }, { "valueChanged": "valueChanged"; "orientationChanged": "orientationChanged"; }, never, never>;
}
