export default IntegralUIDropDown;
declare class IntegralUIDropDown extends IntegralUIBase {
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
        animationSpeed: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "VerySlow" | "Slow" | "Normal" | "Fast" | "VeryFast";
            };
            reflect: boolean;
        };
        contentTemplate: {
            type: ObjectConstructor;
            attribute: string;
        };
        direction: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Down" | "Up";
            };
            reflect: boolean;
        };
        display: {
            type: StringConstructor;
            reflect: boolean;
        };
        opacity: {
            type: NumberConstructor;
            reflect: boolean;
        };
        position: {
            type: ObjectConstructor;
        };
        value: {
            type: NumberConstructor;
            reflect: boolean;
        };
    };
    _closeTimer: any;
    _currentAnimationSpeed: any;
    _currentDirection: any;
    _openTimer: any;
    _keepActive: boolean | undefined;
    _currentValue: any;
    _ctrlDisplay: any;
    _ctrlOpacity: any;
    _ctrlPos: any;
    _contentDisplay: string | undefined;
    _contentOpacity: number | undefined;
    _contentPos: {
        top: number;
        left: number;
    } | undefined;
    _currentContentTemplate: any;
    set animationSpeed(arg: any);
    get animationSpeed(): any;
    set contentTemplate(arg: any);
    get contentTemplate(): any;
    set direction(arg: any);
    get direction(): any;
    set display(arg: any);
    get display(): any;
    set opacity(arg: any);
    get opacity(): any;
    set position(arg: any);
    get position(): any;
    set value(arg: any);
    get value(): any;
    _onBlur(): void;
    getContent(): Element | null;
    close(): void;
    _closeDown(): void;
    _closeUp(): void;
    _getAnimationFactor(isClosing: any): number;
    open(): void;
    _openDown(): void;
    _openUp(): void;
    _removeCloseTimer(): void;
    _removeOpenTimer(): void;
    _getContentStyle(): {
        opacity: number | undefined;
        left: string;
        position: string | undefined;
        top: string;
    };
    updateLayout(optimal?: any): Promise<any>;
    render(): import("../external/lit-element.js").TemplateResult;
    _contentElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
