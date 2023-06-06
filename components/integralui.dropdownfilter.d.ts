export default IntegralUIDropDownFilter;
declare class IntegralUIDropDownFilter extends IntegralUIBase {
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
        calendarSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        dataFields: {
            type: ObjectConstructor;
            attribute: string;
        };
        dropDownAdjustment: {
            type: ObjectConstructor;
            attribute: string;
        };
        dropDownSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        formatOptions: {
            type: ObjectConstructor;
            attribute: string;
        };
        items: {
            type: ArrayConstructor;
        };
        maxDropDownItems: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        operation: {
            type: StringConstructor;
            reflect: boolean;
        };
        parentBounds: {
            type: ObjectConstructor;
            attribute: string;
        };
        type: {
            converter: {
                fromAttribute: (value: any) => number;
                toAttribute: (value: any) => "Date" | "Numeric" | "Boolean" | "String";
            };
            reflect: boolean;
        };
        value: {
            type: ObjectConstructor;
        };
    };
    set calendarSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get calendarSize(): {
        width: number;
        height: number;
    } | undefined;
    set dataFields(arg: {} | undefined);
    get dataFields(): {} | undefined;
    set dropDownAdjustment(arg: {
        top: number;
        left: number;
        width: number;
        height: number;
    } | undefined);
    get dropDownAdjustment(): {
        top: number;
        left: number;
        width: number;
        height: number;
    } | undefined;
    set dropDownSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get dropDownSize(): {
        width: number;
        height: number;
    } | undefined;
    set format(arg: any);
    get format(): any;
    set maxDropDownItems(arg: any);
    get maxDropDownItems(): any;
    set operation(arg: any);
    get operation(): any;
    set parentBounds(arg: any);
    get parentBounds(): any;
    set type(arg: any);
    get type(): any;
    set value(arg: {
        value: string;
        value2: string;
    } | undefined);
    get value(): {
        value: string;
        value2: string;
    } | undefined;
    refresh(): void;
    firstUpdated(props: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
