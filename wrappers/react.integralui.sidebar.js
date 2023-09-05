import React, { Component } from "react";

import '../components/integralui.sidebar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUISideBarComponent = function (_Component) {
    _inherits(IntegralUISideBarComponent, _Component);

    function IntegralUISideBarComponent(props) {
        _classCallCheck(this, IntegralUISideBarComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUISideBarComponent.__proto__ || Object.getPrototypeOf(IntegralUISideBarComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUISideBarComponent, [{
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
                if (this.props.beforeExpand) this.ctrlRef.current.addEventListener('beforeExpand', function (e) {
                    return _this2.props.beforeExpand(e);
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
        key: '_isDefined',
        value: function _isDefined(value) {
            return value !== undefined ? true : false;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this._isCtrlDefined()) {
                if (this.props.afterCollapse) this.ctrlRef.current.removeEventListener('afterCollapse', this.props.afterCollapse);
                if (this.props.afterExpand) this.ctrlRef.current.removeEventListener('afterExpand', this.props.afterExpand);
                if (this.props.afterSelect) this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
                if (this.props.beforeCollapse) this.ctrlRef.current.removeEventListener('beforeCollapse', this.props.beforeCollapse);
                if (this.props.beforeExpand) this.ctrlRef.current.removeEventListener('beforeExpand', this.props.beforeExpand);
                if (this.props.beforeSelect) this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
                if (this.props.change) this.ctrlRef.current.removeEventListener('change', this.props.change);
                if (this.props.clear) this.ctrlRef.current.removeEventListener('clear', this.props.clear);
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
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
                if (this._isDefined(this.props.allowResize)) this.ctrlRef.current.allowResize = this.props.allowResize;
                if (this._isDefined(this.props.allowUpdate)) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this._isDefined(this.props.animation)) this.ctrlRef.current.animation = this.props.animation;
                if (this._isDefined(this.props.animationSpeed)) this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
                if (this._isDefined(this.props.autoHide)) this.ctrlRef.current.autoHide = this.props.autoHide;
                if (this._isDefined(this.props.colorScheme)) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.customStyle)) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.data)) this.ctrlRef.current.data = this.props.data;
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.expanded)) this.ctrlRef.current.expanded = this.props.expanded;
                if (this._isDefined(this.props.inbound)) this.ctrlRef.current.inbound = this.props.inbound;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.parentId)) this.ctrlRef.current.parentId = this.props.parentId;
                if (this._isDefined(this.props.placement)) this.ctrlRef.current.placement = this.props.placement;
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.selectedIndex)) this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
                if (this._isDefined(this.props.selectedTab)) this.ctrlRef.current.selectedTab = this.props.selectedTab;
                if (this._isDefined(this.props.showHeader)) this.ctrlRef.current.showHeader = this.props.showHeader;
                if (this._isDefined(this.props.size)) this.ctrlRef.current.size = this.props.size;
                if (this._isDefined(this.props.state)) this.ctrlRef.current.state = this.props.state;
                if (this._isDefined(this.props.tabAlignment)) this.ctrlRef.current.tabAlignment = this.props.tabAlignment;
                if (this._isDefined(this.props.tabs)) this.ctrlRef.current.tabs = this.props.tabs;
                if (this._isDefined(this.props.tabTemplate)) this.ctrlRef.current.tabTemplate = this.props.tabTemplate;
                if (this._isDefined(this.props.theme)) this.ctrlRef.current.theme = this.props.theme;
            }
        }
    }, {
        key: '_updateData',
        value: function _updateData(prevProps) {
            if (this._isCtrlDefined()) {
                if (this.props.allowAnimation !== prevProps.allowAnimation) this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
                if (this.props.allowResize !== prevProps.allowResize) this.ctrlRef.current.allowResize = this.props.allowResize;
                if (this.props.allowUpdate !== prevProps.allowUpdate) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this.props.animation !== prevProps.animation) this.ctrlRef.current.animation = this.props.animation;
                if (this.props.animationSpeed !== prevProps.animationSpeed) this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
                if (this.props.autoHide !== prevProps.autoHide) this.ctrlRef.current.autoHide = this.props.autoHide;
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this.props.expanded !== prevProps.expanded) this.ctrlRef.current.expanded = this.props.expanded;
                if (this.props.inbound !== prevProps.inbound) this.ctrlRef.current.inbound = this.props.inbound;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.parentId !== prevProps.parentId) this.ctrlRef.current.parentId = this.props.parentId;
                if (this.props.placement !== prevProps.placement) this.ctrlRef.current.placement = this.props.placement;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.selectedIndex !== prevProps.selectedIndex) this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
                if (this.props.selectedTab !== prevProps.selectedTab) this.ctrlRef.current.selectedTab = this.props.selectedTab;
                if (this.props.showHeader !== prevProps.showHeader) this.ctrlRef.current.showHeader = this.props.showHeader;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
                if (this.props.state !== prevProps.state) this.ctrlRef.current.state = this.props.state;
                if (this.props.tabAlignment !== prevProps.tabAlignment) this.ctrlRef.current.tabAlignment = this.props.tabAlignment;
                if (this._isDefined(this.props.tabs)) this.ctrlRef.current.tabs = this.props.tabs;
                if (this._isDefined(this.props.tabTemplate)) this.ctrlRef.current.tabTemplate = this.props.tabTemplate;
                if (this.props.theme !== prevProps.theme) this.ctrlRef.current.theme = this.props.theme;
            }
        }

        //
        // Methods -----------------------------------------------------------------------------------
        //

        // Expand/Collapse ---------------------------------------------------------------------------

    }, {
        key: 'collapse',
        value: function collapse() {
            if (this._isCtrlDefined()) this.ctrlRef.current.collapse();
        }
    }, {
        key: 'expand',
        value: function expand() {
            if (this._isCtrlDefined()) this.ctrlRef.current.expand();
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (this._isCtrlDefined()) this.ctrlRef.current.toggle();
        }

        // Selection ---------------------------------------------------------------------------------

    }, {
        key: 'selectTab',
        value: function selectTab(tab) {
            if (this._isCtrlDefined()) this.ctrlRef.current.selectTab(tab);
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
        key: 'updateLayout',
        value: function updateLayout() {
            if (this._isCtrlDefined()) this.ctrlRef.current.updateLayout();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'iui-sidebar',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUISideBarComponent;
}(Component);

export default IntegralUISideBarComponent;