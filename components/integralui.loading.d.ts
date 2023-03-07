export default IntegralUILoading;
declare class IntegralUILoading extends IntegralUIBaseValue {
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
        parentId: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    _currentAnimationSpeedValue: number | undefined;
    _isLoadingFinished: boolean | undefined;
    _isStartFinished: boolean | undefined;
    _currentParent: any;
    _isVisible: boolean | undefined;
    _parentRef: Element | null | undefined;
    _ctrlCurrentPos: {
        top: number;
        left: number;
    } | undefined;
    _ctrlCurrentSize: {
        width: number;
        height: number;
    } | undefined;
    _ctrlDisplay: string | undefined;
    _currentProgress: number | undefined;
    _parentPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _parentSize: {
        width: number;
        height: number;
    } | undefined;
    _progressSize: {
        width: number;
        height: number;
    } | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    set parentId(arg: any);
    get parentId(): any;
    _animationCallback(state: any, finished: any): void;
    _animationCallbackValue(state: any, finished: any): void;
    _getParent(): Element | null | undefined;
    _getParentSize(): {
        width: number;
        height: number;
    };
    _setParent(): void;
    beginLoad(): Promise<number>;
    endLoad(): void;
    updateProgress(): Promise<void>;
    _processUpdateLayout(): Promise<any>;
    _clearResizeObserver(): void;
    _resizeObserver: ResizeObserver | null | undefined;
    _updateResizeObserver(): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBaseValue from "./integralui.base.value.js";
