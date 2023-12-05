import React, { Component } from "react";

import '../components/integralui.listbox.js';

import _regeneratorRuntime from 'babel-runtime/regenerator';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntegralUIListBoxComponent = function (_Component) {
    _inherits(IntegralUIListBoxComponent, _Component);

    function IntegralUIListBoxComponent(props) {
        _classCallCheck(this, IntegralUIListBoxComponent);

        var _this = _possibleConstructorReturn(this, (IntegralUIListBoxComponent.__proto__ || Object.getPrototypeOf(IntegralUIListBoxComponent)).call(this, props));

        _this.ctrlRef = React.createRef();
        return _this;
    }

    _createClass(IntegralUIListBoxComponent, [{
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
                if (this.props.afterEdit) this.ctrlRef.current.addEventListener('afterEdit', function (e) {
                    return _this2.props.afterEdit(e);
                });
                if (this.props.afterSelect) this.ctrlRef.current.addEventListener('afterSelect', function (e) {
                    return _this2.props.afterSelect(e);
                });
                if (this.props.beforeEdit) this.ctrlRef.current.addEventListener('beforeEdit', function (e) {
                    return _this2.props.beforeEdit(e);
                });
                if (this.props.beforeSelect) this.ctrlRef.current.addEventListener('beforeSelect', function (e) {
                    return _this2.props.beforeSelect(e);
                });
                if (this.props.checkedChanged) this.ctrlRef.current.addEventListener('checkedChanged', function (e) {
                    return _this2.props.checkedChanged(e);
                });
                if (this.props.clear) this.ctrlRef.current.addEventListener('clear', function () {
                    return _this2.props.clear();
                });
                if (this.props.dragDrop) this.ctrlRef.current.addEventListener('dragDrop', function (e) {
                    return _this2.props.dragDrop(e);
                });
                if (this.props.dragDropComplete) this.ctrlRef.current.addEventListener('dragDropComplete', function (e) {
                    return _this2.props.dragDropComplete(e);
                });
                if (this.props.dragEnd) this.ctrlRef.current.addEventListener('dragEnd', function (e) {
                    return _this2.props.dragEnd(e);
                });
                if (this.props.dragEnter) this.ctrlRef.current.addEventListener('dragEnter', function (e) {
                    return _this2.props.dragEnter(e);
                });
                if (this.props.dragLeave) this.ctrlRef.current.addEventListener('dragLeave', function (e) {
                    return _this2.props.dragLeave(e);
                });
                if (this.props.dragOver) this.ctrlRef.current.addEventListener('dragOver', function (e) {
                    return _this2.props.dragOver(e);
                });
                if (this.props.dragStart) this.ctrlRef.current.addEventListener('dragStart', function (e) {
                    return _this2.props.dragStart(e);
                });
                if (this.props.enabledChanged) this.ctrlRef.current.addEventListener('enabledChanged', function (e) {
                    return _this2.props.enabledChanged(e);
                });
                if (this.props.filtered) this.ctrlRef.current.addEventListener('filtered', function () {
                    return _this2.props.filtered();
                });
                if (this.props.itemAdded) this.ctrlRef.current.addEventListener('itemAdded', function (e) {
                    return _this2.props.itemAdded(e);
                });
                if (this.props.itemAdding) this.ctrlRef.current.addEventListener('itemAdding', function (e) {
                    return _this2.props.itemAdding(e);
                });
                if (this.props.itemClick) this.ctrlRef.current.addEventListener('itemClick', function (e) {
                    return _this2.props.itemClick(e);
                });
                if (this.props.itemDblClick) this.ctrlRef.current.addEventListener('itemDblClick', function (e) {
                    return _this2.props.itemDblClick(e);
                });
                if (this.props.itemHover) this.ctrlRef.current.addEventListener('itemHover', function (e) {
                    return _this2.props.itemHover(e);
                });
                if (this.props.itemMoved) this.ctrlRef.current.addEventListener('itemMoved', function (e) {
                    return _this2.props.itemMoved(e);
                });
                if (this.props.itemRemoved) this.ctrlRef.current.addEventListener('itemRemoved', function (e) {
                    return _this2.props.itemRemoved(e);
                });
                if (this.props.itemRemoving) this.ctrlRef.current.addEventListener('itemRemoving', function (e) {
                    return _this2.props.itemRemoving(e);
                });
                if (this.props.itemRightClick) this.ctrlRef.current.addEventListener('itemRightClick', function (e) {
                    return _this2.props.itemRightClick(e);
                });
                if (this.props.keyDown) this.ctrlRef.current.addEventListener('keyDown', function (e) {
                    return _this2.props.keyDown(e);
                });
                if (this.props.keyPress) this.ctrlRef.current.addEventListener('keyPress', function (e) {
                    return _this2.props.keyPress(e);
                });
                if (this.props.keyUp) this.ctrlRef.current.addEventListener('keyUp', function (e) {
                    return _this2.props.keyUp(e);
                });
                if (this.props.loadComplete) this.ctrlRef.current.addEventListener('loadComplete', function () {
                    return _this2.props.loadComplete();
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
                if (this.props.sorted) this.ctrlRef.current.addEventListener('sorted', function () {
                    return _this2.props.sorted();
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
                if (this.props.afterEdit) this.ctrlRef.current.removeEventListener('afterEdit', this.props.afterEdit);
                if (this.props.afterSelect) this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
                if (this.props.beforeEdit) this.ctrlRef.current.removeEventListener('beforeEdit', this.props.beforeEdit);
                if (this.props.beforeSelect) this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
                if (this.props.checkedChanged) this.ctrlRef.current.removeEventListener('checkedChanged', this.props.checkedChanged);
                if (this.props.clear) this.ctrlRef.current.removeEventListener('clear', this.props.clear);
                if (this.props.dragDrop) this.ctrlRef.current.removeEventListener('dragDrop', this.props.dragDrop);
                if (this.props.dragDropComplete) this.ctrlRef.current.removeEventListener('dragDropComplete', this.props.dragDropComplete);
                if (this.props.dragEnd) this.ctrlRef.current.removeEventListener('dragEnd', this.props.dragEnd);
                if (this.props.dragEnter) this.ctrlRef.current.removeEventListener('dragEnter', this.props.dragEnter);
                if (this.props.dragLeave) this.ctrlRef.current.removeEventListener('dragLeave', this.props.dragLeave);
                if (this.props.dragOver) this.ctrlRef.current.removeEventListener('dragOver', this.props.dragOver);
                if (this.props.dragStart) this.ctrlRef.current.removeEventListener('dragStart', this.props.dragStart);
                if (this.props.enabledChanged) this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
                if (this.props.filtered) this.ctrlRef.current.removeEventListener('filtered', this.props.filtered);
                if (this.props.itemAdded) this.ctrlRef.current.removeEventListener('itemAdded', this.props.itemAdded);
                if (this.props.itemAdding) this.ctrlRef.current.removeEventListener('itemAdding', this.props.itemAdding);
                if (this.props.itemClick) this.ctrlRef.current.removeEventListener('itemClick', this.props.itemClick);
                if (this.props.itemDblClick) this.ctrlRef.current.removeEventListener('itemDblClick', this.props.itemDblClick);
                if (this.props.itemHover) this.ctrlRef.current.removeEventListener('itemHover', this.props.itemHover);
                if (this.props.itemMoved) this.ctrlRef.current.removeEventListener('itemMoved', this.props.itemMoved);
                if (this.props.itemRemoved) this.ctrlRef.current.removeEventListener('itemRemoved', this.props.itemRemoved);
                if (this.props.itemRemoving) this.ctrlRef.current.removeEventListener('itemRemoving', this.props.itemRemoving);
                if (this.props.itemRightClick) this.ctrlRef.current.removeEventListener('itemRightClick', this.props.itemRightClick);
                if (this.props.keyDown) this.ctrlRef.current.removeEventListener('keyDown', this.props.keyDown);
                if (this.props.keyPress) this.ctrlRef.current.removeEventListener('keyPress', this.props.keyPress);
                if (this.props.keyUp) this.ctrlRef.current.removeEventListener('keyUp', this.props.keyUp);
                if (this.props.loadComplete) this.ctrlRef.current.removeEventListener('loadComplete', this.props.loadComplete);
                if (this.props.scrollPosChanged) this.ctrlRef.current.removeEventListener('scrollPosChanged', this.props.scrollPosChanged);
                if (this.props.selectionChanged) this.ctrlRef.current.removeEventListener('selectionChanged', this.props.selectionChanged);
                if (this.props.sizeChanged) this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
                if (this.props.sorted) this.ctrlRef.current.removeEventListener('sorted', this.props.sorted);
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
                if (this._isDefined(this.props.allowDrag)) this.ctrlRef.current.allowDrag = this.props.allowDrag;
                if (this._isDefined(this.props.allowDrop)) this.ctrlRef.current.allowDrop = this.props.allowDrop;
                if (this._isDefined(this.props.allowFilter)) this.ctrlRef.current.allowFilter = this.props.allowFilter;
                if (this._isDefined(this.props.allowFocus)) this.ctrlRef.current.allowFocus = this.props.allowFocus;
                if (this._isDefined(this.props.animateInit)) this.ctrlRef.current.animateInit = this.props.animateInit;
                if (this._isDefined(this.props.autoSize)) this.ctrlRef.current.autoSize = this.props.autoSize;
                if (this._isDefined(this.props.checkBoxes)) this.ctrlRef.current.checkBoxes = this.props.checkBoxes;
                if (this._isDefined(this.props.colorScheme)) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this._isDefined(this.props.contentVisibility)) this.ctrlRef.current.contentVisibility = this.props.contentVisibility;
                if (this._isDefined(this.props.customStyle)) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this._isDefined(this.props.data)) this.ctrlRef.current.data = this.props.data;
                if (this._isDefined(this.props.dataFields)) this.ctrlRef.current.dataFields = this.props.dataFields;
                if (this._isDefined(this.props.dragDropMode)) this.ctrlRef.current.dragDropMode = this.props.dragDropMode;
                if (this._isDefined(this.props.enabled)) this.ctrlRef.current.enabled = this.props.enabled;
                if (this._isDefined(this.props.focusedItem)) this.ctrlRef.current.focusedItem = this.props.focusedItem;
                if (this._isDefined(this.props.groups)) this.ctrlRef.current.groups = this.props.groups;
                if (this._isDefined(this.props.itemHoverTemplate)) this.ctrlRef.current.itemHoverTemplate = this.props.itemHoverTemplate;
                if (this._isDefined(this.props.items)) this.ctrlRef.current.items = this.props.items;
                if (this._isDefined(this.props.itemSelectTemplate)) this.ctrlRef.current.itemSelectTemplate = this.props.itemSelectTemplate;
                if (this._isDefined(this.props.itemSpacing)) this.ctrlRef.current.itemSpacing = this.props.itemSpacing;
                if (this._isDefined(this.props.itemTemplate)) this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
                if (this._isDefined(this.props.mouseWheelSpeed)) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this._isDefined(this.props.name)) this.ctrlRef.current.name = this.props.name;
                if (this._isDefined(this.props.resourcePath)) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this._isDefined(this.props.scrollAppearance)) this.ctrlRef.current.scrollAppearance = this.props.scrollAppearance;
                if (this._isDefined(this.props.selectedItem)) this.ctrlRef.current.selectedItem = this.props.selectedItem;
                if (this._isDefined(this.props.selectionMode)) this.ctrlRef.current.selectionMode = this.props.selectionMode;
                if (this._isDefined(this.props.showExpandBox)) this.ctrlRef.current.showExpandBox = this.props.showExpandBox;
                if (this._isDefined(this.props.showGroups)) this.ctrlRef.current.showGroups = this.props.showGroups;
                if (this._isDefined(this.props.showScroll)) this.ctrlRef.current.showScroll = this.props.showScroll;
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
                if (this.props.allowDrag !== prevProps.allowDrag) this.ctrlRef.current.allowDrag = this.props.allowDrag;
                if (this.props.allowDrop !== prevProps.allowDrop) this.ctrlRef.current.allowDrop = this.props.allowDrop;
                if (this.props.allowFilter !== prevProps.allowFilter) this.ctrlRef.current.allowFilter = this.props.allowFilter;
                if (this.props.allowFocus !== prevProps.allowFocus) this.ctrlRef.current.allowFocus = this.props.allowFocus;
                if (this.props.animateInit !== prevProps.animateInit) this.ctrlRef.current.animateInit = this.props.animateInit;
                if (this.props.autoSize !== prevProps.autoSize) this.ctrlRef.current.autoSize = this.props.autoSize;
                if (this.props.dataFields !== prevProps.dataFields) this.ctrlRef.current.dataFields = this.props.dataFields;
                if (this.props.checkBoxes !== prevProps.checkBoxes) this.ctrlRef.current.checkBoxes = this.props.checkBoxes;
                if (this.props.contentVisibility !== prevProps.contentVisibility) this.ctrlRef.current.contentVisibility = this.props.contentVisibility;
                if (this.props.colorScheme !== prevProps.colorScheme) this.ctrlRef.current.colorScheme = this.props.colorScheme;
                if (this.props.customStyle !== prevProps.customStyle) this.ctrlRef.current.customStyle = this.props.customStyle;
                if (this.props.data !== prevProps.data) this.ctrlRef.current.data = this.props.data;
                if (this.props.dragDropMode !== prevProps.dragDropMode) this.ctrlRef.current.dragDropMode = this.props.dragDropMode;
                if (this.props.enabled !== prevProps.enabled) this.ctrlRef.current.enabled = this.props.enabled;
                if (this.props.focusedItem !== prevProps.focusedItem) this.ctrlRef.current.focusedItem = this.props.focusedItem;
                if (this._isDefined(this.props.groups)) this.ctrlRef.current.groups = this.props.groups;
                if (this._isDefined(this.props.itemHoverTemplate)) this.ctrlRef.current.itemHoverTemplate = this.props.itemHoverTemplate;
                if (this._isDefined(this.props.items)) this.ctrlRef.current.items = this.props.items;
                if (this._isDefined(this.props.itemSelectTemplate)) this.ctrlRef.current.itemSelectTemplate = this.props.itemSelectTemplate;
                if (this.props.itemSpacing !== prevProps.itemSpacing) this.ctrlRef.current.itemSpacing = this.props.itemSpacing;
                if (this._isDefined(this.props.itemTemplate)) this.ctrlRef.current.itemTemplate = this.props.itemTemplate;
                if (this.props.mouseWheelSpeed !== prevProps.mouseWheelSpeed) this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
                if (this.props.name !== prevProps.name) this.ctrlRef.current.name = this.props.name;
                if (this.props.resourcePath !== prevProps.resourcePath) this.ctrlRef.current.resourcePath = this.props.resourcePath;
                if (this.props.scrollAppearance !== prevProps.scrollAppearance) this.ctrlRef.current.scrollAppearance = this.props.scrollAppearance;
                if (this.props.selectedItem !== prevProps.selectedItem) this.ctrlRef.current.selectedItem = this.props.selectedItem;
                if (this.props.selectionMode !== prevProps.selectionMode) this.ctrlRef.current.selectionMode = this.props.selectionMode;
                if (this.props.showGroups !== prevProps.showGroups) this.ctrlRef.current.showGroups = this.props.showGroups;
                if (this.props.showExpandBox !== prevProps.showExpandBox) this.ctrlRef.current.showExpandBox = this.props.showExpandBox;
                if (this.props.showScroll !== prevProps.showScroll) this.ctrlRef.current.showScroll = this.props.showScroll;
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
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(item) {
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.addItem(item) : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function addItem(_x) {
                return _ref.apply(this, arguments);
            }

            return addItem;
        }()
    }, {
        key: 'clearItems',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
                return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.clearItems() : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function clearItems() {
                return _ref2.apply(this, arguments);
            }

            return clearItems;
        }()
    }, {
        key: 'insertItemAt',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(item, index) {
                return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                return _context3.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.insertItemAt(item, index) : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function insertItemAt(_x2, _x3) {
                return _ref3.apply(this, arguments);
            }

            return insertItemAt;
        }()
    }, {
        key: 'insertItemBefore',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(item, refItem) {
                return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                return _context4.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.insertItemBefore(item, refItem) : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function insertItemBefore(_x4, _x5) {
                return _ref4.apply(this, arguments);
            }

            return insertItemBefore;
        }()
    }, {
        key: 'insertItemAfter',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(item, refItem) {
                return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                return _context5.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.insertItemAfter(item, refItem) : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function insertItemAfter(_x6, _x7) {
                return _ref5.apply(this, arguments);
            }

            return insertItemAfter;
        }()
    }, {
        key: 'removeItem',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(item) {
                return _regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                return _context6.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.removeItem(item) : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function removeItem(_x8) {
                return _ref6.apply(this, arguments);
            }

            return removeItem;
        }()
    }, {
        key: 'removeItemAt',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(index) {
                return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                return _context7.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.removeItemAt(index) : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function removeItemAt(_x9) {
                return _ref7.apply(this, arguments);
            }

            return removeItemAt;
        }()

        // Data --------------------------------------------------------------------------------------

    }, {
        key: 'loadData',
        value: function loadData(data, fields) {
            if (this._isCtrlDefined()) this.ctrlRef.current.loadData(data, fields);
        }

        // Expand / Collapse -----------------------------------------------------------------

    }, {
        key: 'collapse',
        value: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(group) {
                return _regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                return _context8.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.collapse(group) : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function collapse(_x10) {
                return _ref8.apply(this, arguments);
            }

            return collapse;
        }()
    }, {
        key: 'expand',
        value: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9(group) {
                return _regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                return _context9.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.expand(group) : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, this);
            }));

            function expand(_x11) {
                return _ref9.apply(this, arguments);
            }

            return expand;
        }()
    }, {
        key: 'toggle',
        value: function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee10(group, value) {
                return _regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
                            case 0:
                                return _context10.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.toggle(group, value) : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context10.stop();
                        }
                    }
                }, _callee10, this);
            }));

            function toggle(_x12, _x13) {
                return _ref10.apply(this, arguments);
            }

            return toggle;
        }()

        // Export ------------------------------------------------------------------------------------

    }, {
        key: 'exportToJSON',
        value: function exportToJSON(data, fields, spacing) {
            return this._isCtrlDefined() ? this.ctrlRef.current.exportToJSON(data, fields, spacing) : null;
        }

        // Filter  ---------------------------------------------------------------------

    }, {
        key: 'filter',
        value: function filter(params) {
            if (this._isCtrlDefined()) this.ctrlRef.current.filter(params);
        }

        // General ---------------------------------------------------------------------------

    }, {
        key: 'cloneItem',
        value: function cloneItem(item) {
            if (this._isCtrlDefined()) this.ctrlRef.current.cloneItem(item);
        }
    }, {
        key: 'getList',
        value: function getList(key) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getList(key) : null;
        }
    }, {
        key: 'getFullList',
        value: function getFullList() {
            return this._isCtrlDefined() ? this.ctrlRef.current.getFullList() : null;
        }
    }, {
        key: 'getTopItem',
        value: function getTopItem() {
            return this._isCtrlDefined() ? this.ctrlRef.current.getTopItem() : null;
        }

        // Move operations -------------------------------------------------------------------

    }, {
        key: 'getPrevItem',
        value: function getPrevItem(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getPrevItem(item) : null;
        }
    }, {
        key: 'getNextItem',
        value: function getNextItem(item) {
            return this._isCtrlDefined() ? this.ctrlRef.current.getNextItem(item) : null;
        }
    }, {
        key: 'moveItem',
        value: function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee11(item, direction, targetItem, position) {
                return _regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                return _context11.abrupt('return', this._isCtrlDefined() ? this.ctrlRef.current.moveItem(item, direction, targetItem, position) : Promise.resolve());

                            case 1:
                            case 'end':
                                return _context11.stop();
                        }
                    }
                }, _callee11, this);
            }));

            function moveItem(_x14, _x15, _x16, _x17) {
                return _ref11.apply(this, arguments);
            }

            return moveItem;
        }()

        // Keyboard Navigation ---------------------------------------------------------------

    }, {
        key: 'moveFocusFromItem',
        value: function moveFocusFromItem(item, direction) {
            if (this._isCtrlDefined()) this.ctrlRef.current.moveFocusFromItem(item, direction);
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
        key: 'isScrolling',
        value: function isScrolling() {
            return this._isCtrlDefined() ? this.ctrlRef.current.isScrolling() : false;
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

        // Selection ---------------------------------------------------------------------------------

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this._isCtrlDefined()) this.ctrlRef.current.clearSelection();
        }
    }, {
        key: 'selectItems',
        value: function selectItems(items) {
            if (this._isCtrlDefined()) this.ctrlRef.current.selectItems(items);
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
                'iui-listbox',
                { id: this.props.id, ref: this.ctrlRef },
                this.props.children
            );
        }
    }]);

    return IntegralUIListBoxComponent;
}(Component);

export default IntegralUIListBoxComponent;