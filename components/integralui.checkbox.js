/*
  filename: integralui.checkbox.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUICheckState,IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import IntegralUIBaseValue from"./integralui.base.value.js";import{iuiCheckBoxDefaultStyle}from"../styles/integralui.checkbox.style.js";import{iuiCheckBoxOfficeStyle}from"../themes/office/integralui.checkbox.office.js";import{iuiCheckBoxMidnightStyle}from"../themes/midnight/integralui.checkbox.midnight.js";class IntegralUICheckBox extends IntegralUIBaseValue{constructor(){super();this._checkedValue=!1;this._checkStateValue=IntegralUICheckState.Unchecked;this._isThreeState=!1;this._buttonClass={};this._generalClassName="iui-checkbox";this._buttonClassName=this._generalClassName+"-btn";this._contentClassName=this._generalClassName+"-content";this._currentControlStyleSettings=iuiCheckBoxDefaultStyle;this._initStyle()}_init(){super._init();this._initStyle()}_initStyle(){this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"},button:{general:this._buttonClassName,disabled:this._buttonClassName+"-disabled",checked:this._buttonClassName+"-checked",indeterminate:this._buttonClassName+"-indeterminate",unchecked:this._buttonClassName+"-unchecked"},content:{disabled:this._contentClassName+"-disabled",focused:this._contentClassName+"-focused",normal:this._contentClassName,hovered:this._contentClassName+"-hovered",selected:this._contentClassName+"-selected"}};this.refresh()}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(e,t,s){super.attributeChangedCallback(e,t,s)}static get properties(){return{checked:{type:Boolean,reflect:!0},checkState:{attribute:"check-state",converter:{fromAttribute:e=>{switch((e=e.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"checked":return IntegralUICheckState.Checked;case"indeterminate":return IntegralUICheckState.Indeterminate;default:return IntegralUICheckState.Unchecked}},toAttribute:e=>{switch(e){case IntegralUICheckState.Checked:return"Checked";case IntegralUICheckState.Indeterminate:return"Indeterminate";default:return"Unchecked"}}},reflect:!0},threeState:{type:Boolean,attribute:"three-state"}}}get checked(){return this._checkedValue}set checked(e){if(this._checkedValue!==e){const t=this._checkedValue;this._checkedValue=e;this._checkStateValue=this._checkedValue?IntegralUICheckState.Checked:IntegralUICheckState.Unchecked;this.refresh();this._invokeEvent("checkedChanged",{checked:this._checkedValue,checkState:this._checkStateValue});this.requestUpdate("checked",t)}}get checkState(){return this._checkStateValue}set checkState(e){if(this._checkStateValue!==e){const t=this._checkStateValue;this._checkStateValue=e;this._checkedValue=this._checkStateValue===IntegralUICheckState.Checked?!0:!1;this.refresh();this._invokeEvent("checkStateChanged",{checked:this._checkedValue,checkState:this._checkStateValue});this.requestUpdate("checkState",t)}}get threeState(){return this._isThreeState}set threeState(e){if(this._isThreeState!==e){const t=this._isThreeState;this._isThreeState=e;this.refresh();this.requestUpdate("threeState",t)}}_ctrlMouseDown(e){if(this._isEnabled&&1===e.which)if(this.threeState)switch(this.checkState){case IntegralUICheckState.Indeterminate:this.checkState=IntegralUICheckState.Checked;this.checked=!0;break;case IntegralUICheckState.Checked:this.checkState=IntegralUICheckState.Unchecked;this.checked=!1;break;default:this.checkState=IntegralUICheckState.Indeterminate;this.checked=!1}else{this.checked=void 0!==this.checked?!this.checked:!0;this.checkState=this.checked?IntegralUICheckState.Checked:IntegralUICheckState.Unchecked}}refresh(){this._updateStyle(this.controlStyle);this._updateControlClass();this._updateButtonClass();this._updateContentClass();this.update();this._updateReferences()}_updateButtonClass(){this._buttonClass={};this._buttonClass[this._buttonClassName]=!0;if(this._options.currentStyle){this._buttonClass[this._options.currentStyle.button.general]=!0;if(this.threeState)switch(this.checkState){case IntegralUICheckState.Indeterminate:this._buttonClass[this._options.currentStyle.button.indeterminate]=!0;break;case IntegralUICheckState.Checked:this._buttonClass[this._options.currentStyle.button.checked]=!0;break;case IntegralUICheckState.Unchecked:this._buttonClass[this._options.currentStyle.button.unchecked]=!0;break;default:this._defaultFunc()}else this._buttonClass[this.checked?this._options.currentStyle.button.checked:this._options.currentStyle.button.unchecked]=!0;if(this.state&IntegralUIObjectState.Disabled)this._buttonClass[this._options.currentStyle.button.disabled]=!0}}_getButtonClass(){return this._buttonClass}_getButtonStyle(e){if(this._commonService.isString(e))return e;else if(e)return{general:this._commonService.isFieldAvailable(e.general,this._buttonClassName),disabled:this._commonService.isFieldAvailable(e.disabled,this._buttonClassName+"-disabled"),checked:this._commonService.isFieldAvailable(e.checked,this._buttonClassName+"-checked"),indeterminate:this._commonService.isFieldAvailable(e.indeterminate,this._buttonClassName+"-indeterminate"),unchecked:this._commonService.isFieldAvailable(e.unchecked,this._buttonClassName+"-unchecked")};else return{general:this._defaultStyle.button.general,disabled:this._defaultStyle.button.disabled,checked:this._defaultStyle.button.checked,indeterminate:this._defaultStyle.button.indeterminate,unchecked:this._defaultStyle.button.unchecked}}_updateStyle(e){if(e)this._options.currentStyle={general:this._getGeneralStyle(e.general),button:this._getButtonStyle(e.button),content:this._getContentStyle(e.button)};else this._options.currentStyle={general:{disabled:this._defaultStyle.general.disabled,focused:this._defaultStyle.general.focused,hovered:this._defaultStyle.general.hovered,normal:this._defaultStyle.general.normal,selected:this._defaultStyle.general.selected},button:{general:this._defaultStyle.button.general,disabled:this._defaultStyle.button.disabled,checked:this._defaultStyle.button.checked,indeterminate:this._defaultStyle.button.indeterminate,unchecked:this._defaultStyle.button.unchecked},content:{disabled:this._defaultStyle.content.disabled,focused:this._defaultStyle.content.focused,hovered:this._defaultStyle.content.hovered,normal:this._defaultStyle.content.normal,selected:this._defaultStyle.content.selected}}}_updateThemeSettings(e){this._currentThemeSettings=css``;switch(e){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiCheckBoxOfficeStyle.cssText,"../icons",this._currentResourcePath);break;case IntegralUITheme.Midnight:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiCheckBoxMidnightStyle.cssText,"../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(e){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="checkbox" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} draggable="true" @dragstart="${e=>this._preventDragStart(e)}" @mousedown="${e=>this._ctrlMouseDown(e)}">                 <div class=${classMap(this._getButtonClass())}>                     <span></span>                 </div>                 <div class=${classMap(this._getContentClass())}>                     <slot></slot>                 </div>             </div>         `}_updateControlStyleSettings(e){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiCheckBoxDefaultStyle.cssText,"../icons",e);this.update()}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=checkbox]")}}window.customElements.define("iui-checkbox",IntegralUICheckBox);export default IntegralUICheckBox;