export default IntegralUIBreadCrumb;
declare class IntegralUIBreadCrumb extends IntegralUIBase {
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
        items: {
            type: ArrayConstructor;
        };
        maxDropDownItems: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        selectedItem: {
            type: ObjectConstructor;
            attribute: string;
        };
    };
    set dataFields(arg: {
        allowFocus?: undefined;
        content?: undefined;
        enabled?: undefined;
        expanded?: undefined;
        hasChildren?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        items?: undefined;
        pid?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        tooltip?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        allowFocus: any;
        content: any;
        enabled: any;
        expanded: any;
        hasChildren: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        pid: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        allowFocus: string;
        content: string;
        enabled: string;
        expanded: string;
        hasChildren: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        pid: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined);
    get dataFields(): {
        allowFocus?: undefined;
        content?: undefined;
        enabled?: undefined;
        expanded?: undefined;
        hasChildren?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        items?: undefined;
        pid?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        tooltip?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        allowFocus: any;
        content: any;
        enabled: any;
        expanded: any;
        hasChildren: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        pid: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        allowFocus: string;
        content: string;
        enabled: string;
        expanded: string;
        hasChildren: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        pid: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined;
    set dropDownSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get dropDownSize(): {
        width: number;
        height: number;
    } | undefined;
    set items(arg: any);
    get items(): any;
    set maxDropDownItems(arg: any);
    get maxDropDownItems(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    exportToJSON(data: any, fields: any, spacing: any, flat: any): string;
    toggle(obj: any, value: any): void;
    getFullList(): any[] | undefined;
    getItemParent(item: any): any;
    updateFullList(): any[] | undefined;
    findItemById(id: any): any;
    findItemByText(text: any): any;
    refresh(): void;
    firstUpdated(props: any): void;
    render(): TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
