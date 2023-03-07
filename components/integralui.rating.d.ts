export default IntegralUIRating;
declare class IntegralUIRating extends IntegralUIBaseValue {
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
        division: {
            type: NumberConstructor;
            reflect: boolean;
        };
        increment: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Free" | "Partial" | "Full";
            };
            reflect: boolean;
        };
        max: {
            type: NumberConstructor;
            reflect: boolean;
        };
        stepSize: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        tabIndex: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    _ctrlMaxValue: any;
    _currentDivision: any;
    _currentStepSize: any;
    _currentIncrement: any;
    _isRatingChangeActive: boolean | undefined;
    _contentSize: {
        width: number;
        height: number;
    } | undefined;
    _ratingSize: {
        width: number;
        height: number;
    } | undefined;
    _ratingClass: {} | undefined;
    _ratingClassName: string | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _windowMouseUp(event: any): void;
    set division(arg: any);
    get division(): any;
    set increment(arg: any);
    get increment(): any;
    set max(arg: any);
    get max(): any;
    set stepSize(arg: any);
    get stepSize(): any;
    _getContentWidth(): number;
    _getRatingWidth(): number;
    _ctrlKeyDown(e: any): void;
    _processUpdateLayout(): Promise<any>;
    _ctrlMouseDown(e: any): void;
    _ctrlMouseMove(e: any): void;
    _ctrlMouseUp(e: any): void;
    _ctrlMouseWheel(e: any): void;
    _ctrlTouchEnd(e: any): void;
    _getRatingValueClass(): {} | undefined;
    _updateRatingClass(): void;
    _getRatingStyle(value: any): any;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBaseValue from "./integralui.base.value.js";
