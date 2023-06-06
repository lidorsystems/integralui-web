export default IntegralUITreeList;
declare class IntegralUITreeList extends IntegralUIBase {
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
        indent: {
            type: NumberConstructor;
            reflect: boolean;
        };
        items: {
            type: ArrayConstructor;
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
        title: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    set dataFields(arg: any);
    set indent(arg: any);
    get indent(): any;
    set items(arg: any);
    get items(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set scrollAppearance(arg: any);
    get scrollAppearance(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    set title(arg: any);
    get title(): any;
    exportToJSON(data: any, fields: any, spacing: any, flat: any): string;
    getFullList(): any[] | undefined;
    getItemParent(item: any): any;
    isGroupItem(item: any): boolean;
    isSeparator(item: any): boolean;
    isItemExpanded(item: any): boolean;
    updateFullList(): any[] | undefined;
    updateView(): void;
    scrollPos(value: any): {
        x: number;
        y: number;
    };
    isHorScrollVisible(): boolean;
    isVerScrollVisible(): boolean;
    scrollTo(item: any): void;
    findItemById(id: any): any;
    findItemByText(text: any): any;
    firstUpdated(props: any): void;
    refresh(): void;
    render(): TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
