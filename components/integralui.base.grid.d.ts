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
    };
    _dataService: IntegralUIDataService | undefined;
    _dragDropService: any;
    _filterService: IntegralUIFilterService | undefined;
    _headerData: any[] | undefined;
    _rowData: any[] | undefined;
    _rowHoverData: any[] | undefined;
    _rowSelectData: any[] | undefined;
    _cellData: any[] | undefined;
    _footerData: any[] | undefined;
    _completeColumnList: {
        left: never[];
        normal: never[];
        right: never[];
    } | {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _currentColumnList: {
        left: never[];
        normal: never[];
        right: never[];
    } | {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _currentRowList: any[] | undefined;
    _dataColumns: any;
    _dataRows: any;
    _flatCompleteColumnList: {
        left: never[];
        normal: never[];
        right: never[];
    } | {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _flatCurrentColumnList: {
        left: never[];
        normal: never[];
        right: never[];
    } | {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _fullList: any[] | undefined;
    _maxColumnLevels: any;
    _scrollColumnList: {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _scrollFilterList: {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _scrollFooterList: {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _scrollRowList: {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _columnDataKey: string | undefined;
    _columnFields: {
        aggregation?: undefined;
        allowDrag?: undefined;
        allowDrop?: undefined;
        allowFilter?: undefined;
        allowGrouping?: undefined;
        allowResize?: undefined;
        canSelect?: undefined;
        cellTemplateUrl?: undefined;
        class?: undefined;
        columns?: undefined;
        comparer?: undefined;
        contentAlignment?: undefined;
        contextMenu?: undefined;
        editorType?: undefined;
        editorSettings?: undefined;
        editorTemplate?: undefined;
        expanded?: undefined;
        filterOperation?: undefined;
        filterParams?: undefined;
        filterSettings?: undefined;
        filterTemplate?: undefined;
        filterType?: undefined;
        filterValue?: undefined;
        fixed?: undefined;
        fixedWidth?: undefined;
        format?: undefined;
        footerAlignment?: undefined;
        footerContent?: undefined;
        footerTemplate?: undefined;
        footerTemplateModel?: undefined;
        footerText?: undefined;
        footerTooltip?: undefined;
        footerValue?: undefined;
        groupText?: undefined;
        headerAlignment?: undefined;
        headerContent?: undefined;
        headerTemplate?: undefined;
        headerTemplateModel?: undefined;
        headerText?: undefined;
        headerTooltip?: undefined;
        headerValue?: undefined;
        icon?: undefined;
        id?: undefined;
        isEnd?: undefined;
        key?: undefined;
        maxWidth?: undefined;
        minWidth?: undefined;
        name?: undefined;
        objects?: undefined;
        pid?: undefined;
        selected?: undefined;
        sorting?: undefined;
        style?: undefined;
        templateSettings?: undefined;
        visible?: undefined;
        width?: undefined;
    } | {
        aggregation: any;
        allowDrag: any;
        allowDrop: any;
        allowFilter: any;
        allowGrouping: any;
        allowResize: any;
        canSelect: any;
        cellTemplateUrl: any;
        class: any;
        columns: any;
        comparer: any;
        contentAlignment: any;
        contextMenu: any;
        editorType: any;
        editorSettings: any;
        editorTemplate: any;
        expanded: any;
        filterOperation: any;
        filterParams: any;
        filterSettings: any;
        filterTemplate: any;
        filterType: any;
        filterValue: any;
        fixed: any;
        fixedWidth: any;
        format: any;
        footerAlignment: any;
        footerContent: any;
        footerTemplate: any;
        footerTemplateModel: any;
        footerText: any;
        footerTooltip: any;
        footerValue: any;
        groupText: any;
        headerAlignment: any;
        headerContent: any;
        headerTemplate: any;
        headerTemplateModel: any;
        headerText: any;
        headerTooltip: any;
        headerValue: any;
        icon: any;
        id: any;
        isEnd: any;
        key: any;
        maxWidth: any;
        minWidth: any;
        name: any;
        objects: any;
        pid: any;
        selected: any;
        sorting: any;
        style: any;
        templateSettings: any;
        visible: any;
        width: any;
    } | undefined;
    _rowDataKey: string | undefined;
    _rowFields: {
        allowDrag?: undefined;
        allowDrop?: undefined;
        allowEdit?: undefined;
        allowFocus?: undefined;
        autoCheck?: undefined;
        canSelect?: undefined;
        cells?: undefined;
        checkBoxSettings?: undefined;
        checked?: undefined;
        checkState?: undefined;
        class?: undefined;
        content?: undefined;
        contentVisibility?: undefined;
        contextMenu?: undefined;
        deleted?: undefined;
        gid?: undefined;
        editorVisible?: undefined;
        enabled?: undefined;
        expanded?: undefined;
        fixed?: undefined;
        hasChildren?: undefined;
        icon?: undefined;
        id?: undefined;
        name?: undefined;
        objects?: undefined;
        pid?: undefined;
        rows?: undefined;
        selected?: undefined;
        sorting?: undefined;
        statusIcon?: undefined;
        style?: undefined;
        subobjects?: undefined;
        templateObj?: undefined;
        text?: undefined;
        tooltip?: undefined;
        value?: undefined;
        visible?: undefined;
    } | {
        allowDrag: any;
        allowDrop: any;
        allowEdit: any;
        allowFocus: any;
        autoCheck: any;
        canSelect: any;
        cells: any;
        checkBoxSettings: any;
        checked: any;
        checkState: any;
        class: any;
        content: any;
        contentVisibility: any;
        contextMenu: any;
        deleted: any;
        gid: any;
        editorVisible: any;
        enabled: any;
        expanded: any;
        fixed: any;
        hasChildren: any;
        icon: any;
        id: any;
        name: any;
        objects: any;
        pid: any;
        rows: any;
        selected: any;
        sorting: any;
        statusIcon: any;
        style: any;
        subobjects: any;
        templateObj: any;
        text: any;
        tooltip: any;
        value: any;
        visible: any;
    } | undefined;
    _isCellValueChangeAllowed: boolean | undefined;
    _dragCmp: HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null | undefined;
    _dragEndPos: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | undefined;
    _dragStartPos: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | undefined;
    _dropMarkElem: any;
    _isCtrlDragEntered: boolean | undefined;
    _isDragActive: boolean | undefined;
    _isFirstDragEnter: boolean | undefined;
    _prevTargetDropPos: number | undefined;
    _targetDropRow: any;
    _targetDropPos: number | undefined;
    _dragGhost: any;
    _dragObj: any;
    _dragObjIndex: number | undefined;
    _isCtrlDragAllowed: any;
    _isCtrlDropAllowed: any;
    _isColumnReorderAllowed: any;
    _originalScrollColumnList: any[] | undefined;
    _reorderColumnObj: any;
    _reorderColumnObjPos: {
        top: number;
        left: number;
    } | undefined;
    _reorderColumnStartPos: {
        top: number;
        left: number;
    } | undefined;
    _reorderColumnCurrentPos: {
        top: number;
        left: number;
    } | undefined;
    _reorderColIndex: number | undefined;
    _reorderNewColIndex: number | undefined;
    _startColumnReorder: boolean | undefined;
    _currentEditData: any[] | undefined;
    _currentEditingCell: any;
    _currentEditingRow: any;
    _currentEditMode: any;
    _editingFields: {
        cancel?: undefined;
        edit?: undefined;
        remove?: undefined;
        save?: undefined;
    } | {
        cancel: any;
        edit: any;
        remove: any;
        save: any;
    } | undefined;
    _formEditorRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | undefined;
    _formData: any;
    _isEditorFocused: boolean | undefined;
    _isFormActive: boolean | undefined;
    _filterColumn: any;
    _filterFields: any;
    _filteringColumns: any[] | undefined;
    _isFilterAllowed: any;
    _currentExpandColumnID: any;
    _expandColIndex: any;
    _hoverCell: any;
    _hoverColumn: any;
    _hoverRow: any;
    _isGridHovered: boolean | undefined;
    _currentIndex: number | undefined;
    _prevIndex: any;
    _tabIndexCount: number | undefined;
    _ctrlCursor: any;
    _suppressCallback: boolean | undefined;
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
    } | undefined;
    _blockSelectRect: any[] | undefined;
    _blockSelectHeight: number | undefined;
    _hoverRowObj: any;
    _columnStartPos: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | undefined;
    _resizeColumn: any;
    _resizeColumnIndex: number | undefined;
    _reorderColumn: any;
    _columnReorderActive: boolean | undefined;
    _ctrlLostFocus: boolean | undefined;
    _currentFocusCell: any;
    _currentFocusCellObj: any;
    _isKeyboardActive: boolean | undefined;
    _isKeyPressed: boolean | undefined;
    _keepActive: boolean | undefined;
    _loadRows: any[] | undefined;
    _avgRowHeight: number | undefined;
    _blockMarginTop: number | undefined;
    _blockSize: {
        width: number;
        height: number;
    } | {
        width: any;
        height: any;
    } | {
        width: number;
        height: number;
    } | undefined;
    _leftBlockSize: {
        width: number;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _rightBlockSize: {
        width: any;
        height: number;
    } | {
        width: number;
        height: number;
    } | undefined;
    _columnPadding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
    _currentGridLines: any;
    _currentHeaderHeight: number | undefined;
    _currentFixedColWidth: any;
    _currentFilterHeight: number | undefined;
    _currentFooterHeight: number | undefined;
    _currentIndent: number | undefined;
    _currentRowHeight: any;
    _hiddenLeftHeaderElem: any;
    _hiddenLeftHeaderElemSize: {
        width: number;
        height: number;
    } | undefined;
    _isExpandBoxVisible: boolean | undefined;
    _isLayoutUpdating: boolean | undefined;
    _numVisibleCells: number | undefined;
    _providedHeaderHeight: any;
    _providedFooterHeight: any;
    _viewIndexRange: {
        left: number;
        middle: number;
        right: number;
    } | undefined;
    _fixedLeftViewIndexRange: number | undefined;
    _fixedRightViewIndexRange: number | undefined;
    _visibleRange: number | undefined;
    _updateTimer: null | undefined;
    _isAutoSizeColumnsActive: any;
    _isHeaderVisible: any;
    _isInlineEditorVisible: any;
    _isInlineFilterVisible: any;
    _isFooterVisible: any;
    _isUpdateActive: boolean | undefined;
    _scrollSize: {
        width: number;
        height: number;
    } | {
        width: any;
        height: number;
    } | undefined;
    _contentLeftPos: number | undefined;
    _initialContentLeftPos: number | undefined;
    _allColWidth: number | undefined;
    _horScrollElemPos: {
        bottom: number;
    } | undefined;
    _cornerScrollElemPos: {
        bottom: number;
    } | undefined;
    _paginatorPos: {
        top: number;
        left: number;
    } | undefined;
    _currentContentVisibility: any;
    _headerElem: {
        left: null;
        normal: null;
        right: null;
    } | undefined;
    _columnElems: {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _filterElem: {
        left: null;
        normal: null;
        right: null;
    } | undefined;
    _filterElems: {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _footerElem: {
        left: null;
        normal: null;
        right: null;
    } | undefined;
    _footerElems: {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _bodyElem: {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _rowElems: {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _cellElems: {
        left: never[];
        normal: never[];
        right: never[];
    } | undefined;
    _formElem: any;
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
    _currentPageNumber: any;
    _onlyCurrentPage: boolean | undefined;
    _currentPageList: any[] | undefined;
    _currentPaging: {
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
    _pageNumber: number | undefined;
    _pageList: any[] | undefined;
    _pageRowCount: number | undefined;
    _paginatorHeight: number | undefined;
    _isColumnResizing: boolean | undefined;
    _isFormResizing: boolean | undefined;
    _startFormPos: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
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
        x: any;
        y: number;
    } | undefined;
    _accelerator: number | undefined;
    _scrollTimerID: any;
    _isScrollTimerActive: boolean | undefined;
    _scrollCount: number | undefined;
    _isScrollActive: boolean | undefined;
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
    _scrollLargeChange: {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    } | undefined;
    _scrollVisibility: {
        horizontal: boolean;
        vertical: boolean;
    } | undefined;
    _currentSorting: any;
    _sortComparer: any;
    _sortColumn: any;
    _currentSelectedColumn: any;
    _currentSelectedRow: any;
    _currentSelectionMode: any;
    _isRowClicked: boolean | undefined;
    _shiftFirstSelectedRow: any;
    _removeIndex: any;
    _currentSelectedRows: any;
    _scrollCornerClassName: string | undefined;
    _isExpandBoxTouched: boolean | undefined;
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
    addColumn(column: any): void;
    clearColumns(): void;
    insertColumnAfter(column: any, refColumn: any): void;
    insertColumnAt(column: any, index: any): void;
    insertColumnBefore(column: any, refColumn: any): void;
    removeColumn(column: any): boolean;
    removeColumnAt(index: any): boolean;
    _callEventAddColumn(type: any, column: any, index: any, refColumn: any, flag: any): void;
    _callEventRemoveColumn(column: any, index: any): boolean;
    addRow(row: any, parent: any): void;
    clearRows(parent: any): void;
    insertRowAfter(row: any, refRow: any): void;
    insertRowAt(row: any, index: any, parent: any): void;
    insertRowBefore(row: any, refRow: any): void;
    removeRow(row: any): boolean;
    removeRowAt(index: any, parent: any): boolean;
    _callEventAddRow(type: any, row: any, index: any, parent: any, refRow: any, flag: any): void;
    _callEventRemoveRow(row: any, index: any, parent: any): boolean;
    removeIndex: any;
    _cellClickEvent(e: any, obj: any): void;
    _cellDblClickEvent(e: any, rowObj: any, cellobj: any): void;
    _cellRightClickEvent(e: any, obj: any): void;
    _columnClickEvent(e: any, obj: any): void;
    _columnDblClickEvent(e: any, obj: any): void;
    _columnRightClickEvent(e: any, obj: any): void;
    _rowClickEvent(e: any, obj: any): void;
    _rowDblClickEvent(e: any, obj: any): void;
    _rowRightClickEvent(e: any, obj: any): void;
    _addColumnToCurrentList(column: any): void;
    _createColumnLevel(list: any, level: any, side: any, pid: any): void;
    _createColumnListInRange(list: any, result: any): void;
    _getColumnData(): any;
    _getColumnListInRange(side: any): any[];
    _getColumnSpan(column: any): number;
    _getAllColumnWidth(): number;
    _getAllColumnWidthBySide(side: any): number;
    _getEditorSaveColumn(): any;
    _updateCurrentColumnList(flag: any): void;
    _updateColumnCompleteList(): void;
    _updateColumnCompleteListBySide(side: any): void;
    _updateScrollColumnList(): void;
    _isColumnParentInRange(side: any, level: any, parentId: any): any;
    _refreshScrollColumnList(side: any): void;
    _processLoadData(data: any, parent: any, fields: any, flat: any, incremental: any): void;
    _updateColumnFields(fields: any): void;
    _updateCellFields(fields: any): void;
    _cellFields: {
        allowDrag: any;
        allowEdit: any;
        cid: any;
        class: any;
        colName: any;
        content: any;
        contextMenu: any;
        dataChanged: any;
        editorSettings: any;
        enabled: any;
        expanded: any;
        id: any;
        isGroup: any;
        labelEdit: any;
        rid: any;
        selected: any;
        style: any;
        tag: any;
        templateObj: any;
        text: any;
        tooltip: any;
        value: any;
        valueID: any;
        valueType: any;
    } | undefined;
    _updateData(): void;
    _updateDataFields(data: any): void;
    _updateEditingFields(fields: any): void;
    _updateFilterFields(fields: any): void;
    _updateRowFields(fields: any): void;
    _addChildRows(parentRow: any, indent: any, pid: any, flag: any): boolean;
    _isThereChildRows: boolean | undefined;
    _addRowToCurrentList(row: any, indent: any, pid: any, flag: any): boolean;
    _createEmptyRowObj(): {
        allowEdit: boolean;
        clickPos: {
            x: number;
            y: number;
        };
        cells: never[];
        data: {};
        draggable: boolean;
        indent: number;
        inlineStyle: {};
        isDragAllowed: boolean;
        isEditAllowed: boolean;
        isEditorActive: boolean;
        isEmpty: boolean;
        isGroup: boolean;
        original: {};
        style: {};
    };
    _createEmptyCellObj(): {
        align: string;
        allowEdit: boolean;
        colIndex: number;
        data: {};
        display: string;
        displayValue: null;
        editorClass: string;
        editorList: never[];
        editorSettings: {};
        editorStyle: string;
        editorType: null;
        editorValue: null;
        editorValueObject: {};
        editorVisibility: number;
        expandBoxAllowed: boolean;
        format: {};
        indent: number;
        inlineStyle: {};
        isDataEmpty: boolean;
        isDragDropColumn: boolean;
        isEditorColumn: boolean;
        isEditorSaveColumn: boolean;
        isEditorEnabled: boolean;
        isEmpty: boolean;
        rowIndex: number;
        side: string;
        style: {
            content: {
                [x: string]: boolean;
            };
        };
        tabIndex: number;
        width: number;
        height: string;
    };
    _createScrollObjFromRow(columnList: any, row: any, rowObj: any, scrollIndex: any, side: any): {
        allowEdit: boolean;
        clickPos: {
            x: number;
            y: number;
        };
        cells: never[];
        data: any;
        draggable: boolean;
        isDragAllowed: boolean;
        isEditAllowed: boolean;
        isEditorActive: boolean;
        indent: any;
        inlineStyle: any;
        original: any;
        style: {};
    } | null;
    _createScrollRowList(): void;
    _createScrollRowListBySide(side: any): void;
    _getRowData(): any;
    _isThereRows(parentRow: any): any;
    _refreshScrollRowList(side: any, flag: any): void;
    _resetRowObj(obj: any): void;
    _resetCellObj(obj: any): void;
    _updateCurrentRowList(flag: any): void;
    updateFullList(): any[] | undefined;
    _updatePageList(): void;
    _updateScrollRowList(flag: any): void;
    _updateScrollRowListLimit(side: any, limit: any): void;
    _addDropMark(pos: any): void;
    _removeDropMark(): void;
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
        resume: () => void;
        sourceCtrl: any;
        targetCtrl: any;
        targetObj: any;
    };
    _checkEmptySpace(e: any): boolean;
    _clearDragDropSettings(flag: any): void;
    _ctrlDragEnter(e: any): void;
    _ctrlDragDrop(e: any): void;
    _ctrlDragLeave(e: any): void;
    _ctrlDragOver(e: any): void;
    _ctrlDragEnd(e: any): void;
    _removeDragHandle(): void;
    _isDragHandleVisible: boolean | undefined;
    _dropMark(e: any, flag: any): void;
    _updateDragComponent(value: any): void;
    _isDragAllowed(row: any): boolean;
    _isDropAllowed(sourceData: any, targetObj: any, dropPos: any): any;
    _isDropAllowedForObject(sourceObj: any, targetObj: any, dropPos: any): boolean;
    _processDragStart(e: any, row: any): void;
    _processDragEnter(e: any): void;
    _processDragLeave(e: any): void;
    _processDragOver(e: any, rowObj: any, rowBounds: any, flag: any, type: any): void;
    _processDragDrop(e: any, rowObj: any): void;
    _drop(data: any): void;
    _processDataDrop(row: any, data: any): void;
    _callAfterSelectEvent(obj: any): void;
    _removeDragHost(): void;
    _rowDragEnd(e: any, obj: any): void;
    _resetReorderColumnSettings(): void;
    _batchEditorCancel(rowObj: any): void;
    _batchEditorKeyDown(e: any, rowObj: any, type: any): void;
    _batchEditorRemove(rowObj: any): void;
    beginEdit(row: any, cell: any): void;
    _callCellValueChanging(rowObj: any, cellObj: any, value: any): boolean;
    _callCellValueChanged(rowObj: any, cellObj: any): void;
    _clearEditing(): void;
    _clearEditingRow(cell: any): void;
    _cloneRowObject(obj: any): any;
    _closeEditor(flag: any): void;
    _convertCheckBoxValue(value: any): any;
    _editorChangeValue(value: any, rowObj: any, cellObj: any): void;
    _editCheckBoxValue(rowObj: any, cellObj: any): void;
    _editorColumnMouseUp(e: any, rowObj: any): void;
    _editorGotFocus(cellObj: any): void;
    _editorKeyDown(e: any, rowObj: any, cellObj: any, skip: any): void;
    _textEditorKeyDown(e: any, rowObj: any, cellObj: any): void;
    _editorLostFocus(e: any, rowObj: any, cellObj: any): void;
    _editorValueChanging(e: any, rowObj: any, cellObj: any): void;
    _editorValueChanged(e: any, rowObj: any, cellObj: any): void;
    endEdit(save: any): void;
    _findObjectByValue(value: any, list: any): {
        obj: null;
        value: null;
    };
    _formButtonKeyDown(e: any, type: any): void;
    _formCancel(): void;
    _formEditorLostFocus(e: any, column: any): void;
    _formEditorValueChanged(e: any, column: any): void;
    _formMouseWheel(e: any): void;
    _formSave(): void;
    _formSetFocus(): void;
    _formTouchEnd(e: any): void;
    _getCellDisplayValue(obj: any): any;
    _getCellDisplayValueAsString(obj: any): any;
    _getCellEditorClass(obj: any): {
        'iui-editor-checkbox': boolean;
        'iui-editor-checkbox-checked': boolean;
        'iui-editor-checkbox-indeterminate': boolean;
        'iui-editor-checkbox-unchecked': boolean;
        'iui-editor-checkbox-disabled': boolean;
    };
    _getCellEditorList(column: any): any;
    _getCellEditorSettings(column: any): any;
    _getCellEditorType(column: any): any;
    _getCellEditorVisibility(row: any, column: any): number;
    _getColumnFormat(column: any): any;
    _getCellValue(obj: any): any;
    _getCellValueObject(obj: any): any;
    _getEditorAdjustment(obj: any, value: any): {
        top: any;
        left: any;
        width: any;
        height: any;
    };
    _getEditorMaxDropDownItems(numMax: any, numCurrent: any): number;
    _getEditorProgressStyle(obj: any): any;
    _getEditorProgressValue(obj: any): number;
    _getFirstEditingCell(row: any): any;
    _getFooterDisplayValue(obj: any): any;
    _inlineEditorStart(row: any): void;
    _inlineEditorCancel(rowObj: any, cellObj: any): void;
    _inlineEditorEdit(rowObj: any, cellObj: any): void;
    _inlineEditorKeyDown(e: any, rowObj: any, type: any): void;
    _inlineEditorRemove(rowObj: any): void;
    _inlineEditorSave(rowObj: any): void;
    _isCellEditorEnabled(column: any, cell: any): boolean;
    _isDataChanged(row: any): boolean;
    _isEditAllowed(row: any): boolean;
    _openEditor(cellObj: any): void;
    _updateEditData(rowObj: any): void;
    _updateRowCellsRadioButtonValue(rowObj: any, cellObj: any): void;
    collapse(row: any): void;
    expand(row: any): void;
    _expandBoxMouseDown(e: any, rowObj: any): void;
    _expandBoxMouseUp(e: any, rowObj: any): void;
    _expandBoxTouchStart(e: any, rowObj: any): void;
    toggle(row: any, value: any): void;
    _updateExpandingCell(row: any, value: any): void;
    _updateRowExpandValue(id: any, value: any): void;
    _convertToCSV(list: any): string;
    exportToCSV(): string;
    exportToJSON(data: any, columnFields: any, rowFields: any, spacing: any, flat: any): string;
    _exportColumnsToJSON(data: any, fields: any, spacing: any): string;
    _exportRowsToJSON(data: any, fields: any, spacing: any, flat: any): string;
    _filterOperationChanged(e: any, columnObj: any): void;
    _filterValueChanged(e: any, columnObj: any): void;
    _getDateNum(date: any): number;
    _getFilterAdjustment(column: any, value: any): {
        top: any;
        left: any;
        width: any;
        height: any;
    };
    _getFilterOperation(column: any): any;
    _getFilterSettings(column: any): any;
    _getFilterType(column: any): any;
    _getFilterValue(column: any): any;
    _createColumnsWithFilter(): void;
    filter(column: any, params: any): void;
    _filterIsThereChildren(row: any, flag: any): any;
    _getColumnWithFilter(id: any): any;
    _getFilterTree(column: any): any;
    _isRowAllowed(row: any, flag: any): any;
    _calcMaxColumnLevels(list: any, level: any): void;
    _changeCursor(): void;
    cloneRow(row: any, keepId: any): any;
    _createCloneList(list: any): any[];
    _createFlatColumnList(list: any): any[];
    _createFlatList(list: any, field: any, result: any): void;
    getCellByColumnId(list: any, id: any): any;
    _getCellElems(side: any): any;
    _getCellIndexById(list: any, colIndex: any, id: any): number;
    _getColumnAllowResize(column: any): {
        left: any;
        right: any;
    };
    getColumnById(id: any): any;
    _getColumnCurrentIndex(column: any): number;
    _getCurrentColumnList(side: any): any;
    _getColumnElems(side: any): any;
    _getColumnIndex(column: any, targetlist: any): any;
    _getColumnIndexFromList(column: any): number;
    _getColumnList(side: any): any;
    getColumnParent(column: any): any;
    _getColumnRealIndex(j: any): any;
    _getExpandingColumn(): any;
    _updateExpandingColumnID(): void;
    getFullList(): any[] | undefined;
    _getCurrentList(): any[];
    getList(key: any, parent: any): any;
    _getObjFromCell(cell: any): any;
    _getObjFromCellById(id: any): any;
    _getObjFromColumn(column: any): any;
    _getObjFromRow(row: any): any;
    _getRowCellDisplay(cellObj: any): "block" | "inline-block";
    _getRowCurrentIndex(row: any): number;
    _getRowElems(side: any): any;
    getRowLevel(row: any): number;
    getRowParent(row: any): any;
    _getRowScrollIndex(row: any, side: any): number;
    _getSideName(side: any): any;
    _isChildOf(targetObj: any, row: any): any;
    isColumnVisible(column: any): any;
    _isColumnExpanded(column: any): any;
    _isColumnFixed(column: any, side: any): boolean;
    _isColumnWidthFixed(column: any): boolean;
    _isColumnWithChildrenVisible(column: any): boolean;
    _isThereNoSelectTemplate(row: any): boolean;
    _isThereHoverTemplate(row: any): boolean;
    _checkRowHoverVisibility(row: any): boolean;
    _isContentAllowed(row: any, type: any): boolean;
    _isParentOf(targetObj: any, row: any): boolean;
    isRowEnabled(row: any): any;
    _isRowExpanded(row: any): any;
    _isRowFixed(row: any): boolean;
    isRowHovered(row: any): any;
    _isRowLoading(row: any): boolean;
    isRowSelected(row: any): any;
    _isThereFixedColumns(side: any): boolean;
    _isThereNoRows(row: any): any;
    _isThereVisibleChildren(row: any): boolean;
    _onGridScroll(e: any): void;
    _rowHasChildren(row: any): any;
    _updateResizeColumnIndex(side: any, index: any): void;
    _columnMouseDown(e: any, obj: any): void;
    _prevClickedObj: any;
    _columnMouseUp(e: any, obj: any): void;
    _columnMouseMove(e: any, obj: any): void;
    _columnMouseEnter(e: any, obj: any): void;
    _columnMouseLeave(e: any, obj: any): void;
    _footerMouseEnter(e: any, obj: any): void;
    _gridMouseMove(e: any): void;
    _gridMouseUp(e: any): void;
    _gridMouseEnter(e: any): void;
    _gridMouseLeave(e: any): void;
    _rowMouseEnter(e: any, obj: any, side: any): void;
    _rowMouseLeave(e: any, obj: any, side: any): void;
    _clearHoverRow(row: any, side: any): void;
    _getSelectBlockRect(i: any): {
        left: number;
        top: string;
        height: number;
        width: number;
    };
    _hoverBlockMouseMove(e: any): void;
    _hoverBlockMouseLeave(e: any): void;
    _cellGotFocus(rowObj: any, cellObj: any): void;
    _cellKeyDown(e: any, rowObj: any, cellObj: any): void;
    _cellKeyPress(e: any, rowObj: any, cellObj: any): void;
    _cellKeyUp(e: any, rowObj: any, cellObj: any): void;
    _cellLostFocus(rowObj: any, cellObj: any): void;
    _getRowFromCell(cellObj: any): any;
    isCellFocused(cell: any): boolean;
    _isFirstCell(cellObj: any): boolean;
    _isFirstRow(cellObj: any): boolean;
    _isLastCell(cellObj: any): boolean;
    _isLastRow(cellObj: any): boolean;
    moveFocus(direction: any, step: any): void;
    _moveFocusToNextCell(e: any, rowObj: any, cellObj: any): void;
    _onContentScroll(e: any): void;
    _processDownArrowKey(cellObj: any, e: any): any;
    _processEndKey(cellObj: any, e: any): null;
    _processHomeKey(cellObj: any, e: any): null;
    _processLeftArrowKey(rowObj: any, cellObj: any): any;
    _processPageDownKey(cellObj: any, e: any, step: any): null;
    _processPageUpKey(cellObj: any, e: any, step: any): null;
    _processRightArrowKey(rowObj: any, cellObj: any): any;
    _processUpArrowKey(cellObj: any, e: any): any;
    _getDownCell(cellObj: any): any;
    _getFirstCell(cellObj: any, flag: any): any;
    _getLastCell(cellObj: any, flag: any): any;
    _getNextCell(cellObj: any): any;
    _getLastScrollIndex(side: any): number;
    _getPrevCell(cellObj: any): any;
    _getUpCell(cellObj: any): any;
    _setCurrentFocusCell(cellObj: any): void;
    _updateFocusCell(cellObj: any, flag: any): void;
    _getElemFromCell(cellObj: any, flag: any): any;
    setFocus(cell: any): void;
    _setFocusToCell(cellObj: any, flag: any): void;
    beginLoad(row: any): void;
    endLoad(row: any): void;
    _getParentColumnList(column: any): any;
    moveColumn(column: any, direction: any, targetColumn: any, position: any): void;
    _paginatorMouseEnter(e: any): void;
    _scrollMouseEnter(e: any): void;
    _cellMouseEnter(e: any, obj: any): void;
    _cellMouseLeave(e: any): void;
    _cellMouseDown(e: any, rowObj: any, cellObj: any): void;
    _cellMouseUp(e: any, rowObj: any, cellObj: any): void;
    _clickedCell: any;
    _cellTouchStart(e: any, rowObj: any, cellObj: any): void;
    _cellTouchEnd(e: any, rowObj: any, cellObj: any): void;
    _processCellMouseDown(e: any, rowObj: any, cellObj: any): void;
    _processCellMouseUp(e: any, rowObj: any, cellObj: any): void;
    _getCellAlignment(column: any): any;
    _getCellWidth(rowObj: any, column: any, colIndex: any): any;
    _areChildColumnsFixed(list: any): boolean;
    _calcColumnWidthFromChildren(column: any): number;
    _changeColumnWidth(column: any): void;
    _getColumnAlignment(column: any, isFooter: any): string;
    _getColumnFooterTemplate(columnObj: any): TemplateResult;
    _getColumnHeaderTemplate(columnObj: any): TemplateResult;
    _getColumnWidth(column: any, type: any): any;
    _getColumnWidthFromChildren(column: any): number;
    _getCurrentColumnWidth(title: any): any;
    _getFilterHeight(): any;
    _getFooterHeight(): any;
    _getHeaderHeight(): any;
    _getNextFlatColumn(column: any, fixed: any, skipFixedWidth: any): any;
    _getNextFlatColumnIndex(column: any, fixed: any, skipFixedWidth: any): number;
    _getNumScrollColumns(side: any): any;
    _getNumVisibleColumns(side: any): any;
    _getPrevFlatColumn(column: any, fixed: any, skipFixedWidth: any): any;
    _getPrevFlatColumnIndex(column: any, fixed: any, skipFixedWidth: any): number;
    _isThereChildColumns(column: any, allFixed: any): boolean;
    _updateAllColumnWidth(): void;
    _updateColumnWidth(side: any, column: any): void;
    _getBlockBottomPos(): number;
    _getBlockRightPos(): 0 | 16;
    _getBounds(): any;
    _resetLayoutTimer(): void;
    _updateBlockSize(): void;
    _updateEditorFormRect(): void;
    _updateLeftBlockSize(): void;
    _updateRightBlockSize(): void;
    _updateSelectContentPos(): void;
    _updateVisibleRange(): void;
    _formMouseDown(e: any): void;
    _getMinColumnWidthFromChildren(column: any): number;
    _resizeChildColumns(column: any, factor: any): void;
    _resizeParentColumn(column: any, factor: any): void;
    _setColumnWidth(column: any, width: any, flag: any): void;
    _updateCellWidth(column: any): void;
    _updateChildColumnsWidth(column: any, newWidth: any, changeFactor: any): void;
    _updateColumnWidthByFactor(list: any, widthFactor: any): void;
    _updateWidthByFactor(column: any, factor: any): void;
    _windowMouseMove(e: any): void;
    _windowClick(e: any): void;
    _checkForSelectionChange(): void;
    _getRowIndent(rowObj: any, column: any): number;
    _isExpandBoxAllowed(column: any, j: any): boolean;
    _updateScrollSize(): void;
    _ctrlMouseEnter(e: any): void;
    _ctrlMouseLeave(e: any): void;
    currentPage(value: any): any;
    getMaxPages(): any;
    firstPage(): void;
    lastPage(): void;
    nextPage(): void;
    prevPage(): void;
    _resetPageNumber(): void;
    _updatePageNumber(): void;
    _updatePaging(value: any): void;
    _paginatorPageChanged(e: any): void;
    _isPaginationEnabled(): any;
    scrollPos(value: any): {
        x: number;
        y: number;
    };
    _changeHorizontalScrollPos(value: any): void;
    _changeVerticalScrollPos(value: any): void;
    _gridMouseWheel(e: any): void;
    isVerScrollVisible(): boolean;
    isHorScrollVisible(): boolean;
    _onVerticalScrollStart(e: any): void;
    _onVerticalScrollEnd(e: any): void;
    _onVerticalScrollChanged(e: any): void;
    _onHorizontalScrollStart(e: any): void;
    _onHorizontalScrollEnd(e: any): void;
    _onHorizontalScrollChanged(e: any): void;
    _processHorizontalScroll(value: any): void;
    _scrollMouseDown(e: any): void;
    updateView(flag: any): void;
    _processScroll(e: any, extraTopSpace: any, extraBottomSpace: any): void;
    _resetScrollAppearanceTimeout(): void;
    _startScrollTimer(flag: any, interval: any): void;
    _stopScrollTimer(): void;
    _scrollTimerElapsed(flag: any): void;
    scrollTo(row: any): void;
    _updateScrollAppearance(e: any): void;
    findColumnById(id: any): any;
    findRowById(id: any): any;
    findRowByText(text: any): any;
    clearSelection(): void;
    _processColumnSelection(e: any, column: any, value: any): any;
    _clearPrevSelection(row: any): void;
    _isCtrlKeyPressed(e: any): any;
    _isRowInSelectionList(row: any): boolean;
    _isShiftKeyPressed(e: any): any;
    _processRowSelection(e: any, row: any, value: any): void;
    selectRows(rows: any): void;
    _updateRowSelection(e: any, row: any): void;
    _rowMouseDown(e: any, obj: any): void;
    _rowMouseUp(e: any, obj: any): void;
    sort(column: any, order: any, comparer: any): void;
    _getCellIndexInCollection(cells: any, colIndex: any, colId: any): number;
    _isSortingAllowed(): boolean;
    _isSortingColumn(column: any): boolean;
    _applySorting(list: any): void;
    _getCellClassStyle(cellObj: any): any;
    _getCellInlineStyle(cellObj: any): any;
    getClass(obj: any): any;
    _getClassFieldName(type: any): string;
    _getColumnInlineStyle(value: any): {
        header: string;
        body: string;
        footer: string;
    };
    _getColumnFooterInlineStyle(value: any): any;
    _getColumnHeaderInlineStyle(value: any): any;
    _getEditorFormClass(): {
        [x: string]: boolean;
    } | undefined;
    _getScrollCornerClass(): {};
    getStyle(obj: any): any;
    _getStyleFieldName(type: any): string;
    setClass(value: any, obj: any): void;
    setStyle(value: any, obj: any): void;
    _updateEditorFormClass(): void;
    _editorFormClass: {
        [x: string]: boolean;
    } | undefined;
    _updateColumnStyle(obj: any): void;
    _updateRowStyle(obj: any): void;
    _updateRowStyleByIndex(index: any): void;
    _getDefaultRowTemplate(rowObj: any, cellObj: any): TemplateResult;
    _getContentTemplate(row: any, type: any): TemplateResult | null;
    _getRowEditorTemplate(rowObj: any): TemplateResult;
    _getRowEditorSaveTemplate(rowObj: any): TemplateResult;
    _columnTouchStart(e: any, obj: any): void;
    _rowTouchStart(e: any, obj: any): void;
    _ctrlTouchStart(e: any): void;
    _ctrlTouchEnd(e: any): void;
    _processUpdateLayout(optimal: any): Promise<any>;
    resumeLayout(): void;
    suspendLayout(): void;
    _updateCurrentLayout(full: any, flag: any): void;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import IntegralUIFilterService from "../services/integralui.filter.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
