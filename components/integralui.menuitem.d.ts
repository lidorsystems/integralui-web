export default IntegralUIMenuItem;
declare class IntegralUIMenuItem extends IntegralUIItem {
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
        icon: {
            type: StringConstructor;
            reflect: boolean;
        };
        iconUrl: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        iconSize: {
            type: ObjectConstructor;
        };
        text: {
            type: StringConstructor;
            reflect: boolean;
        };
        visible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        dataFields: {
            type: ObjectConstructor;
            attribute: string;
        };
        expanded: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        items: {
            type: ArrayConstructor;
        };
        level: {
            type: NumberConstructor;
            reflect: boolean;
        };
        orientation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
        pause: {
            type: NumberConstructor;
            reflect: boolean;
        };
        templateRef: {
            type: ObjectConstructor;
            attribute: string;
        };
    };
    set dataFields(arg: {
        enabled?: undefined;
        expanded?: undefined;
        hasChildren?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        items?: undefined;
        objects?: undefined;
        pid?: undefined;
        shortcutKey?: undefined;
        style?: undefined;
        text?: undefined;
        tooltip?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        enabled: any;
        expanded: any;
        hasChildren: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        objects: any;
        pid: any;
        shortcutKey: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        enabled: string;
        expanded: string;
        hasChildren: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        objects: string;
        pid: string;
        shortcutKey: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined);
    get dataFields(): {
        enabled?: undefined;
        expanded?: undefined;
        hasChildren?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        items?: undefined;
        objects?: undefined;
        pid?: undefined;
        shortcutKey?: undefined;
        style?: undefined;
        text?: undefined;
        tooltip?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        enabled: any;
        expanded: any;
        hasChildren: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        objects: any;
        pid: any;
        shortcutKey: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        enabled: string;
        expanded: string;
        hasChildren: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        objects: string;
        pid: string;
        shortcutKey: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined;
    set expanded(arg: any);
    get expanded(): any;
    set items(arg: any);
    get items(): any;
    set level(arg: any);
    get level(): any;
    set orientation(arg: any);
    get orientation(): any;
    set pause(arg: any);
    get pause(): any;
    set templateRef(arg: any);
    get templateRef(): any;
    collapse(): void;
    expand(): void;
    toggle(): void;
    setOffset(value: any): void;
}
import IntegralUIItem from "./integralui.item.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
