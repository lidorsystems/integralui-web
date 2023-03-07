export default IntegralUIListGroup;
declare class IntegralUIListGroup extends IntegralUIGroupBox {
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
        expandBoxType: {
            type: StringConstructor;
            attribute: string;
        };
        expanded: {
            type: BooleanConstructor;
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
        selected: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        text: {
            type: StringConstructor;
            reflect: boolean;
        };
        items: {
            type: ArrayConstructor;
        };
    };
    _dataService: IntegralUIDataService | undefined;
    _dataItems: any;
    _itemList: any;
    _itemClassName: string | undefined;
    set items(arg: any);
    get items(): any;
    _updateData(): void;
    _onHeaderExpand(e: any): void;
    invokeCtrlMethod(key: any, cmpItem: any): boolean;
    _getComponentData(cmp: any): any;
    _getItemCurrentIndex(cmp: any): any;
    _getItemDataIndex(cmp: any): any;
    clearSelection(cmp: any): void;
    _getItemGeneralStyle(value: any): any;
    _getItemStyle(value: any): {
        general: any;
    };
    _updateItemList(): void;
    _updateParent(): void;
}
import IntegralUIGroupBox from "./integralui.groupbox.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
