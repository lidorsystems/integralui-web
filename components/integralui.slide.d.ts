export default IntegralUISlide;
declare class IntegralUISlide extends IntegralUIBase {
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
        position: {
            type: ObjectConstructor;
        };
    };
    _animationInterval: any;
    _currentOpacity: any;
    _currentPosition: {
        top: number;
        left: number;
    } | undefined;
    _currentScale: any;
    _parentCtrl: any;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    setParent(cmp: any): void;
    set position(arg: {
        top: number;
        left: number;
    } | undefined);
    get position(): {
        top: number;
        left: number;
    } | undefined;
    _animate(value: any, newCount: any): Promise<any>;
    _removeAnimationInterval(): void;
    getSize(): {
        width: number;
        height: number;
    };
    _ctrlClick(): void;
    setOpacity(value: any): void;
    setScale(value: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
