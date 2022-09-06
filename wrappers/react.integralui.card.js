/*
  filename: react.integralui.card.js
  version : 22.3.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import React,{Component}from"react";import"../components/integralui.card.js";var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1;s.configurable=!0;if("value"in s)s.writable=!0;Object.defineProperty(e,s.key,s)}}return function(t,r,s){if(r)e(t.prototype,r);if(s)e(t,s);return t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var IntegralUICardComponent=function(e){_inherits(t,Component);function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.ctrlRef=React.createRef();return r}_createClass(t,[{key:"componentDidMount",value:function(){var e=this;this._initProps();if(this.ctrlRef&&this.ctrlRef.current){if(this.props.click)this.ctrlRef.current.addEventListener("click",function(t){return e.props.click(t)});if(this.props.enabledChanged)this.ctrlRef.current.addEventListener("enabledChanged",function(t){return e.props.enabledChanged(t)});if(this.props.mouseDown)this.ctrlRef.current.addEventListener("mouseDown",function(t){return e.props.mouseDown(t)});if(this.props.mouseEnter)this.ctrlRef.current.addEventListener("mouseEnter",function(t){return e.props.mouseEnter(t)});if(this.props.mouseLeave)this.ctrlRef.current.addEventListener("mouseLeave",function(t){return e.props.mouseLeave(t)});if(this.props.mouseMove)this.ctrlRef.current.addEventListener("mouseMove",function(t){return e.props.mouseMove(t)});if(this.props.mouseUp)this.ctrlRef.current.addEventListener("mouseUp",function(t){return e.props.mouseUp(t)});if(this.props.selectedChanged)this.ctrlRef.current.addEventListener("selectedChanged",function(t){return e.props.selectedChanged(t)});if(this.props.sizeChanged)this.ctrlRef.current.addEventListener("sizeChanged",function(t){return e.props.sizeChanged(t)});if(this.props.stateChanged)this.ctrlRef.current.addEventListener("stateChanged",function(t){return e.props.stateChanged(t)});if(this.props.touchStart)this.ctrlRef.current.addEventListener("touchStart",function(t){return e.props.touchStart(t)})}}},{key:"componentWillUnmount",value:function(){if(this.ctrlRef&&this.ctrlRef.current){if(this.props.click)this.ctrlRef.current.removeEventListener("click",this.props.click);if(this.props.enabledChanged)this.ctrlRef.current.removeEventListener("enabledChanged",this.props.enabledChanged);if(this.props.mouseDown)this.ctrlRef.current.removeEventListener("mouseDown",this.props.mouseDown);if(this.props.mouseEnter)this.ctrlRef.current.removeEventListener("mouseEnter",this.props.mouseEnter);if(this.props.mouseLeave)this.ctrlRef.current.removeEventListener("mouseLeave",this.props.mouseLeave);if(this.props.mouseMove)this.ctrlRef.current.removeEventListener("mouseMove",this.props.mouseMove);if(this.props.mouseUp)this.ctrlRef.current.removeEventListener("mouseUp",this.props.mouseUp);if(this.props.selectedChanged)this.ctrlRef.current.removeEventListener("selectedChanged",this.props.selectedChanged);if(this.props.sizeChanged)this.ctrlRef.current.removeEventListener("sizeChanged",this.props.sizeChanged);if(this.props.stateChanged)this.ctrlRef.current.removeEventListener("stateChanged",this.props.stateChanged);if(this.props.touchStart)this.ctrlRef.current.removeEventListener("touchStart",this.props.touchStart)}}},{key:"componentDidUpdate",value:function(e){this._updateData(e)}},{key:"_initProps",value:function(){if(this.ctrlRef&&this.ctrlRef.current){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.allowUpdate))this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this._isDefined(this.props.colorScheme))this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.flipped))this.ctrlRef.current.flipped=this.props.flipped;if(this._isDefined(this.props.footer))this.ctrlRef.current.footer=this.props.footer;if(this._isDefined(this.props.header))this.ctrlRef.current.header=this.props.header;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.resourcePath))this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this._isDefined(this.props.selected))this.ctrlRef.current.selected=this.props.selected;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme}}},{key:"_isDefined",value:function(e){return void 0!==e?!0:!1}},{key:"_updateData",value:function(e){if(this.ctrlRef&&this.ctrlRef.current){if(this.props.allowAnimation!==e.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.allowUpdate!==e.allowUpdate)this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this.props.colorScheme!==e.colorScheme)this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this.props.customStyle!==e.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this.props.data!==e.data)this.ctrlRef.current.data=this.props.data;if(this.props.enabled!==e.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this.props.flipped!==e.flipped)this.ctrlRef.current.flipped=this.props.flipped;if(this.props.footer!==e.footer)this.ctrlRef.current.footer=this.props.footer;if(this.props.header!==e.header)this.ctrlRef.current.header=this.props.header;if(this.props.name!==e.name)this.ctrlRef.current.name=this.props.name;if(this.props.resourcePath!==e.resourcePath)this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this.props.selected!==e.selected)this.ctrlRef.current.selected=this.props.selected;if(this.props.size!==e.size)this.ctrlRef.current.size=this.props.size;if(this.props.state!==e.state)this.ctrlRef.current.state=this.props.state;if(this.props.theme!==e.theme)this.ctrlRef.current.theme=this.props.theme}}},{key:"flip",value:function(){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.flip()}},{key:"setClass",value:function(e){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setClass(e)}},{key:"setStyle",value:function(e){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setStyle(e)}},{key:"refresh",value:function(){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.refresh()}},{key:"updateLayout",value:function(){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.updateLayout()}},{key:"render",value:function(){return React.createElement("iui-card",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return t}();export default IntegralUICardComponent;