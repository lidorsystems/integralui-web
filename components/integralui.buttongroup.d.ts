export default IntegralUIButtonGroup;
declare class IntegralUIButtonGroup extends IntegralUIBase {
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
            type: ObjectConstructor;
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
        selectionMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "One" | "MultiSimple" | "MultiExtended";
            };
            reflect: boolean;
        };
    };
    _buttonList: any[];
    _currentSelectionMode: string;
    _selectedComponent: any;
    _selectedIndex: number;
    set selectionMode(arg: string);
    get selectionMode(): string;
    _getComponentCurrentIndex(cmp: any): number;
    _getComponentData(cmp: any): any;
    invokeCtrlEvent(key: any, cmp: any, cmpIndex: any): boolean;
    invokeCtrlMethod(key: any, cmp: any): boolean;
    _processUpdateLayout(): Promise<any>;
    clearSelection(): void;
    _clearCmpSelection(cmp: any): void;
    _selectComponent(cmp: any): boolean;
    _refreshGroupParent(): Promise<any>;
    render(): import("../external/lit-element.js").TemplateResult;
    _slotChange(e: any): void;
}
import IntegralUIBase from "./integralui.base.js";
