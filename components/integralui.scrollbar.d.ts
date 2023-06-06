export default IntegralUIScrollBar;
declare class IntegralUIScrollBar extends IntegralUIBase {
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
        appearance: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Static" | "Dynamic";
            };
            reflect: boolean;
        };
        height: {
            type: NumberConstructor;
        };
        largeChange: {
            type: NumberConstructor;
            attribute: string;
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
        position: {
            type: ObjectConstructor;
        };
        value: {
            type: any;
            reflect: boolean;
        };
        width: {
            type: NumberConstructor;
        };
    };
    set appearance(arg: any);
    get appearance(): any;
    set visible(arg: any);
    get visible(): any;
    set height(arg: any);
    set largeChange(arg: any);
    set max(arg: any);
    get max(): any;
    set min(arg: any);
    get min(): any;
    set orientation(arg: any);
    get orientation(): any;
    set position(arg: any);
    set value(arg: any);
    get value(): any;
    set width(arg: any);
    prevPos: {
        x: any;
        y: any;
    } | undefined;
    isVertical(): boolean;
    refresh(): void;
    firstUpdated(props: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
    updated(changedProperties: any): void;
}
import IntegralUIBase from "./integralui.base.js";
