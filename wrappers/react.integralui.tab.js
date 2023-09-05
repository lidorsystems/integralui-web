import React, { Component } from "react";

import '../components/integralui.tab.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUITabComponent = function (_Component) {
    _inherits(IntegralUITabComponent, _Component);

    function IntegralUITabComponent(props) {
        _classCallCheck(this, IntegralUITabComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUITabComponent.__proto__ || Object.getPrototypeOf(IntegralUITabComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUITabComponent, [{
        key: "_isCtrlDefined",
        value: function _isCtrlDefined() {
            return this.ctrlRef && this.ctrlRef.current ? true : false;
        }

        //
        // Properties --------------------------------------------------------------------------------
        //

    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this._initProps();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            this._updateData(prevProps);
        }
    }, {
        key: "_initProps",
        value: function _initProps() {
            if (this._isCtrlDefined()) {
                if (this._isDefined(this.props.allowAnimation)) this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
                if (this._isDefined(this.props.allowUpdate)) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this._isDefined(this.props.allowDrag)) this.ctrlRef.current.allowDrag = this.props.allowDrag;
                if (this._isDefined(this.props.allowDrop)) this.ctrlRef.current.allowDrop = this.props.allowDrop;
                if (this._isDefined(this.props.contentAnimation)) this.ctrlRef.current.contentAnimation = this.props.contentAnimation;
                if (this._isDefined(this.props.colorScheme)) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.customStyle)) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.data)) this.ctrlRef.current.data = this.props.data;
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.icon)) this.ctrlRef.current.icon = this.props.icon;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.selected)) this.ctrlRef.current.selected = this.props.selected;
                if (this._isDefined(this.props.size)) this.ctrlRef.current.size = this.props.size;
                if (this._isDefined(this.props.state)) this.ctrlRef.current.state = this.props.state;
                if (this._isDefined(this.props.text)) this.ctrlRef.current.text = this.props.text;
                if (this._isDefined(this.props.theme)) this.ctrlRef.current.theme = this.props.theme;
            }
        }
    }, {
        key: "_isDefined",
        value: function _isDefined(value) {
            return value !== undefined ? true : false;
        }
    }, {
        key: "_updateData",
        value: function _updateData(prevProps) {
            if (this._isCtrlDefined()) {
                if (this.props.allowAnimation !== prevProps.allowAnimation) this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
                if (this.props.allowUpdate !== prevProps.allowUpdate) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this.props.allowDrag !== prevProps.allowDrag) this.ctrlRef.current.allowDrag = this.props.allowDrag;
                if (this.props.allowDrop !== prevProps.allowDrop) this.ctrlRef.current.allowDrop = this.props.allowDrop;
                if (this.props.contentAnimation !== prevProps.contentAnimation) this.ctrlRef.current.contentAnimation = this.props.contentAnimation;
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this.props.icon !== prevProps.icon) this.ctrlRef.current.icon = this.props.icon;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.selected !== prevProps.selected) this.ctrlRef.current.selected = this.props.selected;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
                if (this.props.state !== prevProps.state) this.ctrlRef.current.state = this.props.state;
                if (this.props.text !== prevProps.text) this.ctrlRef.current.text = this.props.text;
                if (this.props.theme !== prevProps.theme) this.ctrlRef.current.theme = this.props.theme;
            }
        }

        //
        // Methods -----------------------------------------------------------------------------------
        //

        // Style -------------------------------------------------------------------------------------

    }, {
        key: "setClass",
        value: function setClass(value) {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.setClass(value);
        }
    }, {
        key: "setStyle",
        value: function setStyle(value) {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.setStyle(value);
        }

        // Update ------------------------------------------------------------------------------------

    }, {
        key: "refresh",
        value: function refresh() {
            if (this._isCtrlDefined()) this.ctrlRef.current.refresh();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "iui-tab",
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUITabComponent;
}(Component);

export default IntegralUITabComponent;