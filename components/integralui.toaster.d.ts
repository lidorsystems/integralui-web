export default IntegralUIToaster;
declare class IntegralUIToaster extends IntegralUIBase {
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
        alignment: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "BottomCenter" | "BottomLeft" | "BottomRight" | "TopCenter" | "TopLeft" | "TopRight" | "BottomFull" | "TopFull";
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
        parentId: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        positionAdjustment: {
            type: ObjectConstructor;
            attribute: string;
        };
        toastSize: {
            type: ObjectConstructor;
        };
    };
    set alignment(arg: string);
    get alignment(): string;
    set contentTemplate(arg: any);
    get contentTemplate(): any;
    set dataFields(arg: any);
    set duration(arg: number);
    get duration(): number;
    set parentId(arg: any);
    get parentId(): any;
    set positionAdjustment(arg: {
        top: number;
        left: number;
    });
    get positionAdjustment(): {
        top: number;
        left: number;
    };
    set toastSize(arg: {
        width: number;
        height: number;
    });
    get toastSize(): {
        width: number;
        height: number;
    };
    hide(toast: any): void;
    show(toast: any): Promise<void>;
    firstUpdated(props: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
