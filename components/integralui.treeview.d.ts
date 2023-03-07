export default IntegralUITreeView;
declare class IntegralUITreeView extends IntegralUIBaseList {
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
        autoExpand: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        autoSize: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        checkBoxes: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        checkMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "twostate" | "threestate";
            };
            reflect: boolean;
        };
        compactMode: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        indent: {
            type: NumberConstructor;
            reflect: boolean;
        };
        itemDisplay: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Partial" | "Full";
            };
            reflect: boolean;
        };
        showExpandBox: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    _isCheckBoxVisible: any;
    _currentCheckMode: any;
    _isThereChildItems: boolean | undefined;
    _expandItem: any;
    _isAutoExpanded: any;
    _currentItemDisplay: any;
    _isExpandBoxVisible: any;
    _isLongestInProcess: boolean | undefined;
    _longestObj: {
        data: null;
        width: number;
    } | {
        data: any;
        width: number;
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
    _isExpandBoxTouched: boolean | undefined;
    set autoExpand(arg: any);
    get autoExpand(): any;
    set autoSize(arg: any);
    get autoSize(): any;
    _isAutoSized: any;
    set checkBoxes(arg: any);
    get checkBoxes(): any;
    set checkMode(arg: any);
    get checkMode(): any;
    set compactMode(arg: any);
    get compactMode(): any;
    _currentCompactMode: any;
    set indent(arg: any);
    get indent(): any;
    set itemDisplay(arg: any);
    get itemDisplay(): any;
    set showExpandBox(arg: any);
    get showExpandBox(): any;
    _checkItem(e: any, item: any): void;
    _getItemCheckValue(item: any): any;
    _updateCheckValue(item: any, value: any): void;
    _updateChildItemCheckValue(parent: any): void;
    _updateParentItemCheckValue(item: any): void;
    _updateChildrenCheckState(list: any): void;
    _addChildItems(parentItem: any, indent: any, pid: any, flag: any, parent: any): boolean;
    _addItemToCurrentList(item: any, indent: any, pid: any, flag: any, parent: any): any;
    _isThereItems(parentItem: any): any;
    _resetVisiblity(list: any): void;
    _collapseChildren(list: any): void;
    _createCompactList(orgList: any): any;
    _updateChildren(parent: any, currentItem: any): void;
    loadData(data: any, parent: any, fields: any, flat: any): void;
    _updateScrollItemList(item?: any): void;
    _checkForChildren(item: any): boolean;
    _updateIsThereChildItems(): void;
    isThereChildItems: boolean | undefined;
    collapse(item: any): void;
    expand(item: any): void;
    _expandBoxMouseDown(e: any, item: any): void;
    _expandBoxMouseUp(e: any): void;
    _expandBoxTouchStart(e: any, item: any): void;
    _expandBoxTouchEnd(e: any, item: any): void;
    toggle(item: any, value: any): void;
    exportToJSON(data: any, fields: any, spacing: any, flat: any): string;
    _getCheckedItems(): any[];
    _getDisplayMode(): string;
    updateFullList(): any[] | undefined;
    getItemLevel(item: any): number;
    getItemParent(item: any): any;
    _isChildOf(targetItem: any, item: any): any;
    _isItemCheckBoxAllowed(item: any): any;
    isThereChildren(): boolean | undefined;
    _isThereVisibleChildren(item: any): boolean;
    _getItemRealIndex(item: any): any;
    _isItemInCurrentList(item: any): boolean;
    _getFullItemWidth(): string;
    _updateLongestItem(): void;
    _calcLongestItem(elemList: any, skip: any): void;
    beginLoad(item: any): void;
    endLoad(item: any): void;
    _isItemLoading(item: any): boolean;
    _checkedChanged(e: any, itemObj: any): void;
    _getItemRadioValue(item: any): boolean;
    _isItemRadioButtonAllowed(item: any): any;
    _updateItemRadioButtonValue(itemObj: any): void;
    _getBlockStyle(): {};
    _getItemInlineContentStyle(itemObj: any): {
        'padding-left': string;
    };
    _isThereNoItems(item: any): any;
    _itemHasChildren(item: any): any;
    _getAppliedItemStyle(itemObj: any): any;
    _getAppliedItemExpandBoxStyle(itemObj: any): any;
    _getCheckBoxClass(item: any): {
        'iui-treeitem-checkbox': boolean;
    };
    _getItemStyle(value: any): {
        general: any;
        expandBox: any;
        content: any;
    };
    _getItemExpandBoxStyle(value: any): any;
    _getDefaultItemStyle(): {
        general: {
            disabled: any;
            focused: any;
            normal: any;
            hovered: any;
            selected: any;
        };
        expandBox: {
            general: any;
            load: any;
            expanded: any;
            collapsed: any;
        };
        content: {
            disabled: any;
            focused: any;
            normal: any;
            hovered: any;
            selected: any;
        };
    };
    _getDefaultItemExpandBoxStyle(): {
        general: any;
        load: any;
        expanded: any;
        collapsed: any;
    };
    _getDefaultListStyle(): any;
    _getDragTemplate(itemObj: any): TemplateResult;
    _isExpandBoxPresent(item: any): any;
    _animateIndent(list: any, indent: any): void;
    _updateIndentAnimation(state: any, finished: any, reversed: any): void;
    render(): TemplateResult;
}
import IntegralUIBaseList from "./integralui.base.list.js";
import { T as TemplateResult } from "../external/lit-element.js";
