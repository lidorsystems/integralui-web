export default IntegralUIBase;
declare class IntegralUIBase extends LitElement {
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
    };
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    set allowAnimation(arg: any);
    get allowAnimation(): any;
    set allowFocus(arg: any);
    get allowFocus(): any;
    set allowUpdate(arg: any);
    get allowUpdate(): any;
    set colorScheme(arg: any);
    get colorScheme(): any;
    set customStyle(arg: any);
    get customStyle(): any;
    set data(arg: any);
    get data(): any;
    set enabled(arg: any);
    get enabled(): any;
    set name(arg: any);
    get name(): any;
    set readOnly(arg: any);
    get readOnly(): any;
    set resourcePath(arg: any);
    get resourcePath(): any;
    set size(arg: {
        width: number;
        height: number;
    } | undefined);
    get size(): {
        width: number;
        height: number;
    } | undefined;
    set state(arg: any);
    get state(): any;
    set tabIndex(arg: any);
    get tabIndex(): any;
    set theme(arg: any);
    get theme(): any;
    getElemRef(): any;
    getSize(flag: any): {
        width: any;
        height: any;
    };
    setFocus(obj: any): void;
    getClass(obj: any): any;
    getStyle(obj: any): any;
    refresh(obj: any): void;
    setClass(value: any, obj: any): void;
    setStyle(value: any, obj: any): void;
    resolve(type: any): void;
    shouldUpdate(props: any): boolean;
    updateLayout(optimal: any): Promise<void>;
    wait(): void;
}
export class IntegralUITComponent extends LitElement {
    firstUpdated(props: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import { L as LitElement } from "../external/lit-element.js";
import IntegralUICommonService from "../services/integralui.common.service.js";
