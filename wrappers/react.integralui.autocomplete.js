/*
  filename: react.integralui.autocomplete.js
  version : 22.3.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import React,{Component}from"react";import"../components/integralui.autocomplete.js";var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1;i.configurable=!0;if("value"in i)i.writable=!0;Object.defineProperty(t,i.key,i)}}return function(e,r,i){if(r)t(e.prototype,r);if(i)t(e,i);return e}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&("object"===typeof e||"function"===typeof e)?e:t}function _inherits(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}});if(e)Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e}var IntegralUIAutoCompleteComponent=function(t){_inherits(e,Component);function e(t){_classCallCheck(this,e);var r=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));r.ctrlRef=React.createRef();return r}_createClass(e,[{key:"_isCtrlDefined",value:function(){return this.ctrlRef&&this.ctrlRef.current?!0:!1}},{key:"componentDidMount",value:function(){var t=this;this._initProps();if(this._isCtrlDefined()){if(this.props.enabledChanged)this.ctrlRef.current.addEventListener("enabledChanged",function(e){return t.props.enabledChanged(e)});if(this.props.sizeChanged)this.ctrlRef.current.addEventListener("sizeChanged",function(e){return t.props.sizeChanged(e)});if(this.props.stateChanged)this.ctrlRef.current.addEventListener("stateChanged",function(e){return t.props.stateChanged(e)});if(this.props.valueChanged)this.ctrlRef.current.addEventListener("valueChanged",function(e){return t.props.valueChanged(e)})}}},{key:"componentWillUnmount",value:function(){if(this._isCtrlDefined()){if(this.props.enabledChanged)this.ctrlRef.current.removeEventListener("enabledChanged",this.props.enabledChanged);if(this.props.sizeChanged)this.ctrlRef.current.removeEventListener("sizeChanged",this.props.sizeChanged);if(this.props.stateChanged)this.ctrlRef.current.removeEventListener("stateChanged",this.props.stateChanged);if(this.props.valueChanged)this.ctrlRef.current.removeEventListener("valueChanged",this.props.valueChanged)}}},{key:"componentDidUpdate",value:function(t){this._updateData(t)}},{key:"_initProps",value:function(){if(this._isCtrlDefined()){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.allowUpdate))this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this._isDefined(this.props.colorScheme))this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.dataFields))this.ctrlRef.current.dataFields=this.props.dataFields;if(this._isDefined(this.props.dropDownSize))this.ctrlRef.current.dropDownSize=this.props.dropDownSize;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.list))this.ctrlRef.current.list=this.props.list;if(this._isDefined(this.props.maxDropDownItems))this.ctrlRef.current.maxDropDownItems=this.props.maxDropDownItems;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.placeHolder))this.ctrlRef.current.placeHolder=this.props.placeHolder;if(this._isDefined(this.props.resourcePath))this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.text))this.ctrlRef.current.text=this.props.text;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme}}},{key:"_isDefined",value:function(t){return void 0!==t?!0:!1}},{key:"_updateData",value:function(t){if(this._isCtrlDefined()){if(this.props.allowAnimation!==t.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.allowUpdate!==t.allowUpdate)this.ctrlRef.current.allowUpdate=this.props.allowUpdate;if(this.props.colorScheme!==t.colorScheme)this.ctrlRef.current.colorScheme=this.props.colorScheme;if(this.props.customStyle!==t.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this.props.data!==t.data)this.ctrlRef.current.data=this.props.data;if(this.props.dataFields!==t.dataFields)this.ctrlRef.current.dataFields=this.props.dataFields;if(this.props.dropDownSize!==t.dropDownSize)this.ctrlRef.current.dropDownSize=this.props.dropDownSize;if(this.props.enabled!==t.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.list))this.ctrlRef.current.list=this.props.list;if(this.props.maxDropDownItems!==t.maxDropDownItems)this.ctrlRef.current.maxDropDownItems=this.props.maxDropDownItems;if(this.props.name!==t.name)this.ctrlRef.current.name=this.props.name;if(this.props.placeHolder!==t.placeHolder)this.ctrlRef.current.placeHolder=this.props.placeHolder;if(this.props.resourcePath!==t.resourcePath)this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this.props.size!==t.size)this.ctrlRef.current.size=this.props.size;if(this.props.state!==t.state)this.ctrlRef.current.state=this.props.state;if(this.props.text!==t.text)this.ctrlRef.current.text=this.props.text;if(this.props.theme!==t.theme)this.ctrlRef.current.theme=this.props.theme}}},{key:"sort",value:function(t,e){if(this._isCtrlDefined())this.ctrlRef.current.sort(t,e)}},{key:"setClass",value:function(t){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setClass(t)}},{key:"setStyle",value:function(t){if(this.ctrlRef&&this.ctrlRef.current)this.ctrlRef.current.setStyle(t)}},{key:"refresh",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.refresh()}},{key:"updateLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateLayout()}},{key:"render",value:function(){return React.createElement("iui-autocomplete",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return e}();export default IntegralUIAutoCompleteComponent;