export default IntegralUITreeGrid;
declare class IntegralUITreeGrid extends IntegralUIBaseGrid {
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
        showExpandBox: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    _expandTimeout: any;
    _expandRow: any;
    _isAutoExpandActive: any;
    _isExpandBoxVisible: any;
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
    set showExpandBox(arg: any);
    get showExpandBox(): any;
    loadData(data: any, parent: any, fields: any, flat: any, incremental: any): void;
    _expandOnDelay(row: any): void;
    _rowDragStart(e: any, obj: any, index: any): void;
    _rowDragOver(e: any, obj: any, index: any, side: any): void;
    _rowDragDrop(e: any, obj: any): void;
    _getCellsAllSides(): any[];
    _getDragRowLayoutBySide(): import("../external/lit-element.js").TemplateResult;
    _getDragRowLayout(): import("../external/lit-element.js").TemplateResult;
    _getExpandBoxLayout(row: any, cell: any): import("../external/lit-element.js").TemplateResult;
    _getFilterCellTemplate(columnObj: any): import("../external/lit-element.js").TemplateResult;
    _getFilterLayout(side: any): import("../external/lit-element.js").TemplateResult;
    _getFooterLayout(side: any): import("../external/lit-element.js").TemplateResult;
    _getFormLayout(): import("../external/lit-element.js").TemplateResult;
    _getHeaderLayout(side: any): import("../external/lit-element.js").TemplateResult;
    _getHoverContentLayout(): import("../external/lit-element.js").TemplateResult;
    _getRowCellTemplate(rowObj: any, cellObj: any): import("../external/lit-element.js").TemplateResult;
    _getRowLayout(side: any): import("../external/lit-element.js").TemplateResult | undefined;
    _getSelectContentLayout(): any;
    _processUpdateLayout(optimal: any): Promise<any>;
    _updateRange(flag: any): void;
    beginLoad(row: any): void;
    endLoad(row: any): void;
    _isItemLoading(item: any): boolean;
    render(): import("../external/lit-element.js").TemplateResult;
    _paginatorElem: Element | null | undefined;
}
import IntegralUIBaseGrid from "./integralui.base.grid.js";
