import React, { Component } from "react";

import '../components/integralui.listbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUIListBarComponent = function (_Component) {
    _inherits(IntegralUIListBarComponent, _Component);

    function IntegralUIListBarComponent(props) {
        _classCallCheck(this, IntegralUIListBarComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUIListBarComponent.__proto__ || Object.getPrototypeOf(IntegralUIListBarComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUIListBarComponent, [{
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
                if (this.props.clear) this.ctrlRef.current.addEventListener('clear', function () {
                    return _this2.props.clear();
                });
                if (this.props.enabledChanged) this.ctrlRef.current.addEventListener('enabledChanged', function (e) {
                    return _this2.props.enabledChanged(e);
                });
                if (this.props.groupAdded) this.ctrlRef.current.addEventListener('groupAdded', function (e) {
                    return _this2.props.groupAdded(e);
                });
                if (this.props.groupAdding) this.ctrlRef.current.addEventListener('groupAdding', function (e) {
                    return _this2.props.groupAdding(e);
                });
                if (this.props.groupRemoved) this.ctrlRef.current.addEventListener('groupRemoved', function (e) {
                    return _this2.props.groupRemoved(e);
                });
                if (this.props.groupRemoving) this.ctrlRef.current.addEventListener('groupRemoving', function (e) {
                    return _this2.props.groupRemoving(e);
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
                if (this.props.afterCollapse) this.ctrlRef.current.removeEventListener('afterCollapse', this.props.afterCollapse);
                if (this.props.afterExpand) this.ctrlRef.current.removeEventListener('afterExpand', this.props.afterExpand);
                if (this.props.afterSelect) this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
                if (this.props.beforeCollapse) this.ctrlRef.current.removeEventListener('beforeCollapse', this.props.beforeCollapse);
                if (this.props.beforeExpand) this.ctrlRef.current.removeEventListener('beforeExpand', this.props.beforeExpand);
                if (this.props.beforeSelect) this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
                if (this.props.clear) this.ctrlRef.current.removeEventListener('clear', this.props.clear);
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
                if (this.props.groupAdded) this.ctrlRef.current.removeEventListener('groupAdded', this.props.groupAdded);
                if (this.props.groupAdding) this.ctrlRef.current.removeEventListener('groupAdding', this.props.groupAdding);
                if (this.props.groupRemoved) this.ctrlRef.current.removeEventListener('groupRemoved', this.props.groupRemoved);
                if (this.props.groupRemoving) this.ctrlRef.current.removeEventListener('groupRemoving', this.props.groupRemoving);
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
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.groups)) this.ctrlRef.current.groups = this.props.groups;
                if (this._isDefined(this.props.mouseWheelSpeed)) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.selectedGroup)) this.ctrlRef.current.selectedGroup = this.props.selectedGroup;
                if (this._isDefined(this.props.selectedIndex)) this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
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
                if (this._isDefined(this.props.groups)) this.ctrlRef.current.groups = this.props.groups;
                if (this.props.mouseWheelSpeed !== prevProps.mouseWheelSpeed) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.selectedGroup !== prevProps.selectedGroup) this.ctrlRef.current.selectedGroup = this.props.selectedGroup;
                if (this.props.selectedIndex !== prevProps.selectedIndex) this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
                if (this.props.state !== prevProps.state) this.ctrlRef.current.state = this.props.state;
                if (this.props.theme !== prevProps.theme) this.ctrlRef.current.theme = this.props.theme;
            }
        }

        //
        // Methods -----------------------------------------------------------------------------------
        //

        // Add Remove --------------------------------------------------------------------------------

    }, {
        key: 'addGroup',
        value: function addGroup(group) {
            if (this._isCtrlDefined()) this.ctrlRef.current.addGroup(group);
        }
    }, {
        key: 'clearGroups',
        value: function clearGroups() {
            if (this._isCtrlDefined()) this.ctrlRef.current.clearGroups();
        }
    }, {
        key: 'insertGroupAt',
        value: function insertGroupAt(group, index) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertGroupAt(group, index);
        }
    }, {
        key: 'insertGroupBefore',
        value: function insertGroupBefore(group, refGroup) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertGroupBefore(group, refGroup);
        }
    }, {
        key: 'insertGroupAfter',
        value: function insertGroupAfter(group, refGroup) {
            if (this._isCtrlDefined()) this.ctrlRef.current.insertGroupAfter(group, refGroup);
        }
    }, {
        key: 'removeGroup',
        value: function removeGroup(group) {
            return this._isCtrlDefined() ? this.ctrlRef.current.removeGroup(group) : false;
        }
    }, {
        key: 'removeGroupAt',
        value: function removeGroupAt(index) {
            return this._isCtrlDefined() ? this.ctrlRef.current.removeGroupAt(index) : false;
        }

        // Scrolling ---------------------------------------------------------------------------------

    }, {
        key: 'scrollPos',
        value: function scrollPos(value) {
            if (this._isCtrlDefined()) this.ctrlRef.current.scrollPos(value);
        }

        // Selection ---------------------------------------------------------------------------------

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this._isCtrlDefined()) this.ctrlRef.current.clearSelection();
        }
    }, {
        key: 'selectGroup',
        value: function selectGroup(group) {
            if (this._isCtrlDefined()) this.ctrlRef.current.selectGroup(group);
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
                'iui-listbar',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUIListBarComponent;
}(Component);

export default IntegralUIListBarComponent;