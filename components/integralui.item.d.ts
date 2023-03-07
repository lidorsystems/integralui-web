export default IntegralUIItem;
declare class IntegralUIItem extends IntegralUIBase {
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
    };
    _currentIcon: any;
    _currentIconUrl: any;
    _currentIconSize: any;
    _currentText: any;
    _isVisible: any;
    _parentCtrl: any;
    _itemPos: {
        top: number;
        left: number;
    } | {
        top: any;
        left: any;
    } | undefined;
    _positionType: any;
    _contentClass: {} | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _contentClassName: string | undefined;
    setParent(cmp: any): void;
    set icon(arg: any);
    get icon(): any;
    set iconUrl(arg: any);
    get iconUrl(): any;
    set iconSize(arg: any);
    get iconSize(): any;
    set text(arg: any);
    get text(): any;
    set visible(arg: any);
    get visible(): any;
    _onClick(e: any): void;
    _onMouseDown(e: any): void;
    _onMouseUp(e: any): void;
    _onMouseEnter(e: any): void;
    _onMouseMove(e: any): void;
    _onMouseLeave(e: any): void;
    _onTouchStart(e: any): void;
    getContentSize(): {
        width: number;
        height: number;
    };
    getMargin(): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getPageRect(): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getClientSize(): {
        width: number;
        height: number;
    };
    getSize(): {
        width: number;
        height: number;
    };
    resetPos(): void;
    updateLayoutPos(ref: any, pos: any): void;
    updatePos(pos: any): void;
    _updateContentClass(): void;
    _getContentClass(): {} | undefined;
    _getContentStyle(value: any): any;
    render(): import("../external/lit-element.js").TemplateResult;
    _contentElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
