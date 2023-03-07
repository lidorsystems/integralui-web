export default IntegralUIProgressBar;
declare class IntegralUIProgressBar extends IntegralUIBaseValue {
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
        labelAlignment: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Right" | "Left" | "Inline" | "BottomCenter" | "BottomLeft" | "BottomRight" | "MiddleCenter" | "MiddleLeft" | "MiddleRight" | "TopCenter" | "TopLeft" | "TopRight";
            };
            reflect: boolean;
        };
        orientation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
        showLabel: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    _displayValue: number | undefined;
    _previousValue: any;
    _ctrlPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _currentLabelAlignment: any;
    _currentOrientation: any;
    _contentSize: {
        width: number;
        height: number;
    } | undefined;
    _fadingSize: {
        width: number;
        height: number;
    } | undefined;
    _isLabelVisible: any;
    _labelPos: {
        top: number;
        left: number;
    } | undefined;
    _labelSize: {
        width: number;
        height: number;
    } | {
        width: any;
        height: any;
    } | undefined;
    _trackPos: {
        top: number;
        left: number;
    } | undefined;
    _trackSize: {
        width: number;
        height: number;
    } | {
        width: any;
        height: any;
    } | undefined;
    _labelElemRef: Element | null | undefined;
    _trackElemRef: Element | null | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _contentInterval: any;
    _delayTimeout: any;
    _fadingInterval: any;
    set labelAlignment(arg: any);
    get labelAlignment(): any;
    set orientation(arg: any);
    get orientation(): any;
    set showLabel(arg: any);
    get showLabel(): any;
    _updateLabelPos(): void;
    _animateProgress(): void;
    _removeContentInterval(): void;
    _removeDelayTimeout(): void;
    _removeFadingInterval(): void;
    _processUpdateLayout(): Promise<any>;
    _getProgressStyle(): {
        'z-index': number;
    };
    _getProgressFadingStyle(): {
        left: number;
        opacity: string;
        position: string;
        top: number;
        'z-index': number;
    };
    _getTrackStyle(): {
        top: string;
        left: string;
    };
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBaseValue from "./integralui.base.value.js";
