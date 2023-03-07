export default IntegralUITreeList;
declare class IntegralUITreeList extends IntegralUIBase {
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
        indent: {
            type: NumberConstructor;
            reflect: boolean;
        };
        items: {
            type: ArrayConstructor;
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
        title: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    _dataService: IntegralUIDataService | undefined;
    _animateItemSize: {
        width: number;
        height: number;
    } | undefined;
    _animSpeed: number | undefined;
    _prevClickedObj: any;
    _currentDataFields: {
        data?: undefined;
        enabled?: undefined;
        expanded?: undefined;
        hasChildren?: undefined;
        icon?: undefined;
        id?: undefined;
        isRoot?: undefined;
        items?: undefined;
        pid?: undefined;
        selected?: undefined;
        style?: undefined;
        text?: undefined;
        tooltip?: undefined;
        type?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        data: any;
        enabled: any;
        expanded: any;
        hasChildren: any;
        icon: any;
        id: any;
        isRoot: any;
        items: any;
        pid: any;
        selected: any;
        style: any;
        text: any;
        tooltip: any;
        type: any;
        value: any;
        visible: any;
    } | {
        data: string;
        enabled: string;
        expanded: string;
        hasChildren: string;
        icon: string;
        id: string;
        isRoot: string;
        items: string;
        pid: string;
        selected: string;
        style: string;
        text: string;
        tooltip: string;
        type: string;
        value: string;
        visible: string;
    } | undefined;
    _currentItems: any;
    _currentList: any[] | undefined;
    _currentTitle: any;
    _fullList: any[] | undefined;
    _nextList: any[] | undefined;
    _prevList: any[] | undefined;
    _clickPos: {
        x: number;
        y: number;
    } | undefined;
    _headerText: any;
    _hoverItem: any;
    _isClicked: boolean | undefined;
    _avgItemHeight: number | undefined;
    _blockPos: {
        top: number;
        left: number;
    } | undefined;
    _currentIndent: any;
    _leftBlockPos: {
        top: number;
        left: number;
    } | undefined;
    _rightBlockPos: {
        top: number;
        left: number;
    } | undefined;
    _blockSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number | undefined;
    } | undefined;
    _currentBlockHeight: number | undefined;
    _maxBlockHeight: number | undefined;
    _leftBlockOpacity: number | undefined;
    _blockOpacity: number | undefined;
    _rightBlockOpacity: number | undefined;
    _elemSize: {
        width: number;
        height: number;
    } | undefined;
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
    } | undefined;
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
    } | undefined;
    _scrollCount: number | undefined;
    _scrollLargeChange: {
        x: number;
        y: number;
    } | undefined;
    _scrollSize: {
        width: number;
        height: number;
    } | undefined;
    _scrollTimerID: any;
    _currentItemClicked: any;
    _currentSelection: any;
    _headerItem: any;
    _selList: any[] | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    set dataFields(arg: any);
    set indent(arg: any);
    get indent(): any;
    set items(arg: any);
    get items(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set scrollAppearance(arg: any);
    get scrollAppearance(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    set title(arg: any);
    get title(): any;
    _updateList(targetList: any, sourceList: any): void;
    _checkItemExpansion(item: any): boolean;
    _addChildItems(targetList: any, parentItem: any, indent: any, pid: any, flag: any): boolean;
    _addItemToCurrentList(targetList: any, item: any, indent: any, pid: any, flag: any): boolean;
    _updateData(): void;
    _updateDataFields(fields: any): void;
    exportToJSON(data: any, fields: any, spacing: any, flat: any): string;
    _ctrlMouseEnter(e: any): void;
    _ctrlMouseLeave(e: any): void;
    _onItemMouseEnter(e: any, item: any): void;
    _onItemMouseLeave(e: any, item: any): void;
    _onItemMouseDown(e: any, item: any): void;
    _onHeaderMouseDown(e: any): void;
    _resolveHeaderClick(): void;
    _resolveItemClick(): void;
    getFullList(): any[] | undefined;
    _getItemCurrentIndex(item: any): number;
    _getItemElemList(): NodeListOf<Element> | null;
    _itemElems: NodeListOf<Element> | null | undefined;
    getItemParent(item: any): any;
    _getItemState(item: any): number;
    _getObjFromItem(item: any): any;
    _getObjFromList(item: any, list: any): any;
    isGroupItem(item: any): boolean;
    isSeparator(item: any): boolean;
    _isItemAllowed(item: any): boolean;
    isItemExpanded(item: any): boolean;
    _isThereChildItems(item: any): boolean;
    updateFullList(): any[] | undefined;
    _resetLayoutTimer(): void;
    _updateBlockSize(): void;
    _updateContent(): Promise<any>;
    _updateCurrentLayout(): void;
    _updateScrollSize(): Promise<any>;
    _updateSelList(): void;
    updateView(): void;
    scrollPos(value: any): {
        x: number;
        y: number;
    };
    _changeVerticalScrollPos(value: any): void;
    isHorScrollVisible(): boolean;
    isVerScrollVisible(): boolean;
    _onVerticalScrollStart(e: any): void;
    _onVerticalScrollEnd(e: any): void;
    _onVerticalScrollChanged(e: any): void;
    _processMouseWheel(e: any): void;
    _resetScrollAppearanceTimeout(): void;
    _scrollMouseEnter(e: any): void;
    scrollTo(item: any): void;
    _updateScrollAppearance(e: any): void;
    findItemById(id: any): any;
    findItemByText(text: any): any;
    _getItemTemplate(item: any): TemplateResult;
    render(): TemplateResult;
    _blockElem: Element | null | undefined;
    _headerElem: Element | null | undefined;
    _leftBlockElem: Element | null | undefined;
    _rightBlockElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
