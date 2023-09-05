import React, { Component } from "react";

import '../components/integralui.window.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUIWindowComponent = function (_Component) {
    _inherits(IntegralUIWindowComponent, _Component);

    function IntegralUIWindowComponent(props) {
        _classCallCheck(this, IntegralUIWindowComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUIWindowComponent.__proto__ || Object.getPrototypeOf(IntegralUIWindowComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    //
    // Events ------------------------------------------------------------------------------------
    //

    _createClass(IntegralUIWindowComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this._initProps();

            if (this.ctrlRef && this.ctrlRef.current) {
                if (this.props.click) this.ctrlRef.current.addEventListener('click', function (e) {
                    return _this2.props.click(e);
                });
                if (this.props.closed) this.ctrlRef.current.addEventListener('closed', function (e) {
                    return _this2.props.closed(e);
                });
                if (this.props.closing) this.ctrlRef.current.addEventListener('closing', function (e) {
                    return _this2.props.closing(e);
                });
                if (this.props.enabledChanged) this.ctrlRef.current.addEventListener('enabledChanged', function (e) {
                    return _this2.props.enabledChanged(e);
                });
                if (this.props.mouseDown) this.ctrlRef.current.addEventListener('mouseDown', function (e) {
                    return _this2.props.mouseDown(e);
                });
                if (this.props.mouseEnter) this.ctrlRef.current.addEventListener('mouseEnter', function (e) {
                    return _this2.props.mouseEnter(e);
                });
                if (this.props.mouseLeave) this.ctrlRef.current.addEventListener('mouseLeave', function (e) {
                    return _this2.props.mouseLeave(e);
                });
                if (this.props.mouseMove) this.ctrlRef.current.addEventListener('mouseMove', function (e) {
                    return _this2.props.mouseMove(e);
                });
                if (this.props.mouseUp) this.ctrlRef.current.addEventListener('mouseUp', function (e) {
                    return _this2.props.mouseUp(e);
                });
                if (this.props.opened) this.ctrlRef.current.addEventListener('opened', function (e) {
                    return _this2.props.opened(e);
                });
                if (this.props.opening) this.ctrlRef.current.addEventListener('opening', function (e) {
                    return _this2.props.opening(e);
                });
                if (this.props.positionChanged) this.ctrlRef.current.addEventListener('positionChanged', function (e) {
                    return _this2.props.positionChanged(e);
                });
                if (this.props.selectedChanged) this.ctrlRef.current.addEventListener('selectedChanged', function (e) {
                    return _this2.props.selectedChanged(e);
                });
                if (this.props.sizeChanged) this.ctrlRef.current.addEventListener('sizeChanged', function (e) {
                    return _this2.props.sizeChanged(e);
                });
                if (this.props.stateChanged) this.ctrlRef.current.addEventListener('stateChanged', function (e) {
                    return _this2.props.stateChanged(e);
                });
                if (this.props.visibleChanged) this.ctrlRef.current.addEventListener('visibleChanged', function (e) {
                    return _this2.props.visibleChanged(e);
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.ctrlRef && this.ctrlRef.current) {
                if (this.props.click) this.ctrlRef.current.removeEventListener('click', this.props.click);
                if (this.props.closed) this.ctrlRef.current.removeEventListener('closed', this.props.closed);
                if (this.props.closing) this.ctrlRef.current.removeEventListener('closing', this.props.closing);
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
                if (this.props.mouseDown) this.ctrlRef.current.removeEventListener('mouseDown', this.props.mouseDown);
                if (this.props.mouseEnter) this.ctrlRef.current.removeEventListener('mouseEnter', this.props.mouseEnter);
                if (this.props.mouseLeave) this.ctrlRef.current.removeEventListener('mouseLeave', this.props.mouseLeave);
                if (this.props.mouseMove) this.ctrlRef.current.removeEventListener('mouseMove', this.props.mouseMove);
                if (this.props.mouseUp) this.ctrlRef.current.removeEventListener('mouseUp', this.props.mouseUp);
                if (this.props.opened) this.ctrlRef.current.removeEventListener('opened', this.props.opened);
                if (this.props.opening) this.ctrlRef.current.removeEventListener('opening', this.props.opening);
                if (this.props.positionChanged) this.ctrlRef.current.removeEventListener('positionChanged', this.props.positionChanged);
                if (this.props.selectedChanged) this.ctrlRef.current.removeEventListener('selectedChanged', this.props.selectedChanged);
                if (this.props.sizeChanged) this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
                if (this.props.stateChanged) this.ctrlRef.current.removeEventListener('stateChanged', this.props.stateChanged);
                if (this.props.visibleChanged) this.ctrlRef.current.removeEventListener('visibleChanged', this.props.visibleChanged);
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
                if (this._isDefined(this.props.allowResize)) this.ctrlRef.current.allowResize = this.props.allowResize;
                if (this._isDefined(this.props.allowUpdate)) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this._isDefined(this.props.closeButton)) this.ctrlRef.current.closeButton = this.props.closeButton;
                if (this._isDefined(this.props.colorScheme)) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.customStyle)) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.data)) this.ctrlRef.current.data = this.props.data;
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.icon)) this.ctrlRef.current.icon = this.props.icon;
                if (this._isDefined(this.props.iconUrl)) this.ctrlRef.current.iconUrl = this.props.iconUrl;
                if (this._isDefined(this.props.maximizeButton)) this.ctrlRef.current.maximizeButton = this.props.maximizeButton;
                if (this._isDefined(this.props.minimizeButton)) this.ctrlRef.current.minimizeButton = this.props.minimizeButton;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.maxSize)) this.ctrlRef.current.maxSize = this.props.maxSize;
                if (this._isDefined(this.props.minSize)) this.ctrlRef.current.minSize = this.props.minSize;
                if (this._isDefined(this.props.parentId)) this.ctrlRef.current.parentId = this.props.parentId;
                if (this._isDefined(this.props.position)) this.ctrlRef.current.position = this.props.position;
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.selected)) this.ctrlRef.current.selected = this.props.selected;
                if (this._isDefined(this.props.size)) this.ctrlRef.current.size = this.props.size;
                if (this._isDefined(this.props.state)) this.ctrlRef.current.state = this.props.state;
                if (this._isDefined(this.props.text)) this.ctrlRef.current.text = this.props.text;
                if (this._isDefined(this.props.theme)) this.ctrlRef.current.theme = this.props.theme;
                if (this._isDefined(this.props.visible)) this.ctrlRef.current.visible = this.props.visible;
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
                if (this.props.allowResize !== prevProps.allowResize) this.ctrlRef.current.allowResize = this.props.allowResize;
                if (this.props.allowUpdate !== prevProps.allowUpdate) this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
                if (this.props.closeButton !== prevProps.closeButton) this.ctrlRef.current.closeButton = this.props.closeButton;
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this.props.icon !== prevProps.icon) this.ctrlRef.current.icon = this.props.icon;
                if (this.props.iconUrl !== prevProps.iconUrl) this.ctrlRef.current.iconUrl = this.props.iconUrl;
                if (this.props.maximizeButton !== prevProps.maximizeButton) this.ctrlRef.current.maximizeButton = this.props.maximizeButton;
                if (this.props.minimizeButton !== prevProps.minimizeButton) this.ctrlRef.current.minimizeButton = this.props.minimizeButton;
                if (this.props.maxSize !== prevProps.maxSize) this.ctrlRef.current.maxSize = this.props.maxSize;
                if (this.props.minSize !== prevProps.minSize) this.ctrlRef.current.minSize = this.props.minSize;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.parentId !== prevProps.parentId) this.ctrlRef.current.parentId = this.props.parentId;
                if (this.props.position !== prevProps.position) this.ctrlRef.current.position = this.props.position;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.selected !== prevProps.selected) this.ctrlRef.current.selected = this.props.selected;
                if (this.props.size !== prevProps.size) this.ctrlRef.current.size = this.props.size;
                if (this.props.state !== prevProps.state) this.ctrlRef.current.state = this.props.state;
                if (this.props.text !== prevProps.text) this.ctrlRef.current.text = this.props.text;
                if (this.props.theme !== prevProps.theme) this.ctrlRef.current.theme = this.props.theme;
                if (this.props.visible !== prevProps.visible) this.ctrlRef.current.visible = this.props.visible;
            }
        }

        //
        // Methods -----------------------------------------------------------------------------------
        //

        // Layout ------------------------------------------------------------------------------------

    }, {
        key: 'maximize',
        value: function maximize() {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.maximize();
        }
    }, {
        key: 'minimize',
        value: function minimize() {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.minimize();
        }

        // Open/Close --------------------------------------------------------------------------------

    }, {
        key: 'close',
        value: function close(remove) {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.close(remove);
        }
    }, {
        key: 'open',
        value: function open() {
            if (this.ctrlRef && this.ctrlRef.current) this.ctrlRef.current.open();
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
                'iui-window',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUIWindowComponent;
}(Component);

export default IntegralUIWindowComponent;