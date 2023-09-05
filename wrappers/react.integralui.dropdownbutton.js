import React, { Component } from "react";

import '../components/integralui.dropdownbutton.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUIDropDownButtonComponent = function (_Component) {
    _inherits(IntegralUIDropDownButtonComponent, _Component);

    function IntegralUIDropDownButtonComponent(props) {
        _classCallCheck(this, IntegralUIDropDownButtonComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUIDropDownButtonComponent.__proto__ || Object.getPrototypeOf(IntegralUIDropDownButtonComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    //
    // Events ------------------------------------------------------------------------------------
    //

    _createClass(IntegralUIDropDownButtonComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this._initProps();

            if (this.ctrlRef && this.ctrlRef.current) {
                // Standard Events
                if (this.props.onClick) this.ctrlRef.current.addEventListener('click', function (e) {
                    return _this2.props.onClick(e);
                });
                if (this.props.onMouseDown) this.ctrlRef.current.addEventListener('mousedown', function (e) {
                    return _this2.props.onMouseDown(e);
                });

                // Component Events
                if (this.props.closed) this.ctrlRef.current.addEventListener('closed', function (e) {
                    return _this2.props.closed(e);
                });
                if (this.props.enabledChanged) this.ctrlRef.current.addEventListener('enabledChanged', function (e) {
                    return _this2.props.enabledChanged(e);
                });
                if (this.props.expandedChanged) this.ctrlRef.current.addEventListener('expandedChanged', function (e) {
                    return _this2.props.expandedChanged(e);
                });
                if (this.props.opened) this.ctrlRef.current.addEventListener('opened', function (e) {
                    return _this2.props.opened(e);
                });
                if (this.props.sizeChanged) this.ctrlRef.current.addEventListener('sizeChanged', function (e) {
                    return _this2.props.sizeChanged(e);
                });
                if (this.props.stateChanged) this.ctrlRef.current.addEventListener('stateChanged', function (e) {
                    return _this2.props.stateChanged(e);
                });
                if (this.props.valueChanged) this.ctrlRef.current.addEventListener('valueChanged', function (e) {
                    return _this2.props.valueChanged(e);
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.ctrlRef && this.ctrlRef.current) {
                // Standard Events
                if (this.props.onClick) this.ctrlRef.current.removeEventListener('click', this.props.onClick);
                if (this.props.onMouseDown) this.ctrlRef.current.removeEventListener('mousedown', this.props.onMouseDown);

                // Component Events
                if (this.props.closed) this.ctrlRef.current.removeEventListener('closed', this.props.closed);
                if (this.props.opened) this.ctrlRef.current.removeEventListener('opened', this.props.opened);
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
                if (this.props.expandedChanged) this.ctrlRef.current.removeEventListener('expandedChanged', this.props.expandedChanged);
                if (this.props.sizeChanged) this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
                if (this.props.stateChanged) this.ctrlRef.current.removeEventListener('stateChanged', this.props.stateChanged);
                if (this.props.valueChanged) this.ctrlRef.current.removeEventListener('valueChanged', this.props.valueChanged);
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
            if (this.ctrlRef && this.ctrlRef.current) {
                if (this._isDefined(this.props.allowAnimation)) this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
                if (this._isDefined(this.props.allowFocus)) this.ctrlRef.current.allowFocus = this.props.allowFocus;
                if (this._isDefined(this.props.allowUpdate)) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this._isDefined(this.props.customStyle)) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.data)) this.ctrlRef.current.data = this.props.data;
                if (this._isDefined(this.props.colorScheme)) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.contentTemplate)) this.ctrlRef.current.contentTemplate = this.props.contentTemplate;
                if (this._isDefined(this.props.direction)) this.ctrlRef.current.direction = this.props.direction;
                if (this._isDefined(this.props.dropDownAdjustment)) this.ctrlRef.current.dropDownAdjustment = this.props.dropDownAdjustment;
                if (this._isDefined(this.props.dropDownIcon)) this.ctrlRef.current.dropDownIcon = this.props.dropDownIcon;
                if (this._isDefined(this.props.dropDownSize)) this.ctrlRef.current.dropDownSize = this.props.dropDownSize;
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.expanded)) this.ctrlRef.current.expanded = this.props.expanded;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.placement)) this.ctrlRef.current.placement = this.props.placement;
                if (this._isDefined(this.props.pressed)) this.ctrlRef.current.pressed = this.props.pressed;
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
            if (this.ctrlRef && this.ctrlRef.current) {
                if (this.props.allowAnimation !== prevProps.allowAnimation) this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
                if (this.props.allowFocus !== prevProps.allowFocus) this.ctrlRef.current.allowFocus = this.props.allowFocus;
                if (this.props.allowUpdate !== prevProps.allowUpdate) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.contentTemplate)) this.ctrlRef.current.contentTemplate = this.props.contentTemplate;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.direction !== prevProps.direction) this.ctrlRef.current.direction = this.props.direction;
                if (this.props.dropDownAdjustment !== prevProps.dropDownAdjustment) this.ctrlRef.current.dropDownAdjustment = this.props.dropDownAdjustment;
                if (this.props.dropDownIcon !== prevProps.dropDownIcon) this.ctrlRef.current.dropDownIcon = this.props.dropDownIcon;
                if (this.props.dropDownSize !== prevProps.dropDownSize) this.ctrlRef.current.dropDownSize = this.props.dropDownSize;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this.props.expanded !== prevProps.expanded) this.ctrlRef.current.expanded = this.props.expanded;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.placement !== prevProps.placement) this.ctrlRef.current.placement = this.props.placement;
                if (this.props.pressed !== prevProps.pressed) this.ctrlRef.current.pressed = this.props.pressed;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
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
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.refresh();
        }
    }, {
        key: 'updateLayout',
        value: function updateLayout() {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.updateLayout();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'iui-dropdownbutton',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUIDropDownButtonComponent;
}(Component);

export default IntegralUIDropDownButtonComponent;