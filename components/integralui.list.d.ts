export default IntegralUIList;
declare class IntegralUIList extends IntegralUIBase {
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
        items: {
            type: ArrayConstructor;
        };
        itemSpacing: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        mouseWheelSpeed: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "VerySlow" | "Slow" | "Normal" | "Fast" | "VeryFast";
            };
            reflect: boolean;
        };
        scrollAppearance: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Static" | "Dynamic";
            };
            reflect: boolean;
        };
        selectedItem: {
            type: ObjectConstructor;
            attribute: string;
        };
        selectionMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "One" | "MultiSimple" | "MultiExtended";
            };
            reflect: boolean;
        };
        showScroll: {
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
    set dataFields(arg: {
        enabled?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        selected: any;
        style: any;
        text: any;
        value: any;
        visible: any;
    } | {
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        selected: string;
        style: string;
        text: string;
        value: string;
        visible: string;
    } | undefined);
    get dataFields(): {
        enabled?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        selected: any;
        style: any;
        text: any;
        value: any;
        visible: any;
    } | {
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        selected: string;
        style: string;
        text: string;
        value: string;
        visible: string;
    } | undefined;
    set items(arg: any);
    get items(): any;
    set itemSpacing(arg: any);
    get itemSpacing(): any;
    set maxVisibleItems(arg: any);
    get maxVisibleItems(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set scrollAppearance(arg: any);
    get scrollAppearance(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    set selectionMode(arg: any);
    get selectionMode(): any;
    set showScroll(arg: {
        horizontal: boolean;
        vertical: boolean;
    } | undefined);
    get showScroll(): {
        horizontal: boolean;
        vertical: boolean;
    } | undefined;
    set sorting(arg: any);
    get sorting(): any;
    loadData(data: any, fields: any): void;
    focus(): void;
    cloneItem(item: any): any;
    getList(key: any, parent: any): any;
    getTopItem(): any;
    suspendLayout(): void;
    resumeLayout(): void;
    shouldUpdate(props: any): boolean;
    updateView(): void;
    scrollPos(value: any): {
        x: number;
        y: number;
    };
    isVerScrollVisible(): boolean;
    isHorScrollVisible(): boolean;
    scrollTo(item: any): void;
    clearSelection(): void;
    selectItems(items: any): void;
    sort(order: any, comparer: any): void;
    firstUpdated(props: any): void;
    updated(changedProperties: any): void;
    refresh(): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
