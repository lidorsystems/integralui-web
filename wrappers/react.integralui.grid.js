/*
  filename: react.integralui.grid.js
  version : 22.4.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import React,{Component}from"react";import"../components/integralui.grid.js";var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1;i.configurable=!0;if("value"in i)i.writable=!0;Object.defineProperty(e,i.key,i)}}return function(t,r,i){if(r)e(t.prototype,r);if(i)e(t,i);return t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var IntegralUIGridComponent=function(e){_inherits(t,Component);function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.ctrlRef=React.createRef();return r}_createClass(t,[{key:"_isCtrlDefined",value:function(){return this.ctrlRef&&this.ctrlRef.current?!0:!1}},{key:"componentDidMount",value:function(){var e=this;this._initProps();if(this._isCtrlDefined()){if(this.props.afterCollapse)this.ctrlRef.current.addEventListener("afterCollapse",function(t){return e.props.afterCollapse(t)});if(this.props.afterExpand)this.ctrlRef.current.addEventListener("afterExpand",function(t){return e.props.afterExpand(t)});if(this.props.afterSelect)this.ctrlRef.current.addEventListener("afterSelect",function(t){return e.props.afterSelect(t)});if(this.props.beforeCollapse)this.ctrlRef.current.addEventListener("beforeCollapse",function(t){return e.props.beforeCollapse(t)});if(this.props.beforeEdit)this.ctrlRef.current.addEventListener("beforeEdit",function(t){return e.props.beforeEdit(t)});if(this.props.beforeExpand)this.ctrlRef.current.addEventListener("beforeExpand",function(t){return e.props.beforeExpand(t)});if(this.props.beforeSelect)this.ctrlRef.current.addEventListener("beforeSelect",function(t){return e.props.beforeSelect(t)});if(this.props.cellClick)this.ctrlRef.current.addEventListener("cellClick",function(t){return e.props.cellClick(t)});if(this.props.cellDblClick)this.ctrlRef.current.addEventListener("cellDblClick",function(t){return e.props.cellDblClick(t)});if(this.props.cellHover)this.ctrlRef.current.addEventListener("cellHover",function(){return e.props.cellHover()});if(this.props.cellTouched)this.ctrlRef.current.addEventListener("cellTouched",function(){return e.props.cellTouched()});if(this.props.columnHover)this.ctrlRef.current.addEventListener("columnHover",function(t){return e.props.columnHover(t)});if(this.props.change)this.ctrlRef.current.addEventListener("change",function(t){return e.props.change(t)});if(this.props.columnAdding)this.ctrlRef.current.addEventListener("columnAdding",function(t){return e.props.columnAdding(t)});if(this.props.columnClick)this.ctrlRef.current.addEventListener("columnClick",function(t){return e.props.columnClick(t)});if(this.props.columnDblClick)this.ctrlRef.current.addEventListener("columnDblClick",function(t){return e.props.columnDblClick(t)});if(this.props.columnHover)this.ctrlRef.current.addEventListener("columnHover",function(t){return e.props.columnHover(t)});if(this.props.columnOrderChanged)this.ctrlRef.current.addEventListener("columnOrderChanged",function(t){return e.props.columnOrderChanged(t)});if(this.props.columnRemoved)this.ctrlRef.current.addEventListener("columnRemoved",function(t){return e.props.columnRemoved(t)});if(this.props.columnRemoving)this.ctrlRef.current.addEventListener("columnRemoving",function(t){return e.props.columnRemoving(t)});if(this.props.columnRightClick)this.ctrlRef.current.addEventListener("columnRightClick",function(t){return e.props.columnRightClick(t)});if(this.props.columnSizeChanged)this.ctrlRef.current.addEventListener("columnSizeChanged",function(t){return e.props.columnSizeChanged(t)});if(this.props.dataChanging)this.ctrlRef.current.addEventListener("dataChanging",function(t){return e.props.dataChanging(t)});if(this.props.dataChanged)this.ctrlRef.current.addEventListener("dataChanged",function(t){return e.props.dataChanged(t)});if(this.props.dragDrop)this.ctrlRef.current.addEventListener("dragDrop",function(t){return e.props.dragDrop(t)});if(this.props.dragDropComplete)this.ctrlRef.current.addEventListener("dragDropComplete",function(t){return e.props.dragDropComplete(t)});if(this.props.dragEnd)this.ctrlRef.current.addEventListener("dragEnd",function(t){return e.props.dragEnd(t)});if(this.props.dragEnter)this.ctrlRef.current.addEventListener("dragEnter",function(t){return e.props.dragEnter(t)});if(this.props.dragLeave)this.ctrlRef.current.addEventListener("dragLeave",function(t){return e.props.dragLeave(t)});if(this.props.dragOver)this.ctrlRef.current.addEventListener("dragOver",function(t){return e.props.dragOver(t)});if(this.props.dragStart)this.ctrlRef.current.addEventListener("dragStart",function(t){return e.props.dragStart(t)});if(this.props.enabledChanged)this.ctrlRef.current.addEventListener("enabledChanged",function(t){return e.props.enabledChanged(t)});if(this.props.filterChanged)this.ctrlRef.current.addEventListener("filterChanged",function(t){return e.props.filterChanged(t)});if(this.props.gotFocus)this.ctrlRef.current.addEventListener("gotFocus",function(t){return e.props.gotFocus(t)});if(this.props.groupAdded)this.ctrlRef.current.removeEventListener("groupAdded",function(t){return e.props.groupAdded(t)});if(this.props.groupAdding)this.ctrlRef.current.removeEventListener("groupAdding",function(t){return e.props.groupAdding(t)});if(this.props.groupOrderChanged)this.ctrlRef.current.addEventListener("groupOrderChanged",function(t){return e.props.groupOrderChanged(t)});if(this.props.groupRemoved)this.ctrlRef.current.removeEventListener("groupRemoved",function(t){return e.props.groupRemoved(t)});if(this.props.groupRemoving)this.ctrlRef.current.removeEventListener("groupRemoving",function(t){return e.props.groupRemoving(t)});if(this.props.keyDown)this.ctrlRef.current.addEventListener("keyDown",function(t){return e.props.keyDown(t)});if(this.props.keyPress)this.ctrlRef.current.addEventListener("keyPress",function(t){return e.props.keyPress(t)});if(this.props.keyUp)this.ctrlRef.current.addEventListener("keyUp",function(t){return e.props.keyUp(t)});if(this.props.lostFocus)this.ctrlRef.current.addEventListener("lostFocus",function(t){return e.props.lostFocus(t)});if(this.props.loadComplete)this.ctrlRef.current.addEventListener("loadComplete",function(){return e.props.loadComplete()});if(this.props.pageChanged)this.ctrlRef.current.addEventListener("pageChanged",function(t){return e.props.pageChanged(t)});if(this.props.rowAdded)this.ctrlRef.current.addEventListener("rowAdded",function(t){return e.props.rowAdded(t)});if(this.props.rowAdding)this.ctrlRef.current.addEventListener("rowAdding",function(t){return e.props.rowAdding(t)});if(this.props.rowClick)this.ctrlRef.current.addEventListener("rowClick",function(t){return e.props.rowClick(t)});if(this.props.rowDblClick)this.ctrlRef.current.addEventListener("rowDblClick",function(t){return e.props.rowDblClick(t)});if(this.props.rowHover)this.ctrlRef.current.addEventListener("rowHover",function(t){return e.props.rowHover(t)});if(this.props.rowRemoved)this.ctrlRef.current.addEventListener("rowRemoved",function(t){return e.props.rowRemoved(t)});if(this.props.rowRemoving)this.ctrlRef.current.addEventListener("rowRemoving",function(t){return e.props.rowRemoving(t)});if(this.props.rowRightClick)this.ctrlRef.current.addEventListener("rowRightClick",function(t){return e.props.rowRightClick(t)});if(this.props.rowsCleared)this.ctrlRef.current.addEventListener("rowsCleared",function(t){return e.props.rowsCleared(t)});if(this.props.scrollPosChanged)this.ctrlRef.current.addEventListener("scrollPosChanged",function(t){return e.props.scrollPosChanged(t)});if(this.props.selectionChanged)this.ctrlRef.current.addEventListener("selectionChanged",function(t){return e.props.selectionChanged(t)});if(this.props.sizeChanged)this.ctrlRef.current.addEventListener("sizeChanged",function(t){return e.props.sizeChanged(t)});if(this.props.stateChanged)this.ctrlRef.current.addEventListener("stateChanged",function(t){return e.props.stateChanged(t)});if(this.props.updateComplete)this.ctrlRef.current.addEventListener("updateComplete",function(t){return e.props.updateComplete(t)});if(this.props.valueChanged)this.ctrlRef.current.addEventListener("valueChanged",function(t){return e.props.valueChanged(t)});if(this.props.valueChanging)this.ctrlRef.current.addEventListener("valueChanging",function(t){return e.props.valueChanging(t)})}}},{key:"componentWillUnmount",value:function(){if(this._isCtrlDefined()){if(this.props.afterCollapse)this.ctrlRef.current.removeEventListener("afterCollapse",this.props.afterCollapse);if(this.props.afterExpand)this.ctrlRef.current.removeEventListener("afterExpand",this.props.afterExpand);if(this.props.afterSelect)this.ctrlRef.current.removeEventListener("afterSelect",this.props.afterSelect);if(this.props.beforeCollapse)this.ctrlRef.current.removeEventListener("beforeCollapse",this.props.beforeCollapse);if(this.props.beforeEdit)this.ctrlRef.current.removeEventListener("beforeEdit    ",this.props.beforeEdit);if(this.props.beforeExpand)this.ctrlRef.current.removeEventListener("beforeExpand",this.props.beforeExpand);if(this.props.beforeSelect)this.ctrlRef.current.removeEventListener("beforeSelect",this.props.beforeSelect);if(this.props.cellClick)this.ctrlRef.current.removeEventListener("cellClick",this.props.cellClick);if(this.props.cellDblClick)this.ctrlRef.current.removeEventListener("cellDblClick",this.props.cellDblClick);if(this.props.cellHover)this.ctrlRef.current.removeEventListener("cellHover",this.props.cellHover);if(this.props.cellTouched)this.ctrlRef.current.removeEventListener("cellTouched",this.props.cellTouched);if(this.props.columnHover)this.ctrlRef.current.removeEventListener("columnHover",this.props.columnHover);if(this.props.change)this.ctrlRef.current.removeEventListener("change",this.props.change);if(this.props.columnAdded)this.ctrlRef.current.removeEventListener("columnAdded",this.props.columnAdded);if(this.props.columnAdding)this.ctrlRef.current.removeEventListener("columnAdding",this.props.columnAdding);if(this.props.columnClick)this.ctrlRef.current.removeEventListener("columnClick",this.props.columnClick);if(this.props.columnDblClick)this.ctrlRef.current.removeEventListener("columnDblClick",this.props.columnDblClick);if(this.props.columnHover)this.ctrlRef.current.removeEventListener("columnHover",this.props.columnHover);if(this.props.columnOrderChanged)this.ctrlRef.current.removeEventListener("columnOrderChanged",this.props.columnOrderChanged);if(this.props.columnRemoved)this.ctrlRef.current.removeEventListener("columnRemoved",this.props.columnRemoved);if(this.props.columnRemoving)this.ctrlRef.current.removeEventListener("columnRemoving",this.props.columnRemoving);if(this.props.columnRightClick)this.ctrlRef.current.removeEventListener("columnRightClick",this.props.columnRightClick);if(this.props.columnSizeChanged)this.ctrlRef.current.removeEventListener("columnSizeChanged",this.props.columnSizeChanged);if(this.props.dataChanging)this.ctrlRef.current.removeEventListener("dataChanging",this.props.dataChanging);if(this.props.dataChanged)this.ctrlRef.current.removeEventListener("dataChanged",this.props.dataChanged);if(this.props.dragDrop)this.ctrlRef.current.removeEventListener("dragDrop",this.props.dragDrop);if(this.props.dragDropComplete)this.ctrlRef.current.removeEventListener("dragDropComplete",this.props.dragDropComplete);if(this.props.dragEnd)this.ctrlRef.current.removeEventListener("dragEnd",this.props.dragEnd);if(this.props.dragEnter)this.ctrlRef.current.removeEventListener("dragEnter",this.props.dragEnter);if(this.props.dragLeave)this.ctrlRef.current.removeEventListener("dragLeave",this.props.dragLeave);if(this.props.dragOver)this.ctrlRef.current.removeEventListener("dragOver",this.props.dragOver);if(this.props.dragStart)this.ctrlRef.current.removeEventListener("dragStart",this.props.dragStart);if(this.props.enabledChanged)this.ctrlRef.current.removeEventListener("enabledChanged",this.props.enabledChanged);if(this.props.filterChanged)this.ctrlRef.current.removeEventListener("filterChanged",this.props.filterChanged);if(this.props.gotFocus)this.ctrlRef.current.removeEventListener("gotFocus",this.props.gotFocus);if(this.props.groupAdded)this.ctrlRef.current.removeEventListener("groupAdded",this.props.groupAdded);if(this.props.groupAdding)this.ctrlRef.current.removeEventListener("groupAdding",this.props.groupAdding);if(this.props.groupOrderChanged)this.ctrlRef.current.removeEventListener("groupOrderChanged",this.props.groupOrderChanged);if(this.props.groupRemoved)this.ctrlRef.current.removeEventListener("groupRemoved",this.props.groupRemoved);if(this.props.groupRemoving)this.ctrlRef.current.removeEventListener("groupRemoving",this.props.groupRemoving);if(this.props.keyDown)this.ctrlRef.current.removeEventListener("keyDown",this.props.keyDown);if(this.props.keyPress)this.ctrlRef.current.removeEventListener("keyPress",this.props.keyPress);if(this.props.keyUp)this.ctrlRef.current.removeEventListener("keyUp",this.props.keyUp);if(this.props.lostFocus)this.ctrlRef.current.removeEventListener("lostFocus",this.props.lostFocus);if(this.props.loadComplete)this.ctrlRef.current.removeEventListener("loadComplete",this.props.loadComplete);if(this.props.pageChanged)this.ctrlRef.current.removeEventListener("pageChanged",this.props.pageChanged);if(this.props.rowAdded)this.ctrlRef.current.removeEventListener("rowAdded",this.props.rowAdded);if(this.props.rowAdding)this.ctrlRef.current.removeEventListener("rowAdding",this.props.rowAdding);if(this.props.rowClick)this.ctrlRef.current.removeEventListener("rowClick",this.props.rowClick);if(this.props.rowDblClick)this.ctrlRef.current.removeEventListener("rowDblClick",this.props.rowDblClick);if(this.props.rowHover)this.ctrlRef.current.removeEventListener("rowHover",this.props.rowHover);if(this.props.rowRemoved)this.ctrlRef.current.removeEventListener("rowRemoved",this.props.rowRemoved);if(this.props.rowRemoving)this.ctrlRef.current.removeEventListener("rowRemoving",this.props.rowRemoving);if(this.props.rowRightClick)this.ctrlRef.current.removeEventListener("rowRightClick",this.props.rowRightClick);if(this.props.rowsCleared)this.ctrlRef.current.removeEventListener("rowsCleared",this.props.rowsCleared);if(this.props.scrollPosChanged)this.ctrlRef.current.removeEventListener("scrollPosChanged",this.props.scrollPosChanged);if(this.props.selectionChanged)this.ctrlRef.current.removeEventListener("selectionChanged",this.props.selectionChanged);if(this.props.sizeChanged)this.ctrlRef.current.removeEventListener("sizeChanged",this.props.sizeChanged);if(this.props.stateChanged)this.ctrlRef.current.removeEventListener("stateChanged",this.props.stateChanged);if(this.props.updateComplete)this.ctrlRef.current.removeEventListener("updateComplete",this.props.updateComplete);if(this.props.valueChanged)this.ctrlRef.current.removeEventListener("valueChanged",this.props.valueChanged);if(this.props.valueChanging)this.ctrlRef.current.removeEventListener("valueChanging",this.props.valueChanging)}}},{key:"componentDidUpdate",value:function(e){this._updateData(e)}},{key:"_initProps",value:function(){if(this._isCtrlDefined()){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.allowUpdate))this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this._isDefined(this.props.allowColumnReorder))this.ctrlRef.current.allowColumnReorder=this.props.allowColumnReorder;if(this._isDefined(this.props.allowDrag))this.ctrlRef.current.allowDrag=this.props.allowDrag;if(this._isDefined(this.props.allowDrop))this.ctrlRef.current.allowDrop=this.props.allowDrop;if(this._isDefined(this.props.allowFilter))this.ctrlRef.current.allowFilter=this.props.allowFilter;if(this._isDefined(this.props.allowFocus))this.ctrlRef.current.allowFocus=this.props.allowFocus;if(this._isDefined(this.props.autoExpand))this.ctrlRef.current.autoExpand=this.props.autoExpand;if(this._isDefined(this.props.autoSizeColumns))this.ctrlRef.current.autoSizeColumns=this.props.autoSizeColumns;if(this._isDefined(this.props.colorScheme))this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this._isDefined(this.props.columns))this.ctrlRef.current.columns=this.props.columns;if(this._isDefined(this.props.contentVisibility))this.ctrlRef.current.contentVisibility=this.props.contentVisibility;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.dataFields))this.ctrlRef.current.dataFields=this.props.dataFields;if(this._isDefined(this.props.editMode))this.ctrlRef.current.editMode=this.props.editMode;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.expandColumnIndex))this.ctrlRef.current.expandColumnIndex=this.props.expandColumnIndex;if(this._isDefined(this.props.footerHeight))this.ctrlRef.current.footerHeight=this.props.footerHeight;if(this._isDefined(this.props.footerTemplate))this.ctrlRef.current.footerTemplate=this.props.footerTemplate;if(this._isDefined(this.props.gridLines))this.ctrlRef.current.gridLines=this.props.gridLines;if(this._isDefined(this.props.grouping))this.ctrlRef.current.grouping=this.props.grouping;if(this._isDefined(this.props.groups))this.ctrlRef.current.groups=this.props.groups;if(this._isDefined(this.props.headerHeight))this.ctrlRef.current.headerHeight=this.props.headerHeight;if(this._isDefined(this.props.headerTemplate))this.ctrlRef.current.headerTemplate=this.props.headerTemplate;if(this._isDefined(this.props.inlineEditor))this.ctrlRef.current.inlineEditor=this.props.inlineEditor;if(this._isDefined(this.props.inlineFilter))this.ctrlRef.current.inlineFilter=this.props.inlineFilter;if(this._isDefined(this.props.mouseWheelSpeed))this.ctrlRef.current.mouseWheelSpeed=this.props.mouseWheelSpeed;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.paging))this.ctrlRef.current.paging=this.props.paging;if(this._isDefined(this.props.resourcePath))this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this._isDefined(this.props.rowHeight))this.ctrlRef.current.rowHeight=this.props.rowHeight;if(this._isDefined(this.props.rows))this.ctrlRef.current.rows=this.props.rows;if(this._isDefined(this.props.rowHoverTemplate))this.ctrlRef.current.rowHoverTemplate=this.props.rowHoverTemplate;if(this._isDefined(this.props.rowSelectTemplate))this.ctrlRef.current.rowSelectTemplate=this.props.rowSelectTemplate;if(this._isDefined(this.props.rowTemplate))this.ctrlRef.current.rowTemplate=this.props.rowTemplate;if(this._isDefined(this.props.selectedColumn))this.ctrlRef.current.selectedColumn=this.props.selectedColumn;if(this._isDefined(this.props.selectedRow))this.ctrlRef.current.selectedRow=this.props.selectedRow;if(this._isDefined(this.props.selectionMode))this.ctrlRef.current.selectionMode=this.props.selectionMode;if(this._isDefined(this.props.showExpandBox))this.ctrlRef.current.showExpandBox=this.props.showExpandBox;if(this._isDefined(this.props.showFooter))this.ctrlRef.current.showFooter=this.props.showFooter;if(this._isDefined(this.props.showHeader))this.ctrlRef.current.showHeader=this.props.showHeader;if(this._isDefined(this.props.showScroll))this.ctrlRef.current.showScroll=this.props.showScroll;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.sorting))this.ctrlRef.current.sorting=this.props.sorting;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme}}},{key:"_isDefined",value:function(e){return void 0!==e?!0:!1}},{key:"_updateData",value:function(e){if(this._isCtrlDefined()){if(this.props.allowAnimation!==e.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.allowUpdate!==e.allowUpdate)this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this.props.allowColumnReorder!==e.allowColumnReorder)this.ctrlRef.current.allowColumnReorder=this.props.allowColumnReorder;if(this.props.allowDrag!==e.allowDrag)this.ctrlRef.current.allowDrag=this.props.allowDrag;if(this.props.allowDrop!==e.allowDrop)this.ctrlRef.current.allowDrop=this.props.allowDrop;if(this.props.allowFilter!==e.allowFilter)this.ctrlRef.current.allowFilter=this.props.allowFilter;if(this.props.allowFocus!==e.allowFocus)this.ctrlRef.current.allowFocus=this.props.allowFocus;if(this.props.autoExpand!==e.autoExpand)this.ctrlRef.current.autoExpand=this.props.autoExpand;if(this.props.autoSizeColumns!==e.autoSizeColumns)this.ctrlRef.current.autoSizeColumns=this.props.autoSizeColumns;if(this.props.colorScheme!==e.colorScheme)this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this._isDefined(this.props.columns))this.ctrlRef.current.columns=this.props.columns;if(this.props.contentVisibility!==e.contentVisibility)this.ctrlRef.current.contentVisibility=this.props.contentVisibility;if(this.props.customStyle!==e.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this.props.data!==e.data)this.ctrlRef.current.data=this.props.data;if(this.props.dataFields!==e.dataFields)this.ctrlRef.current.dataFields=this.props.dataFields;if(this.props.editMode!==e.editMode)this.ctrlRef.current.editMode=this.props.editMode;if(this.props.enabled!==e.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this.props.expandColumnIndex!==e.expandColumnIndex)this.ctrlRef.current.expandColumnIndex=this.props.expandColumnIndex;if(this.props.gridLines!==e.gridLines)this.ctrlRef.current.gridLines=this.props.gridLines;if(this._isDefined(this.props.groups))this.ctrlRef.current.groups=this.props.groups;if(this.props.footerHeight!==e.footerHeight)this.ctrlRef.current.footerHeight=this.props.footerHeight;if(this._isDefined(this.props.footerTemplate))this.ctrlRef.current.footerTemplate=this.props.footerTemplate;if(this.props.grouping!==e.grouping)this.ctrlRef.current.grouping=this.props.grouping;if(this.props.headerHeight!==e.headerHeight)this.ctrlRef.current.headerHeight=this.props.headerHeight;if(this._isDefined(this.props.headerTemplate))this.ctrlRef.current.headerTemplate=this.props.headerTemplate;if(this.props.inlineEditor!==e.inlineEditor)this.ctrlRef.current.inlineEditor=this.props.inlineEditor;if(this.props.inlineFilter!==e.inlineFilter)this.ctrlRef.current.inlineFilter=this.props.inlineFilter;if(this.props.paging!==e.paging)this.ctrlRef.current.paging=this.props.paging;if(this.props.name!==e.name)this.ctrlRef.current.name=this.props.name;if(this.props.resourcePath!==e.resourcePath)this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this.props.rowHeight!==e.rowHeight)this.ctrlRef.current.rowHeight=this.props.rowHeight;if(this._isDefined(this.props.rows))this.ctrlRef.current.rows=this.props.rows;if(this._isDefined(this.props.rowHoverTemplate))this.ctrlRef.current.rowHoverTemplate=this.props.rowHoverTemplate;if(this._isDefined(this.props.rowSelectTemplate))this.ctrlRef.current.rowSelectTemplate=this.props.rowSelectTemplate;if(this._isDefined(this.props.rowTemplate))this.ctrlRef.current.rowTemplate=this.props.rowTemplate;if(this.props.selectedColumn!==e.selectedColumn)this.ctrlRef.current.selectedColumn=this.props.selectedColumn;if(this.props.selectedRow!==e.selectedRow)this.ctrlRef.current.selectedRow=this.props.selectedRow;if(this.props.selectionMode!==e.selectionMode)this.ctrlRef.current.selectionMode=this.props.selectionMode;if(this.props.showExpandBox!==e.showExpandBox)this.ctrlRef.current.showExpandBox=this.props.showExpandBox;if(this.props.showFooter!==e.showFooter)this.ctrlRef.current.showFooter=this.props.showFooter;if(this.props.showHeader!==e.showHeader)this.ctrlRef.current.showHeader=this.props.showHeader;if(this.props.showScroll!==e.showScroll)this.ctrlRef.current.showScroll=this.props.showScroll;if(this.props.size!==e.size)this.ctrlRef.current.size=this.props.size;if(this.props.sorting!==e.sorting)this.ctrlRef.current.sorting=this.props.sorting;if(this.props.state!==e.state)this.ctrlRef.current.state=this.props.state;if(this.props.theme!==e.theme)this.ctrlRef.current.theme=this.props.theme}}},{key:"addColumn",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.addColumn(e)}},{key:"addRow",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.addRow(e,t)}},{key:"clearColumns",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.clearColumns()}},{key:"clearRows",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.clearRows(e)}},{key:"insertColumnAfter",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertColumnAfter(e,t)}},{key:"insertColumnAt",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertColumnAt(e,t)}},{key:"insertColumnBefore",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertColumnBefore(e,t)}},{key:"loadData",value:function(e,t,r){if(this._isCtrlDefined())this.ctrlRef.current.loadData(e,t,r)}},{key:"insertRowAfter",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertRowAfter(e,t)}},{key:"insertRowAt",value:function(e,t,r){if(this._isCtrlDefined())this.ctrlRef.current.insertRowAt(e,t,r)}},{key:"insertRowBefore",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertRowBefore(e,t)}},{key:"removeColumn",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.removeColumn(e)}},{key:"removeColumnAt",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.removeColumnAt(e)}},{key:"removeRow",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.removeRow(e)}},{key:"removeRowAt",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.removeRowAt(e,t)}},{key:"beginEdit",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.beginEdit(e)}},{key:"endEdit",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.endEdit(e)}},{key:"collapse",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.collapse(e)}},{key:"expand",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.expand(e)}},{key:"toggle",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.toggle(e,t)}},{key:"exportToCSV",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.exportToCSV():null}},{key:"exportToJSON",value:function(e,t,r,i){return this._isCtrlDefined()?this.ctrlRef.current.exportToJSON(e,t,r,i):null}},{key:"filter",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.filter(e,t)}},{key:"cloneRow",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.cloneRow(e):null}},{key:"getColumnById",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.getColumnById(e):null}},{key:"getCellByColumnId",value:function(e,t){return this._isCtrlDefined()?this.ctrlRef.current.getCellByColumnId(e,t):null}},{key:"getColumnById",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.getColumnById(e):null}},{key:"getColumnParent",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.getColumnParent(e):null}},{key:"getFullList",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.getFullList():[]}},{key:"getList",value:function(e,t){return this._isCtrlDefined()?this.ctrlRef.current.getList(e,t):null}},{key:"getSize",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.getSize():{width:0,height:0}}},{key:"isColumnVisible",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.isColumnVisible(e):!1}},{key:"isRowHovered",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.isRowHovered(e):!1}},{key:"isRowSelected",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.isRowSelected(e):!1}},{key:"moveColumn",value:function(e,t,r,i){if(this._isCtrlDefined())this.ctrlRef.current.moveColumn(e,t,r,i)}},{key:"moveFocus",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.moveFocus(e,t)}},{key:"setFocus",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.setFocus(e)}},{key:"beginLoad",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.beginLoad()}},{key:"endLoad",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.endLoad()}},{key:"currentPage",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.currentPage(e):0}},{key:"getMaxPages",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.getMaxPages():0}},{key:"firstPage",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.firstPage()}},{key:"lastPage",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.lastPage()}},{key:"nextPage",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.nextPage()}},{key:"prevPage",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.prevPage()}},{key:"scrollPos",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.scrollPos(e):{x:0,y:0}}},{key:"isVerScrollVisible",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.isVerScrollVisible():!1}},{key:"isHorScrollVisible",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.isHorScrollVisible():!1}},{key:"scrollTo",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.scrollTo(e)}},{key:"findColumnById",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.findColumnById(e):null}},{key:"findRowById",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.findRowById(e):null}},{key:"findRowByText",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.findRowByText(e):null}},{key:"clearSelection",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.clearSelection()}},{key:"selectRows",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.selectRows(e)}},{key:"sort",value:function(e,t,r){if(this._isCtrlDefined())this.ctrlRef.current.sort(e,t,r)}},{key:"setClass",value:function(e,t){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setClass(e,t)}},{key:"setStyle",value:function(e,t){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setStyle(e,t)}},{key:"refresh",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.refresh()}},{key:"resolve",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.resolve(e)}},{key:"resumeLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.resumeLayout()}},{key:"suspendLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.suspendLayout()}},{key:"updateFullList",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateFullList()}},{key:"updateLayout",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.updateLayout(e)}},{key:"updateView",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateView()}},{key:"wait",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.wait()}},{key:"render",value:function(){return React.createElement("iui-grid",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return t}();export default IntegralUIGridComponent;