export default IntegralUIMenu;
declare class IntegralUIMenu extends IntegralUIBase {
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
        items: {
            type: ArrayConstructor;
        };
    };
    _dataService: IntegralUIDataService | undefined;
    _dataItems: any;
    _menuItems: any[] | NodeListOf<Element> | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    set items(arg: any);
    get items(): any;
    _updateData(): void;
    _getItemFromComponent(cmp: any): any;
    itemList: any;
    getItemParent(item: any): any;
    _getOffset(): {
        left: any;
        top: any;
        width: any;
        height: any;
    };
    invokeCtrlMethod(name: any, value: any): void;
    _processUpdateLayout(): Promise<any>;
    _getItemTemplate(item: any): TemplateResult;
    render(): TemplateResult;
    _contentElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
