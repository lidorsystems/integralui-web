import React, { Component } from "react";

import '../components/integralui.treeview.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUITreeViewComponent = function (_Component) {
    _inherits(IntegralUITreeViewComponent, _Component);

    function IntegralUITreeViewComponent(props) {
        _classCallCheck(this, IntegralUITreeViewComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUITreeViewComponent.__proto__ || Object.getPrototypeOf(IntegralUITreeViewComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUITreeViewComponent, [{
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
                if (this.props.afterEdit) this.ctrlRef.current.addEventListener('afterEdit', function (e) {
                    return _this2.props.afterEdit(e);
                });
                if (this.props.afterExpand) this.ctrlRef.current.addEventListener('afterExpand', function (e) {
                    return _this2.props.afterExpand(e);
                });
                if (this.props.afterSelect) this.ctrlRef.current.addEventListener('afterSelect', function (e) {
                    return _this2.props.afterSelect(e);
                });
                if (this.props.beforeEdit) this.ctrlRef.current.addEventListener('beforeEdit', function (e) {
                    return _this2.props.beforeEdit(e);
                });
                if (this.props.beforeCollapse) this.ctrlRef.current.addEventListener('beforeCollapse', function (e) {
                    return _this2.props.beforeCollapse(e);
                });
                if (this.props.beforeExpand) this.ctrlRef.current.addEventListener('beforeExpand', function (e) {
                    return _this2.props.beforeExpand(e);
                });
                if (this.props.beforeSelect) this.ctrlRef.current.addEventListener('beforeSelect', function (e) {
                    return _this2.props.beforeSelect(e);
                });
                if (this.props.checkedChanged) this.ctrlRef.current.addEventListener('checkedChanged', function (e) {
                    return _this2.props.checkedChanged(e);
                });
                if (this.props.checkStateChanged) this.ctrlRef.current.addEventListener('checkStateChanged', function (e) {
                    return _this2.props.checkStateChanged(e);
                });
                if (this.props.clear) this.ctrlRef.current.addEventListener('clear', function () {
                    return _this2.props.clear();
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
                if (this.props.filtered) this.ctrlRef.current.addEventListener('filtered', function () {
                    return _this2.props.filtered();
                });
                if (this.props.itemAdded) this.ctrlRef.current.addEventListener('itemAdded', function (e) {
                    return _this2.props.itemAdded(e);
                });
                if (this.props.itemAdding) this.ctrlRef.current.addEventListener('itemAdding', function (e) {
                    return _this2.props.itemAdding(e);
                });
                if (this.props.itemClick) this.ctrlRef.current.addEventListener('itemClick', function (e) {
                    return _this2.props.itemClick(e);
                });
                if (this.props.itemDblClick) this.ctrlRef.current.addEventListener('itemDblClick', function (e) {
                    return _this2.props.itemDblClick(e);
                });
                if (this.props.itemHover) this.ctrlRef.current.addEventListener('itemHover', function (e) {
                    return _this2.props.itemHover(e);
                });
                if (this.props.itemMoved) this.ctrlRef.current.addEventListener('itemMoved', function (e) {
                    return _this2.props.itemMoved(e);
                });
                if (this.props.itemRemoved) this.ctrlRef.current.addEventListener('itemRemoved', function (e) {
                    return _this2.props.itemRemoved(e);
                });
                if (this.props.itemRemoving) this.ctrlRef.current.addEventListener('itemRemoving', function (e) {
                    return _this2.props.itemRemoving(e);
                });
                if (this.props.itemRightClick) this.ctrlRef.current.addEventListener('itemRightClick', function (e) {
                    return _this2.props.itemRightClick(e);
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
                if (this.props.loadComplete) this.ctrlRef.current.addEventListener('loadComplete', function () {
                    return _this2.props.loadComplete();
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
                if (this.props.sorted) this.ctrlRef.current.addEventListener('sorted', function () {
                    return _this2.props.sorted();
                });
                if (this.props.stateChanged) this.ctrlRef.current.addEventListener('stateChanged', function (e) {
                    return _this2.props.stateChanged(e);
                });
                if (this.props.updateComplete) this.ctrlRef.current.addEventListener('updateComplete', function () {
                    return _this2.props.updateComplete();
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this._isCtrlDefined()) {
                if (this.props.afterCollapse) this.ctrlRef.current.removeEventListener('afterCollapse', this.props.afterCollapse);
                if (this.props.afterEdit) this.ctrlRef.current.removeEventListener('afterEdit', this.props.afterEdit);
                if (this.props.afterExpand) this.ctrlRef.current.removeEventListener('afterExpand', this.props.afterExpand);
                if (this.props.afterSelect) this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
                if (this.props.beforeCollapse) this.ctrlRef.current.removeEventListener('beforeCollapse', this.props.beforeCollapse);
                if (this.props.beforeEdit) this.ctrlRef.current.removeEventListener('beforeEdit', this.props.beforeEdit);
                if (this.props.beforeExpand) this.ctrlRef.current.removeEventListener('beforeExpand', this.props.beforeExpand);
                if (this.props.beforeSelect) this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
                if (this.props.checkedChanged) this.ctrlRef.current.removeEventListener('checkedChanged', this.props.checkedChanged);
                if (this.props.checkStateChanged) this.ctrlRef.current.removeEventListener('checkStateChanged', this.props.checkStateChanged);
                if (this.props.clear) this.ctrlRef.current.removeEventListener('clear', this.props.clear);
                if (this.props.dragDrop) this.ctrlRef.current.removeEventListener('dragDrop', this.props.dragDrop);
                if (this.props.dragDropComplete) this.ctrlRef.current.removeEventListener('dragDropComplete', this.props.dragDropComplete);
                if (this.props.dragEnd) this.ctrlRef.current.removeEventListener('dragEnd', this.props.dragEnd);
                if (this.props.dragEnter) this.ctrlRef.current.removeEventListener('dragEnter', this.props.dragEnter);
                if (this.props.dragLeave) this.ctrlRef.current.removeEventListener('dragLeave', this.props.dragLeave);
                if (this.props.dragOver) this.ctrlRef.current.removeEventListener('dragOver', this.props.dragOver);
                if (this.props.dragStart) this.ctrlRef.current.removeEventListener('dragStart', this.props.dragStart);
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
                if (this.props.filtered) this.ctrlRef.current.removeEventListener('filtered', this.props.filtered);
                if (this.props.itemAdded) this.ctrlRef.current.removeEventListener('itemAdded', this.props.itemAdded);
                if (this.props.itemAdding) this.ctrlRef.current.removeEventListener('itemAdding', this.props.itemAdding);
                if (this.props.itemClick) this.ctrlRef.current.removeEventListener('itemClick', this.props.itemClick);
                if (this.props.itemDblClick) this.ctrlRef.current.removeEventListener('itemDblClick', this.props.itemDblClick);
                if (this.props.itemHover) this.ctrlRef.current.removeEventListener('itemHover', this.props.itemHover);
                if (this.props.itemMoved) this.ctrlRef.current.removeEventListener('itemMoved', this.props.itemMoved);
                if (this.props.itemRemoved) this.ctrlRef.current.removeEventListener('itemRemoved', this.props.itemRemoved);
                if (this.props.itemRemoving) this.ctrlRef.current.removeEventListener('itemRemoving', this.props.itemRemoving);
                if (this.props.itemRightClick) this.ctrlRef.current.removeEventListener('itemRightClick', this.props.itemRightClick);
                if (this.props.keyDown) this.ctrlRef.current.removeEventListener('keyDown', this.props.keyDown);
                if (this.props.keyPress) this.ctrlRef.current.removeEventListener('keyPress', this.props.keyPress);
                if (this.props.keyUp) this.ctrlRef.current.removeEventListener('keyUp', this.props.keyUp);
                if (this.props.loadComplete) this.ctrlRef.current.removeEventListener('loadComplete', this.props.loadComplete);
                if (this.props.scrollPosChanged) this.ctrlRef.current.removeEventListener('scrollPosChanged', this.props.scrollPosChanged);
                if (this.props.selectionChanged) this.ctrlRef.current.removeEventListener('selectionChanged', this.props.selectionChanged);
                if (this.props.sizeChanged) this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
                if (this.props.sorted) this.ctrlRef.current.removeEventListener('sorted', this.props.sorted);
                if (this.props.stateChanged) this.ctrlRef.current.removeEventListener('stateChanged', this.props.stateChanged);
                if (this.props.updateComplete) this.ctrlRef.current.removeEventListener('updateComplete', this.props.updateComplete);
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
                if (this._isDefined(this.props.allowDrag)) this.ctrlRef.current.allowDrag = this.props.allowDrag;
                if (this._isDefined(this.props.allowDrop)) this.ctrlRef.current.allowDrop = this.props.allowDrop;
                if (this._isDefined(this.props.allowFilter)) this.ctrlRef.current.allowFilter = this.props.allowFilter;
                if (this._isDefined(this.props.allowFocus)) this.ctrlRef.current.allowFocus = this.props.allowFocus;
                if (this._isDefined(this.props.animateInit)) this.ctrlRef.current.animateInit = this.props.animateInit;
                if (this._isDefined(this.props.autoExpand)) this.ctrlRef.current.autoExpand = this.props.autoExpand;
                if (this._isDefined(this.props.autoSize)) this.ctrlRef.current.autoSize = this.props.autoSize;
                if (this._isDefined(this.props.checkBoxes)) this.ctrlRef.current.checkBoxes = this.props.checkBoxes;
                if (this._isDefined(this.props.checkMode)) this.ctrlRef.current.checkMode = this.props.checkMode;
                if (this._isDefined(this.props.checkBoxes)) this.ctrlRef.current.checkBoxes = this.props.checkBoxes;
                if (this._isDefined(this.props.colorScheme)) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.compactMode)) this.ctrlRef.current.compactMode = this.props.compactMode;
                if (this._isDefined(this.props.dataFields)) this.ctrlRef.current.dataFields = this.props.dataFields;
                if (this._isDefined(this.props.dragDropMode)) this.ctrlRef.current.dragDropMode = this.props.dragDropMode;
                if (this._isDefined(this.props.focusedItem)) this.ctrlRef.current.focusedItem = this.props.focusedItem;
                if (this._isDefined(this.props.contentVisibility)) this.ctrlRef.current.contentVisibility = this.props.contentVisibility;
                if (this._isDefined(this.props.controlStyle)) this.ctrlRef.current.controlStyle = this.props.controlStyle;
                if (this._isDefined(this.props.customStyle)) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.data)) this.ctrlRef.current.data = this.props.data;
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.indent)) this.ctrlRef.current.indent = this.props.indent;
                if (this._isDefined(this.props.itemDisplay)) this.ctrlRef.current.itemDisplay = this.props.itemDisplay;
                if (this._isDefined(this.props.itemHoverTemplate)) this.ctrlRef.current.itemHoverTemplate = this.props.itemHoverTemplate;
                if (this._isDefined(this.props.items)) this.ctrlRef.current.items = this.props.items;
                if (this._isDefined(this.props.itemSelectTemplate)) this.ctrlRef.current.itemSelectTemplate = this.props.itemSelectTemplate;
                if (this._isDefined(this.props.itemSpacing)) this.ctrlRef.current.itemSpacing = this.props.itemSpacing;
                if (this._isDefined(this.props.itemTemplate)) this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
                if (this._isDefined(this.props.mouseWheelSpeed)) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.scrollAppearance)) this.ctrlRef.current.scrollAppearance = this.props.scrollAppearance;
                if (this._isDefined(this.props.selectedItem)) this.ctrlRef.current.selectedItem = this.props.selectedItem;
                if (this._isDefined(this.props.selectionMode)) this.ctrlRef.current.selectionMode = this.props.selectionMode;
                if (this._isDefined(this.props.showExpandBox)) this.ctrlRef.current.showExpandBox = this.props.showExpandBox;
                if (this._isDefined(this.props.showScroll)) this.ctrlRef.current.showScroll = this.props.showScroll;
                if (this._isDefined(this.props.size)) this.ctrlRef.current.size = this.props.size;
                if (this._isDefined(this.props.sorting)) this.ctrlRef.current.sorting = this.props.sorting;
                if (this._isDefined(this.props.state)) this.ctrlRef.current.state = this.props.state;
                if (this._isDefined(this.props.theme)) this.ctrlRef.current.theme = this.props.theme;
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
                if (this.props.allowDrag !== prevProps.allowDrag) this.ctrlRef.current.allowDrag = this.props.allowDrag;
                if (this.props.allowDrop !== prevProps.allowDrop) this.ctrlRef.current.allowDrop = this.props.allowDrop;
                if (this.props.allowFilter !== prevProps.allowFilter) this.ctrlRef.current.allowFilter = this.props.allowFilter;
                if (this.props.allowFocus !== prevProps.allowFocus) this.ctrlRef.current.allowFocus = this.props.allowFocus;
                if (this.props.animateInit !== prevProps.animateInit) this.ctrlRef.current.animateInit = this.props.animateInit;
                if (this.props.autoExpand !== prevProps.autoExpand) this.ctrlRef.current.autoExpand = this.props.autoExpand;
                if (this.props.autoSize !== prevProps.autoSize) this.ctrlRef.current.autoSize = this.props.autoSize;
                if (this.props.checkBoxes !== prevProps.checkBoxes) this.ctrlRef.current.checkBoxes = this.props.checkBoxes;
                if (this.props.checkMode !== prevProps.checkMode) this.ctrlRef.current.checkMode = this.props.checkMode;
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this.props.compactMode !== prevProps.compactMode) this.ctrlRef.current.compactMode = this.props.compactMode;
                if (this.props.contentVisibility !== prevProps.contentVisibility) this.ctrlRef.current.contentVisibility = this.props.contentVisibility;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.dataFields !== prevProps.dataFields) this.ctrlRef.current.dataFields = this.props.dataFields;
                if (this.props.dragDropMode !== prevProps.dragDropMode) this.ctrlRef.current.dragDropMode = this.props.dragDropMode;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this.props.focusedItem !== prevProps.focusedItem) this.ctrlRef.current.focusedItem = this.props.focusedItem;
                if (this.props.indent !== prevProps.indent) this.ctrlRef.current.indent = this.props.indent;
                if (this.props.itemDisplay !== prevProps.itemDisplay) this.ctrlRef.current.itemDisplay = this.props.itemDisplay;
                if (this._isDefined(this.props.itemHoverTemplate)) this.ctrlRef.current.itemHoverTemplate = this.props.itemHoverTemplate;
                if (this._isDefined(this.props.items)) this.ctrlRef.current.items = this.props.items;
                if (this._isDefined(this.props.itemSelectTemplate)) this.ctrlRef.current.itemSelectTemplate = this.props.itemSelectTemplate;
                if (this.props.itemSpacing !== prevProps.itemSpacing) this.ctrlRef.current.itemSpacing = this.props.itemSpacing;
                if (this._isDefined(this.props.itemTemplate)) this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
                if (this.props.mouseWheelSpeed !== prevProps.mouseWheelSpeed) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.scrollAppearance !== prevProps.scrollAppearance) this.ctrlRef.current.scrollAppearance = this.props.scrollAppearance;
                if (this.props.selectedItem !== prevProps.selectedItem) this.ctrlRef.current.selectedItem = this.props.selectedItem;
                if (this.props.selectionMode !== prevProps.selectionMode) this.ctrlRef.current.selectionMode = this.props.selectionMode;
                if (this.props.showExpandBox !== prevProps.showExpandBox) this.ctrlRef.current.showExpandBox = this.props.showExpandBox;
                if (this.props.showScroll !== prevProps.showScroll) this.ctrlRef.current.showScroll = this.props.showScroll;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
                if (this.props.sorting !== prevProps.sorting) this.ctrlRef.current.sorting = this.props.sorting;
                if (this.props.state !== prevProps.state) this.ctrlRef.current.state = this.props.state;
                if (this.props.theme !== prevProps.theme) this.ctrlRef.current.theme = this.props.theme;
            }
        }

        //
        // Methods -----------------------------------------------------------------------------------
        //

        // Add Remove --------------------------------------------------------------------------------

    }, {
        key: 'addItem',
        value: function addItem(item, parent) {
            if (this._isCtrlDefined()) this.ctrlRef.current.addItem(item, parent);
        }
    }, {
        key: 'clearItems',
        value: function clearItems(parent) {
            if (this._isCtrlDefined()) this.ctrlRef.current.clearItems(parent);
        }
    }, {
        key: 'insertItemAt',
        value: function insertItemAt(item, index, parent) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertItemAt(item, index, parent);
        }
    }, {
        key: 'insertItemBefore',
        value: function insertItemBefore(item, refItem) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertItemBefore(item, refItem);
        }
    }, {
        key: 'insertItemAfter',
        value: function insertItemAfter(item, refItem) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertItemAfter(item, refItem);
        }
    }, {
        key: 'removeItem',
        value: function removeItem(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.removeItem(item) : false;
        }
    }, {
        key: 'removeItemAt',
        value: function removeItemAt(index, parent) {
            return this._isCtrlDefined() ? this.ctrlRef.current.removeItemAt(index, parent) : false;
        }

        // Data --------------------------------------------------------------------------------------

    }, {
        key: 'loadData',
        value: function loadData(data, parent, fields, flat) {
            if (this._isCtrlDefined()) this.ctrlRef.current.loadData(data, parent, fields, flat);
        }

        // Expand / Collapse -----------------------------------------------------------------

    }, {
        key: 'collapse',
        value: function collapse(item) {
            if (this._isCtrlDefined()) this.ctrlRef.current.collapse(item);
        }
    }, {
        key: 'expand',
        value: function expand(item) {
            if (this._isCtrlDefined()) this.ctrlRef.current.expand(item);
        }
    }, {
        key: 'toggle',
        value: function toggle(item, value) {
            if (this._isCtrlDefined()) this.ctrlRef.current.toggle(item, value);
        }

        // Export ------------------------------------------------------------------------------------

    }, {
        key: 'exportToJSON',
        value: function exportToJSON(data, fields, spacing, flat) {
            return this._isCtrlDefined() ? this.ctrlRef.current.exportToJSON(data, fields, spacing, flat) : null;
        }

        // Filter  -----------------------------------------------------------------------------------

    }, {
        key: 'filter',
        value: function filter(params) {
            if (this._isCtrlDefined()) this.ctrlRef.current.filter(params);
        }

        // General -----------------------------------------------------------------------------------

    }, {
        key: 'cloneItem',
        value: function cloneItem(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.cloneItem(item) : null;
        }
    }, {
        key: 'getElemRef',
        value: function getElemRef() {
            return this._isCtrlDefined() ? this.ctrlRef.current.getElemRef() : null;
        }
    }, {
        key: 'getFullList',
        value: function getFullList() {
            return this._isCtrlDefined() ? this.ctrlRef.current.getFullList() : null;
        }
    }, {
        key: 'getItemLevel',
        value: function getItemLevel(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getItemLevel(item) : 0;
        }
    }, {
        key: 'getItemParent',
        value: function getItemParent(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getItemParent(item) : null;
        }
    }, {
        key: 'getList',
        value: function getList(key, parent) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getList(key, parent) : null;
        }
    }, {
        key: 'getTopItem',
        value: function getTopItem() {
            return this._isCtrlDefined() ? this.ctrlRef.current.getTopItem() : null;
        }
    }, {
        key: 'isItemExpanded',
        value: function isItemExpanded(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.isItemExpanded(item) : true;
        }
    }, {
        key: 'isThereChildren',
        value: function isThereChildren() {
            return this._isCtrlDefined() ? this.ctrlRef.current.isThereChildren() : false;
        }
    }, {
        key: 'updateFullList',
        value: function updateFullList() {
            return this._isCtrlDefined() ? this.ctrlRef.current.updateFullList() : [];
        }

        // Move operations -------------------------------------------------------------------

    }, {
        key: 'getPrevItem',
        value: function getPrevItem(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getPrevItem(item) : null;
        }
    }, {
        key: 'getNextItem',
        value: function getNextItem(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getNextItem(item) : null;
        }
    }, {
        key: 'moveItem',
        value: function moveItem(item, direction, targetItem, position) {
            if (this._isCtrlDefined()) this.ctrlRef.current.moveItem(item, direction, targetItem, position);
        }

        // Keyboard Navigation ---------------------------------------------------------------

    }, {
        key: 'moveFocus',
        value: function moveFocus(item, direction) {
            if (this._isCtrlDefined()) this.ctrlRef.current.moveFocus(item, direction);
        }

        // Loading ---------------------------------------------------------------------------

    }, {
        key: 'beginLoad',
        value: function beginLoad(item) {
            if (this._isCtrlDefined()) this.ctrlRef.current.beginLoad(item);
        }
    }, {
        key: 'endLoad',
        value: function endLoad(item) {
            if (this._isCtrlDefined()) this.ctrlRef.current.endLoad(item);
        }

        // Scrolling ---------------------------------------------------------------------------------

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
        key: 'isScrolling',
        value: function isScrolling() {
            return this._isCtrlDefined() ? this.ctrlRef.current.isScrolling() : false;
        }
    }, {
        key: 'scrollPos',
        value: function scrollPos(value) {
            return this._isCtrlDefined() ? this.ctrlRef.current.scrollPos(value) : { x: 0, y: 0 };
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(item) {
            if (this._isCtrlDefined()) this.ctrlRef.current.scrollTo(item);
        }

        // Search ----------------------------------------------------------------------------

    }, {
        key: 'findItemById',
        value: function findItemById(id) {
            return this._isCtrlDefined() ? this.ctrlRef.current.findItemById(id) : null;
        }
    }, {
        key: 'findItemByText',
        value: function findItemByText(text) {
            return this._isCtrlDefined() ? this.ctrlRef.current.findItemByText(text) : null;
        }

        // Selection ---------------------------------------------------------------------------------

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this._isCtrlDefined()) this.ctrlRef.current.clearSelection();
        }
    }, {
        key: 'selectItems',
        value: function selectItems(items) {
            if (this._isCtrlDefined()) this.ctrlRef.current.selectItems(items);
        }

        // Sorting -----------------------------------------------------------------------------------

    }, {
        key: 'sort',
        value: function sort(order, comparer) {
            if (this._isCtrlDefined()) this.ctrlRef.current.sort(order, comparer);
        }

        // Style -------------------------------------------------------------------------------------

    }, {
        key: 'setClass',
        value: function setClass(value) {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.setClass(value);
        }
    }, {
        key: 'setStyle',
        value: function setStyle(value) {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.setStyle(value);
        }

        // Update ------------------------------------------------------------------------------------

    }, {
        key: 'getItemTemplate',
        value: function getItemTemplate(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getItemTemplate(item) : null;
        }
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
        key: 'updateLayout',
        value: function updateLayout() {
            if (this._isCtrlDefined()) this.ctrlRef.current.updateLayout();
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
                'iui-treeview',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUITreeViewComponent;
}(Component);

export default IntegralUITreeViewComponent;