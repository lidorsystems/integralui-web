export default IntegralUIPivotGrid;
declare class IntegralUIPivotGrid extends IntegralUIBaseGrid {
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
        data: {
            type: any;
        };
        filters: {
            type: ArrayConstructor;
        };
        showExpandBox: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        showTotal: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        values: {
            type: ArrayConstructor;
        };
    };
    _columnExpandList: any[] | undefined;
    _dataFilters: any;
    _dataValues: any;
    _rowExpandList: any[] | undefined;
    _valueFilters: any;
    _currentColumnData: any;
    _currentRowData: any[] | undefined;
    _currentFilteredData: any[] | undefined;
    _currentFooterData: any[] | undefined;
    _isExpandBoxVisible: any;
    _isTotalVisible: any;
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
    _currentEditorStyleSettings: {
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
    set filters(arg: any);
    get filters(): any;
    set showExpandBox(arg: any);
    get showExpandBox(): any;
    set showTotal(arg: any);
    get showTotal(): any;
    set values(arg: any);
    get values(): any;
    _getFilteredData(data: any): any[];
    _getSortedColumnData(data: any, level: any): any;
    _getSortedRowData(data: any, level: any): any;
    loadData(data: any, fields: any, incremental: any): void;
    _sortBy(name: any, sorting: any): (first: any, second: any) => 0 | 1 | -1;
    _checkColumnsFromData(result: any, data: any, level: any): void;
    _createColumnsFromData(data: any, level: any, prefix: any): any[];
    _createColumnsFromValues(prefix: any): any[];
    _createTotalColumnsFromValues(prefix: any): any[];
    _isColumnExpandTriggered(id: any): boolean;
    _getColumnExpandValue(id: any): any;
    _updateColumnExpandValue(id: any, value: any): void;
    _checkObj(list: any, fieldName: any, value: any): boolean;
    _calcAVG(list: any, valueKey: any): number;
    _calcSUM(list: any, valueKey: any): number;
    _calcCellValueByFormula(list: any, valueKey: any): any;
    _createCellsByColumns(cellList: any, rowList: any, column: any, colIndex: any, columnKey: any, rowKey: any, level: any): void;
    _createRowsFromData(dataList: any, level: any, prefix: any): {
        children: any[];
        exclude: any[];
    };
    _createGroupExpandList(): void;
    _filterCheck(list: any, name: any): boolean;
    _getCellValueFromData(id: any, dataList: any, columnKey: any, rowKey: any, valueKey: any): any;
    _getRowData(): any[] | undefined;
    _removeFooterData(id: any, dataList: any): void;
    _removeRowFromFooterData(row: any): void;
    _updateFooterData(id: any, dataList: any, valueKey: any): void;
    _updateFooterValues(): void;
    _updateGroupList(): void;
    _isRowExpandTriggered(id: any): boolean;
    _getRowExpandValue(id: any): any;
    _columnExpandBoxMouseDown(e: any, columnObj: any): void;
    _columnExpandBoxMouseUp(e: any, columnObj: any): void;
    _columnExpandBoxTouchStart(e: any, columnObj: any): void;
    _columnToggle(column: any): void;
    _createCSVColumnList(result: any, colList: any, level: any, side: any): void;
    _getCellExportValue(cell: any): {
        text: string;
    };
    _getNumChildColumns(column: any): any;
    exportToJSON(columnFields: any, rowFields: any, spacing: any): string;
    _exportColumnsToJSON(fields: any, spacing: any): string;
    _exportRowsToJSON(fields: any, spacing: any): string;
    _getColumnExpandBoxLayout(column: any): TemplateResult;
    _getExpandBoxLayout(row: any, cell: any): TemplateResult;
    _getFooterLayout(side: any): TemplateResult;
    _getHeaderLayout(side: any): TemplateResult;
    _getRowCellTemplate(rowObj: any, cellObj: any): TemplateResult;
    _getRowLayout(side: any): TemplateResult | undefined;
    _processUpdateLayout(optimal: any): Promise<any>;
    _updateRange(flag: any): void;
    render(): TemplateResult;
    _paginatorElem: Element | null | undefined;
}
import IntegralUIBaseGrid from "./integralui.base.grid.js";
import { T as TemplateResult } from "../external/lit-element.js";
