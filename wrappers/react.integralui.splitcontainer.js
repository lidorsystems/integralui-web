import React, { Component } from "react";

import '../components/integralui.splitcontainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUISplitContainerComponent = function (_Component) {
    _inherits(IntegralUISplitContainerComponent, _Component);

    function IntegralUISplitContainerComponent(props) {
        _classCallCheck(this, IntegralUISplitContainerComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUISplitContainerComponent.__proto__ || Object.getPrototypeOf(IntegralUISplitContainerComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUISplitContainerComponent, [{
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
                if (this.props.enabledChanged) this.ctrlRef.current.addEventListener('enabledChanged', function (e) {
                    return _this2.props.enabledChanged(e);
                });
                if (this.props.panelsSwapped) this.ctrlRef.current.addEventListener('panelsSwapped', function (e) {
                    return _this2.props.panelsSwapped(e);
                });
                if (this.props.sizeChanged) this.ctrlRef.current.addEventListener('sizeChanged', function (e) {
                    return _this2.props.sizeChanged(e);
                });
                if (this.props.splitterMoved) this.ctrlRef.current.addEventListener('splitterMoved', function (e) {
                    return _this2.props.splitterMoved(e);
                });
                if (this.props.splitterMoving) this.ctrlRef.current.addEventListener('splitterMoving', function (e) {
                    return _this2.props.splitterMoving(e);
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
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
                if (this.props.panelsSwapped) this.ctrlRef.current.removeEventListener('panelsSwapped', this.props.panelsSwapped);
                if (this.props.sizeChanged) this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
                if (this.props.splitterMoved) this.ctrlRef.current.removeEventListener('splitterMoved', this.props.splitterMoved);
                if (this.props.splitterMoving) this.ctrlRef.current.removeEventListener('splitterMoving', this.props.splitterMoving);
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
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.orientation)) this.ctrlRef.current.orientation = this.props.orientation;
                if (this._isDefined(this.props.panel1)) this.ctrlRef.current.panel1 = this.props.panel1;
                if (this._isDefined(this.props.panel2)) this.ctrlRef.current.panel2 = this.props.panel2;
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.showButtons)) this.ctrlRef.current.showButtons = this.props.showButtons;
                if (this._isDefined(this.props.size)) this.ctrlRef.current.size = this.props.size;
                if (this._isDefined(this.props.splitterDistance)) this.ctrlRef.current.splitterDistance = this.props.splitterDistance;
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
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.orientation !== prevProps.orientation) this.ctrlRef.current.orientation = this.props.orientation;
                if (this.props.panel1 !== prevProps.panel1) this.ctrlRef.current.panel1 = this.props.panel1;
                if (this.props.panel2 !== prevProps.panel2) this.ctrlRef.current.panel2 = this.props.panel2;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.showButtons !== prevProps.showButtons) this.ctrlRef.current.showButtons = this.props.showButtons;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
                if (this.props.splitterDistance !== prevProps.splitterDistance) this.ctrlRef.current.splitterDistance = this.props.splitterDistance;
                if (this.props.state !== prevProps.state) this.ctrlRef.current.state = this.props.state;
                if (this.props.theme !== prevProps.theme) this.ctrlRef.current.theme = this.props.theme;
            }
        }

        //
        // Methods -----------------------------------------------------------------------------------
        //

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
        key: 'updateLayout',
        value: function updateLayout() {
            if (this._isCtrlDefined()) this.ctrlRef.current.updateLayout();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'iui-splitcontainer',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUISplitContainerComponent;
}(Component);

export default IntegralUISplitContainerComponent;