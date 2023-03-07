export default IntegralUISlider;
declare class IntegralUISlider extends IntegralUIBaseValue {
    static get properties(): {
        allowAnimation: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowFocus: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowUpdate: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        colorScheme: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Dark" | "Light";
            };
            reflect: boolean;
        };
        customStyle: {
            type: ObjectConstructor;
            attribute: string;
        };
        data: {
            type: ObjectConstructor;
        };
        enabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        name: {
            type: StringConstructor;
            reflect: boolean;
        };
        readOnly: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        resourcePath: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        size: {
            type: ObjectConstructor;
        };
        state: {
            type: NumberConstructor;
            reflect: boolean;
        };
        theme: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Office";
            };
            reflect: boolean;
        };
        value: {
            type: NumberConstructor;
            reflect: boolean;
        };
        max: {
            type: NumberConstructor;
            reflect: boolean;
        };
        min: {
            type: NumberConstructor;
            reflect: boolean;
        };
        orientation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
    };
    _ctrlMaxValue: any;
    _ctrlMinValue: any;
    _isSliderChangeActive: boolean | undefined;
    _currentOrientation: any;
    _contentSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _handleSize: {
        width: number;
        height: number;
    } | {
        width: any;
        height: any;
    } | undefined;
    _sliderSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _sliderPos: number | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _sliderBackgroundClass: {} | undefined;
    _sliderButtonClass: {} | undefined;
    _sliderBackgroundClassName: string | undefined;
    _sliderButtonClassName: string | undefined;
    _resizeObserver: ResizeObserver | null | undefined;
    _windowMouseMove(e: any): void;
    _windowMouseUp(e: any): void;
    set max(arg: any);
    get max(): any;
    set min(arg: any);
    get min(): any;
    set orientation(arg: any);
    get orientation(): any;
    set value(arg: number);
    get value(): number;
    _getContentWidth(): number;
    _getSliderWidth(): number;
    _ctrlKeyDown(e: any): void;
    _calcLayout(): void;
    _ctrlMouseEnter(e: any): void;
    _animationState: string | undefined;
    _ctrlMouseLeave(e: any): void;
    _ctrlMouseDown(e: any): void;
    _ctrlMouseMove(e: any): void;
    _ctrlMouseUp(e: any): void;
    _ctrlMouseWheel(e: any): void;
    _ctrlTouchEnd(e: any): void;
    _getSliderBackStyle(): {
        position: string;
    };
    _getSliderBackValueStyle(): {
        position: string;
    };
    _getSliderValueStyle(): {
        position: string;
    };
    _getSliderBackgroundClass(): {} | undefined;
    _updateSliderBackgroundClass(): void;
    _getSliderButtonClass(): {} | undefined;
    _updateSliderButtonClass(): void;
    _getSliderBackgroundStyle(value: any): any;
    _getSliderButtonStyle(value: any): any;
    _getSliderStyle(value: any): any;
    render(): import("../external/lit-element.js").TemplateResult;
    _handleElem: Element | null | undefined;
}
import IntegralUIBaseValue from "./integralui.base.value.js";
