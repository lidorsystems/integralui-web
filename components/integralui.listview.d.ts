export default IntegralUIListView;
declare class IntegralUIListView extends IntegralUIBaseList {
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
        allowDrag: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowDrop: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowFilter: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        contentVisibility: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Hover" | "Select" | "Both";
            };
            reflect: boolean;
        };
        dataFields: {
            type: ObjectConstructor;
            attribute: string;
        };
        dragDropMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => any;
                toAttribute: (value: any) => "Static" | "Dynamic";
            };
            reflect: boolean;
        };
        focusedItem: {
            type: ObjectConstructor;
            attribute: string;
        };
        items: {
            type: ArrayConstructor;
        };
        itemSpacing: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
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
        showScroll: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        selectedItem: {
            type: ObjectConstructor;
            attribute: string;
        };
        selectionMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "One" | "MultiSimple" | "MultiExtended";
            };
            reflect: boolean;
        };
        sorting: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Ascending" | "Descending";
            };
            reflect: boolean;
        };
        virtualMode: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        itemSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        scrollMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
    };
    _clientSpace: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _contentPos: {
        top: number;
        left: number;
    } | {
        top: number;
        left: number;
    } | undefined;
    _currentItemSize: any;
    _currentItemBorder: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _currentItemPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _currentItemContentBorder: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _currentItemContentPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _itemsPerColumn: number | undefined;
    _itemsPerRow: number | undefined;
    _numColumns: number | undefined;
    _numRows: number | undefined;
    _currentScrollMode: any;
    _overflowSettings: {
        horizontal: string;
        vertical: string;
    } | {
        horizontal: string;
        vertical: string;
    } | {
        horizontal: string;
        vertical: string;
    } | {
        horizontal: string;
        vertical: string;
    } | undefined;
    _currentBaseStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentItemColorSchemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentItemStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentItemThemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentScrollColorSchemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentScrollStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    set itemSize(arg: any);
    get itemSize(): any;
    set scrollMode(arg: any);
    get scrollMode(): any;
    _updateOverflowSettings(): void;
    _addItemToCurrentList(item: any): void;
    loadData(data: any, fields: any): void;
    _updateScrollItemList(item?: any): void;
    _isDropPosHorizontal(): boolean;
    _processLeftArrowKey(itemObj: any, e: any): any;
    _processRightArrowKey(itemObj: any, e: any): any;
    _getLeftItem(item: any): any;
    _getRightItem(item: any): any;
    _getContentSize(): {
        width: any;
        height: any;
    };
    _listViewMouseWheel(e: any): void;
    _getDefaultListStyle(): {
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
        item: {
            general: {
                disabled: any;
                focused: any;
                normal: any;
                hovered: any;
                selected: any;
            };
            content: {
                disabled: any;
                focused: any;
                normal: any;
                hovered: any;
                selected: any;
            };
        };
    };
    _resetRefresh(): void;
    _getDragTemplate(itemObj: any): import("../external/lit-element.js").TemplateResult;
    render(): import("../external/lit-element.js").TemplateResult;
    _contentElem: Element | null | undefined;
}
import IntegralUIBaseList from "./integralui.base.list.js";
