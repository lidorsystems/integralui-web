/*
  filename: integralui.dialog.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUITheme}from"./integralui.enums.js";import IntegralUIBase from"./integralui.base.js";import{iuiDialogDefaultStyle}from"../styles/integralui.dialog.style.js";import{iuiDialogOfficeStyle}from"../themes/office/integralui.dialog.office.js";import{iuiDialogMidnightStyle}from"../themes/midnight/integralui.dialog.midnight.js";class IntegralUIDialog extends IntegralUIBase{_init(){super._init();this._isVisible=!1;this._showCloseButton=!0;this._currentControlStyleSettings=iuiDialogDefaultStyle;this._generalClassName="iui-dialog";this._initStyle()}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{closeButton:{type:Boolean,attribute:"close-button",reflect:!0},visible:{type:Boolean,reflect:!0}}}get closeButton(){return this._showCloseButton}set closeButton(t){if(this._showCloseButton!==t){const e=this._showCloseButton;this._showCloseButton=t;this.requestUpdate("closeButton",e)}}get visible(){return this._isVisible}set visible(t){if(this._isVisible!==t){const e=this._isVisible;if(t)this.open();else this.close();this._isVisible=t;this.requestUpdate("visible",e)}}open(){if(!this._isVisible){let t={cancel:!1};this._invokeEvent("opening",t);if(!t.cancel){this._isVisible=!0;this.update();this._invokeEvent("opened")}}}close(){if(this._isVisible){let t={cancel:!1};this._invokeEvent("closing",t);if(!t.cancel){this._isVisible=!1;this.update();this._invokeEvent("closed")}}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiDialogOfficeStyle.cssText,"../icons",this._currentResourcePath);break;case IntegralUITheme.Midnight:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiDialogMidnightStyle.cssText,"../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentCustomStyle}             </style>                              ${this._isVisible?html`<div data-ctrl="dialog"><div class=${classMap(Object.assign({"iui-dialog-animation":!0},this._getControlClass()))} style=${styleMap(this._getControlStyle())}>                             <slot></slot>                             <div class="iui-dialog-buttons">                                 ${this._showCloseButton?html`<span class="iui-dialog-icon iui-dialog-button-close" @click="${()=>this.close()}"></span>`:html``}                             </div>                         </div>                         <p class="iui-dialog-overlay iui-overlay-animation" @click="${()=>this.close()}"></p></div>`:html``}                      `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiDialogDefaultStyle.cssText,"../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=dialog]")}}window.customElements.define("iui-dialog",IntegralUIDialog);export default IntegralUIDialog;