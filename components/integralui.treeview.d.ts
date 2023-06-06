export default IntegralUITreeView;
declare class IntegralUITreeView extends IntegralUIBaseList {
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
        autoExpand: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        autoSize: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        checkBoxes: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        checkMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "twostate" | "threestate";
            };
            reflect: boolean;
        };
        compactMode: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        indent: {
            type: NumberConstructor;
            reflect: boolean;
        };
        itemDisplay: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Partial" | "Full";
            };
            reflect: boolean;
        };
        showExpandBox: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    set autoExpand(arg: any);
    get autoExpand(): any;
    set autoSize(arg: any);
    get autoSize(): any;
    set checkBoxes(arg: any);
    get checkBoxes(): any;
    set checkMode(arg: any);
    get checkMode(): any;
    set compactMode(arg: any);
    get compactMode(): any;
    set indent(arg: any);
    get indent(): any;
    set itemDisplay(arg: any);
    get itemDisplay(): any;
    set showExpandBox(arg: any);
    get showExpandBox(): any;
    loadData(data: any, parent: any, fields: any, flat: any): void;
    isThereChildItems: boolean | undefined;
    collapse(item: any): void;
    expand(item: any): void;
    toggle(item: any, value: any): void;
    updateFullList(): any[];
    getItemLevel(item: any): number;
    getItemParent(item: any): any;
    isThereChildren(): boolean | undefined;
    beginLoad(item: any): void;
    render(): TemplateResult;
    firstUpdated(props: any): void;
    updated(changedProperties: any): void;
}
import IntegralUIBaseList from "./integralui.base.list.js";
import { T as TemplateResult } from "../external/lit-element.js";
