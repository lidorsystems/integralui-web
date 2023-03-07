export default IntegralUIBaseList;
declare class IntegralUIBaseList extends IntegralUIBase {
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
    };
    _lastUpdate: number | undefined;
    _updateDelay: number | undefined;
    _dataService: IntegralUIDataService | undefined;
    _dragDropService: any;
    _filterService: IntegralUIFilterService | undefined;
    _currentAnimationSpeedValue: number | undefined;
    _currentDefaultGroupName: string | undefined;
    _currentGroupList: any[] | undefined;
    _currentList: any[] | undefined;
    _dataGroups: any[] | undefined;
    _dataItems: any;
    _fullList: any[] | undefined;
    _scrollItemList: any[] | undefined;
    _currentDragDropMode: any;
    _dropMarkElem: any;
    _dragCmp: HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null | undefined;
    _dragContentElem: Element | null | undefined;
    _dragItemList: any[] | undefined;
    _dragItemObj: any;
    _dragElemPos: {
        top: number;
        left: number;
    } | undefined;
    _dragElemSize: {
        width: number;
        height: number;
    } | {
        width: any;
        height: any;
    } | undefined;
    _dragListPos: {
        top: number;
        left: number;
    } | {
        top: number;
        left: number;
    } | undefined;
    _dragListSize: {
        width: number;
        height: number;
    } | {
        width: any;
        height: any;
    } | undefined;
    _dragListStartPos: {
        top: number;
        left: number;
    } | undefined;
    _dragWindow: any;
    _dragListIndex: number | undefined;
    _dragTargetIndex: number | undefined;
    _dragOverStarted: boolean | undefined;
    _currentDragPos: {
        x: any;
        y: any;
    } | {
        x: number;
        y: number;
    } | undefined;
    _prevDragPos: {
        x: any;
        y: any;
    } | {
        x: number;
        y: number;
    } | undefined;
    _dragMoveSpace: number | undefined;
    _dropPos: number | undefined;
    _cloneElem: any;
    _cloneElemStartPos: {
        x: number;
        y: number;
    } | undefined;
    _expandTimeout: any;
    _isCtrlDragEntered: boolean | undefined;
    _isDragActive: boolean | undefined;
    _isDragCopy: boolean | undefined;
    _isDragInside: boolean | undefined;
    _isDragActiveTimeout: null | undefined;
    _isDropped: boolean | undefined;
    _currentDragItems: number | undefined;
    _maxDragItems: number | undefined;
    _totalDragItems: any;
    _filterParams: any;
    _ctrlCursor: string | undefined;
    _currentContentVisibility: any;
    _hoverItem: any;
    _blockHoverRect: {
        height: number;
        left: number;
        top: number;
        width: number;
    } | {
        height: number;
        left: number;
        top: number;
        width: number;
    } | {
        height: number;
        left: number;
        top: number;
        width: number;
    } | undefined;
    _blockSelectRect: any[] | undefined;
    _blockSelectHeight: number | undefined;
    _hoverItemObj: any;
    _currentFocusObj: any;
    _isKeyboardActive: boolean | undefined;
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
    _ctrlPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _currentIndex: number | undefined;
    _currentItemSize: {
        width: number;
        height: number;
    } | undefined;
    _currentItemSpacing: any;
    _prevIndex: any;
    _isAutoSized: boolean | undefined;
    _isHoverTemplatePresent: boolean | undefined;
    _isSelectedTemplatePresent: boolean | undefined;
    _isUpdateActive: boolean | undefined;
    _prevLongestItemWidth: number | undefined;
    _longestItemWidth: number | undefined;
    _longestItemWidthValue: string | undefined;
    _virtualization: boolean | undefined;
    _visibleRange: number | undefined;
    _updateTimer: any;
    _isLoading: boolean | undefined;
    _isLoadingEnd: boolean | undefined;
    _loadingEndTimeout: null | undefined;
    _loadIconPos: {
        top: number;
        left: number;
    } | {
        top: number;
        left: number;
    } | undefined;
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
    _scrollSizeAddition: any;
    _scrollTimerID: any;
    _horScrollOrientation: string | undefined;
    _currentSelection: any;
    _currentSelectionMode: any;
    _isItemClicked: boolean | undefined;
    _shiftFirstSelectedItem: any;
    _removeIndex: any;
    _currentSelectedItems: any;
    _currentSorting: any;
    _sortComparer: any;
    _dragListClass: {
        'iui-draglist'?: undefined;
    } | {
        'iui-draglist': boolean;
    } | undefined;
    _groupClassName: string | undefined;
    _groupContentClassName: string | undefined;
    _expandBoxClassName: string | undefined;
    _itemClassName: string | undefined;
    _itemContentClassName: string | undefined;
    _refreshTimer: any;
    _scrollCornerClassName: string | undefined;
    _touchStartPos: {
        x: number;
        y: number;
    } | {
        x: any;
        y: any;
    } | undefined;
    _touchEndPos: {
        x: number;
        y: number;
    } | undefined;
    _windowDragOver(e: any): void;
    _windowKeyDown(event: any): void;
    _windowKeyUp(event: any): void;
    set allowDrag(arg: any);
    set allowDrop(arg: any);
    set allowFilter(arg: any);
    set dataFields(arg: any);
    get dataFields(): any;
    set focusedItem(arg: any);
    get focusedItem(): any;
    set contentVisibility(arg: any);
    get contentVisibility(): any;
    set dragDropMode(arg: any);
    get dragDropMode(): any;
    set items(arg: any);
    get items(): any;
    set itemSpacing(arg: any);
    get itemSpacing(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set scrollAppearance(arg: any);
    get scrollAppearance(): any;
    set showScroll(arg: any);
    get showScroll(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    set selectionMode(arg: any);
    get selectionMode(): any;
    set sorting(arg: any);
    get sorting(): any;
    set virtualMode(arg: boolean | undefined);
    get virtualMode(): boolean | undefined;
    addItem(item: any, parent: any): void;
    clearItems(parent: any): void;
    insertItemAt(item: any, index: any, parent: any): void;
    insertItemBefore(item: any, refItem: any): void;
    insertItemAfter(item: any, refItem: any): void;
    removeItem(item: any): boolean;
    removeItemAt(index: any, parent: any): boolean;
    _callEventAdd(type: any, item: any, index: any, parent: any, refItem: any, flag: any): void;
    _callEventRemove(item: any, index: any, parent: any): boolean;
    _processItemAdd(item: any, parent: any): void;
    _processItemRemoval(item: any, parent: any): void;
    _itemClickEvent(e: any, obj: any): void;
    _itemDblClickEvent(e: any, obj: any): void;
    _itemRightClickEvent(e: any, obj: any): void;
    _processLoadData(data: any, parent: any, fields: any, flat: any): void;
    _updateData(): void;
    _updateDataFields(fields: any): void;
    _updateOptions(value: any): void;
    _resetScrollItemList(): void;
    _updateScrollItemList(item?: any): void;
    _updateShowScroll(value: any): void;
    _addDropMark(pos: any): void;
    _removeDropMark(): void;
    _calcDragMoveSpace(): number;
    _callDragDropEvent(e: any, data: any, flag: any): {
        action: any;
        cancel: boolean;
        dragObj: any;
        dropPos: any;
        event: any;
        isDropAllowed: any;
        mousePos: {
            x: any;
            y: any;
        };
        sourceCtrl: any;
        targetCtrl: any;
        targetObj: any;
    };
    _checkEmptySpace(e: any): boolean;
    _clearDragActive(): void;
    _clearDragTimeout(): void;
    _clearDragDropSettings(flag: any): void;
    _clearExpandTimeout(): void;
    _ctrlDragEnd(e: any): void;
    _ctrlDragEnter(e: any): void;
    _ctrlDragDrop(e: any): void;
    _ctrlDragLeave(e: any): void;
    _ctrlDragOver(e: any): void;
    _dropMark(e: any, flag: any, skip: any): void;
    _expandOnDelay(item: any): void;
    _updateDragComponent(value: any): void;
    _isDragAllowed(item: any): boolean;
    _isDropAllowed(sourceData: any, targetObj: any, dropPos: any): any;
    _processDragStartStatic(e: any, item: any): void;
    _processDragStartDynamic(e: any, item: any, itemBounds: any): void;
    _isMouseEnterAllowed: boolean | undefined;
    _preventDrop(e: any): void;
    _processDragEnter(e: any): void;
    _processDragEnterStatic(e: any): void;
    _processDragEnterDynamic(e: any): void;
    _processDragLeave(e: any): void;
    _processDragLeaveStatic(e: any): void;
    _processDragLeaveDynamic(e: any): void;
    _processDragOverStatic(e: any, item: any, itemBounds: any, flag: any, type: any): void;
    _processDragDropStatic(e: any, item: any): void;
    _processDragOverDynamic(e: any): void;
    _resetDragListPos(): void;
    _updateDragListPos(e: any): void;
    _getDragDropTarget(pass: any): {
        pass: any;
        target: any;
    };
    _updateDragItemPos(): void;
    _updateDragIndent(indent: any): void;
    _animateTarget(targetObj: any, pos: any): void;
    _clearInactiveAnimations(): void;
    _clearTargetAnimation(target: any): void;
    _updateAnimationValues(state: any, finished: any, reversed: any): void;
    _updateDragListSize(): void;
    _getDragItemExpandBoxStyle(item: any): {};
    _updateDragItemList(data: any): void;
    _processDragDropDynamic(e: any): Promise<void>;
    _drop(data: any): Promise<void>;
    _dropDynamic(data: any): Promise<void>;
    _dropStatic(data: any): Promise<void>;
    _processDataDrop(item: any, data: any): void;
    _itemDragStart(e: any, obj: any, index: any): void;
    _itemDragOver(e: any, obj: any, index: any, flag: any): void;
    _itemDragDrop(e: any, obj: any): void;
    _itemDragEnd(e: any, obj: any): void;
    _updateDropMark(e: any): void;
    exportToJSON(data: any, fields: any, spacing: any, flat: any): string;
    filter(params: any): void;
    _clearHoverItem(): void;
    cloneItem(item: any): any;
    _createCloneList(list: any, flag: any): any[];
    _getFilterTree(params: any): {
        result: boolean;
    } | null;
    _getObjFromItem(item: any): any;
    _getObjFromList(item: any, list: any): any;
    _getObjFromScrollItem(item: any): any;
    _getItemCurrentIndex(item: any): number;
    _getItemScrollIndex(obj: any): number;
    _getItemElem(item: any): Element | null;
    _getItemContentElem(item: any): Element | null;
    _getItemElemList(): NodeListOf<Element> | null;
    _getItemContentElemList(): NodeListOf<Element> | null;
    getHoverItem(): any;
    getList(key: any, parent: any): any;
    getFullList(): any[] | undefined;
    _updateCurrentList(): void;
    updateFullList(): any[] | undefined;
    getTopItem(): any;
    _isChildOf(targetObj: any, item: any): boolean;
    _isThereNoSelectTemplate(item: any): boolean;
    _isThereHoverTemplate(item: any): boolean;
    _checkItemHoverVisibility(item: any): boolean;
    _isContentAllowed(item: any, type: any): boolean;
    _isGroupAllowed(group: any): boolean;
    _isIndexInRange(index: any): boolean;
    _isItemAllowed(item: any): any;
    _filterIsThereChildren(item: any): any;
    _isItemDragged(item: any): boolean;
    _isItemEnabled(item: any): any;
    isItemExpanded(item: any): boolean;
    _isItemHovered(item: any): boolean;
    _isItemSelected(item: any): boolean;
    _isParentOf(targetObj: any, item: any): boolean;
    _updateItemList(): void;
    beginLoad(item: any): void;
    endLoad(item: any): void;
    _getLastItemIndex(): number;
    getPrevCurrentItem(item: any): any;
    getPrevItem(item: any): any;
    getPrevObj(obj: any, list: any): any;
    getNextCurrentItem(item: any): any;
    getNextItem(item: any): any;
    getNextObj(obj: any, list: any): any;
    moveItem(item: any, direction: any, targetObj: any, position: any): void;
    _moveItemAt(item: any, targetObj: any, direction: any, position: any): void;
    _getSelectBlockRect(i: any): {
        left: number;
        top: string;
        height: number;
        width: number;
    };
    _hoverBlockMouseMove(e: any): void;
    _hoverBlockMouseLeave(e: any): void;
    _itemMouseEnter(e: any, obj: any): void;
    _itemMouseMove(e: any, obj: any): void;
    _itemMouseLeave(e: any, obj: any): void;
    _itemGotFocus(obj: any): void;
    _itemLostFocus(obj: any): void;
    _itemKeyDown(e: any, item: any): void;
    _itemKeyPress(e: any, item: any): void;
    _itemKeyUp(e: any, item: any): void;
    _refreshFocusedItem(obj: any): void;
    _updateFocusItem(): void;
    _processDownArrowKey(itemObj: any, e: any): any;
    _processEndKey(itemObj: any, e: any): null;
    _processHomeKey(itemObj: any, e: any): null;
    _processLeftArrowKey(obj: any, e: any): null;
    _processPageDownKey(itemObj: any, e: any): null;
    _processPageUpKey(itemObj: any, e: any): null;
    _processRightArrowKey(itemObj: any, e: any): null;
    _processUpArrowKey(itemObj: any, e: any): any;
    _getDownItem(itemObj: any): any;
    _getUpItem(itemObj: any): any;
    _isFirstItem(itemObj: any): boolean;
    _isLastItem(itemObj: any): boolean;
    moveFocus(item: any, direction: any): any;
    _checkForSelectionChange(): void;
    _getContentSize(): {
        width: number;
        height: number;
    };
    _updateBlockSize(): void;
    _resetLayoutTimer(): void;
    suspendLayout(): void;
    resumeLayout(): Promise<any>;
    _updateCheckState(): void;
    _updateCurrentLayout(full: any): void;
    _updateItemElems(): void;
    _itemElems: NodeListOf<Element> | undefined;
    _itemContentElems: NodeListOf<Element> | undefined;
    updateLayout(optimal?: any): Promise<any>;
    _processUpdateLayout(): Promise<any>;
    _updateScrollSize(): void;
    _updateHoverContentPos(): void;
    _updateSelectContentPos(): void;
    _updateVisibleRange(): void;
    updateView(): void;
    _updateCloneElemPos(e: any): void;
    _ctrlMouseEnter(e: any): void;
    _ctrlMouseLeave(e: any): void;
    _onCtrlMouseMove(e: any): void;
    _itemMouseDown(e: any, obj: any): void;
    _prevClickedObj: any;
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
    isScrolling(): boolean | undefined;
    _onVerticalScrollStart(e: any): void;
    _onVerticalScrollEnd(e: any): void;
    _onVerticalScrollChanged(e: any): void;
    _onHorizontalScrollStart(e: any): void;
    _onHorizontalScrollEnd(e: any): void;
    _onHorizontalScrollChanged(e: any): void;
    _scrollMouseEnter(e: any): void;
    _processScroll(e: any): void;
    _resetScrollAppearanceTimeout(): void;
    _startScrollTimer(flag: any, interval: any): void;
    _stopScrollTimer(): void;
    _scrollTimerElapsed(flag: any): void;
    scrollTo(item: any): void;
    _updateScrollAppearance(e: any): void;
    findItemById(id: any): any;
    findItemByText(text: any): any;
    _callAfterSelectEvent(item: any): void;
    _clearAllSelection(): void;
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
    _getDragListClass(): {
        'iui-draglist': boolean;
    };
    _getItemInlineStyle(itemObj: any): any;
    _getScrollCornerClass(): {};
    refresh(): void;
    _updateItemStyle(obj: any): void;
    _getItemStyle(value: any): {
        general: any;
        content: any;
    };
    _getItemGeneralStyle(value: any): any;
    _getItemContentStyle(value: any): any;
    _getDefaultListStyle(): any;
    _getDefaultGroupStyle(): {
        expandBox: {
            general: any;
            expanded: any;
            collapsed: any;
        };
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
    _getDefaultGroupExpandBoxStyle(): {
        general: any;
        expanded: any;
        collapsed: any;
    };
    _getDefaultGroupGeneralStyle(): {
        disabled: any;
        focused: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    _getDefaultGroupContentStyle(): {
        disabled: any;
        focused: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    _getDefaultItemStyle(): {
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
    _getDefaultItemGeneralStyle(): {
        disabled: any;
        focused: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    _getDefaultItemContentStyle(): {
        disabled: any;
        focused: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    _getItemTemplate(item: any, type: any): TemplateResult;
    _itemTouchStart(e: any, obj: any): void;
    _itemTouchMove(e: any, obj: any): void;
    _itemTouchEnd(e: any, obj: any): void;
    _ctrlTouchStart(e: any): void;
    _ctrlTouchEnd(e: any): void;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import IntegralUIFilterService from "../services/integralui.filter.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
