export default IntegralUIList;
declare class IntegralUIList extends IntegralUIBase {
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
        dataFields: {
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
        showScroll: {
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
    _currentFields: {
        enabled?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        selected: any;
        style: any;
        text: any;
        value: any;
        visible: any;
    } | {
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        selected: string;
        style: string;
        text: string;
        value: string;
        visible: string;
    } | undefined;
    _currentList: any[] | undefined;
    _dataItems: any;
    _scrollItemList: any[] | undefined;
    _hoverItem: any;
    _keepActive: boolean | undefined;
    _currentFocusObj: any;
    _isKeyProcessed: boolean | undefined;
    _avgItemHeight: number | undefined;
    _blockSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _contentSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _currentIndex: number | undefined;
    _currentItemSpacing: any;
    _currentMaxVisibleItems: any;
    _prevIndex: any;
    _isUpdateActive: boolean | undefined;
    _visibleRange: number | undefined;
    _updateTimer: any;
    _currentMouseWheelSpeed: any;
    _currentScrollAppearance: any;
    _currentScrollPos: {
        x: number;
        y: number;
    } | {
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
    _accelerator: number | undefined;
    _isScrollActive: boolean | undefined;
    _isScrollTimerActive: boolean | undefined;
    _isScrollVisible: boolean | undefined;
    _prevScrollPos: {
        x: number;
        y: number;
    } | undefined;
    _scrollAppearanceTimeout: null | undefined;
    _scrollBarSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _scrollCount: number | undefined;
    _scrollLargeChange: {
        x: number;
        y: number;
    } | {
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
    _scrollTimerID: any;
    _scrollVisibility: {
        horizontal: boolean;
        vertical: boolean;
    } | undefined;
    _horScrollOrientation: string | undefined;
    _currentSelection: any;
    _currentSelectionMode: any;
    _isItemClicked: boolean | undefined;
    _shiftFirstSelectedItem: any;
    _removeIndex: number | undefined;
    _currentSelectedItems: any[] | undefined;
    _currentSorting: any;
    _sortComparer: any;
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
    _itemClassName: string | undefined;
    _itemContentClassName: string | undefined;
    _refreshTimer: any;
    _scrollCornerClassName: string | undefined;
    set dataFields(arg: {
        enabled?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        selected: any;
        style: any;
        text: any;
        value: any;
        visible: any;
    } | {
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        selected: string;
        style: string;
        text: string;
        value: string;
        visible: string;
    } | undefined);
    get dataFields(): {
        enabled?: undefined;
        icon?: undefined;
        iconUrl?: undefined;
        id?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        enabled: any;
        icon: any;
        iconUrl: any;
        id: any;
        selected: any;
        style: any;
        text: any;
        value: any;
        visible: any;
    } | {
        enabled: string;
        icon: string;
        iconUrl: string;
        id: string;
        selected: string;
        style: string;
        text: string;
        value: string;
        visible: string;
    } | undefined;
    set items(arg: any);
    get items(): any;
    set itemSpacing(arg: any);
    get itemSpacing(): any;
    set maxVisibleItems(arg: any);
    get maxVisibleItems(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set scrollAppearance(arg: any);
    get scrollAppearance(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    set selectionMode(arg: any);
    get selectionMode(): any;
    set showScroll(arg: {
        horizontal: boolean;
        vertical: boolean;
    } | undefined);
    get showScroll(): {
        horizontal: boolean;
        vertical: boolean;
    } | undefined;
    set sorting(arg: any);
    get sorting(): any;
    _itemClickEvent(e: any, obj: any): void;
    _addItemToCurrentList(item: any): void;
    loadData(data: any, fields: any): void;
    _updateCurrentList(): void;
    _updateData(): void;
    _updateDataFields(fields: any): void;
    _resetScrollItemList(): void;
    _updateScrollItemList(): void;
    focus(): void;
    cloneItem(item: any): any;
    _createCloneList(list: any): any[];
    _getFilterTree(params: any): any;
    _getObjFromItem(item: any): any;
    _getObjFromList(item: any, list: any): any;
    _getObjFromScrollItem(item: any): any;
    _getItemCurrentIndex(item: any): number;
    _getItemScrollIndex(obj: any): number;
    _getItemElem(item: any): Element | null;
    _getItemContentElem(item: any): Element | null;
    _getItemElemList(): NodeListOf<Element> | null;
    _getItemContentElemList(): NodeListOf<Element> | null;
    getList(key: any, parent: any): any;
    getTopItem(): any;
    _isItemAllowed(item: any): boolean;
    _isItemEnabled(item: any): boolean;
    _isItemHovered(item: any): boolean;
    _isItemSelected(item: any): boolean;
    _gotFocus(e: any): void;
    _ctrlKeyDown(e: any): void;
    _getCurrentSelectedIndex(): any;
    _getNextItem(): any;
    _getPrevItem(): any;
    isActive(): boolean | undefined;
    _lostFocus(e: any): void;
    _scrollList(direction: any): void;
    _getContentSize(): {
        width: number;
        height: number;
    };
    _updateBlockSize(): void;
    _resetLayoutTimer(): void;
    suspendLayout(): void;
    resumeLayout(): void;
    _updateCurrentLayout(full: any): void;
    _updateItemElems(): void;
    _itemElems: NodeListOf<Element> | undefined;
    _itemContentElems: NodeListOf<Element> | undefined;
    _processUpdateLayout(): Promise<any>;
    _updateScrollSize(): void;
    _updateVisibleRange(): void;
    updateView(): void;
    _ctrlMouseEnter(e: any): void;
    _ctrlMouseLeave(e: any): void;
    _itemMouseDown(e: any, obj: any): void;
    _itemMouseEnter(e: any, obj: any): void;
    _itemMouseLeave(e: any, obj: any): void;
    _itemMouseUp(e: any, obj: any): void;
    _onScroll(e: any): void;
    scrollPos(value: any): {
        x: number;
        y: number;
    };
    _changeHorizontalScrollPos(value: any): void;
    _changeVerticalScrollPos(value: any): void;
    _processMouseWheel(e: any, flag?: any): void;
    isVerScrollVisible(): boolean;
    isHorScrollVisible(): boolean;
    _onVerticalScrollStart(e: any): void;
    _onVerticalScrollEnd(e: any): void;
    _onVerticalScrollChanged(e: any): void;
    _onHorizontalScrollStart(e: any): void;
    _onHorizontalScrollEnd(e: any): void;
    _onHorizontalScrollChanged(e: any): void;
    _processScroll(e: any): void;
    _resetScrollAppearanceTimeout(): void;
    _startScrollTimer(flag: any, interval: any): void;
    _stopScrollTimer(): void;
    _scrollTimerElapsed(flag: any): void;
    scrollTo(item: any): void;
    _updateScrollAppearance(e: any): void;
    _callAfterSelectEvent(item: any): void;
    clearSelection(): void;
    _clearComponentSelection(): void;
    _clearPrevSelection(item: any): void;
    _isItemInSelectionList(item: any): boolean;
    _isCtrlKeyPressed(e: any): any;
    _isShiftKeyPressed(e: any): any;
    _processSelection(e: any, item: any, value: any): boolean | undefined;
    selectItems(items: any): void;
    _updateSelection(e: any, item: any): void;
    _applySorting(list: any): void;
    _isSortingAllowed(): boolean;
    sort(order: any, comparer: any): void;
    _getItemInlineStyle(itemObj: any): any;
    _getScrollCornerClass(): {};
    _updateItemStyle(obj: any): void;
    _getItemTemplate(itemObj: any): import("../external/lit-element.js").TemplateResult;
    _getItemContentTemplate(item: any): import("../external/lit-element.js").TemplateResult;
    _ctrlTouchStart(e: any): void;
    _touchStartPos: {
        x: any;
        y: any;
    } | undefined;
    _ctrlTouchEnd(e: any): void;
    _itemTouchStart(e: any, obj: any): void;
    refresh(): void;
    _resetRefresh(): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _contentElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
