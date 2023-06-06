/*
  filename: react.integralui.sidebar.js
  version : 23.2.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import React,{Component}from"react";import"../components/integralui.sidebar.js";var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1;i.configurable=!0;if("value"in i)i.writable=!0;Object.defineProperty(e,i.key,i)}}return function(t,r,i){if(r)e(t.prototype,r);if(i)e(t,i);return t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var IntegralUISideBarComponent=function(e){_inherits(t,Component);function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.ctrlRef=React.createRef();return r}_createClass(t,[{key:"_isCtrlDefined",value:function(){return this.ctrlRef&&this.ctrlRef.current?!0:!1}},{key:"componentDidMount",value:function(){var e=this;this._initProps();if(this._isCtrlDefined()){if(this.props.afterCollapse)this.ctrlRef.current.addEventListener("afterCollapse",function(t){return e.props.afterCollapse(t)});if(this.props.afterExpand)this.ctrlRef.current.addEventListener("afterExpand",function(t){return e.props.afterExpand(t)});if(this.props.afterSelect)this.ctrlRef.current.addEventListener("afterSelect",function(t){return e.props.afterSelect(t)});if(this.props.beforeCollapse)this.ctrlRef.current.addEventListener("beforeCollapse",function(t){return e.props.beforeCollapse(t)});if(this.props.beforeExpand)this.ctrlRef.current.addEventListener("beforeExpand",function(t){return e.props.beforeExpand(t)});if(this.props.beforeSelect)this.ctrlRef.current.addEventListener("beforeSelect",function(t){return e.props.beforeSelect(t)});if(this.props.change)this.ctrlRef.current.addEventListener("change",function(t){return e.props.change(t)});if(this.props.clear)this.ctrlRef.current.addEventListener("clear",function(){return e.props.clear()});if(this.props.enabledChanged)this.ctrlRef.current.addEventListener("enabledChanged",function(t){return e.props.enabledChanged(t)});if(this.props.selectionChanged)this.ctrlRef.current.addEventListener("selectionChanged",function(t){return e.props.selectionChanged(t)});if(this.props.sizeChanged)this.ctrlRef.current.addEventListener("sizeChanged",function(t){return e.props.sizeChanged(t)});if(this.props.stateChanged)this.ctrlRef.current.addEventListener("stateChanged",function(t){return e.props.stateChanged(t)})}}},{key:"_isDefined",value:function(e){return void 0!==e?!0:!1}},{key:"componentWillUnmount",value:function(){if(this._isCtrlDefined()){if(this.props.afterCollapse)this.ctrlRef.current.removeEventListener("afterCollapse",this.props.afterCollapse);if(this.props.afterExpand)this.ctrlRef.current.removeEventListener("afterExpand",this.props.afterExpand);if(this.props.afterSelect)this.ctrlRef.current.removeEventListener("afterSelect",this.props.afterSelect);if(this.props.beforeCollapse)this.ctrlRef.current.removeEventListener("beforeCollapse",this.props.beforeCollapse);if(this.props.beforeExpand)this.ctrlRef.current.removeEventListener("beforeExpand",this.props.beforeExpand);if(this.props.beforeSelect)this.ctrlRef.current.removeEventListener("beforeSelect",this.props.beforeSelect);if(this.props.change)this.ctrlRef.current.removeEventListener("change",this.props.change);if(this.props.clear)this.ctrlRef.current.removeEventListener("clear",this.props.clear);if(this.props.enabledChanged)this.ctrlRef.current.removeEventListener("enabledChanged",this.props.enabledChanged);if(this.props.selectionChanged)this.ctrlRef.current.removeEventListener("selectionChanged",this.props.selectionChanged);if(this.props.sizeChanged)this.ctrlRef.current.removeEventListener("sizeChanged",this.props.sizeChanged);if(this.props.stateChanged)this.ctrlRef.current.removeEventListener("stateChanged",this.props.stateChanged)}}},{key:"componentDidUpdate",value:function(e){this._updateData(e)}},{key:"_initProps",value:function(){if(this._isCtrlDefined()){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.allowResize))this.ctrlRef.current.allowResize=this.props.allowResize;if(this._isDefined(this.props.allowUpdate))this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this._isDefined(this.props.animation))this.ctrlRef.current.animation=this.props.animation;if(this._isDefined(this.props.animationSpeed))this.ctrlRef.current.animationSpeed=this.props.animationSpeed;if(this._isDefined(this.props.autoHide))this.ctrlRef.current.autoHide=this.props.autoHide;if(this._isDefined(this.props.colorScheme))this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.expanded))this.ctrlRef.current.expanded=this.props.expanded;if(this._isDefined(this.props.inbound))this.ctrlRef.current.inbound=this.props.inbound;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.parentId))this.ctrlRef.current.parentId=this.props.parentId;if(this._isDefined(this.props.placement))this.ctrlRef.current.placement=this.props.placement;if(this._isDefined(this.props.resourcePath))this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this._isDefined(this.props.selectedIndex))this.ctrlRef.current.selectedIndex=this.props.selectedIndex;if(this._isDefined(this.props.selectedTab))this.ctrlRef.current.selectedTab=this.props.selectedTab;if(this._isDefined(this.props.showHeader))this.ctrlRef.current.showHeader=this.props.showHeader;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.tabAlignment))this.ctrlRef.current.tabAlignment=this.props.tabAlignment;if(this._isDefined(this.props.tabs))this.ctrlRef.current.tabs=this.props.tabs;if(this._isDefined(this.props.tabTemplate))this.ctrlRef.current.tabTemplate=this.props.tabTemplate;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme}}},{key:"_updateData",value:function(e){if(this._isCtrlDefined()){if(this.props.allowAnimation!==e.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.allowResize!==e.allowResize)this.ctrlRef.current.allowResize=this.props.allowResize;if(this.props.allowUpdate!==e.allowUpdate)this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this.props.animation!==e.animation)this.ctrlRef.current.animation=this.props.animation;if(this.props.animationSpeed!==e.animationSpeed)this.ctrlRef.current.animationSpeed=this.props.animationSpeed;if(this.props.autoHide!==e.autoHide)this.ctrlRef.current.autoHide=this.props.autoHide;if(this.props.colorScheme!==e.colorScheme)this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this.props.customStyle!==e.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this.props.data!==e.data)this.ctrlRef.current.data=this.props.data;if(this.props.enabled!==e.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this.props.expanded!==e.expanded)this.ctrlRef.current.expanded=this.props.expanded;if(this.props.inbound!==e.inbound)this.ctrlRef.current.inbound=this.props.inbound;if(this.props.name!==e.name)this.ctrlRef.current.name=this.props.name;if(this.props.parentId!==e.parentId)this.ctrlRef.current.parentId=this.props.parentId;if(this.props.placement!==e.placement)this.ctrlRef.current.placement=this.props.placement;if(this.props.resourcePath!==e.resourcePath)this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this.props.selectedIndex!==e.selectedIndex)this.ctrlRef.current.selectedIndex=this.props.selectedIndex;if(this.props.selectedTab!==e.selectedTab)this.ctrlRef.current.selectedTab=this.props.selectedTab;if(this.props.showHeader!==e.showHeader)this.ctrlRef.current.showHeader=this.props.showHeader;if(this.props.size!==e.size)this.ctrlRef.current.size=this.props.size;if(this.props.state!==e.state)this.ctrlRef.current.state=this.props.state;if(this.props.tabAlignment!==e.tabAlignment)this.ctrlRef.current.tabAlignment=this.props.tabAlignment;if(this._isDefined(this.props.tabs))this.ctrlRef.current.tabs=this.props.tabs;if(this._isDefined(this.props.tabTemplate))this.ctrlRef.current.tabTemplate=this.props.tabTemplate;if(this.props.theme!==e.theme)this.ctrlRef.current.theme=this.props.theme}}},{key:"collapse",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.collapse()}},{key:"expand",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.expand()}},{key:"toggle",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.toggle()}},{key:"selectTab",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.selectTab(e)}},{key:"setClass",value:function(e){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setClass(e)}},{key:"setStyle",value:function(e){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setStyle(e)}},{key:"refresh",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.refresh()}},{key:"updateLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateLayout()}},{key:"render",value:function(){return React.createElement("iui-sidebar",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return t}();export default IntegralUISideBarComponent;