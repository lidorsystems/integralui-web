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
            type: any;
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
            type: any;
            reflect: boolean;
        };
    };
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
    getContent(): Element | null;
    close(): void;
    open(): void;
    firstUpdated(props: any): void;
    refresh(): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
