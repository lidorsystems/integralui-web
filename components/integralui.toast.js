/*
  filename: integralui.toast.js
  version : 23.3.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html,T as TemplateResult,a as defaultTemplateProcessor}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUIColorScheme,IntegralUITheme,IntegralUIToastType}from"./integralui.enums.js";import{iuiToastDefaultStyle}from"../styles/default/integralui.toast.style.js";import{iuiToastOfficeStyle}from"../styles/themes/office/integralui.toast.office.js";import{iuiToastDarkStyle}from"../styles/color-schemes/dark/integralui.toast.dark.js";import{iuiToastLightStyle}from"../styles/color-schemes/light/integralui.toast.light.js";class IntegralUIToast extends IntegralUIBase{_init(){super._init();this._currentDuration=5e3;this._positionInterval=null;this._toastFields={id:"id",text:"text",title:"title",type:"type"};this._parentCtrl=null;this._isRemoved=!1;this._currentPosition={top:0,left:0};this._currentControlStyleSettings=iuiToastDefaultStyle;this._currentOpacity=1;this._generalClassName="iui-toast";this._currentContentTemplate=null;this._initStyle();this._updateDataFields()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback();this._removeDurationTimeout();this._removeOpacityInterval();this._removePositionInterval()}setParent(t){this._parentCtrl=t}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{contentTemplate:{type:Object,attribute:"content-template"},dataFields:{type:Object,attribute:"data-fields"},duration:{type:Number,reflect:!0},position:{type:Object}}}get contentTemplate(){return this._currentContentTemplate}set contentTemplate(t){const e=this._currentContentTemplate;this._currentContentTemplate=t;this.requestUpdate("contentTemplate",e)}set dataFields(t){this._updateDataFields(t)}get duration(){return this._currentDuration}set duration(t){if(this._currentDuration!==t){const e=this._currentDuration;this._currentDuration=t;this.requestUpdate("duration",e)}}get position(){return this._currentPosition}set position(t){if(t){let e=!1;const i=this._currentPosition;if(void 0!==t.top&&this._currentPosition.top!==t.top){this._currentPosition.top=t.top;e=!0}if(void 0!==t.left&&this._currentPosition.left!==t.left){this._currentPosition.left=t.left;e=!0}if(e){this._invokeEvent("positionChanged",{position:this._currentPosition,size:this._ctrlSize});this.requestUpdate("position",i);this.update()}}}_animatePosition(t){let e=this;return new Promise(i=>{e._removePositionInterval();let s={top:e._currentPosition.top,left:e._currentPosition.left},r=0,a={factor:e._currentPosition.top>t.top?-1:1,value:Math.floor(Math.abs(t.top-e._currentPosition.top)/10)},l={factor:e._currentPosition.left>t.left?-1:1,value:Math.floor(Math.abs(t.left-e._currentPosition.left)/10)};e._positionInterval=setInterval(function(){if(r<10)s={top:s.top+a.value*a.factor,left:s.left+l.value*l.factor};else s={top:t.top,left:t.left};e.position={top:s.top,left:s.left};r++;if(s.top===t.top&&s.left===t.left){clearInterval(e._positionInterval);i()}},15)})}hide(){let t=this;t._removeOpacityInterval();if(!t._isRemoved){let e=.05;t._opacityInterval=setInterval(function(){if(t._currentOpacity>0)t._currentOpacity-=e;else{t._currentOpacity=0;if(t)t.parentNode.removeChild(t);t._isRemoved=!0;t._updateParent();clearInterval(t._opacityInterval)}t.update()},25)}}_removeDurationTimeout(){if(this._delayTimeout)clearTimeout(this._delayTimeout);this._delayTimeout=null}_removeOpacityInterval(){if(this._opacityInterval)clearInterval(this._opacityInterval);this._opacityInterval=null}_removePositionInterval(){if(this._positionInterval)clearInterval(this._positionInterval);this._positionInterval=null}_startDuration(){let t=this;t._durationTimeout=setTimeout(function(){t.hide();t._removeDurationTimeout()},t._currentDuration)}_updateDataFields(t){let e=t||{};this._toastFields={id:e.id?e.id:"id",text:e.text?e.text:"text",title:e.title?e.title:"title",type:e.type?e.type:"type"}}_updateParent(){if(this._parentCtrl)this._parentCtrl._updatePositions(this.data)}_getControlStyle(){let t=this._currentInlineStyle||{};t=Object.assign(t,{top:this._currentPosition?this._currentPosition.top+"px":0,left:this._currentPosition?this._currentPosition.left+"px":0,opacity:this._currentOpacity});if(this._ctrlSize.width>0)t.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";return t}_updateColorSchemeSettings(t){this._currentColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiToastDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiToastLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateControlClass(){this._ctrlClass={};this._ctrlClass[this._generalClassName]=!0;if(this.data)switch(this.data[this._toastFields.type]){case IntegralUIToastType.Error:this._ctrlClass[this._generalClassName+"-error"]=!0;break;case IntegralUIToastType.Success:this._ctrlClass[this._generalClassName+"-success"]=!0;break;case IntegralUIToastType.Warning:this._ctrlClass[this._generalClassName+"-warning"]=!0;break;default:this._ctrlClass[this._generalClassName+"-info"]=!0}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiToastOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}_getContentTemplate(t,e){let i=null,s=null;if(t)if(i=this.contentTemplate){let e=i(t);if(e)s=new TemplateResult(e.strings,e.values,"html",defaultTemplateProcessor);if(!s)s=this._getDefaultContentTemplate(t);return s}else return this._getDefaultContentTemplate(t);return html``}_getDefaultContentTemplate(t){return html`             <div class="iui-toast-header">                 <span class="iui-toast-title">${t[this._toastFields.title]}</span>             </div>             <div class="iui-toast-content">                 <span class="iui-toast-label">${t[this._toastFields.text]}</span>             </div>         `}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="toast" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())}>                 ${this._getContentTemplate(this.data)}             </div>         `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiToastDefaultStyle.cssText,"../../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=toast]")}}window.customElements.define("iui-toast",IntegralUIToast);export default IntegralUIToast;