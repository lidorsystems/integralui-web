import React, { Component } from "react";

import '../components/integralui.tabstrip.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUITabStripComponent = function (_Component) {
    _inherits(IntegralUITabStripComponent, _Component);

    function IntegralUITabStripComponent(props) {
        _classCallCheck(this, IntegralUITabStripComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUITabStripComponent.__proto__ || Object.getPrototypeOf(IntegralUITabStripComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUITabStripComponent, [{
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
                if (this.props.tabAdded) this.ctrlRef.current.addEventListener('tabAdded', function (e) {
                    return _this2.props.tabAdded(e);
                });
                if (this.props.tabAdding) this.ctrlRef.current.addEventListener('tabAdding', function (e) {
                    return _this2.props.tabAdding(e);
                });
                if (this.props.tabOrderChanged) this.ctrlRef.current.addEventListener('tabOrderChanged', function (e) {
                    return _this2.props.tabOrderChanged(e);
                });
                if (this.props.tabRemoved) this.ctrlRef.current.addEventListener('tabRemoved', function (e) {
                    return _this2.props.tabRemoved(e);
                });
                if (this.props.tabRemoving) this.ctrlRef.current.addEventListener('tabRemoving', function (e) {
                    return _this2.props.tabRemoving(e);
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
        key: '_isDefined',
        value: function _isDefined(value) {
            return value !== undefined ? true : false;
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
                if (this.props.tabAdded) this.ctrlRef.current.removeEventListener('tabAdded', this.props.tabAdded);
                if (this.props.tabAdding) this.ctrlRef.current.removeEventListener('tabAdding', this.props.tabAdding);
                if (this.props.tabOrderChanged) this.ctrlRef.current.removeEventListener('tabOrderChanged', this.props.tabOrderChanged);
                if (this.props.tabRemoved) this.ctrlRef.current.removeEventListener('tabRemoved', this.props.tabRemoved);
                if (this.props.tabRemoving) this.ctrlRef.current.removeEventListener('tabRemoving', this.props.tabRemoving);
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
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.allowAnimation)) this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
                if (this._isDefined(this.props.allowUpdate)) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this._isDefined(this.props.allowDrag)) this.ctrlRef.current.allowDrag = this.props.allowDrag;
                if (this._isDefined(this.props.allowDrop)) this.ctrlRef.current.allowDrop = this.props.allowDrop;
                if (this._isDefined(this.props.animationSpeed)) this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
                if (this._isDefined(this.props.autoSize)) this.ctrlRef.current.autoSize = this.props.autoSize;
                if (this._isDefined(this.props.contentAnimation)) this.ctrlRef.current.contentAnimation = this.props.contentAnimation;
                if (this._isDefined(this.props.colorScheme)) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.customStyle)) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.data)) this.ctrlRef.current.data = this.props.data;
                if (this._isDefined(this.props.displayMode)) this.ctrlRef.current.displayMode = this.props.displayMode;
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.navigation)) this.ctrlRef.current.navigation = this.props.navigation;
                if (this._isDefined(this.props.scrollMode)) this.ctrlRef.current.scrollMode = this.props.scrollMode;
                if (this._isDefined(this.props.selectedIndex)) this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
                if (this._isDefined(this.props.selectedTab)) this.ctrlRef.current.selectedTab = this.props.selectedTab;
                if (this._isDefined(this.props.showTabLine)) this.ctrlRef.current.showTabLine = this.props.showTabLine;
                if (this._isDefined(this.props.size)) this.ctrlRef.current.size = this.props.size;
                if (this._isDefined(this.props.state)) this.ctrlRef.current.state = this.props.state;
                if (this._isDefined(this.props.tabs)) this.ctrlRef.current.tabs = this.props.tabs;
                if (this._isDefined(this.props.tabAlignment)) this.ctrlRef.current.tabAlignment = this.props.tabAlignment;
                if (this._isDefined(this.props.tabOrientation)) this.ctrlRef.current.tabOrientation = this.props.tabOrientation;
                if (this._isDefined(this.props.tabSpacing)) this.ctrlRef.current.tabSpacing = this.props.tabSpacing;
                if (this._isDefined(this.props.tabStripPlacement)) this.ctrlRef.current.tabStripPlacement = this.props.tabStripPlacement;
                if (this._isDefined(this.props.tabTemplate)) this.ctrlRef.current.tabTemplate = this.props.tabTemplate;
                if (this._isDefined(this.props.theme)) this.ctrlRef.current.theme = this.props.theme;
            }
        }
    }, {
        key: '_updateData',
        value: function _updateData(prevProps) {
            if (this._isCtrlDefined()) {
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.allowAnimation !== prevProps.allowAnimation) this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
                if (this.props.allowUpdate !== prevProps.allowUpdate) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this.props.allowDrag !== prevProps.allowDrag) this.ctrlRef.current.allowDrag = this.props.allowDrag;
                if (this.props.allowDrop !== prevProps.allowDrop) this.ctrlRef.current.allowDrop = this.props.allowDrop;
                if (this.props.animationSpeed !== prevProps.animationSpeed) this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
                if (this.props.autoSize !== prevProps.autoSize) this.ctrlRef.current.autoSize = this.props.autoSize;
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this.props.contentAnimation !== prevProps.contentAnimation) this.ctrlRef.current.contentAnimation = this.props.contentAnimation;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.displayMode !== prevProps.displayMode) this.ctrlRef.current.displayMode = this.props.displayMode;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.navigation !== prevProps.navigation) this.ctrlRef.current.navigation = this.props.navigation;
                if (this.props.scrollMode !== prevProps.scrollMode) this.ctrlRef.current.scrollMode = this.props.scrollMode;
                if (this.props.selectedIndex !== prevProps.selectedIndex) this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
                if (this.props.selectedTab !== prevProps.selectedTab) this.ctrlRef.current.selectedTab = this.props.selectedTab;
                if (this.props.showTabLine !== prevProps.showTabLine) this.ctrlRef.current.showTabLine = this.props.showTabLine;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
                if (this.props.state !== prevProps.state) this.ctrlRef.current.state = this.props.state;
                if (this._isDefined(this.props.tabs)) this.ctrlRef.current.tabs = this.props.tabs;
                if (this.props.tabAlignment !== prevProps.tabAlignment) this.ctrlRef.current.tabAlignment = this.props.tabAlignment;
                if (this.props.tabOrientation !== prevProps.tabOrientation) this.ctrlRef.current.tabOrientation = this.props.tabOrientation;
                if (this.props.tabSpacing !== prevProps.tabSpacing) this.ctrlRef.current.tabSpacing = this.props.tabSpacing;
                if (this.props.tabStripPlacement !== prevProps.tabStripPlacement) this.ctrlRef.current.tabStripPlacement = this.props.tabStripPlacement;
                if (this._isDefined(this.props.tabTemplate)) this.ctrlRef.current.tabTemplate = this.props.tabTemplate;
                if (this.props.theme !== prevProps.theme) this.ctrlRef.current.theme = this.props.theme;
            }
        }

        //
        // Methods -----------------------------------------------------------------------------------
        //

        // Add Remove --------------------------------------------------------------------------------

    }, {
        key: 'addTab',
        value: function addTab(tab) {
            if (this._isCtrlDefined()) this.ctrlRef.current.addTab(tab);
        }
    }, {
        key: 'clearTabs',
        value: function clearTabs() {
            if (this._isCtrlDefined()) this.ctrlRef.current.clearTabs();
        }
    }, {
        key: 'insertTabAt',
        value: function insertTabAt(tab, index) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertTabAt(tab, index);
        }
    }, {
        key: 'insertTabBefore',
        value: function insertTabBefore(tab, refTab) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertTabBefore(tab, refTab);
        }
    }, {
        key: 'insertTabAfter',
        value: function insertTabAfter(tab, refTab) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertTabAfter(tab, refTab);
        }
    }, {
        key: 'removeTab',
        value: function removeTab(tab) {
            return this._isCtrlDefined() ? this.ctrlRef.current.removeTab(tab) : false;
        }
    }, {
        key: 'removeTabAt',
        value: function removeTabAt(index) {
            return this._isCtrlDefined() ? this.ctrlRef.current.removeTabAt(index) : false;
        }

        // Scrolling ---------------------------------------------------------------------------------

    }, {
        key: 'scrollPos',
        value: function scrollPos(value) {
            if (this._isCtrlDefined()) this.ctrlRef.current.scrollPos(value);
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(tab) {
            if (this._isCtrlDefined()) this.ctrlRef.current.scrollTo(tab);
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
                'iui-tabstrip',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUITabStripComponent;
}(Component);

export default IntegralUITabStripComponent;