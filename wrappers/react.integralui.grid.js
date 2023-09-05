import React, { Component } from "react";

import '../components/integralui.grid.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUIGridComponent = function (_Component) {
    _inherits(IntegralUIGridComponent, _Component);

    function IntegralUIGridComponent(props) {
        _classCallCheck(this, IntegralUIGridComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUIGridComponent.__proto__ || Object.getPrototypeOf(IntegralUIGridComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUIGridComponent, [{
        key: '_isCtrlDefined',
        value: function _isCtrlDefined() {
            return this.ctrlRef && this.ctrlRef.current ? true : false;
        }

        //
        // Events ------------------------------------------------------------------------------------
        //

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this._initProps();

            if (this._isCtrlDefined()) {
                if (this.props.afterCollapse) this.ctrlRef.current.addEventListener('afterCollapse', function (e) {
                    return _this2.props.afterCollapse(e);
                });
                if (this.props.afterExpand) this.ctrlRef.current.addEventListener('afterExpand', function (e) {
                    return _this2.props.afterExpand(e);
                });
                if (this.props.afterSelect) this.ctrlRef.current.addEventListener('afterSelect', function (e) {
                    return _this2.props.afterSelect(e);
                });
                if (this.props.beforeCollapse) this.ctrlRef.current.addEventListener('beforeCollapse', function (e) {
                    return _this2.props.beforeCollapse(e);
                });
                if (this.props.beforeEdit) this.ctrlRef.current.addEventListener('beforeEdit', function (e) {
                    return _this2.props.beforeEdit(e);
                });
                if (this.props.beforeExpand) this.ctrlRef.current.addEventListener('beforeExpand', function (e) {
                    return _this2.props.beforeExpand(e);
                });
                if (this.props.beforeSelect) this.ctrlRef.current.addEventListener('beforeSelect', function (e) {
                    return _this2.props.beforeSelect(e);
                });
                if (this.props.cellClick) this.ctrlRef.current.addEventListener('cellClick', function (e) {
                    return _this2.props.cellClick(e);
                });
                if (this.props.cellDblClick) this.ctrlRef.current.addEventListener('cellDblClick', function (e) {
                    return _this2.props.cellDblClick(e);
                });
                if (this.props.cellHover) this.ctrlRef.current.addEventListener('cellHover', function () {
                    return _this2.props.cellHover();
                });
                if (this.props.cellTouched) this.ctrlRef.current.addEventListener('cellTouched', function () {
                    return _this2.props.cellTouched();
                });
                if (this.props.columnHover) this.ctrlRef.current.addEventListener('columnHover', function (e) {
                    return _this2.props.columnHover(e);
                });
                if (this.props.change) this.ctrlRef.current.addEventListener('change', function (e) {
                    return _this2.props.change(e);
                });
                if (this.props.columnAdding) this.ctrlRef.current.addEventListener('columnAdding', function (e) {
                    return _this2.props.columnAdding(e);
                });
                if (this.props.columnClick) this.ctrlRef.current.addEventListener('columnClick', function (e) {
                    return _this2.props.columnClick(e);
                });
                if (this.props.columnDblClick) this.ctrlRef.current.addEventListener('columnDblClick', function (e) {
                    return _this2.props.columnDblClick(e);
                });
                if (this.props.columnHover) this.ctrlRef.current.addEventListener('columnHover', function (e) {
                    return _this2.props.columnHover(e);
                });
                if (this.props.columnOrderChanged) this.ctrlRef.current.addEventListener('columnOrderChanged', function (e) {
                    return _this2.props.columnOrderChanged(e);
                });
                if (this.props.columnRemoved) this.ctrlRef.current.addEventListener('columnRemoved', function (e) {
                    return _this2.props.columnRemoved(e);
                });
                if (this.props.columnRemoving) this.ctrlRef.current.addEventListener('columnRemoving', function (e) {
                    return _this2.props.columnRemoving(e);
                });
                if (this.props.columnRightClick) this.ctrlRef.current.addEventListener('columnRightClick', function (e) {
                    return _this2.props.columnRightClick(e);
                });
                if (this.props.columnSizeChanged) this.ctrlRef.current.addEventListener('columnSizeChanged', function (e) {
                    return _this2.props.columnSizeChanged(e);
                });
                if (this.props.columnSortClick) this.ctrlRef.current.addEventListener('columnSortClick', function (e) {
                    return _this2.props.columnSortClick(e);
                });
                if (this.props.dataChanging) this.ctrlRef.current.addEventListener('dataChanging', function (e) {
                    return _this2.props.dataChanging(e);
                });
                if (this.props.dataChanged) this.ctrlRef.current.addEventListener('dataChanged', function (e) {
                    return _this2.props.dataChanged(e);
                });
                if (this.props.dataInvalid) this.ctrlRef.current.addEventListener('dataInvalid', function (e) {
                    return _this2.props.dataInvalid(e);
                });
                if (this.props.dragDrop) this.ctrlRef.current.addEventListener('dragDrop', function (e) {
                    return _this2.props.dragDrop(e);
                });
                if (this.props.dragDropComplete) this.ctrlRef.current.addEventListener('dragDropComplete', function (e) {
                    return _this2.props.dragDropComplete(e);
                });
                if (this.props.dragEnd) this.ctrlRef.current.addEventListener('dragEnd', function (e) {
                    return _this2.props.dragEnd(e);
                });
                if (this.props.dragEnter) this.ctrlRef.current.addEventListener('dragEnter', function (e) {
                    return _this2.props.dragEnter(e);
                });
                if (this.props.dragLeave) this.ctrlRef.current.addEventListener('dragLeave', function (e) {
                    return _this2.props.dragLeave(e);
                });
                if (this.props.dragOver) this.ctrlRef.current.addEventListener('dragOver', function (e) {
                    return _this2.props.dragOver(e);
                });
                if (this.props.dragStart) this.ctrlRef.current.addEventListener('dragStart', function (e) {
                    return _this2.props.dragStart(e);
                });
                if (this.props.enabledChanged) this.ctrlRef.current.addEventListener('enabledChanged', function (e) {
                    return _this2.props.enabledChanged(e);
                });
                if (this.props.filterChanged) this.ctrlRef.current.addEventListener('filterChanged', function (e) {
                    return _this2.props.filterChanged(e);
                });
                if (this.props.gotFocus) this.ctrlRef.current.addEventListener('gotFocus', function (e) {
                    return _this2.props.gotFocus(e);
                });
                if (this.props.groupAdded) this.ctrlRef.current.removeEventListener('groupAdded', function (e) {
                    return _this2.props.groupAdded(e);
                });
                if (this.props.groupAdding) this.ctrlRef.current.removeEventListener('groupAdding', function (e) {
                    return _this2.props.groupAdding(e);
                });
                if (this.props.groupOrderChanged) this.ctrlRef.current.addEventListener('groupOrderChanged', function (e) {
                    return _this2.props.groupOrderChanged(e);
                });
                if (this.props.groupRemoved) this.ctrlRef.current.removeEventListener('groupRemoved', function (e) {
                    return _this2.props.groupRemoved(e);
                });
                if (this.props.groupRemoving) this.ctrlRef.current.removeEventListener('groupRemoving', function (e) {
                    return _this2.props.groupRemoving(e);
                });
                if (this.props.keyDown) this.ctrlRef.current.addEventListener('keyDown', function (e) {
                    return _this2.props.keyDown(e);
                });
                if (this.props.keyPress) this.ctrlRef.current.addEventListener('keyPress', function (e) {
                    return _this2.props.keyPress(e);
                });
                if (this.props.keyUp) this.ctrlRef.current.addEventListener('keyUp', function (e) {
                    return _this2.props.keyUp(e);
                });
                if (this.props.lostFocus) this.ctrlRef.current.addEventListener('lostFocus', function (e) {
                    return _this2.props.lostFocus(e);
                });
                if (this.props.loadComplete) this.ctrlRef.current.addEventListener('loadComplete', function () {
                    return _this2.props.loadComplete();
                });
                if (this.props.pageChanged) this.ctrlRef.current.addEventListener('pageChanged', function (e) {
                    return _this2.props.pageChanged(e);
                });
                if (this.props.rowAdded) this.ctrlRef.current.addEventListener('rowAdded', function (e) {
                    return _this2.props.rowAdded(e);
                });
                if (this.props.rowAdding) this.ctrlRef.current.addEventListener('rowAdding', function (e) {
                    return _this2.props.rowAdding(e);
                });
                if (this.props.rowClick) this.ctrlRef.current.addEventListener('rowClick', function (e) {
                    return _this2.props.rowClick(e);
                });
                if (this.props.rowDblClick) this.ctrlRef.current.addEventListener('rowDblClick', function (e) {
                    return _this2.props.rowDblClick(e);
                });
                if (this.props.rowHover) this.ctrlRef.current.addEventListener('rowHover', function (e) {
                    return _this2.props.rowHover(e);
                });
                if (this.props.rowRemoved) this.ctrlRef.current.addEventListener('rowRemoved', function (e) {
                    return _this2.props.rowRemoved(e);
                });
                if (this.props.rowRemoving) this.ctrlRef.current.addEventListener('rowRemoving', function (e) {
                    return _this2.props.rowRemoving(e);
                });
                if (this.props.rowRightClick) this.ctrlRef.current.addEventListener('rowRightClick', function (e) {
                    return _this2.props.rowRightClick(e);
                });
                if (this.props.rowsCleared) this.ctrlRef.current.addEventListener('rowsCleared', function (e) {
                    return _this2.props.rowsCleared(e);
                });
                if (this.props.scrollPosChanged) this.ctrlRef.current.addEventListener('scrollPosChanged', function (e) {
                    return _this2.props.scrollPosChanged(e);
                });
                if (this.props.selectionChanged) this.ctrlRef.current.addEventListener('selectionChanged', function (e) {
                    return _this2.props.selectionChanged(e);
                });
                if (this.props.sizeChanged) this.ctrlRef.current.addEventListener('sizeChanged', function (e) {
                    return _this2.props.sizeChanged(e);
                });
                if (this.props.stateChanged) this.ctrlRef.current.addEventListener('stateChanged', function (e) {
                    return _this2.props.stateChanged(e);
                });
                if (this.props.updateComplete) this.ctrlRef.current.addEventListener('updateComplete', function (e) {
                    return _this2.props.updateComplete(e);
                });
                if (this.props.valueChanged) this.ctrlRef.current.addEventListener('valueChanged', function (e) {
                    return _this2.props.valueChanged(e);
                });
                if (this.props.valueChanging) this.ctrlRef.current.addEventListener('valueChanging', function (e) {
                    return _this2.props.valueChanging(e);
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this._isCtrlDefined()) {
                if (this.props.afterCollapse) this.ctrlRef.current.removeEventListener('afterCollapse', this.props.afterCollapse);
                if (this.props.afterExpand) this.ctrlRef.current.removeEventListener('afterExpand', this.props.afterExpand);
                if (this.props.afterSelect) this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
                if (this.props.beforeCollapse) this.ctrlRef.current.removeEventListener('beforeCollapse', this.props.beforeCollapse);
                if (this.props.beforeEdit) this.ctrlRef.current.removeEventListener('beforeEdit    ', this.props.beforeEdit);
                if (this.props.beforeExpand) this.ctrlRef.current.removeEventListener('beforeExpand', this.props.beforeExpand);
                if (this.props.beforeSelect) this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
                if (this.props.cellClick) this.ctrlRef.current.removeEventListener('cellClick', this.props.cellClick);
                if (this.props.cellDblClick) this.ctrlRef.current.removeEventListener('cellDblClick', this.props.cellDblClick);
                if (this.props.cellHover) this.ctrlRef.current.removeEventListener('cellHover', this.props.cellHover);
                if (this.props.cellTouched) this.ctrlRef.current.removeEventListener('cellTouched', this.props.cellTouched);
                if (this.props.columnHover) this.ctrlRef.current.removeEventListener('columnHover', this.props.columnHover);
                if (this.props.change) this.ctrlRef.current.removeEventListener('change', this.props.change);
                if (this.props.columnAdded) this.ctrlRef.current.removeEventListener('columnAdded', this.props.columnAdded);
                if (this.props.columnAdding) this.ctrlRef.current.removeEventListener('columnAdding', this.props.columnAdding);
                if (this.props.columnClick) this.ctrlRef.current.removeEventListener('columnClick', this.props.columnClick);
                if (this.props.columnDblClick) this.ctrlRef.current.removeEventListener('columnDblClick', this.props.columnDblClick);
                if (this.props.columnHover) this.ctrlRef.current.removeEventListener('columnHover', this.props.columnHover);
                if (this.props.columnOrderChanged) this.ctrlRef.current.removeEventListener('columnOrderChanged', this.props.columnOrderChanged);
                if (this.props.columnRemoved) this.ctrlRef.current.removeEventListener('columnRemoved', this.props.columnRemoved);
                if (this.props.columnRemoving) this.ctrlRef.current.removeEventListener('columnRemoving', this.props.columnRemoving);
                if (this.props.columnRightClick) this.ctrlRef.current.removeEventListener('columnRightClick', this.props.columnRightClick);
                if (this.props.columnSizeChanged) this.ctrlRef.current.removeEventListener('columnSizeChanged', this.props.columnSizeChanged);
                if (this.props.columnSortClick) this.ctrlRef.current.removeEventListener('columnSortClick', this.props.columnSortClick);
                if (this.props.dataChanging) this.ctrlRef.current.removeEventListener('dataChanging', this.props.dataChanging);
                if (this.props.dataChanged) this.ctrlRef.current.removeEventListener('dataChanged', this.props.dataChanged);
                if (this.props.dataInvalid) this.ctrlRef.current.removeEventListener('dataInvalid', this.props.dataInvalid);
                if (this.props.dragDrop) this.ctrlRef.current.removeEventListener('dragDrop', this.props.dragDrop);
                if (this.props.dragDropComplete) this.ctrlRef.current.removeEventListener('dragDropComplete', this.props.dragDropComplete);
                if (this.props.dragEnd) this.ctrlRef.current.removeEventListener('dragEnd', this.props.dragEnd);
                if (this.props.dragEnter) this.ctrlRef.current.removeEventListener('dragEnter', this.props.dragEnter);
                if (this.props.dragLeave) this.ctrlRef.current.removeEventListener('dragLeave', this.props.dragLeave);
                if (this.props.dragOver) this.ctrlRef.current.removeEventListener('dragOver', this.props.dragOver);
                if (this.props.dragStart) this.ctrlRef.current.removeEventListener('dragStart', this.props.dragStart);
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
                if (this.props.filterChanged) this.ctrlRef.current.removeEventListener('filterChanged', this.props.filterChanged);
                if (this.props.gotFocus) this.ctrlRef.current.removeEventListener('gotFocus', this.props.gotFocus);
                if (this.props.groupAdded) this.ctrlRef.current.removeEventListener('groupAdded', this.props.groupAdded);
                if (this.props.groupAdding) this.ctrlRef.current.removeEventListener('groupAdding', this.props.groupAdding);
                if (this.props.groupOrderChanged) this.ctrlRef.current.removeEventListener('groupOrderChanged', this.props.groupOrderChanged);
                if (this.props.groupRemoved) this.ctrlRef.current.removeEventListener('groupRemoved', this.props.groupRemoved);
                if (this.props.groupRemoving) this.ctrlRef.current.removeEventListener('groupRemoving', this.props.groupRemoving);
                if (this.props.keyDown) this.ctrlRef.current.removeEventListener('keyDown', this.props.keyDown);
                if (this.props.keyPress) this.ctrlRef.current.removeEventListener('keyPress', this.props.keyPress);
                if (this.props.keyUp) this.ctrlRef.current.removeEventListener('keyUp', this.props.keyUp);
                if (this.props.lostFocus) this.ctrlRef.current.removeEventListener('lostFocus', this.props.lostFocus);
                if (this.props.loadComplete) this.ctrlRef.current.removeEventListener('loadComplete', this.props.loadComplete);
                if (this.props.pageChanged) this.ctrlRef.current.removeEventListener('pageChanged', this.props.pageChanged);
                if (this.props.rowAdded) this.ctrlRef.current.removeEventListener('rowAdded', this.props.rowAdded);
                if (this.props.rowAdding) this.ctrlRef.current.removeEventListener('rowAdding', this.props.rowAdding);
                if (this.props.rowClick) this.ctrlRef.current.removeEventListener('rowClick', this.props.rowClick);
                if (this.props.rowDblClick) this.ctrlRef.current.removeEventListener('rowDblClick', this.props.rowDblClick);
                if (this.props.rowHover) this.ctrlRef.current.removeEventListener('rowHover', this.props.rowHover);
                if (this.props.rowRemoved) this.ctrlRef.current.removeEventListener('rowRemoved', this.props.rowRemoved);
                if (this.props.rowRemoving) this.ctrlRef.current.removeEventListener('rowRemoving', this.props.rowRemoving);
                if (this.props.rowRightClick) this.ctrlRef.current.removeEventListener('rowRightClick', this.props.rowRightClick);
                if (this.props.rowsCleared) this.ctrlRef.current.removeEventListener('rowsCleared', this.props.rowsCleared);
                if (this.props.scrollPosChanged) this.ctrlRef.current.removeEventListener('scrollPosChanged', this.props.scrollPosChanged);
                if (this.props.selectionChanged) this.ctrlRef.current.removeEventListener('selectionChanged', this.props.selectionChanged);
                if (this.props.sizeChanged) this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
                if (this.props.stateChanged) this.ctrlRef.current.removeEventListener('stateChanged', this.props.stateChanged);
                if (this.props.updateComplete) this.ctrlRef.current.removeEventListener('updateComplete', this.props.updateComplete);
                if (this.props.valueChanged) this.ctrlRef.current.removeEventListener('valueChanged', this.props.valueChanged);
                if (this.props.valueChanging) this.ctrlRef.current.removeEventListener('valueChanging', this.props.valueChanging);
            }
        }

        //
        // Properties --------------------------------------------------------------------------------
        //

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            this._updateData(prevProps);
        }
    }, {
        key: '_initProps',
        value: function _initProps() {
            if (this._isCtrlDefined()) {
                if (this._isDefined(this.props.allowAnimation)) this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
                if (this._isDefined(this.props.allowUpdate)) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this._isDefined(this.props.allowColumnReorder)) this.ctrlRef.current.allowColumnReorder = this.props.allowColumnReorder;
                if (this._isDefined(this.props.allowDrag)) this.ctrlRef.current.allowDrag = this.props.allowDrag;
                if (this._isDefined(this.props.allowDrop)) this.ctrlRef.current.allowDrop = this.props.allowDrop;
                if (this._isDefined(this.props.allowFilter)) this.ctrlRef.current.allowFilter = this.props.allowFilter;
                if (this._isDefined(this.props.allowFocus)) this.ctrlRef.current.allowFocus = this.props.allowFocus;
                if (this._isDefined(this.props.autoExpand)) this.ctrlRef.current.autoExpand = this.props.autoExpand;
                if (this._isDefined(this.props.autoSizeColumns)) this.ctrlRef.current.autoSizeColumns = this.props.autoSizeColumns;
                if (this._isDefined(this.props.colorScheme)) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.columns)) this.ctrlRef.current.columns = this.props.columns;
                if (this._isDefined(this.props.contentVisibility)) this.ctrlRef.current.contentVisibility = this.props.contentVisibility;
                if (this._isDefined(this.props.customStyle)) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.data)) this.ctrlRef.current.data = this.props.data;
                if (this._isDefined(this.props.dataFields)) this.ctrlRef.current.dataFields = this.props.dataFields;
                if (this._isDefined(this.props.editMode)) this.ctrlRef.current.editMode = this.props.editMode;
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.expandColumnIndex)) this.ctrlRef.current.expandColumnIndex = this.props.expandColumnIndex;
                if (this._isDefined(this.props.footerHeight)) this.ctrlRef.current.footerHeight = this.props.footerHeight;
                if (this._isDefined(this.props.footerTemplate)) this.ctrlRef.current.footerTemplate = this.props.footerTemplate;
                if (this._isDefined(this.props.gridLines)) this.ctrlRef.current.gridLines = this.props.gridLines;
                if (this._isDefined(this.props.grouping)) this.ctrlRef.current.grouping = this.props.grouping;
                if (this._isDefined(this.props.groups)) this.ctrlRef.current.groups = this.props.groups;
                if (this._isDefined(this.props.headerHeight)) this.ctrlRef.current.headerHeight = this.props.headerHeight;
                if (this._isDefined(this.props.headerTemplate)) this.ctrlRef.current.headerTemplate = this.props.headerTemplate;
                if (this._isDefined(this.props.inlineEditor)) this.ctrlRef.current.inlineEditor = this.props.inlineEditor;
                if (this._isDefined(this.props.inlineFilter)) this.ctrlRef.current.inlineFilter = this.props.inlineFilter;
                if (this._isDefined(this.props.mouseWheelSpeed)) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.paging)) this.ctrlRef.current.paging = this.props.paging;
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.rowHeight)) this.ctrlRef.current.rowHeight = this.props.rowHeight;
                if (this._isDefined(this.props.rows)) this.ctrlRef.current.rows = this.props.rows;
                if (this._isDefined(this.props.rowHoverTemplate)) this.ctrlRef.current.rowHoverTemplate = this.props.rowHoverTemplate;
                if (this._isDefined(this.props.rowSelectTemplate)) this.ctrlRef.current.rowSelectTemplate = this.props.rowSelectTemplate;
                if (this._isDefined(this.props.rowTemplate)) this.ctrlRef.current.rowTemplate = this.props.rowTemplate;
                if (this._isDefined(this.props.selectedColumn)) this.ctrlRef.current.selectedColumn = this.props.selectedColumn;
                if (this._isDefined(this.props.selectedRow)) this.ctrlRef.current.selectedRow = this.props.selectedRow;
                if (this._isDefined(this.props.selectionMode)) this.ctrlRef.current.selectionMode = this.props.selectionMode;
                if (this._isDefined(this.props.showExpandBox)) this.ctrlRef.current.showExpandBox = this.props.showExpandBox;
                if (this._isDefined(this.props.showFooter)) this.ctrlRef.current.showFooter = this.props.showFooter;
                if (this._isDefined(this.props.showHeader)) this.ctrlRef.current.showHeader = this.props.showHeader;
                if (this._isDefined(this.props.showScroll)) this.ctrlRef.current.showScroll = this.props.showScroll;
                if (this._isDefined(this.props.size)) this.ctrlRef.current.size = this.props.size;
                if (this._isDefined(this.props.sorting)) this.ctrlRef.current.sorting = this.props.sorting;
                if (this._isDefined(this.props.sortMode)) this.ctrlRef.current.sortMode = this.props.sortMode;
                if (this._isDefined(this.props.state)) this.ctrlRef.current.state = this.props.state;
                if (this._isDefined(this.props.theme)) this.ctrlRef.current.theme = this.props.theme;
                if (this._isDefined(this.props.useValidation)) this.ctrlRef.current.useValidation = this.props.useValidation;
            }
        }
    }, {
        key: '_isDefined',
        value: function _isDefined(value) {
            return value !== undefined ? true : false;
        }
    }, {
        key: '_updateData',
        value: function _updateData(prevProps) {
            if (this._isCtrlDefined()) {
                if (this.props.allowAnimation !== prevProps.allowAnimation) this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
                if (this.props.allowUpdate !== prevProps.allowUpdate) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this.props.allowColumnReorder !== prevProps.allowColumnReorder) this.ctrlRef.current.allowColumnReorder = this.props.allowColumnReorder;
                if (this.props.allowDrag !== prevProps.allowDrag) this.ctrlRef.current.allowDrag = this.props.allowDrag;
                if (this.props.allowDrop !== prevProps.allowDrop) this.ctrlRef.current.allowDrop = this.props.allowDrop;
                if (this.props.allowFilter !== prevProps.allowFilter) this.ctrlRef.current.allowFilter = this.props.allowFilter;
                if (this.props.allowFocus !== prevProps.allowFocus) this.ctrlRef.current.allowFocus = this.props.allowFocus;
                if (this.props.autoExpand !== prevProps.autoExpand) this.ctrlRef.current.autoExpand = this.props.autoExpand;
                if (this.props.autoSizeColumns !== prevProps.autoSizeColumns) this.ctrlRef.current.autoSizeColumns = this.props.autoSizeColumns;
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.columns)) this.ctrlRef.current.columns = this.props.columns;
                if (this.props.contentVisibility !== prevProps.contentVisibility) this.ctrlRef.current.contentVisibility = this.props.contentVisibility;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.dataFields !== prevProps.dataFields) this.ctrlRef.current.dataFields = this.props.dataFields;
                if (this.props.editMode !== prevProps.editMode) this.ctrlRef.current.editMode = this.props.editMode;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this.props.expandColumnIndex !== prevProps.expandColumnIndex) this.ctrlRef.current.expandColumnIndex = this.props.expandColumnIndex;
                if (this.props.gridLines !== prevProps.gridLines) this.ctrlRef.current.gridLines = this.props.gridLines;
                if (this._isDefined(this.props.groups)) this.ctrlRef.current.groups = this.props.groups;
                if (this.props.footerHeight !== prevProps.footerHeight) this.ctrlRef.current.footerHeight = this.props.footerHeight;
                if (this._isDefined(this.props.footerTemplate)) this.ctrlRef.current.footerTemplate = this.props.footerTemplate;
                if (this.props.grouping !== prevProps.grouping) this.ctrlRef.current.grouping = this.props.grouping;
                if (this.props.headerHeight !== prevProps.headerHeight) this.ctrlRef.current.headerHeight = this.props.headerHeight;
                if (this._isDefined(this.props.headerTemplate)) this.ctrlRef.current.headerTemplate = this.props.headerTemplate;
                if (this.props.inlineEditor !== prevProps.inlineEditor) this.ctrlRef.current.inlineEditor = this.props.inlineEditor;
                if (this.props.inlineFilter !== prevProps.inlineFilter) this.ctrlRef.current.inlineFilter = this.props.inlineFilter;
                if (this.props.paging !== prevProps.paging) this.ctrlRef.current.paging = this.props.paging;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.rowHeight !== prevProps.rowHeight) this.ctrlRef.current.rowHeight = this.props.rowHeight;
                if (this._isDefined(this.props.rows)) this.ctrlRef.current.rows = this.props.rows;
                if (this._isDefined(this.props.rowHoverTemplate)) this.ctrlRef.current.rowHoverTemplate = this.props.rowHoverTemplate;
                if (this._isDefined(this.props.rowSelectTemplate)) this.ctrlRef.current.rowSelectTemplate = this.props.rowSelectTemplate;
                if (this._isDefined(this.props.rowTemplate)) this.ctrlRef.current.rowTemplate = this.props.rowTemplate;
                if (this.props.selectedColumn !== prevProps.selectedColumn) this.ctrlRef.current.selectedColumn = this.props.selectedColumn;
                if (this.props.selectedRow !== prevProps.selectedRow) this.ctrlRef.current.selectedRow = this.props.selectedRow;
                if (this.props.selectionMode !== prevProps.selectionMode) this.ctrlRef.current.selectionMode = this.props.selectionMode;
                if (this.props.showExpandBox !== prevProps.showExpandBox) this.ctrlRef.current.showExpandBox = this.props.showExpandBox;
                if (this.props.showFooter !== prevProps.showFooter) this.ctrlRef.current.showFooter = this.props.showFooter;
                if (this.props.showHeader !== prevProps.showHeader) this.ctrlRef.current.showHeader = this.props.showHeader;
                if (this.props.showScroll !== prevProps.showScroll) this.ctrlRef.current.showScroll = this.props.showScroll;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
                if (this.props.sorting !== prevProps.sorting) this.ctrlRef.current.sorting = this.props.sorting;
                if (this.props.sortMode !== prevProps.sortMode) this.ctrlRef.current.sortMode = this.props.sortMode;
                if (this.props.state !== prevProps.state) this.ctrlRef.current.state = this.props.state;
                if (this.props.theme !== prevProps.theme) this.ctrlRef.current.theme = this.props.theme;
                if (this.props.useValidation !== prevProps.useValidation) this.ctrlRef.current.useValidation = this.props.useValidation;
            }
        }

        //
        // Methods -----------------------------------------------------------------------------------
        //

        // Data --------------------------------------------------------------------------------------

    }, {
        key: 'addColumn',
        value: function addColumn(column) {
            if (this._isCtrlDefined()) this.ctrlRef.current.addColumn(column);
        }
    }, {
        key: 'addRow',
        value: function addRow(row, parent) {
            if (this._isCtrlDefined()) this.ctrlRef.current.addRow(row, parent);
        }
    }, {
        key: 'clearColumns',
        value: function clearColumns() {
            if (this._isCtrlDefined()) this.ctrlRef.current.clearColumns();
        }
    }, {
        key: 'clearRows',
        value: function clearRows(parent) {
            if (this._isCtrlDefined()) this.ctrlRef.current.clearRows(parent);
        }
    }, {
        key: 'insertColumnAfter',
        value: function insertColumnAfter(column, refColumn) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertColumnAfter(column, refColumn);
        }
    }, {
        key: 'insertColumnAt',
        value: function insertColumnAt(column, index) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertColumnAt(column, index);
        }
    }, {
        key: 'insertColumnBefore',
        value: function insertColumnBefore(column, refColumn) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertColumnBefore(column, refColumn);
        }
    }, {
        key: 'loadData',
        value: function loadData(data, fields, incremental) {
            if (this._isCtrlDefined()) this.ctrlRef.current.loadData(data, fields, incremental);
        }
    }, {
        key: 'insertRowAfter',
        value: function insertRowAfter(row, refRow) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertRowAfter(row, refRow);
        }
    }, {
        key: 'insertRowAt',
        value: function insertRowAt(row, index, parent) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertRowAt(row, index, parent);
        }
    }, {
        key: 'insertRowBefore',
        value: function insertRowBefore(row, refRow) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertRowBefore(row, refRow);
        }
    }, {
        key: 'removeColumn',
        value: function removeColumn(column) {
            if (this._isCtrlDefined()) this.ctrlRef.current.removeColumn(column);
        }
    }, {
        key: 'removeColumnAt',
        value: function removeColumnAt(index) {
            if (this._isCtrlDefined()) this.ctrlRef.current.removeColumnAt(index);
        }
    }, {
        key: 'removeRow',
        value: function removeRow(row) {
            if (this._isCtrlDefined()) this.ctrlRef.current.removeRow(row);
        }
    }, {
        key: 'removeRowAt',
        value: function removeRowAt(index, parent) {
            if (this._isCtrlDefined()) this.ctrlRef.current.removeRowAt(index, parent);
        }

        // Editing -----------------------------------------------------------------------------------

    }, {
        key: 'beginEdit',
        value: function beginEdit(row) {
            if (this._isCtrlDefined()) this.ctrlRef.current.beginEdit(row);
        }
    }, {
        key: 'endEdit',
        value: function endEdit(save) {
            if (this._isCtrlDefined()) this.ctrlRef.current.endEdit(save);
        }

        // Expand/Colapse ----------------------------------------------------------------------------

    }, {
        key: 'collapse',
        value: function collapse(row) {
            if (this._isCtrlDefined()) this.ctrlRef.current.collapse(row);
        }
    }, {
        key: 'expand',
        value: function expand(row) {
            if (this._isCtrlDefined()) this.ctrlRef.current.expand(row);
        }
    }, {
        key: 'toggle',
        value: function toggle(row, value) {
            if (this._isCtrlDefined()) this.ctrlRef.current.toggle(row, value);
        }

        // Export ------------------------------------------------------------------------------------

    }, {
        key: 'exportToCSV',
        value: function exportToCSV() {
            return this._isCtrlDefined() ? this.ctrlRef.current.exportToCSV() : null;
        }
    }, {
        key: 'exportToJSON',
        value: function exportToJSON(columnFields, rowFields, spacing, flat) {
            return this._isCtrlDefined() ? this.ctrlRef.current.exportToJSON(columnFields, rowFields, spacing, flat) : null;
        }

        // Filtering ---------------------------------------------------------------------------------

    }, {
        key: 'filter',
        value: function filter(column, params) {
            if (this._isCtrlDefined()) this.ctrlRef.current.filter(column, params);
        }

        // General -----------------------------------------------------------------------------------

    }, {
        key: 'cloneRow',
        value: function cloneRow(row) {
            return this._isCtrlDefined() ? this.ctrlRef.current.cloneRow(row) : null;
        }
    }, {
        key: 'getColumnById',
        value: function getColumnById(id) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getColumnById(id) : null;
        }
    }, {
        key: 'getCellByColumnId',
        value: function getCellByColumnId(list, id) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getCellByColumnId(list, id) : null;
        }
    }, {
        key: 'getColumnById',
        value: function getColumnById(id) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getColumnById(id) : null;
        }
    }, {
        key: 'getColumnParent',
        value: function getColumnParent(column) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getColumnParent(column) : null;
        }
    }, {
        key: 'getFullList',
        value: function getFullList() {
            return this._isCtrlDefined() ? this.ctrlRef.current.getFullList() : [];
        }
    }, {
        key: 'getList',
        value: function getList(key, parent) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getList(key, parent) : null;
        }
    }, {
        key: 'getSize',
        value: function getSize() {
            return this._isCtrlDefined() ? this.ctrlRef.current.getSize() : { width: 0, height: 0 };
        }
    }, {
        key: 'isColumnVisible',
        value: function isColumnVisible(column) {
            return this._isCtrlDefined() ? this.ctrlRef.current.isColumnVisible(column) : false;
        }
    }, {
        key: 'isRowHovered',
        value: function isRowHovered(row) {
            return this._isCtrlDefined() ? this.ctrlRef.current.isRowHovered(row) : false;
        }
    }, {
        key: 'isRowSelected',
        value: function isRowSelected(row) {
            return this._isCtrlDefined() ? this.ctrlRef.current.isRowSelected(row) : false;
        }
    }, {
        key: 'moveColumn',
        value: function moveColumn(column, direction, targetColumn, position) {
            if (this._isCtrlDefined()) this.ctrlRef.current.moveColumn(column, direction, targetColumn, position);
        }

        // Keyboard Navigation -----------------------------------------------------------------------

    }, {
        key: 'moveFocus',
        value: function moveFocus(direction, step) {
            if (this._isCtrlDefined()) this.ctrlRef.current.moveFocus(direction, step);
        }
    }, {
        key: 'setFocus',
        value: function setFocus(cell) {
            if (this._isCtrlDefined()) this.ctrlRef.current.setFocus(cell);
        }

        // Loading -----------------------------------------------------------------------------------

    }, {
        key: 'beginLoad',
        value: function beginLoad() {
            if (this._isCtrlDefined()) this.ctrlRef.current.beginLoad();
        }
    }, {
        key: 'endLoad',
        value: function endLoad() {
            if (this._isCtrlDefined()) this.ctrlRef.current.endLoad();
        }

        // Pagination --------------------------------------------------------------------------------

    }, {
        key: 'currentPage',
        value: function currentPage(value) {
            return this._isCtrlDefined() ? this.ctrlRef.current.currentPage(value) : 0;
        }
    }, {
        key: 'getMaxPages',
        value: function getMaxPages() {
            return this._isCtrlDefined() ? this.ctrlRef.current.getMaxPages() : 0;
        }
    }, {
        key: 'firstPage',
        value: function firstPage() {
            if (this._isCtrlDefined()) this.ctrlRef.current.firstPage();
        }
    }, {
        key: 'lastPage',
        value: function lastPage() {
            if (this._isCtrlDefined()) this.ctrlRef.current.lastPage();
        }
    }, {
        key: 'nextPage',
        value: function nextPage() {
            if (this._isCtrlDefined()) this.ctrlRef.current.nextPage();
        }
    }, {
        key: 'prevPage',
        value: function prevPage() {
            if (this._isCtrlDefined()) this.ctrlRef.current.prevPage();
        }

        // Scrolling ---------------------------------------------------------------------------------

    }, {
        key: 'scrollPos',
        value: function scrollPos(value) {
            return this._isCtrlDefined() ? this.ctrlRef.current.scrollPos(value) : { x: 0, y: 0 };
        }
    }, {
        key: 'isVerScrollVisible',
        value: function isVerScrollVisible() {
            return this._isCtrlDefined() ? this.ctrlRef.current.isVerScrollVisible() : false;
        }
    }, {
        key: 'isHorScrollVisible',
        value: function isHorScrollVisible() {
            return this._isCtrlDefined() ? this.ctrlRef.current.isHorScrollVisible() : false;
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(row) {
            if (this._isCtrlDefined()) this.ctrlRef.current.scrollTo(row);
        }

        // Search ----------------------------------------------------------------------------

    }, {
        key: 'findColumnById',
        value: function findColumnById(id) {
            return this._isCtrlDefined() ? this.ctrlRef.current.findColumnById(id) : null;
        }
    }, {
        key: 'findRowById',
        value: function findRowById(id) {
            return this._isCtrlDefined() ? this.ctrlRef.current.findRowById(id) : null;
        }
    }, {
        key: 'findRowByText',
        value: function findRowByText(text) {
            return this._isCtrlDefined() ? this.ctrlRef.current.findRowByText(text) : null;
        }

        // Selection -------------------------------------------------------------------------

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this._isCtrlDefined()) this.ctrlRef.current.clearSelection();
        }
    }, {
        key: 'selectRows',
        value: function selectRows(rows) {
            if (this._isCtrlDefined()) this.ctrlRef.current.selectRows(rows);
        }

        // Sorting -----------------------------------------------------------------------------------

    }, {
        key: 'sort',
        value: function sort(column, order, comparer) {
            if (this._isCtrlDefined()) this.ctrlRef.current.sort(column, order, comparer);
        }

        // Style -------------------------------------------------------------------------------------

    }, {
        key: 'setClass',
        value: function setClass(value, obj) {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.setClass(value, obj);
        }
    }, {
        key: 'setStyle',
        value: function setStyle(value, obj) {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.setStyle(value, obj);
        }

        // Update ------------------------------------------------------------------------------------

    }, {
        key: 'refresh',
        value: function refresh() {
            if (this._isCtrlDefined()) this.ctrlRef.current.refresh();
        }
    }, {
        key: 'resolve',
        value: function resolve(type) {
            if (this._isCtrlDefined()) this.ctrlRef.current.resolve(type);
        }
    }, {
        key: 'resumeLayout',
        value: function resumeLayout() {
            if (this._isCtrlDefined()) this.ctrlRef.current.resumeLayout();
        }
    }, {
        key: 'suspendLayout',
        value: function suspendLayout() {
            if (this._isCtrlDefined()) this.ctrlRef.current.suspendLayout();
        }
    }, {
        key: 'updateFullList',
        value: function updateFullList() {
            if (this._isCtrlDefined()) this.ctrlRef.current.updateFullList();
        }
    }, {
        key: 'updateLayout',
        value: function updateLayout(optimal) {
            if (this._isCtrlDefined()) this.ctrlRef.current.updateLayout(optimal);
        }
    }, {
        key: 'updateView',
        value: function updateView() {
            if (this._isCtrlDefined()) this.ctrlRef.current.updateView();
        }
    }, {
        key: 'wait',
        value: function wait() {
            if (this._isCtrlDefined()) this.ctrlRef.current.wait();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'iui-grid',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUIGridComponent;
}(Component);

export default IntegralUIGridComponent;