export default IntegralUINumeric;
declare class IntegralUINumeric extends IntegralUIBaseValue {
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
        accelerator: {
            type: NumberConstructor;
            reflect: boolean;
        };
        decimals: {
            type: NumberConstructor;
            reflect: boolean;
        };
        displayMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "InBound" | "LeftRight" | "UpDown";
            };
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
        mouseWheelSpeed: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "VerySlow" | "Slow" | "Normal" | "Fast" | "VeryFast";
            };
            reflect: boolean;
        };
        step: {
            type: NumberConstructor;
            reflect: boolean;
        };
    };
    _ctrlMaxValue: any;
    _ctrlMinValue: any;
    _currentStep: any;
    _currentAccelerator: any;
    _currentDecimals: any;
    _startValue: any;
    _valueTimer: null | undefined;
    _valueCount: number | undefined;
    _isChangeActive: boolean | undefined;
    _stopTimer: boolean | undefined;
    _contentSize: {
        width: number;
        height: number;
    } | undefined;
    _ctrlValueWidth: number | undefined;
    _currentButtonAlign: any;
    _leftRightMarginTop: number | undefined;
    _topBotomMarginLeft: number | undefined;
    _currentDisplayMode: any;
    _currentMouseWheelSpeed: any;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _windowMouseUp(event: any): void;
    set accelerator(arg: any);
    get accelerator(): any;
    set buttonAlign(arg: any);
    get buttonAlign(): any;
    set decimals(arg: any);
    get decimals(): any;
    set displayMode(arg: any);
    get displayMode(): any;
    set max(arg: any);
    get max(): any;
    set min(arg: any);
    get min(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set step(arg: any);
    get step(): any;
    set value(arg: number);
    get value(): number;
    updateLayout(optimal?: any): Promise<any>;
    _changeValueTimerElapsed(flag: any): void;
    _changeValue(flag: any): void;
    decreaseValue(): void;
    increaseValue(): void;
    _inputChange(e: any): void;
    _startChange(flag: any): void;
    _stopChange(): void;
    _ctrlMouseWheel(e: any): void;
    _onMouseDown(e: any, flag: any): void;
    _onMouseUp(e: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _valueElem: Element | null | undefined;
    _inboundButtonsElem: Element | null | undefined;
    _leftrightButtonsElem: Element | null | undefined;
    _upDownButtonsElem: Element | null | undefined;
    _upDownButtonsChildElem: Element | null | undefined;
}
import IntegralUIBaseValue from "./integralui.base.value.js";
