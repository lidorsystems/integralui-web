export default IntegralUIListScroller;
declare class IntegralUIListScroller extends IntegralUIBase {
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
        items: {
            type: ArrayConstructor;
        };
        itemSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        mouseWheelSpeed: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "VerySlow" | "Slow" | "Normal" | "Fast" | "VeryFast";
            };
            reflect: boolean;
        };
        selectedItem: {
            type: ObjectConstructor;
            attribute: string;
        };
        sorting: {
            converter: {
                fromAttribute: (value: any) => any;
                toAttribute: (value: any) => "None" | "Ascending" | "Descending";
            };
            reflect: boolean;
        };
    };
    _dataService: IntegralUIDataService | undefined;
    _currentList: any[] | undefined;
    _currentDataFields: {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
        iconUrl?: undefined;
    } | {
        canSelect: any;
        content: any;
        contextMenu: any;
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined;
    set dataFields(arg: {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
        iconUrl?: undefined;
    } | {
        canSelect: any;
        content: any;
        contextMenu: any;
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined);
    get dataFields(): {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
        iconUrl?: undefined;
    } | {
        canSelect: any;
        content: any;
        contextMenu: any;
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined;
    set items(arg: any);
    get items(): any;
    set itemSize(arg: any);
    get itemSize(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    set sorting(arg: any);
    get sorting(): any;
    addItem(item: any): void;
    clearItems(): void;
    insertItemAt(item: any, index: any): void;
    insertItemBefore(item: any, refItem: any): void;
    insertItemAfter(item: any, refItem: any): void;
    removeItem(item: any): boolean;
    removeItemAt(index: any): boolean;
    cloneItem(item: any): any;
    refresh(): void;
    updateTimer: any;
    suspendLayout(): void;
    resumeLayout(): void;
    updateView(): void;
    scrollPos(value: any): {
        x: number;
        y: number;
    };
    prevItem(): void;
    nextItem(): void;
    findItemById(id: any): any;
    findItemByText(text: any): any;
    sort(order: any, comparer: any): void;
    firstUpdated(props: any): void;
    render(): TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
