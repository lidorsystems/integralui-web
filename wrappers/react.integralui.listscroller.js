/*
  filename: react.integralui.listscroller.js
  version : 21.2.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import React,{Component}from"react";import"../components/integralui.listscroller.js";var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1;r.configurable=!0;if("value"in r)r.writable=!0;Object.defineProperty(e,r.key,r)}}return function(t,i,r){if(i)e(t.prototype,i);if(r)e(t,r);return t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var IntegralUIListScrollerComponent=function(e){_inherits(t,Component);function t(e){_classCallCheck(this,t);var i=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));i.ctrlRef=React.createRef();return i}_createClass(t,[{key:"_isCtrlDefined",value:function(){return this.ctrlRef&&this.ctrlRef.current?!0:!1}},{key:"componentDidMount",value:function(){var e=this;this._initProps();if(this._isCtrlDefined()){if(this.props.afterSelect)this.ctrlRef.current.addEventListener("afterSelect",function(t){return e.props.afterSelect(t)});if(this.props.beforeSelect)this.ctrlRef.current.addEventListener("beforeSelect",function(t){return e.props.beforeSelect(t)});if(this.props.change)this.ctrlRef.current.addEventListener("change",function(t){return e.props.change(t)});if(this.props.clear)this.ctrlRef.current.addEventListener("clear",function(){return e.props.clear()});if(this.props.enabledChanged)this.ctrlRef.current.addEventListener("enabledChanged",function(t){return e.props.enabledChanged(t)});if(this.props.itemAdded)this.ctrlRef.current.addEventListener("itemAdded",function(t){return e.props.itemAdded(t)});if(this.props.itemAdding)this.ctrlRef.current.addEventListener("itemAdding",function(t){return e.props.itemAdding(t)});if(this.props.itemRemoved)this.ctrlRef.current.addEventListener("itemRemoved",function(t){return e.props.itemRemoved(t)});if(this.props.itemRemoving)this.ctrlRef.current.addEventListener("itemRemoving",function(t){return e.props.itemRemoving(t)});if(this.props.scrollPosChanged)this.ctrlRef.current.addEventListener("scrollPosChanged",function(t){return e.props.scrollPosChanged(t)});if(this.props.selectionChanged)this.ctrlRef.current.addEventListener("selectionChanged",function(t){return e.props.selectionChanged(t)});if(this.props.sizeChanged)this.ctrlRef.current.addEventListener("sizeChanged",function(t){return e.props.sizeChanged(t)});if(this.props.stateChanged)this.ctrlRef.current.addEventListener("stateChanged",function(t){return e.props.stateChanged(t)});if(this.props.updateComplete)this.ctrlRef.current.addEventListener("updateComplete",function(){return e.props.updateComplete()})}}},{key:"componentWillUnmount",value:function(){if(this._isCtrlDefined()){if(this.props.afterSelect)this.ctrlRef.current.removeEventListener("afterSelect",this.props.afterSelect);if(this.props.beforeSelect)this.ctrlRef.current.removeEventListener("beforeSelect",this.props.beforeSelect);if(this.props.change)this.ctrlRef.current.removeEventListener("change",this.props.change);if(this.props.clear)this.ctrlRef.current.removeEventListener("clear",this.props.clear);if(this.props.enabledChanged)this.ctrlRef.current.removeEventListener("enabledChanged",this.props.enabledChanged);if(this.props.itemAdded)this.ctrlRef.current.removeEventListener("itemAdded",this.props.itemAdded);if(this.props.itemAdding)this.ctrlRef.current.removeEventListener("itemAdding",this.props.itemAdding);if(this.props.itemRemoved)this.ctrlRef.current.removeEventListener("itemRemoved",this.props.itemRemoved);if(this.props.itemRemoving)this.ctrlRef.current.removeEventListener("itemRemoving",this.props.itemRemoving);if(this.props.scrollPosChanged)this.ctrlRef.current.removeEventListener("scrollPosChanged",this.props.scrollPosChanged);if(this.props.selectionChanged)this.ctrlRef.current.removeEventListener("selectionChanged",this.props.selectionChanged);if(this.props.sizeChanged)this.ctrlRef.current.removeEventListener("sizeChanged",this.props.sizeChanged);if(this.props.stateChanged)this.ctrlRef.current.removeEventListener("stateChanged",this.props.stateChanged);if(this.props.updateComplete)this.ctrlRef.current.removeEventListener("updateComplete",this.props.updateComplete)}}},{key:"componentDidUpdate",value:function(e){this._updateData(e)}},{key:"_initProps",value:function(){if(this._isCtrlDefined()){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.allowFocus))this.ctrlRef.current.allowFocus=this.props.allowFocus;if(this._isDefined(this.props.dataFields))this.ctrlRef.current.dataFields=this.props.dataFields;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.items))this.ctrlRef.current.items=this.props.items;if(this._isDefined(this.props.itemSize))this.ctrlRef.current.itemSize=this.props.itemSize;if(this._isDefined(this.props.itemTemplate))this.ctrlRef.current.itemTemplate=this.props.itemTemplate;if(this._isDefined(this.props.mouseWheelSpeed))this.ctrlRef.current.mouseWheelSpeed=this.props.mouseWheelSpeed;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.resourcePath))this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this._isDefined(this.props.selectedItem))this.ctrlRef.current.selectedItem=this.props.selectedItem;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.sorting))this.ctrlRef.current.sorting=this.props.sorting;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme}}},{key:"_isDefined",value:function(e){return void 0!==e?!0:!1}},{key:"_updateData",value:function(e){if(this._isCtrlDefined()){if(this.props.allowAnimation!==e.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.allowFocus!==e.allowFocus)this.ctrlRef.current.allowFocus=this.props.allowFocus;if(this.props.dataFields!==e.dataFields)this.ctrlRef.current.dataFields=this.props.dataFields;if(this.props.customStyle!==e.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this.props.data!==e.data)this.ctrlRef.current.data=this.props.data;if(this.props.enabled!==e.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.items))this.ctrlRef.current.items=this.props.items;if(this._isDefined(this.props.itemSize))this.ctrlRef.current.itemSize=this.props.itemSize;if(this._isDefined(this.props.itemTemplate))this.ctrlRef.current.itemTemplate=this.props.itemTemplate;if(this.props.mouseWheelSpeed!==e.mouseWheelSpeed)this.ctrlRef.current.mouseWheelSpeed=this.props.mouseWheelSpeed;if(this.props.name!==e.name)this.ctrlRef.current.name=this.props.name;if(this.props.resourcePath!==e.resourcePath)this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this.props.selectedItem!==e.selectedItem)this.ctrlRef.current.selectedItem=this.props.selectedItem;if(this.props.size!==e.size)this.ctrlRef.current.size=this.props.size;if(this.props.sorting!==e.sorting)this.ctrlRef.current.sorting=this.props.sorting;if(this.props.state!==e.state)this.ctrlRef.current.state=this.props.state;if(this.props.theme!==e.theme)this.ctrlRef.current.theme=this.props.theme}}},{key:"addItem",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.addItem(e)}},{key:"clearItems",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.clearItems()}},{key:"insertItemAt",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertItemAt(e,t)}},{key:"insertItemBefore",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertItemBefore(e,t)}},{key:"insertItemAfter",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertItemAfter(e,t)}},{key:"removeItem",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.removeItem(e):!1}},{key:"removeItemAt",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.removeItemAt(e):!1}},{key:"scrollPos",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.scrollPos(e):{x:0,y:0}}},{key:"findItemById",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.findItemById(e):null}},{key:"findItemByText",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.findItemByText(e):null}},{key:"sort",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.sort(e,t)}},{key:"refresh",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.refresh()}},{key:"resumeLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.resumeLayout()}},{key:"suspendLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.suspendLayout()}},{key:"updateLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateLayout()}},{key:"updateView",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateView()}},{key:"render",value:function(){return React.createElement("iui-listscroller",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return t}();export default IntegralUIListScrollerComponent;