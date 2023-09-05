import React, { Component } from "react";

import '../components/integralui.slide.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUISlideComponent = function (_Component) {
    _inherits(IntegralUISlideComponent, _Component);

    function IntegralUISlideComponent(props) {
        _classCallCheck(this, IntegralUISlideComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUISlideComponent.__proto__ || Object.getPrototypeOf(IntegralUISlideComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUISlideComponent, [{
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
                // Standard Events
                if (this.props.onClick) this.ctrlRef.current.addEventListener('click', function (e) {
                    return _this2.props.onClick(e);
                });
                if (this.props.onMouseDown) this.ctrlRef.current.addEventListener('mousedown', function (e) {
                    return _this2.props.onMouseDown(e);
                });

                // Component Events
                if (this.props.enabledChanged) this.ctrlRef.current.addEventListener('enabledChanged', function (e) {
                    return _this2.props.enabledChanged(e);
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
                // Standard Events
                if (this.props.onClick) this.ctrlRef.current.removeEventListener('click', this.props.onClick);
                if (this.props.onMouseDown) this.ctrlRef.current.removeEventListener('mousedown', this.props.onMouseDown);

                // Component Events
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
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
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.position)) this.ctrlRef.current.position = this.props.position;
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.size)) this.ctrlRef.current.size = this.props.size;
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
                if (this.props.position !== prevProps.position) this.ctrlRef.current.position = this.props.position;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
                if (this.props.state !== prevProps.state) this.ctrlRef.current.state = this.props.state;
                if (this.props.theme !== prevProps.theme) this.ctrlRef.current.theme = this.props.theme;
            }
        }

        //
        // Methods -----------------------------------------------------------------------------------
        //

        // General -----------------------------------------------------------------------------------

    }, {
        key: 'getSize',
        value: function getSize() {
            return this._isCtrlDefined() ? this.ctrlRef.current.getSize() : { width: 0, height: 0 };
        }

        // Style -------------------------------------------------------------------------------------

    }, {
        key: 'setClass',
        value: function setClass(value) {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.setClass(value);
        }
    }, {
        key: 'setOpacity',
        value: function setOpacity(value) {
            if (this._isCtrlDefined()) this.ctrlRef.current.setOpacity(value);
        }
    }, {
        key: 'setScale',
        value: function setScale(value) {
            if (this._isCtrlDefined()) this.ctrlRef.current.setScale(value);
        }
    }, {
        key: 'setStyle',
        value: function setStyle(value) {
            if (this._isCtrlDefined()) this.ctrlRef.current.setStyle(value);
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
                'iui-slide',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUISlideComponent;
}(Component);

export default IntegralUISlideComponent;