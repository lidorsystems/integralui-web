export default IntegralUIBaseValue;
declare class IntegralUIBaseValue extends IntegralUIBase {
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
        value: {
            type: any;
            reflect: boolean;
        };
    };
    _currentValue: any;
    _contentClass: {} | undefined;
    _contentClassName: string | undefined;
    set value(arg: any);
    get value(): any;
    _preventDragStart(e: any): void;
    _processUpdateLayout(optimal: any): Promise<any>;
    _getDefaultStyle(): {
        general: {
            disabled: string;
            focused: string;
            hovered: string;
            normal: string | undefined;
            selected: string;
        } | {
            disabled?: undefined;
            focused?: undefined;
            hovered?: undefined;
            normal?: undefined;
            selected?: undefined;
        };
        content: {
            disabled: any;
            focused: any;
            hovered: any;
            normal: any;
            selected: any;
        } | {
            disabled?: undefined;
            focused?: undefined;
            hovered?: undefined;
            normal?: undefined;
            selected?: undefined;
        };
    };
    _getDefaultContentStyle(): {
        disabled: any;
        focused: any;
        hovered: any;
        normal: any;
        selected: any;
    } | {
        disabled?: undefined;
        focused?: undefined;
        hovered?: undefined;
        normal?: undefined;
        selected?: undefined;
    };
    _getContentClass(): {} | undefined;
    _getContentStyle(value: any): any;
    _updateContentClass(): void;
}
import IntegralUIBase from "./integralui.base.js";
