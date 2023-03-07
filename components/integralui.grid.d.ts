export default IntegralUIGrid;
declare class IntegralUIGrid extends IntegralUIBaseGrid {
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
        allowColumnReorder: {
            type: BooleanConstructor;
            attribute: string;
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
        autoSizeColumns: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        columns: {
            type: ArrayConstructor;
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
        editMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Custom" | "Batch" | "Dialog" | "Form" | "Inline";
            };
            reflect: boolean;
        };
        expandColumnIndex: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        gridLines: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Both" | "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
        inlineEditor: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        inlineFilter: {
            type: BooleanConstructor;
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
        paging: {
            type: ObjectConstructor;
        };
        rowHeight: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        rows: {
            type: ArrayConstructor;
        };
        scrollAppearance: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Static" | "Dynamic";
            };
            reflect: boolean;
        };
        selectionMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "One" | "MultiSimple" | "MultiExtended";
            };
            reflect: boolean;
        };
        showFooter: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        showHeader: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        showScroll: {
            type: ObjectConstructor;
            attribute: string;
        };
        sorting: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Ascending" | "Descending";
            };
            reflect: boolean;
        };
        autoExpand: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        grouping: {
            type: ObjectConstructor;
        };
        groups: {
            type: ArrayConstructor;
        };
        showExpandBox: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    _isExpandBoxVisible: any;
    _dataGroups: any;
    _currentGrouping: {
        dropdown: {
            items: never[];
        };
        enabled: boolean;
        showAddButton: boolean;
        showColumns: boolean;
        showPanel: boolean;
    } | {
        dropdown: {
            items: any;
        };
        enabled: any;
        showAddButton: any;
        showColumns: any;
        showPanel: any;
    } | {
        dropdown: {
            items: never[];
        };
        enabled: boolean;
        showAddButton: boolean;
        showColumns: boolean;
        showPanel: boolean;
    } | undefined;
    _expandTimeout: any;
    _expandRow: any;
    _isAutoExpandActive: any;
    _groupReorderActive: boolean | undefined;
    _hoverGroup: any;
    _reorderGroup: any;
    _dragGroupElemSize: {
        width: number;
        height: number;
    } | undefined;
    _groupCoordinates: any[] | undefined;
    _reorderGroupPos: number | undefined;
    _dragGroupSettings: {
        display: string;
        top: number;
        left: number;
        label: string;
    } | undefined;
    _groupList: any[] | undefined;
    _activeGroups: any[] | undefined;
    _groupExpandList: any[] | undefined;
    _groupPanelSize: {
        width: number;
        height: number;
    } | undefined;
    _groupPanelHeight: number | undefined;
    _isGroupListItemSelected: boolean | undefined;
    _isGroupPanelHovered: boolean | undefined;
    _groupReorderMargin: number | undefined;
    _reorderGroupWidth: number | undefined;
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
    _currentEditorColorSchemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentEditorStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentEditorThemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentFilterStyleSettings: {
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
    _currentSortStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _columnClassName: string | undefined;
    _columnHeaderClassName: string | undefined;
    _columnFilterClassName: string | undefined;
    _columnBodyClassName: string | undefined;
    _columnFooterClassName: string | undefined;
    _rowClassName: string | undefined;
    _cellBorderClassName: string | undefined;
    _cellClassName: string | undefined;
    _expandBoxClassName: string | undefined;
    _gridLinesClassName: string | undefined;
    _sortingClassName: string | undefined;
    _resizeObserver: ResizeObserver | null | undefined;
    set autoExpand(arg: any);
    get autoExpand(): any;
    set grouping(arg: {
        dropdown: {
            items: never[];
        };
        enabled: boolean;
        showAddButton: boolean;
        showColumns: boolean;
        showPanel: boolean;
    } | {
        dropdown: {
            items: any;
        };
        enabled: any;
        showAddButton: any;
        showColumns: any;
        showPanel: any;
    } | {
        dropdown: {
            items: never[];
        };
        enabled: boolean;
        showAddButton: boolean;
        showColumns: boolean;
        showPanel: boolean;
    } | undefined);
    get grouping(): {
        dropdown: {
            items: never[];
        };
        enabled: boolean;
        showAddButton: boolean;
        showColumns: boolean;
        showPanel: boolean;
    } | {
        dropdown: {
            items: any;
        };
        enabled: any;
        showAddButton: any;
        showColumns: any;
        showPanel: any;
    } | {
        dropdown: {
            items: never[];
        };
        enabled: boolean;
        showAddButton: boolean;
        showColumns: boolean;
        showPanel: boolean;
    } | undefined;
    set groups(arg: any);
    get groups(): any;
    set showExpandBox(arg: any);
    get showExpandBox(): any;
    loadData(data: any, fields: any, incremental: any): void;
    _addRowToGroup(row: any): void;
    _getGroup(value: any, parentGroup: any): any;
    _getGroupExpandObj(id: any): any;
    _isGroupExpandedFromRow(row: any): any;
    _updateGroupList(): void;
    _groupAggregation(list: any): void;
    _createGroupExpandList(): void;
    _updateExpandStatus(): void;
    _updateGroupExpandValue(id: any, value: any): void;
    _updateGroupFields(fields: any): void;
    _groupFields: {
        id: any;
        cells: any;
        cid: any;
        expanded: any;
        rows: any;
        text: any;
    } | {
        id: string;
        cid: string;
        cells: string;
        expanded: string;
        rows: string;
        text: string;
    } | undefined;
    _updateGrouping(value: any): void;
    _addChildRowCheck(parentRow: any, flag: any): boolean;
    _expandOnDelay(row: any): void;
    _rowDragStart(e: any, obj: any, index: any): void;
    _rowDragOver(e: any, obj: any, index: any, side: any): void;
    _rowDragDrop(e: any, obj: any): void;
    _getGroupTextFromColumn(column: any): string;
    _getGroupText(group: any): string;
    _updateDragGroupElem(e: any, label: any): void;
    _groupPanelDragEnter(e: any): void;
    _groupPanelMouseEnter(e: any): void;
    _groupPanelMouseMove(e: any): void;
    _groupPanelMouseLeave(e: any): void;
    _checkColumnPresence(id: any): boolean;
    _groupPanelMouseUp(e: any): void;
    _groupMouseEnter(e: any, group: any): void;
    _groupMouseLeave(e: any, group: any): void;
    _groupMouseDown(e: any, group: any): void;
    _groupButtonMouseDown(e: any, group: any): void;
    _isGroupReorderInProcess(): boolean;
    _addGroup(group: any): boolean;
    _removeGroup(group: any): void;
    _groupListItemSelected(item: any): void;
    _getCellsAllSides(): any[];
    _getDragRowLayoutBySide(): import("../external/lit-element.js").TemplateResult;
    _getDragRowLayout(): import("../external/lit-element.js").TemplateResult;
    _getExpandBoxLayout(row: any, cell: any): import("../external/lit-element.js").TemplateResult;
    _getFilterCellTemplate(columnObj: any): import("../external/lit-element.js").TemplateResult;
    _getFilterLayout(side: any): import("../external/lit-element.js").TemplateResult;
    _getFooterLayout(side: any): import("../external/lit-element.js").TemplateResult;
    _getFormLayout(): import("../external/lit-element.js").TemplateResult;
    _getGroupLayout(): import("../external/lit-element.js").TemplateResult;
    _getHeaderLayout(side: any): import("../external/lit-element.js").TemplateResult;
    _getHoverContentLayout(): import("../external/lit-element.js").TemplateResult;
    _getRowCellTemplate(rowObj: any, cellObj: any, index: any): import("../external/lit-element.js").TemplateResult;
    _getRowLayout(side: any): import("../external/lit-element.js").TemplateResult | undefined;
    _getSelectContentLayout(): any;
    _processUpdateLayout(optimal: any): Promise<any>;
    _updateRange(flag: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _groupingPanelElem: Element | null | undefined;
    _dragGroupElem: Element | null | undefined;
    _paginatorElem: Element | null | undefined;
}
import IntegralUIBaseGrid from "./integralui.base.grid.js";
