/*
  filename: react.integralui.treeview.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import React,{Component}from"react";import"../components/integralui.treeview.js";var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1;i.configurable=!0;if("value"in i)i.writable=!0;Object.defineProperty(e,i.key,i)}}return function(t,r,i){if(r)e(t.prototype,r);if(i)e(t,i);return t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var IntegralUITreeViewComponent=function(e){_inherits(t,Component);function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.ctrlRef=React.createRef();return r}_createClass(t,[{key:"_isCtrlDefined",value:function(){return this.ctrlRef&&this.ctrlRef.current?!0:!1}},{key:"componentDidMount",value:function(){var e=this;this._initProps();if(this._isCtrlDefined()){if(this.props.afterCollapse)this.ctrlRef.current.addEventListener("afterCollapse",function(t){return e.props.afterCollapse(t)});if(this.props.afterEdit)this.ctrlRef.current.addEventListener("afterEdit",function(t){return e.props.afterEdit(t)});if(this.props.afterExpand)this.ctrlRef.current.addEventListener("afterExpand",function(t){return e.props.afterExpand(t)});if(this.props.afterSelect)this.ctrlRef.current.addEventListener("afterSelect",function(t){return e.props.afterSelect(t)});if(this.props.beforeEdit)this.ctrlRef.current.addEventListener("beforeEdit",function(t){return e.props.beforeEdit(t)});if(this.props.beforeCollapse)this.ctrlRef.current.addEventListener("beforeCollapse",function(t){return e.props.beforeCollapse(t)});if(this.props.beforeExpand)this.ctrlRef.current.addEventListener("beforeExpand",function(t){return e.props.beforeExpand(t)});if(this.props.beforeSelect)this.ctrlRef.current.addEventListener("beforeSelect",function(t){return e.props.beforeSelect(t)});if(this.props.clear)this.ctrlRef.current.addEventListener("clear",function(){return e.props.clear()});if(this.props.dragDrop)this.ctrlRef.current.addEventListener("dragDrop",function(t){return e.props.dragDrop(t)});if(this.props.dragDropComplete)this.ctrlRef.current.addEventListener("dragDropComplete",function(t){return e.props.dragDropComplete(t)});if(this.props.dragEnd)this.ctrlRef.current.addEventListener("dragEnd",function(t){return e.props.dragEnd(t)});if(this.props.dragEnter)this.ctrlRef.current.addEventListener("dragEnter",function(t){return e.props.dragEnter(t)});if(this.props.dragLeave)this.ctrlRef.current.addEventListener("dragLeave",function(t){return e.props.dragLeave(t)});if(this.props.dragOver)this.ctrlRef.current.addEventListener("dragOver",function(t){return e.props.dragOver(t)});if(this.props.dragStart)this.ctrlRef.current.addEventListener("dragStart",function(t){return e.props.dragStart(t)});if(this.props.enabledChanged)this.ctrlRef.current.addEventListener("enabledChanged",function(t){return e.props.enabledChanged(t)});if(this.props.filtered)this.ctrlRef.current.addEventListener("filtered",function(){return e.props.filtered()});if(this.props.itemAdded)this.ctrlRef.current.addEventListener("itemAdded",function(t){return e.props.itemAdded(t)});if(this.props.itemAdding)this.ctrlRef.current.addEventListener("itemAdding",function(t){return e.props.itemAdding(t)});if(this.props.itemClick)this.ctrlRef.current.addEventListener("itemClick",function(t){return e.props.itemClick(t)});if(this.props.itemDblClick)this.ctrlRef.current.addEventListener("itemDblClick",function(t){return e.props.itemDblClick(t)});if(this.props.itemHover)this.ctrlRef.current.addEventListener("itemHover",function(t){return e.props.itemHover(t)});if(this.props.itemMoved)this.ctrlRef.current.addEventListener("itemMoved",function(t){return e.props.itemMoved(t)});if(this.props.itemRemoved)this.ctrlRef.current.addEventListener("itemRemoved",function(t){return e.props.itemRemoved(t)});if(this.props.itemRemoving)this.ctrlRef.current.addEventListener("itemRemoving",function(t){return e.props.itemRemoving(t)});if(this.props.itemRightClick)this.ctrlRef.current.addEventListener("itemRightClick",function(t){return e.props.itemRightClick(t)});if(this.props.keyDown)this.ctrlRef.current.addEventListener("keyDown",function(t){return e.props.keyDown(t)});if(this.props.keyPress)this.ctrlRef.current.addEventListener("keyPress",function(t){return e.props.keyPress(t)});if(this.props.keyUp)this.ctrlRef.current.addEventListener("keyUp",function(t){return e.props.keyUp(t)});if(this.props.loadComplete)this.ctrlRef.current.addEventListener("loadComplete",function(){return e.props.loadComplete()});if(this.props.scrollPosChanged)this.ctrlRef.current.addEventListener("scrollPosChanged",function(t){return e.props.scrollPosChanged(t)});if(this.props.selectionChanged)this.ctrlRef.current.addEventListener("selectionChanged",function(t){return e.props.selectionChanged(t)});if(this.props.sizeChanged)this.ctrlRef.current.addEventListener("sizeChanged",function(t){return e.props.sizeChanged(t)});if(this.props.sorted)this.ctrlRef.current.addEventListener("sorted",function(){return e.props.sorted()});if(this.props.stateChanged)this.ctrlRef.current.addEventListener("stateChanged",function(t){return e.props.stateChanged(t)});if(this.props.updateComplete)this.ctrlRef.current.addEventListener("updateComplete",function(){return e.props.updateComplete()})}}},{key:"componentWillUnmount",value:function(){if(this._isCtrlDefined()){if(this.props.afterCollapse)this.ctrlRef.current.removeEventListener("afterCollapse",this.props.afterCollapse);if(this.props.afterEdit)this.ctrlRef.current.removeEventListener("afterEdit",this.props.afterEdit);if(this.props.afterExpand)this.ctrlRef.current.removeEventListener("afterExpand",this.props.afterExpand);if(this.props.afterSelect)this.ctrlRef.current.removeEventListener("afterSelect",this.props.afterSelect);if(this.props.beforeCollapse)this.ctrlRef.current.removeEventListener("beforeCollapse",this.props.beforeCollapse);if(this.props.beforeEdit)this.ctrlRef.current.removeEventListener("beforeEdit",this.props.beforeEdit);if(this.props.beforeExpand)this.ctrlRef.current.removeEventListener("beforeExpand",this.props.beforeExpand);if(this.props.beforeSelect)this.ctrlRef.current.removeEventListener("beforeSelect",this.props.beforeSelect);if(this.props.clear)this.ctrlRef.current.removeEventListener("clear",this.props.clear);if(this.props.dragDrop)this.ctrlRef.current.removeEventListener("dragDrop",this.props.dragDrop);if(this.props.dragDropComplete)this.ctrlRef.current.removeEventListener("dragDropComplete",this.props.dragDropComplete);if(this.props.dragEnd)this.ctrlRef.current.removeEventListener("dragEnd",this.props.dragEnd);if(this.props.dragEnter)this.ctrlRef.current.removeEventListener("dragEnter",this.props.dragEnter);if(this.props.dragLeave)this.ctrlRef.current.removeEventListener("dragLeave",this.props.dragLeave);if(this.props.dragOver)this.ctrlRef.current.removeEventListener("dragOver",this.props.dragOver);if(this.props.dragStart)this.ctrlRef.current.removeEventListener("dragStart",this.props.dragStart);if(this.props.enabledChanged)this.ctrlRef.current.removeEventListener("enabledChanged",this.props.enabledChanged);if(this.props.filtered)this.ctrlRef.current.removeEventListener("filtered",this.props.filtered);if(this.props.itemAdded)this.ctrlRef.current.removeEventListener("itemAdded",this.props.itemAdded);if(this.props.itemAdding)this.ctrlRef.current.removeEventListener("itemAdding",this.props.itemAdding);if(this.props.itemClick)this.ctrlRef.current.removeEventListener("itemClick",this.props.itemClick);if(this.props.itemDblClick)this.ctrlRef.current.removeEventListener("itemDblClick",this.props.itemDblClick);if(this.props.itemHover)this.ctrlRef.current.removeEventListener("itemHover",this.props.itemHover);if(this.props.itemMoved)this.ctrlRef.current.removeEventListener("itemMoved",this.props.itemMoved);if(this.props.itemRemoved)this.ctrlRef.current.removeEventListener("itemRemoved",this.props.itemRemoved);if(this.props.itemRemoving)this.ctrlRef.current.removeEventListener("itemRemoving",this.props.itemRemoving);if(this.props.itemRightClick)this.ctrlRef.current.removeEventListener("itemRightClick",this.props.itemRightClick);if(this.props.keyDown)this.ctrlRef.current.removeEventListener("keyDown",this.props.keyDown);if(this.props.keyPress)this.ctrlRef.current.removeEventListener("keyPress",this.props.keyPress);if(this.props.keyUp)this.ctrlRef.current.removeEventListener("keyUp",this.props.keyUp);if(this.props.loadComplete)this.ctrlRef.current.removeEventListener("loadComplete",this.props.loadComplete);if(this.props.scrollPosChanged)this.ctrlRef.current.removeEventListener("scrollPosChanged",this.props.scrollPosChanged);if(this.props.selectionChanged)this.ctrlRef.current.removeEventListener("selectionChanged",this.props.selectionChanged);if(this.props.sizeChanged)this.ctrlRef.current.removeEventListener("sizeChanged",this.props.sizeChanged);if(this.props.sorted)this.ctrlRef.current.removeEventListener("sorted",this.props.sorted);if(this.props.stateChanged)this.ctrlRef.current.removeEventListener("stateChanged",this.props.stateChanged);if(this.props.updateComplete)this.ctrlRef.current.removeEventListener("updateComplete",this.props.updateComplete)}}},{key:"componentDidUpdate",value:function(e){this._updateData(e)}},{key:"_initProps",value:function(){if(this._isCtrlDefined()){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.allowDrag))this.ctrlRef.current.allowDrag=this.props.allowDrag;if(this._isDefined(this.props.allowDrop))this.ctrlRef.current.allowDrop=this.props.allowDrop;if(this._isDefined(this.props.allowFilter))this.ctrlRef.current.allowFilter=this.props.allowFilter;if(this._isDefined(this.props.allowFocus))this.ctrlRef.current.allowFocus=this.props.allowFocus;if(this._isDefined(this.props.autoExpand))this.ctrlRef.current.autoExpand=this.props.autoExpand;if(this._isDefined(this.props.compactMode))this.ctrlRef.current.compactMode=this.props.compactMode;if(this._isDefined(this.props.dataFields))this.ctrlRef.current.dataFields=this.props.dataFields;if(this._isDefined(this.props.focusedItem))this.ctrlRef.current.focusedItem=this.props.focusedItem;if(this._isDefined(this.props.contentVisibility))this.ctrlRef.current.contentVisibility=this.props.contentVisibility;if(this._isDefined(this.props.controlStyle))this.ctrlRef.current.controlStyle=this.props.controlStyle;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.indent))this.ctrlRef.current.indent=this.props.indent;if(this._isDefined(this.props.itemDisplay))this.ctrlRef.current.itemDisplay=this.props.itemDisplay;if(this._isDefined(this.props.itemHoverTemplate))this.ctrlRef.current.itemHoverTemplate=this.props.itemHoverTemplate;if(this._isDefined(this.props.items))this.ctrlRef.current.items=this.props.items;if(this._isDefined(this.props.itemSelectTemplate))this.ctrlRef.current.itemSelectTemplate=this.props.itemSelectTemplate;if(this._isDefined(this.props.itemSpacing))this.ctrlRef.current.itemSpacing=this.props.itemSpacing;if(this._isDefined(this.props.itemTemplate))this.ctrlRef.current.itemTemplate=this.props.itemTemplate;if(this._isDefined(this.props.mouseWheelSpeed))this.ctrlRef.current.mouseWheelSpeed=this.props.mouseWheelSpeed;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.resourcePath))this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this._isDefined(this.props.selectedItem))this.ctrlRef.current.selectedItem=this.props.selectedItem;if(this._isDefined(this.props.selectionMode))this.ctrlRef.current.selectionMode=this.props.selectionMode;if(this._isDefined(this.props.showExpandBox))this.ctrlRef.current.showExpandBox=this.props.showExpandBox;if(this._isDefined(this.props.showScroll))this.ctrlRef.current.showScroll=this.props.showScroll;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.sorting))this.ctrlRef.current.sorting=this.props.sorting;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme}}},{key:"_isDefined",value:function(e){return void 0!==e?!0:!1}},{key:"_updateData",value:function(e){if(this._isCtrlDefined()){if(this.props.allowAnimation!==e.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.allowDrag!==e.allowDrag)this.ctrlRef.current.allowDrag=this.props.allowDrag;if(this.props.allowDrop!==e.allowDrop)this.ctrlRef.current.allowDrop=this.props.allowDrop;if(this.props.allowFilter!==e.allowFilter)this.ctrlRef.current.allowFilter=this.props.allowFilter;if(this.props.allowFocus!==e.allowFocus)this.ctrlRef.current.allowFocus=this.props.allowFocus;if(this.props.autoExpand!==e.autoExpand)this.ctrlRef.current.autoExpand=this.props.autoExpand;if(this.props.compactMode!==e.compactMode)this.ctrlRef.current.compactMode=this.props.compactMode;if(this.props.dataFields!==e.dataFields)this.ctrlRef.current.dataFields=this.props.dataFields;if(this.props.focusedItem!==e.focusedItem)this.ctrlRef.current.focusedItem=this.props.focusedItem;if(this.props.contentVisibility!==e.contentVisibility)this.ctrlRef.current.contentVisibility=this.props.contentVisibility;if(this.props.controlStyle!==e.controlStyle)this.ctrlRef.current.controlStyle=this.props.controlStyle;if(this.props.customStyle!==e.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this.props.data!==e.data)this.ctrlRef.current.data=this.props.data;if(this.props.enabled!==e.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this.props.indent!==e.indent)this.ctrlRef.current.indent=this.props.indent;if(this.props.itemDisplay!==e.itemDisplay)this.ctrlRef.current.itemDisplay=this.props.itemDisplay;if(this._isDefined(this.props.itemHoverTemplate))this.ctrlRef.current.itemHoverTemplate=this.props.itemHoverTemplate;if(this._isDefined(this.props.items))this.ctrlRef.current.items=this.props.items;if(this._isDefined(this.props.itemSelectTemplate))this.ctrlRef.current.itemSelectTemplate=this.props.itemSelectTemplate;if(this.props.itemSpacing!==e.itemSpacing)this.ctrlRef.current.itemSpacing=this.props.itemSpacing;if(this._isDefined(this.props.itemTemplate))this.ctrlRef.current.itemTemplate=this.props.itemTemplate;if(this.props.mouseWheelSpeed!==e.mouseWheelSpeed)this.ctrlRef.current.mouseWheelSpeed=this.props.mouseWheelSpeed;if(this.props.name!==e.name)this.ctrlRef.current.name=this.props.name;if(this.props.resourcePath!==e.resourcePath)this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this.props.selectedItem!==e.selectedItem)this.ctrlRef.current.selectedItem=this.props.selectedItem;if(this.props.selectionMode!==e.selectionMode)this.ctrlRef.current.selectionMode=this.props.selectionMode;if(this.props.showExpandBox!==e.showExpandBox)this.ctrlRef.current.showExpandBox=this.props.showExpandBox;if(this.props.showScroll!==e.showScroll)this.ctrlRef.current.showScroll=this.props.showScroll;if(this.props.size!==e.size)this.ctrlRef.current.size=this.props.size;if(this.props.sorting!==e.sorting)this.ctrlRef.current.sorting=this.props.sorting;if(this.props.state!==e.state)this.ctrlRef.current.state=this.props.state;if(this.props.theme!==e.theme)this.ctrlRef.current.theme=this.props.theme}}},{key:"addItem",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.addItem(e)}},{key:"clearItems",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.clearItems()}},{key:"insertItemAt",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertItemAt(e,t)}},{key:"insertItemBefore",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertItemBefore(e,t)}},{key:"insertItemAfter",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertItemAfter(e,t)}},{key:"removeItem",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.removeItem(e):!1}},{key:"removeItemAt",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.removeItemAt(e):!1}},{key:"loadData",value:function(e,t,r,i){if(this._isCtrlDefined())this.ctrlRef.current.loadData(e,t,r,i)}},{key:"collapse",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.collapse(e)}},{key:"expand",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.expand(e)}},{key:"toggle",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.toggle(e,t)}},{key:"exportToJSON",value:function(e,t,r){if(this._isCtrlDefined())this.ctrlRef.current.exportToJSON(e,t,r)}},{key:"filter",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.filter(e)}},{key:"cloneItem",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.cloneItem(e):null}},{key:"getItemLevel",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.getItemLevel(e):0}},{key:"getItemParent",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.getItemParent(e):null}},{key:"getList",value:function(e,t){return this._isCtrlDefined()?this.ctrlRef.current.getList(e,t):null}},{key:"getFullList",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.getFullList():null}},{key:"getTopItem",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.getTopItem():null}},{key:"isItemExpanded",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.isItemExpanded(e):!0}},{key:"isThereChildren",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.isThereChildren():!1}},{key:"updateFullList",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.updateFullList():[]}},{key:"getPrevItem",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.getPrevItem(e):null}},{key:"getNextItem",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.getNextItem(e):null}},{key:"moveItem",value:function(e,t,r,i){if(this._isCtrlDefined())this.ctrlRef.current.moveItem(e,t,r,i)}},{key:"moveFocusFromItem",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.moveFocusFromItem(e,t)}},{key:"beginLoad",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.beginLoad(e)}},{key:"endLoad",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.endLoad(e)}},{key:"isVerScrollVisible",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.isVerScrollVisible():!1}},{key:"isHorScrollVisible",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.isHorScrollVisible():!1}},{key:"scrollPos",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.scrollPos(e):{x:0,y:0}}},{key:"scrollTo",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.scrollTo(e)}},{key:"findItemById",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.findItemById(e):null}},{key:"findItemByText",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.findItemByText(e):null}},{key:"clearSelection",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.clearSelection()}},{key:"selectItems",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.selectItems(e)}},{key:"sort",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.sort(e,t)}},{key:"getItemTemplate",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.getItemTemplate(e):null}},{key:"refresh",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.refresh()}},{key:"resumeLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.resumeLayout()}},{key:"suspendLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.suspendLayout()}},{key:"updateLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateLayout()}},{key:"updateView",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateView()}},{key:"render",value:function(){return React.createElement("iui-treeview",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return t}();export default IntegralUITreeViewComponent;