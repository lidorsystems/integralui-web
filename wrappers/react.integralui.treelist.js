/*
  filename: react.integralui.treelist.js
  version : 22.3.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import React,{Component}from"react";import"../components/integralui.treelist.js";var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1;r.configurable=!0;if("value"in r)r.writable=!0;Object.defineProperty(e,r.key,r)}}return function(t,i,r){if(i)e(t.prototype,i);if(r)e(t,r);return t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var IntegralUITreeListComponent=function(e){_inherits(t,Component);function t(e){_classCallCheck(this,t);var i=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));i.ctrlRef=React.createRef();return i}_createClass(t,[{key:"_isCtrlDefined",value:function(){return this.ctrlRef&&this.ctrlRef.current?!0:!1}},{key:"componentDidMount",value:function(){var e=this;this._initProps();if(this._isCtrlDefined()){if(this.props.afterSelect)this.ctrlRef.current.addEventListener("afterSelect",function(t){return e.props.afterSelect(t)});if(this.props.beforeSelect)this.ctrlRef.current.addEventListener("beforeSelect",function(t){return e.props.beforeSelect(t)});if(this.props.enabledChanged)this.ctrlRef.current.addEventListener("enabledChanged",function(t){return e.props.enabledChanged(t)});if(this.props.scrollPosChanged)this.ctrlRef.current.addEventListener("scrollPosChanged",function(t){return e.props.scrollPosChanged(t)});if(this.props.selectionChanged)this.ctrlRef.current.addEventListener("selectionChanged",function(t){return e.props.selectionChanged(t)});if(this.props.sizeChanged)this.ctrlRef.current.addEventListener("sizeChanged",function(t){return e.props.sizeChanged(t)});if(this.props.stateChanged)this.ctrlRef.current.addEventListener("stateChanged",function(t){return e.props.stateChanged(t)})}}},{key:"componentWillUnmount",value:function(){if(this._isCtrlDefined()){if(this.props.afterSelect)this.ctrlRef.current.removeEventListener("afterSelect",this.props.afterSelect);if(this.props.beforeSelect)this.ctrlRef.current.removeEventListener("beforeSelect",this.props.beforeSelect);if(this.props.enabledChanged)this.ctrlRef.current.removeEventListener("enabledChanged",this.props.enabledChanged);if(this.props.scrollPosChanged)this.ctrlRef.current.removeEventListener("scrollPosChanged",this.props.scrollPosChanged);if(this.props.selectionChanged)this.ctrlRef.current.removeEventListener("selectionChanged",this.props.selectionChanged);if(this.props.sizeChanged)this.ctrlRef.current.removeEventListener("sizeChanged",this.props.sizeChanged);if(this.props.stateChanged)this.ctrlRef.current.removeEventListener("stateChanged",this.props.stateChanged)}}},{key:"componentDidUpdate",value:function(e){this._updateData(e)}},{key:"_initProps",value:function(){if(this._isCtrlDefined()){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.allowUpdate))this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this._isDefined(this.props.colorScheme))this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.dataFields))this.ctrlRef.current.dataFields=this.props.dataFields;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.indent))this.ctrlRef.current.indent=this.props.indent;if(this._isDefined(this.props.items))this.ctrlRef.current.items=this.props.items;if(this._isDefined(this.props.itemTemplate))this.ctrlRef.current.itemTemplate=this.props.itemTemplate;if(this._isDefined(this.props.mouseWheelSpeed))this.ctrlRef.current.mouseWheelSpeed=this.props.mouseWheelSpeed;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.resourcePath))this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this._isDefined(this.props.selectedItem))this.ctrlRef.current.selectedItem=this.props.selectedItem;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.title))this.ctrlRef.current.title=this.props.title;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme}}},{key:"_isDefined",value:function(e){return void 0!==e?!0:!1}},{key:"_updateData",value:function(e){if(this._isCtrlDefined()){if(this.props.allowAnimation!==e.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.allowUpdate!==e.allowUpdate)this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this.props.colorScheme!==e.colorScheme)this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this.props.customStyle!==e.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this.props.data!==e.data)this.ctrlRef.current.data=this.props.data;if(this.props.dataFields!==e.dataFields)this.ctrlRef.current.dataFields=this.props.dataFields;if(this.props.enabled!==e.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this.props.indent!==e.indent)this.ctrlRef.current.indent=this.props.indent;if(this._isDefined(this.props.items))this.ctrlRef.current.items=this.props.items;if(this._isDefined(this.props.itemTemplate))this.ctrlRef.current.itemTemplate=this.props.itemTemplate;if(this.props.mouseWheelSpeed!==e.mouseWheelSpeed)this.ctrlRef.current.mouseWheelSpeed=this.props.mouseWheelSpeed;if(this.props.name!==e.name)this.ctrlRef.current.name=this.props.name;if(this.props.resourcePath!==e.resourcePath)this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this.props.selectedItem!==e.selectedItem)this.ctrlRef.current.selectedItem=this.props.selectedItem;if(this.props.size!==e.size)this.ctrlRef.current.size=this.props.size;if(this.props.state!==e.state)this.ctrlRef.current.state=this.props.state;if(this.props.title!==e.title)this.ctrlRef.current.title=this.props.title;if(this.props.theme!==e.theme)this.ctrlRef.current.theme=this.props.theme}}},{key:"exportToJSON",value:function(e,t,i,r){return this._isCtrlDefined()?this.ctrlRef.current.exportToJSON(e,t,i,r):null}},{key:"isGroupItem",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.isGroupItem(e):!1}},{key:"isItemExpanded",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.isItemExpanded(e):!0}},{key:"resolve",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.resolve(e)}},{key:"wait",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.wait()}},{key:"isVerScrollVisible",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.isVerScrollVisible():!1}},{key:"isHorScrollVisible",value:function(){return this._isCtrlDefined()?this.ctrlRef.current.isHorScrollVisible():!1}},{key:"scrollPos",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.scrollPos(e):{x:0,y:0}}},{key:"scrollTo",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.scrollTo(e)}},{key:"setClass",value:function(e){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setClass(e)}},{key:"setStyle",value:function(e){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setStyle(e)}},{key:"getItemParent",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.getItemParent(e):null}},{key:"getItemTemplate",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.getItemTemplate(e):null}},{key:"refresh",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.refresh()}},{key:"updateLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateLayout()}},{key:"updateView",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateView()}},{key:"render",value:function(){return React.createElement("iui-treelist",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return t}();export default IntegralUITreeListComponent;