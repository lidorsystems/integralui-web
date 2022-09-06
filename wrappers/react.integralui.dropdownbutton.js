/*
  filename: react.integralui.dropdownbutton.js
  version : 22.3.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import React,{Component}from"react";import"../components/integralui.dropdownbutton.js";var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1;s.configurable=!0;if("value"in s)s.writable=!0;Object.defineProperty(e,s.key,s)}}return function(t,r,s){if(r)e(t.prototype,r);if(s)e(t,s);return t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var IntegralUIDropDownButtonComponent=function(e){_inherits(t,Component);function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.ctrlRef=React.createRef();return r}_createClass(t,[{key:"componentDidMount",value:function(){var e=this;this._initProps();if(this.ctrlRef&&this.ctrlRef.current){if(this.props.onClick)this.ctrlRef.current.addEventListener("click",function(t){return e.props.onClick(t)});if(this.props.onMouseDown)this.ctrlRef.current.addEventListener("mousedown",function(t){return e.props.onMouseDown(t)});if(this.props.closed)this.ctrlRef.current.addEventListener("closed",function(t){return e.props.closed(t)});if(this.props.enabledChanged)this.ctrlRef.current.addEventListener("enabledChanged",function(t){return e.props.enabledChanged(t)});if(this.props.expandedChanged)this.ctrlRef.current.addEventListener("expandedChanged",function(t){return e.props.expandedChanged(t)});if(this.props.opened)this.ctrlRef.current.addEventListener("opened",function(t){return e.props.opened(t)});if(this.props.sizeChanged)this.ctrlRef.current.addEventListener("sizeChanged",function(t){return e.props.sizeChanged(t)});if(this.props.stateChanged)this.ctrlRef.current.addEventListener("stateChanged",function(t){return e.props.stateChanged(t)});if(this.props.valueChanged)this.ctrlRef.current.addEventListener("valueChanged",function(t){return e.props.valueChanged(t)})}}},{key:"componentWillUnmount",value:function(){if(this.ctrlRef&&this.ctrlRef.current){if(this.props.onClick)this.ctrlRef.current.removeEventListener("click",this.props.onClick);if(this.props.onMouseDown)this.ctrlRef.current.removeEventListener("mousedown",this.props.onMouseDown);if(this.props.closed)this.ctrlRef.current.removeEventListener("closed",this.props.closed);if(this.props.opened)this.ctrlRef.current.removeEventListener("opened",this.props.opened);if(this.props.enabledChanged)this.ctrlRef.current.removeEventListener("enabledChanged",this.props.enabledChanged);if(this.props.expandedChanged)this.ctrlRef.current.removeEventListener("expandedChanged",this.props.expandedChanged);if(this.props.sizeChanged)this.ctrlRef.current.removeEventListener("sizeChanged",this.props.sizeChanged);if(this.props.stateChanged)this.ctrlRef.current.removeEventListener("stateChanged",this.props.stateChanged);if(this.props.valueChanged)this.ctrlRef.current.removeEventListener("valueChanged",this.props.valueChanged)}}},{key:"componentDidUpdate",value:function(e){this._updateData(e)}},{key:"_initProps",value:function(){if(this.ctrlRef&&this.ctrlRef.current){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.allowFocus))this.ctrlRef.current.allowFocus=this.props.allowFocus;if(this._isDefined(this.props.allowUpdate))this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.colorScheme))this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this._isDefined(this.props.contentTemplate))this.ctrlRef.current.contentTemplate=this.props.contentTemplate;if(this._isDefined(this.props.direction))this.ctrlRef.current.direction=this.props.direction;if(this._isDefined(this.props.dropDownAdjustment))this.ctrlRef.current.dropDownAdjustment=this.props.dropDownAdjustment;if(this._isDefined(this.props.dropDownIcon))this.ctrlRef.current.dropDownIcon=this.props.dropDownIcon;if(this._isDefined(this.props.dropDownSize))this.ctrlRef.current.dropDownSize=this.props.dropDownSize;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.expanded))this.ctrlRef.current.expanded=this.props.expanded;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.placement))this.ctrlRef.current.placement=this.props.placement;if(this._isDefined(this.props.pressed))this.ctrlRef.current.pressed=this.props.pressed;if(this._isDefined(this.props.resourcePath))this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme}}},{key:"_isDefined",value:function(e){return void 0!==e?!0:!1}},{key:"_updateData",value:function(e){if(this.ctrlRef&&this.ctrlRef.current){if(this.props.allowAnimation!==e.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.allowFocus!==e.allowFocus)this.ctrlRef.current.allowFocus=this.props.allowFocus;if(this.props.allowUpdate!==e.allowUpdate)this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this.props.colorScheme!==e.colorScheme)this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this.props.customStyle!==e.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.contentTemplate))this.ctrlRef.current.contentTemplate=this.props.contentTemplate;if(this.props.data!==e.data)this.ctrlRef.current.data=this.props.data;if(this.props.direction!==e.direction)this.ctrlRef.current.direction=this.props.direction;if(this.props.dropDownAdjustment!==e.dropDownAdjustment)this.ctrlRef.current.dropDownAdjustment=this.props.dropDownAdjustment;if(this.props.dropDownIcon!==e.dropDownIcon)this.ctrlRef.current.dropDownIcon=this.props.dropDownIcon;if(this.props.dropDownSize!==e.dropDownSize)this.ctrlRef.current.dropDownSize=this.props.dropDownSize;if(this.props.enabled!==e.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this.props.expanded!==e.expanded)this.ctrlRef.current.expanded=this.props.expanded;if(this.props.name!==e.name)this.ctrlRef.current.name=this.props.name;if(this.props.placement!==e.placement)this.ctrlRef.current.placement=this.props.placement;if(this.props.pressed!==e.pressed)this.ctrlRef.current.pressed=this.props.pressed;if(this.props.resourcePath!==e.resourcePath)this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this.props.size!==e.size)this.ctrlRef.current.size=this.props.size;if(this.props.state!==e.state)this.ctrlRef.current.state=this.props.state;if(this.props.theme!==e.theme)this.ctrlRef.current.theme=this.props.theme}}},{key:"setClass",value:function(e){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setClass(e)}},{key:"setStyle",value:function(e){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setStyle(e)}},{key:"refresh",value:function(){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.refresh()}},{key:"updateLayout",value:function(){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.updateLayout()}},{key:"render",value:function(){return React.createElement("iui-dropdownbutton",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return t}();export default IntegralUIDropDownButtonComponent;