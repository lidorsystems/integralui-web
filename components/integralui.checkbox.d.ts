export default IntegralUICheckBox;
declare class IntegralUICheckBox extends IntegralUIBaseValue {
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
        checked: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        checkState: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Unchecked" | "Indeterminate" | "Checked";
            };
            reflect: boolean;
        };
        threeState: {
            type: BooleanConstructor;
            attribute: string;
        };
    };
    _checkedValue: boolean;
    _checkStateValue: string;
    _isThreeState: boolean;
    _buttonClass: {};
    _generalClassName: string;
    _buttonClassName: string;
    _contentClassName: string;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    set checked(arg: boolean);
    get checked(): boolean;
    set checkState(arg: string);
    get checkState(): string;
    set threeState(arg: boolean);
    get threeState(): boolean;
    _changeValue(): void;
    _ctrlKeyDown(e: any): void;
    _ctrlMouseDown(e: any): void;
    _updateButtonClass(): void;
    _getButtonClass(): {};
    _getButtonStyle(value: any): any;
    _ctrlTouchStart(e: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBaseValue from "./integralui.base.value.js";
