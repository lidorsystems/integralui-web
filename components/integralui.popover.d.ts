export class IntegralUIPopOverWindow extends LitElement {
    static get properties(): {
        allowAnimation: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        colorScheme: {
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
        options: {
            type: ObjectConstructor;
        };
        resourcePath: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
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
    set allowAnimation(arg: boolean);
    get allowAnimation(): boolean;
    set colorScheme(arg: any);
    get colorScheme(): any;
    set customStyle(arg: {});
    get customStyle(): {};
    set options(arg: {});
    get options(): {};
    set resourcePath(arg: string);
    get resourcePath(): string;
    set theme(arg: string);
    get theme(): string;
    close(): void;
    open(elemPageRect: any, elemSize: any): void;
    firstUpdated(props: any): void;
    refresh(): void;
    render(): TemplateResult;
}
export default IntegralUIPopOver;
import { L as LitElement } from "../external/lit-element.js";
import IntegralUICommonService from "../services/integralui.common.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
declare class IntegralUIPopOver extends IntegralUIBase {
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
    set settings(arg: {
        activation: string;
        autoPopDelay: number;
        closeButton: boolean;
        enabled: boolean;
        header: boolean;
        initialDelay: number;
        position: string;
        showMarker: boolean;
        title: string;
    });
    get settings(): {
        activation: string;
        autoPopDelay: number;
        closeButton: boolean;
        enabled: boolean;
        header: boolean;
        initialDelay: number;
        position: string;
        showMarker: boolean;
        title: string;
    };
    set visible(arg: any);
    get visible(): any;
    close(): void;
    open(pos: any): void;
    toggle(): void;
    firstUpdated(props: any): void;
    render(): TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
