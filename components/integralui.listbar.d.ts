export default IntegralUIListBar;
declare class IntegralUIListBar extends IntegralUIBase {
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
        groups: {
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
        selectedGroup: {
            type: ObjectConstructor;
            attribute: string;
        };
        selectedIndex: {
            type: NumberConstructor;
            attribute: string;
        };
    };
    set groups(arg: any);
    get groups(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set selectedGroup(arg: any);
    get selectedGroup(): any;
    set selectedIndex(arg: any);
    get selectedIndex(): any;
    clearGroups(): void;
    addGroup(group: any): void;
    insertGroupAt(group: any, index: any): void;
    insertGroupBefore(group: any, refGroup: any): void;
    insertGroupAfter(group: any, refGroup: any): void;
    removeGroup(group: any): void;
    removeGroupAt(index: any): void;
    removeIndex: any;
    invokeCtrlEvent(key: any, cmp: any, skip: any): boolean;
    invokeCtrlMethod(key: any, cmp: any): boolean;
    scrollPos(value: any): void;
    clearSelection(): void;
    selectGroup(group: any): void;
    firstUpdated(props: any): void;
    refresh(): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
