export default IntegralUIAutoComplete;
declare class IntegralUIAutoComplete extends IntegralUIBase {
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
        dataFields: {
            type: ObjectConstructor;
            attribute: string;
        };
        dropDownSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        list: {
            type: ArrayConstructor;
        };
        maxDropDownItems: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        placeHolder: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        text: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    set dataFields(arg: {
        icon?: undefined;
        id?: undefined;
        style?: undefined;
        text?: undefined;
        visible?: undefined;
        value?: undefined;
    } | {
        icon: any;
        id: any;
        style: any;
        text: any;
        visible: any;
        value: any;
    } | {
        icon: string;
        id: string;
        style: string;
        text: string;
        visible: string;
        value: string;
    } | undefined);
    get dataFields(): {
        icon?: undefined;
        id?: undefined;
        style?: undefined;
        text?: undefined;
        visible?: undefined;
        value?: undefined;
    } | {
        icon: any;
        id: any;
        style: any;
        text: any;
        visible: any;
        value: any;
    } | {
        icon: string;
        id: string;
        style: string;
        text: string;
        visible: string;
        value: string;
    } | undefined;
    set dropDownSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get dropDownSize(): {
        width: number;
        height: number;
    } | undefined;
    set list(arg: any);
    get list(): any;
    set maxDropDownItems(arg: any);
    get maxDropDownItems(): any;
    set placeHolder(arg: any);
    get placeHolder(): any;
    set text(arg: any);
    get text(): any;
    resetFilter(): void;
    filter(params: any): void;
    sort(order: any, comparer: any): void;
    firstUpdated(props: any): void;
    refresh(): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import IntegralUIFilterService from "../services/integralui.filter.service.js";
