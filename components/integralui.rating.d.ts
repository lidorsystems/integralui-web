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
        value: {
            type: any;
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
    set division(arg: any);
    get division(): any;
    set increment(arg: any);
    get increment(): any;
    set max(arg: any);
    get max(): any;
    set stepSize(arg: any);
    get stepSize(): any;
    firstUpdated(props: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBaseValue from "./integralui.base.value.js";
