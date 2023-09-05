import React, { Component } from "react";

import '../components/integralui.listscroller.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUIListScrollerComponent = function (_Component) {
    _inherits(IntegralUIListScrollerComponent, _Component);

    function IntegralUIListScrollerComponent(props) {
        _classCallCheck(this, IntegralUIListScrollerComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUIListScrollerComponent.__proto__ || Object.getPrototypeOf(IntegralUIListScrollerComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUIListScrollerComponent, [{
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
                if (this.props.afterSelect) this.ctrlRef.current.addEventListener('afterSelect', function (e) {
                    return _this2.props.afterSelect(e);
                });
                if (this.props.beforeSelect) this.ctrlRef.current.addEventListener('beforeSelect', function (e) {
                    return _this2.props.beforeSelect(e);
                });
                if (this.props.change) this.ctrlRef.current.addEventListener('change', function (e) {
                    return _this2.props.change(e);
                });
                if (this.props.clear) this.ctrlRef.current.addEventListener('clear', function () {
                    return _this2.props.clear();
                });
                if (this.props.enabledChanged) this.ctrlRef.current.addEventListener('enabledChanged', function (e) {
                    return _this2.props.enabledChanged(e);
                });
                if (this.props.itemAdded) this.ctrlRef.current.addEventListener('itemAdded', function (e) {
                    return _this2.props.itemAdded(e);
                });
                if (this.props.itemAdding) this.ctrlRef.current.addEventListener('itemAdding', function (e) {
                    return _this2.props.itemAdding(e);
                });
                if (this.props.itemRemoved) this.ctrlRef.current.addEventListener('itemRemoved', function (e) {
                    return _this2.props.itemRemoved(e);
                });
                if (this.props.itemRemoving) this.ctrlRef.current.addEventListener('itemRemoving', function (e) {
                    return _this2.props.itemRemoving(e);
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
                if (this.props.updateComplete) this.ctrlRef.current.addEventListener('updateComplete', function () {
                    return _this2.props.updateComplete();
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this._isCtrlDefined()) {
                if (this.props.afterSelect) this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
                if (this.props.beforeSelect) this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
                if (this.props.change) this.ctrlRef.current.removeEventListener('change', this.props.change);
                if (this.props.clear) this.ctrlRef.current.removeEventListener('clear', this.props.clear);
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
                if (this.props.itemAdded) this.ctrlRef.current.removeEventListener('itemAdded', this.props.itemAdded);
                if (this.props.itemAdding) this.ctrlRef.current.removeEventListener('itemAdding', this.props.itemAdding);
                if (this.props.itemRemoved) this.ctrlRef.current.removeEventListener('itemRemoved', this.props.itemRemoved);
                if (this.props.itemRemoving) this.ctrlRef.current.removeEventListener('itemRemoving', this.props.itemRemoving);
                if (this.props.scrollPosChanged) this.ctrlRef.current.removeEventListener('scrollPosChanged', this.props.scrollPosChanged);
                if (this.props.selectionChanged) this.ctrlRef.current.removeEventListener('selectionChanged', this.props.selectionChanged);
                if (this.props.sizeChanged) this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
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
                if (this._isDefined(this.props.allowFocus)) this.ctrlRef.current.allowFocus = this.props.allowFocus;
                if (this._isDefined(this.props.dataFields)) this.ctrlRef.current.dataFields = this.props.dataFields;
                if (this._isDefined(this.props.colorScheme)) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.customStyle)) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.data)) this.ctrlRef.current.data = this.props.data;
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.items)) this.ctrlRef.current.items = this.props.items;
                if (this._isDefined(this.props.itemSize)) this.ctrlRef.current.itemSize = this.props.itemSize;
                if (this._isDefined(this.props.itemTemplate)) this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
                if (this._isDefined(this.props.mouseWheelSpeed)) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.selectedItem)) this.ctrlRef.current.selectedItem = this.props.selectedItem;
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
                if (this.props.allowFocus !== prevProps.allowFocus) this.ctrlRef.current.allowFocus = this.props.allowFocus;
                if (this.props.dataFields !== prevProps.dataFields) this.ctrlRef.current.dataFields = this.props.dataFields;
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.items)) this.ctrlRef.current.items = this.props.items;
                if (this._isDefined(this.props.itemSize)) this.ctrlRef.current.itemSize = this.props.itemSize;
                if (this._isDefined(this.props.itemTemplate)) this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
                if (this.props.mouseWheelSpeed !== prevProps.mouseWheelSpeed) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.selectedItem !== prevProps.selectedItem) this.ctrlRef.current.selectedItem = this.props.selectedItem;
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
        value: function addItem(item) {
            if (this._isCtrlDefined()) this.ctrlRef.current.addItem(item);
        }
    }, {
        key: 'clearItems',
        value: function clearItems() {
            if (this._isCtrlDefined()) this.ctrlRef.current.clearItems();
        }
    }, {
        key: 'insertItemAt',
        value: function insertItemAt(item, index) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertItemAt(item, index);
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
        value: function removeItemAt(index) {
            return this._isCtrlDefined() ? this.ctrlRef.current.removeItemAt(index) : false;
        }

        // Scrolling ---------------------------------------------------------------------------------

    }, {
        key: 'scrollPos',
        value: function scrollPos(value) {
            return this._isCtrlDefined() ? this.ctrlRef.current.scrollPos(value) : { x: 0, y: 0 };
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
        key: 'refresh',
        value: function refresh() {
            if (this._isCtrlDefined()) this.ctrlRef.current.refresh();
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'iui-listscroller',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUIListScrollerComponent;
}(Component);

export default IntegralUIListScrollerComponent;