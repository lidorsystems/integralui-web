/*
  filename: integralui.slide.js
  version : 23.2.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUIColorScheme,IntegralUITheme}from"./integralui.enums.js";import{iuiSlideDefaultStyle}from"../styles/default/integralui.slide.style.js";import{iuiSlideBarOfficeStyle}from"../styles/themes/office/integralui.slidebar.office.js";import{iuiSlideBarDarkStyle}from"../styles/color-schemes/dark/integralui.slidebar.dark.js";import{iuiSlideBarLightStyle}from"../styles/color-schemes/light/integralui.slidebar.light.js";class IntegralUISlide extends IntegralUIBase{_init(){super._init();this._animationInterval=null;this._currentOpacity=1;this._currentPosition={top:0,left:0};this._currentScale=1;this._parentCtrl=null;this._currentControlStyleSettings=iuiSlideDefaultStyle;this._generalClassName="iui-slide";this._initStyle()}connectedCallback(){}disconnectedCallback(){this._removeAnimationInterval()}setParent(t){this._parentCtrl=t}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{position:{type:Object}}}get position(){return this._currentPosition}set position(t){if(t){let e=!1;const i=this._currentPosition;if(void 0!==t.top&&this._currentPosition.top!==t.top){this._currentPosition.top=t.top;e=!0}if(void 0!==t.left&&this._currentPosition.left!==t.left){this._currentPosition.left=t.left;e=!0}if(e){this._invokeEvent("positionChanged",{position:this._currentPosition,size:this._ctrlSize});this.requestUpdate("position",i);this.update()}}}get size(){return this._ctrlSize}set size(t){if(t){let e=!1;const i=this._ctrlSize;if(void 0!==t.width&&this._ctrlSize.width!==t.width){this._ctrlSize.width=t.width;e=!0}if(void 0!==t.height&&this._ctrlSize.height!==t.height){this._ctrlSize.height=t.height;e=!0}if(e){this._invokeEvent("sizeChanged",{position:this._currentPosition,size:this._ctrlSize});this.requestUpdate("size",i);this.updateLayout()}}}_animate(t,e){let i=this;return new Promise(s=>{i._removeAnimationInterval();let r=0,o=e>0?e:50,l={opacity:void 0!==t.opacity?t.opacity:i._currentOpacity,position:void 0!==t.position?t.position:i._currentPosition,scale:void 0!==t.scale?t.scale:i._currentScale},a={opacity:i._currentOpacity,position:i._currentPosition,scale:i._currentScale},n={factor:a.position.top>l.position.top?-1:1,value:Math.abs(l.position.top-a.position.top)/o},c={factor:a.position.left>l.position.left?-1:1,value:Math.abs(l.position.left-a.position.left)/o},h={factor:a.opacity>l.opacity?-1:1,value:Math.abs(l.opacity-a.opacity)/o},p={factor:a.scale>l.scale?-1:1,value:Math.abs(l.scale-a.scale)/o};i._animationInterval=setInterval(function(){if(r<o)a={opacity:a.opacity+h.value*h.factor,position:{top:a.position.top+n.value*n.factor,left:a.position.left+c.value*c.factor},scale:a.scale+p.value*p.factor};else a={opacity:l.opacity,position:{top:l.position.top,left:l.position.left},scale:l.scale};i._currentOpacity=a.opacity;i._currentScale=a.scale;i.position=a.position;i.update();r++;if(a.opacity===l.opacity&&a.position.top===l.position.top&&a.position.left===l.position.left&&a.scale===l.scale){clearInterval(i._animationInterval);s()}},10)})}_removeAnimationInterval(){if(this._animationInterval)clearInterval(this._animationInterval);this._animationInterval=null}getSize(){return{width:this._elemRef?Math.floor(this._elemRef.offsetWidth):0,height:this._elemRef?Math.floor(this._elemRef.offsetHeight):0}}_ctrlClick(){if(this._parentCtrl&&this._parentCtrl.invokeCtrlMethod)this._parentCtrl.invokeCtrlMethod("SELECT_SLIDE",this)}_getControlStyle(){let t=this._currentInlineStyle||{};t.opacity=this._currentOpacity;t.top=this._currentPosition?this._currentPosition.top+"px":0;t.left=this._currentPosition?this._currentPosition.left+"px":0;t.transform="scale("+this._currentScale+")";if(this._ctrlSize.width>0)t.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";return t}setOpacity(t){if(t)this._currentOpacity=t}setScale(t){if(t)this._currentScale=t}_updateColorSchemeSettings(t){this._currentColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiSlideBarDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiSlideBarLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiSlideBarOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`            <style>                ${this._currentControlStyleSettings}                ${this._currentThemeSettings}                ${this._currentColorSchemeSettings}                ${this._currentCustomStyle}            </style>            <div data-ctrl="slide" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @click="${()=>this._ctrlClick()}">                <slot></slot>            </div>        `}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=slide]")}}window.customElements.define("iui-slide",IntegralUISlide);export default IntegralUISlide;