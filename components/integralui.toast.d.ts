export default IntegralUIToast;
declare class IntegralUIToast extends IntegralUIBase {
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
        contentTemplate: {
            type: ObjectConstructor;
            attribute: string;
        };
        dataFields: {
            type: ObjectConstructor;
            attribute: string;
        };
        duration: {
            type: NumberConstructor;
            reflect: boolean;
        };
        position: {
            type: ObjectConstructor;
        };
    };
    setParent(cmp: any): void;
    set contentTemplate(arg: any);
    get contentTemplate(): any;
    set dataFields(arg: any);
    set duration(arg: any);
    get duration(): any;
    set position(arg: {
        top: number;
        left: number;
    } | undefined);
    get position(): {
        top: number;
        left: number;
    } | undefined;
    hide(): void;
    firstUpdated(props: any): void;
    render(): TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
import { T as TemplateResult } from "../external/lit-element.js";
