export default IntegralUIBaseGrid;
declare class IntegralUIBaseGrid extends IntegralUIBase {
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
            type: any;
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
        sortMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Single" | "Multiple";
            };
            reflect: boolean;
        };
        useValidation: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    set autoSizeColumns(arg: any);
    get autoSizeColumns(): any;
    set allowColumnReorder(arg: any);
    get allowColumnReorder(): any;
    set allowDrag(arg: any);
    set allowDrop(arg: any);
    set allowFilter(arg: any);
    set columns(arg: any);
    get columns(): any;
    set contentVisibility(arg: any);
    get contentVisibility(): any;
    set dataFields(arg: any);
    set editMode(arg: any);
    get editMode(): any;
    set expandColumnIndex(arg: any);
    get expandColumnIndex(): any;
    set footerHeight(arg: any);
    get footerHeight(): any;
    set gridLines(arg: any);
    get gridLines(): any;
    set headerHeight(arg: any);
    get headerHeight(): any;
    set inlineEditor(arg: any);
    get inlineEditor(): any;
    set inlineFilter(arg: any);
    get inlineFilter(): any;
    set mouseWheelSpeed(arg: any);
    get mouseWheelSpeed(): any;
    set paging(arg: {
        enabled: boolean;
        panel: boolean;
        pageSize: number;
        maxPages?: undefined;
    } | {
        enabled: any;
        maxPages: any;
        panel: any;
        pageSize: any;
    } | {
        enabled: boolean;
        maxPages: number;
        panel: boolean;
        pageSize: number;
    } | undefined);
    get paging(): {
        enabled: boolean;
        panel: boolean;
        pageSize: number;
        maxPages?: undefined;
    } | {
        enabled: any;
        maxPages: any;
        panel: any;
        pageSize: any;
    } | {
        enabled: boolean;
        maxPages: number;
        panel: boolean;
        pageSize: number;
    } | undefined;
    set rowHeight(arg: any);
    get rowHeight(): any;
    set rows(arg: any);
    get rows(): any;
    set scrollAppearance(arg: any);
    get scrollAppearance(): any;
    set selectedColumn(arg: any);
    get selectedColumn(): any;
    set selectedRow(arg: any);
    get selectedRow(): any;
    set selectionMode(arg: any);
    get selectionMode(): any;
    set showFooter(arg: any);
    get showFooter(): any;
    set showHeader(arg: any);
    get showHeader(): any;
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
    set sortMode(arg: any);
    get sortMode(): any;
    set useValidation(arg: any);
    get useValidation(): any;
    addColumn(column: any): void;
    clearColumns(): void;
    insertColumnAfter(column: any, refColumn: any): void;
    insertColumnAt(column: any, index: any): void;
    insertColumnBefore(column: any, refColumn: any): void;
    removeColumn(column: any): boolean;
    removeColumnAt(index: any): boolean;
    addRow(row: any, parent: any): void;
    clearRows(parent: any): void;
    insertRowAfter(row: any, refRow: any): void;
    insertRowAt(row: any, index: any, parent: any): void;
    insertRowBefore(row: any, refRow: any): void;
    removeRow(row: any): boolean;
    removeRowAt(index: any, parent: any): boolean;
    removeIndex: any;
    updateFullList(): any[] | undefined;
    beginEdit(row: any, cell: any): void;
    endEdit(save: any): void;
    collapse(row: any): void;
    expand(row: any): void;
    toggle(row: any, value: any): void;
    exportToCSV(): string;
    exportToJSON(data: any, columnFields: any, rowFields: any, spacing: any, flat: any): string;
    filter(column: any, params: any): void;
    cloneRow(row: any, keepId: any): any;
    getCellByColumnId(list: any, id: any): any;
    getColumnById(id: any): any;
    getColumnParent(column: any): any;
    getFullList(): any[] | undefined;
    getList(key: any, parent: any): any;
    getRowLevel(row: any): number;
    getRowParent(row: any): any;
    isCellEnabled(cell: any): any;
    isColumnVisible(column: any): any;
    isRowEnabled(row: any): any;
    isRowHovered(row: any): any;
    isRowSelected(row: any): any;
    isCellFocused(cell: any): boolean;
    moveFocus(direction: any, step: any): void;
    beginLoad(row: any): void;
    endLoad(row: any): void;
    moveColumn(column: any, direction: any, targetColumn: any, position: any): void;
    currentPage(value: any): any;
    getMaxPages(): any;
    firstPage(): void;
    lastPage(): void;
    nextPage(): void;
    prevPage(): void;
    scrollPos(value: any): {
        x: number;
        y: number;
    };
    isVerScrollVisible(): boolean;
    isHorScrollVisible(): boolean;
    updateView(flag: any): void;
    scrollTo(row: any): void;
    findColumnById(id: any): any;
    findRowById(id: any): any;
    findRowByText(text: any): any;
    clearSelection(): void;
    selectRows(rows: any): void;
    sort(column: any, order: any, comparer: any): void;
    refresh(): void;
    resumeLayout(): void;
    suspendLayout(): void;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import IntegralUIFilterService from "../services/integralui.filter.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
