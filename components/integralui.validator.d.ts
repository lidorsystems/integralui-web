export class IntegralUIValidatorWindow extends LitElement {
    static get properties(): {
        colorScheme: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Dark" | "Light";
            };
            reflect: boolean;
        };
        options: {
            type: ObjectConstructor;
        };
        theme: {
            converter: {
                fromAttribute: (value: any) => any;
                toAttribute: (value: any) => "None" | "Dark" | "Office";
            };
            reflect: boolean;
        };
    };
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    set colorScheme(arg: any);
    get colorScheme(): any;
    set options(arg: {});
    get options(): {};
    set theme(arg: string);
    get theme(): string;
    close(): void;
    open(elemPageRect: any, elemSize: any): void;
    updateMousePos(value: any): void;
    firstUpdated(props: any): void;
    refresh(): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
export default IntegralUIValidator;
import { L as LitElement } from "../external/lit-element.js";
import IntegralUICommonService from "../services/integralui.common.service.js";
declare class IntegralUIValidator extends IntegralUIBase {
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
        settings: {
            type: ObjectConstructor;
        };
        visible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    set settings(arg: any);
    get settings(): any;
    set visible(arg: any);
    get visible(): any;
    firstUpdated(props: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
