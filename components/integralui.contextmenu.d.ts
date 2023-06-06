export class IntegralUIContextMenuWindow extends LitElement {
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
        dataFields: {
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
    set customStyle(arg: any[]);
    get customStyle(): any[];
    set dataFields(arg: {});
    get dataFields(): {};
    set options(arg: {});
    get options(): {};
    set resourcePath(arg: string);
    get resourcePath(): string;
    set theme(arg: string);
    get theme(): string;
    invokeCtrlMethod(name: any, value: any): void;
    open(e: any, mode: any, pos: any, appSize: any, elemPageRect: any): void;
    firstUpdated(props: any): void;
    refresh(): void;
    render(): TemplateResult;
}
export default IntegralUIContextMenu;
import { L as LitElement } from "../external/lit-element.js";
import IntegralUICommonService from "../services/integralui.common.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
declare class IntegralUIContextMenu extends IntegralUIBase {
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
    };
    set settings(arg: any);
    get settings(): any;
    firstUpdated(props: any): void;
    render(): TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
