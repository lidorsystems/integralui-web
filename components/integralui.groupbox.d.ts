export default IntegralUIGroupBox;
declare class IntegralUIGroupBox extends IntegralUIBase {
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
    };
    _currentIcon: any;
    _currentIconUrl: any;
    _currentExpandBoxType: any;
    _currentText: any;
    _clickPos: {
        x: number;
        y: number;
    } | undefined;
    _expandState: string | undefined;
    _isClicked: boolean | undefined;
    _isExpanded: boolean | undefined;
    _isSelected: any;
    _parentCtrl: any;
    _supressCallback: boolean | undefined;
    _contentHeight: any;
    _contentDisplay: any;
    _contentOpacity: any;
    _headerSize: {
        width: number;
        height: number;
    } | {
        width: any;
        height: any;
    } | undefined;
    _maxBlockHeight: any;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _contentClassName: string | undefined;
    _headerClassName: string | undefined;
    _contentClass: {} | undefined;
    _headerBlockClass: {} | undefined;
    _initContent(): void;
    _headerExpandBoxClassName: string | undefined;
    setParent(cmp: any): void;
    set expandBoxType(arg: any);
    get expandBoxType(): any;
    set expanded(arg: boolean | undefined);
    get expanded(): boolean | undefined;
    set icon(arg: any);
    get icon(): any;
    set iconUrl(arg: any);
    get iconUrl(): any;
    set selected(arg: any);
    get selected(): any;
    set text(arg: any);
    get text(): any;
    _callBeforeEvent(value: any): boolean;
    _callAfterEvent(value: any, skip: any): boolean;
    _onHeaderClick(e: any): void;
    collapse(): void;
    expand(): void;
    toggle(): void;
    _toggleContent(): void;
    getContentHeight(): any;
    setContentDisplay(value: any): void;
    setContentHeight(value: any): void;
    _updateContentClass(): void;
    _getContentClass(): {} | undefined;
    _getContentStyle(value: any): any;
    _updateHeaderBlockClass(): void;
    _getHeaderBlockClass(): {} | undefined;
    _getHeaderClass(): string | undefined;
    _getHeaderGeneralStyle(value: any): any;
    _getHeaderStyle(value: any): {
        general: any;
        expandBox: any;
    };
    _getCurrentHeaderStyle(): any;
    setOpacity(value: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _contentElem: Element | null | undefined;
    _contentSlotElem: Node | undefined;
    _header: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
