import React, { Component } from "react";

import '../components/integralui.treelist.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUITreeListComponent = function (_Component) {
    _inherits(IntegralUITreeListComponent, _Component);

    function IntegralUITreeListComponent(props) {
        _classCallCheck(this, IntegralUITreeListComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUITreeListComponent.__proto__ || Object.getPrototypeOf(IntegralUITreeListComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUITreeListComponent, [{
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
                if (this.props.enabledChanged) this.ctrlRef.current.addEventListener('enabledChanged', function (e) {
                    return _this2.props.enabledChanged(e);
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
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this._isCtrlDefined()) {
                if (this.props.afterSelect) this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
                if (this.props.beforeSelect) this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
                if (this.props.scrollPosChanged) this.ctrlRef.current.removeEventListener('scrollPosChanged', this.props.scrollPosChanged);
                if (this.props.selectionChanged) this.ctrlRef.current.removeEventListener('selectionChanged', this.props.selectionChanged);
                if (this.props.sizeChanged) this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
                if (this.props.stateChanged) this.ctrlRef.current.removeEventListener('stateChanged', this.props.stateChanged);
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
                if (this._isDefined(this.props.colorScheme)) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.customStyle)) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.data)) this.ctrlRef.current.data = this.props.data;
                if (this._isDefined(this.props.dataFields)) this.ctrlRef.current.dataFields = this.props.dataFields;
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.indent)) this.ctrlRef.current.indent = this.props.indent;
                if (this._isDefined(this.props.items)) this.ctrlRef.current.items = this.props.items;
                if (this._isDefined(this.props.itemTemplate)) this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
                if (this._isDefined(this.props.mouseWheelSpeed)) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.scrollAppearance)) this.ctrlRef.current.scrollAppearance = this.props.scrollAppearance;
                if (this._isDefined(this.props.selectedItem)) this.ctrlRef.current.selectedItem = this.props.selectedItem;
                if (this._isDefined(this.props.size)) this.ctrlRef.current.size = this.props.size;
                if (this._isDefined(this.props.state)) this.ctrlRef.current.state = this.props.state;
                if (this._isDefined(this.props.title)) this.ctrlRef.current.title = this.props.title;
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
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.dataFields !== prevProps.dataFields) this.ctrlRef.current.dataFields = this.props.dataFields;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this.props.indent !== prevProps.indent) this.ctrlRef.current.indent = this.props.indent;
                if (this._isDefined(this.props.items)) this.ctrlRef.current.items = this.props.items;
                if (this._isDefined(this.props.itemTemplate)) this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
                if (this.props.mouseWheelSpeed !== prevProps.mouseWheelSpeed) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.scrollAppearance !== prevProps.scrollAppearance) this.ctrlRef.current.scrollAppearance = this.props.scrollAppearance;
                if (this.props.selectedItem !== prevProps.selectedItem) this.ctrlRef.current.selectedItem = this.props.selectedItem;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
                if (this.props.state !== prevProps.state) this.ctrlRef.current.state = this.props.state;
                if (this.props.title !== prevProps.title) this.ctrlRef.current.title = this.props.title;
                if (this.props.theme !== prevProps.theme) this.ctrlRef.current.theme = this.props.theme;
            }
        }

        //
        // Methods -----------------------------------------------------------------------------------
        //

        // Export ------------------------------------------------------------------------------------

    }, {
        key: 'exportToJSON',
        value: function exportToJSON(data, fields, spacing, flat) {
            return this._isCtrlDefined() ? this.ctrlRef.current.exportToJSON(data, fields, spacing, flat) : null;
        }

        // General ---------------------------------------------------------------------------

    }, {
        key: 'isGroupItem',
        value: function isGroupItem(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.isGroupItem(item) : false;
        }
    }, {
        key: 'isItemExpanded',
        value: function isItemExpanded(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.isItemExpanded(item) : true;
        }
    }, {
        key: 'resolve',
        value: function resolve(type) {
            if (this._isCtrlDefined()) this.ctrlRef.current.resolve(type);
        }
    }, {
        key: 'wait',
        value: function wait() {
            if (this._isCtrlDefined()) this.ctrlRef.current.wait();
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
        key: 'scrollPos',
        value: function scrollPos(value) {
            return this._isCtrlDefined() ? this.ctrlRef.current.scrollPos(value) : { x: 0, y: 0 };
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(item) {
            if (this._isCtrlDefined()) this.ctrlRef.current.scrollTo(item);
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
        key: 'getItemParent',
        value: function getItemParent(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getItemParent(item) : null;
        }
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
                'iui-treelist',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUITreeListComponent;
}(Component);

export default IntegralUITreeListComponent;