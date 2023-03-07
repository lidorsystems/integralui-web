export default IntegralUITreeListItem;
declare class IntegralUITreeListItem extends IntegralUIItem {
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
        icon: {
            type: StringConstructor;
            reflect: boolean;
        };
        iconUrl: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        iconSize: {
            type: ObjectConstructor;
        };
        text: {
            type: StringConstructor;
            reflect: boolean;
        };
        visible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        indent: {
            type: NumberConstructor;
            reflect: boolean;
        };
        templateRef: {
            type: ObjectConstructor;
            attribute: string;
        };
        type: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    _templateData: any[] | undefined;
    _clickPos: {
        x: number;
        y: number;
    } | undefined;
    _isClicked: boolean | undefined;
    _isHovered: boolean | undefined;
    _currentIndent: any;
    _currentType: any;
    _currentTemplateRef: any;
    set indent(arg: any);
    get indent(): any;
    set templateRef(arg: any);
    get templateRef(): any;
    set type(arg: any);
    get type(): any;
    _getDataType(): any;
    _isSeparator(): boolean;
}
import IntegralUIItem from "./integralui.item.js";
