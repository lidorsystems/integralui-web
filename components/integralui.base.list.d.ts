export default IntegralUIBaseList;
declare class IntegralUIBaseList extends IntegralUIBase {
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
        allowDrag: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowDrop: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowFilter: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        animateInit: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        contentVisibility: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Hover" | "Select" | "Both";
            };
            reflect: boolean;
        };
        dataFields: {
            type: ObjectConstructor;
            attribute: string;
        };
        dragDropMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => any;
                toAttribute: (value: any) => "Static" | "Dynamic";
            };
            reflect: boolean;
        };
        focusedItem: {
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
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        sorting: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Ascending" | "Descending";
            };
            reflect: boolean;
        };
        virtualMode: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    set allowDrag(arg: any);
    set allowDrop(arg: any);
    set allowFilter(arg: any);
    set animateInit(arg: any);
    get animateInit(): any;
    set dataFields(arg: any);
    get dataFields(): any;
    set focusedItem(arg: any);
    get focusedItem(): any;
    set contentVisibility(arg: any);
    get contentVisibility(): any;
    set dragDropMode(arg: any);
    get dragDropMode(): any;
    set items(arg: any);
    get items(): any;
    set itemSpacing(arg: any);
    get itemSpacing(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set scrollAppearance(arg: any);
    get scrollAppearance(): any;
    set showScroll(arg: any);
    get showScroll(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    set selectionMode(arg: any);
    get selectionMode(): any;
    set sorting(arg: any);
    get sorting(): any;
    set virtualMode(arg: boolean | undefined);
    get virtualMode(): boolean | undefined;
    addItem(item: any, parent: any): Promise<any>;
    clearItems(parent: any): Promise<any>;
    insertItemAt(item: any, index: any, parent: any): Promise<any>;
    insertItemBefore(item: any, refItem: any): Promise<any>;
    insertItemAfter(item: any, refItem: any): Promise<any>;
    removeItem(item: any): Promise<any>;
    removeItemAt(index: any, parent: any): Promise<any>;
    exportToJSON(data: any, fields: any, spacing: any, flat: any): string;
    filter(params: any): void;
    cloneItem(item: any): any;
    getHoverItem(): any;
    getList(key: any, parent: any): any;
    getFullList(): any;
    updateFullList(): any;
    getTopItem(): any;
    beginLoad(item: any): void;
    endLoad(item: any): void;
    getPrevCurrentItem(item: any): any;
    getPrevItem(item: any): any;
    getPrevObj(obj: any, list: any): any;
    getNextCurrentItem(item: any): any;
    getNextItem(item: any): any;
    getNextObj(obj: any, list: any): any;
    moveItem(item: any, direction: any, target: any, position: any): Promise<void>;
    moveFocus(item: any, direction: any): any;
    suspendLayout(): void;
    resumeLayout(): Promise<void>;
    updateView(): void;
    scrollPos(value: any): {
        x: number;
        y: number;
    };
    isVerScrollVisible(): boolean;
    isHorScrollVisible(): boolean;
    isScrolling(): boolean | undefined;
    scrollTo(item: any): void;
    findItemById(id: any): any;
    findItemByText(text: any): any;
    clearSelection(): void;
    selectItems(items: any): void;
    sort(order: any, comparer: any): void;
    refresh(): void;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import IntegralUIFilterService from "../services/integralui.filter.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
