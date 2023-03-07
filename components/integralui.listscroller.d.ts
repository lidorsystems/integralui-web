export default IntegralUIListScroller;
declare class IntegralUIListScroller extends IntegralUIBase {
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
        itemSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        mouseWheelSpeed: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "VerySlow" | "Slow" | "Normal" | "Fast" | "VeryFast";
            };
            reflect: boolean;
        };
        selectedItem: {
            type: ObjectConstructor;
            attribute: string;
        };
        sorting: {
            converter: {
                fromAttribute: (value: any) => any;
                toAttribute: (value: any) => "None" | "Ascending" | "Descending";
            };
            reflect: boolean;
        };
    };
    _dataService: IntegralUIDataService | undefined;
    _currentList: any[] | undefined;
    _currentDataFields: {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
        iconUrl?: undefined;
    } | {
        canSelect: any;
        content: any;
        contextMenu: any;
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined;
    _dataItems: any;
    _isChangeActive: boolean | undefined;
    _scrollItemList: any[] | undefined;
    _stopTimer: boolean | undefined;
    _valueTimer: null | undefined;
    _valueCount: any;
    _hoverItem: any;
    _currentFocusItem: any;
    _isKeyboardActive: boolean | undefined;
    _blockSize: {
        width: number;
        height: number;
    } | undefined;
    _contentOpacity: number | undefined;
    _contentSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _currentIndex: number | undefined;
    _prevIndex: number | undefined;
    _updateTimer: any;
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
        left: any;
        top: number;
    } | undefined;
    _currentItemSize: any;
    _leftRightMarginTop: number | undefined;
    _topBotomMarginLeft: number | undefined;
    _currentMouseWheelSpeed: any;
    _currentScrollPos: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | undefined;
    _initPos: {
        x: number;
        y: number;
    } | undefined;
    _maxScrollPos: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | undefined;
    _prevScrollPos: {
        x: number;
        y: number;
    } | undefined;
    _scrollSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _currentSelection: any;
    _removeIndex: any;
    _currentSorting: any;
    _sortComparer: any;
    _itemClassName: string | undefined;
    _itemContentClassName: string | undefined;
    _refreshTimer: any;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentFocusObj: any;
    set dataFields(arg: {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
        iconUrl?: undefined;
    } | {
        canSelect: any;
        content: any;
        contextMenu: any;
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined);
    get dataFields(): {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
        iconUrl?: undefined;
    } | {
        canSelect: any;
        content: any;
        contextMenu: any;
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        items: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | {
        canSelect: string;
        content: string;
        contextMenu: string;
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        items: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        value: string;
        visible: string;
    } | undefined;
    set items(arg: any);
    get items(): any;
    set itemSize(arg: any);
    get itemSize(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    set sorting(arg: any);
    get sorting(): any;
    __currentSorting: any;
    addItem(item: any): void;
    clearItems(): void;
    insertItemAt(item: any, index: any): void;
    insertItemBefore(item: any, refItem: any): void;
    insertItemAfter(item: any, refItem: any): void;
    removeItem(item: any): boolean;
    removeItemAt(index: any): boolean;
    _callEventAdd(type: any, item: any, index: any, refItem: any, flag: any): void;
    _callEventRemove(item: any, index: any): boolean;
    _addItemToCurrentList(item: any): void;
    _updateCurrentList(): void;
    _updateScrollItemList(): void;
    _updateData(): void;
    _updateDataFields(fields: any): void;
    cloneItem(item: any): any;
    _getItemIndex(item: any): number;
    _isItemAllowed(item: any): boolean;
    _isItemEnabled(item: any): boolean;
    _isItemHovered(item: any): boolean;
    _isItemSelected(item: any): boolean;
    _itemMouseEnter(e: any, obj: any): void;
    _itemMouseLeave(e: any, obj: any): void;
    _getContentSize(): {
        width: number;
        height: number;
    };
    _resetLayout(): void;
    updateTimer: any;
    suspendLayout(): void;
    resumeLayout(): void;
    _processUpdateLayout(): Promise<any>;
    updateView(): void;
    _ctrlMouseWheel(e: any): void;
    _itemMouseDown(e: any, obj: any): void;
    _itemMouseUp(e: any, obj: any): void;
    _itemClickEvent(e: any, obj: any): void;
    _onMouseDown(e: any, flag: any): void;
    _onMouseUp(e: any): void;
    _onScroll(e: any): void;
    _changeHorizontalScrollPos(value: any): void;
    _changeVerticalScrollPos(value: any): void;
    scrollPos(value: any): {
        x: number;
        y: number;
    };
    _processMouseWheel(e: any): void;
    _updateScrollSize(): void;
    _changeValueTimerElapsed(flag: any): void;
    _changeValue(flag: any): void;
    prevItem(): void;
    nextItem(): void;
    _startChange(flag: any): void;
    _stopChange(): void;
    findItemById(id: any): any;
    findItemByText(text: any): any;
    _callAfterSelectEvent(item: any): void;
    _clearPrevSelection(): void;
    _processSelection(item: any): boolean;
    _updateSelection(): void;
    _applySorting(list: any): void;
    _isSortingAllowed(): boolean;
    sort(order: any, comparer: any): void;
    _updateItemStyle(obj: any): void;
    _getItemTemplate(item: any): TemplateResult;
    render(): TemplateResult;
    _blockElem: Element | null | undefined;
    _leftrightButtonsElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
