export default IntegralUIMenuItem;
declare class IntegralUIMenuItem extends IntegralUIItem {
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
        expanded: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        items: {
            type: ArrayConstructor;
        };
        level: {
            type: NumberConstructor;
            reflect: boolean;
        };
        orientation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
        pause: {
            type: NumberConstructor;
            reflect: boolean;
        };
        templateRef: {
            type: ObjectConstructor;
            attribute: string;
        };
    };
    _dataService: IntegralUIDataService | undefined;
    _contentAnimation: {
        display: string;
        left: number;
        width: number;
        height: number;
    } | undefined;
    _dataItems: any;
    _childItems: any[] | NodeListOf<Element> | undefined;
    _currentLevel: any;
    _currentOrientation: any;
    _currentPause: any;
    _expandState: string | undefined;
    _isExpanded: any;
    _isItemHovered: boolean | undefined;
    _blockPos: {
        top: number;
        left: number;
    } | undefined;
    _popupOrder: number | undefined;
    _blockDisplay: string | undefined;
    _blockElemWidth: string | undefined;
    _blockElemHeight: string | undefined;
    _blockOverflow: string | undefined;
    _blockOpacity: number | undefined;
    _pauseTimer: any;
    _parentOffset: any;
    _currentTemplateRef: any;
    _initClassNames(): void;
    _parentClassName: any;
    _blockClassName: string | undefined;
    _expandBoxClassName: string | undefined;
    _expandBoxSpaceClassName: string | undefined;
    _separatorClassName: string | undefined;
    set expanded(arg: any);
    get expanded(): any;
    set items(arg: any);
    get items(): any;
    set level(arg: any);
    get level(): any;
    set orientation(arg: any);
    get orientation(): any;
    set pause(arg: any);
    get pause(): any;
    set templateRef(arg: any);
    get templateRef(): any;
    _updateData(): void;
    collapse(): void;
    expand(): void;
    toggle(): void;
    _onExpandBoxMouseDown(e: any): void;
    _getDataType(): any;
    _getItemLevel(): any;
    _getOffset(): {
        left: any;
        top: any;
        width: any;
        height: any;
    };
    _isThereChildren(): any;
    _isBlockVisible(): any;
    setOffset(value: any): void;
    updateLayout(optimal?: any): Promise<any>;
    _onContextMenu(e: any): void;
    _onChildItemMouseDown(e: any): void;
    _removePauseTimer(): void;
    _toggleContent(): void;
    _getItemDisplay(): string;
    _getExpandBoxSpaceClass(): string;
    _getSeparatorClass(): any;
    _getExpandBoxClass(): string;
    _getItemTemplate(item: any): any;
    _getChildItemLayout(): import("../external/lit-element.js").TemplateResult;
    _refreshChildren(): void;
    _blockElem: Element | null | undefined;
}
import IntegralUIItem from "./integralui.item.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
