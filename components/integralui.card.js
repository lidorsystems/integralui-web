/*
  filename: integralui.card.js
  version : 22.3.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUIColorScheme,IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import{iuiCardDefaultStyle}from"../styles/default/integralui.card.style.js";import{iuiCardOfficeStyle}from"../styles/themes/office/integralui.card.office.js";import{iuiCardDarkStyle}from"../styles/color-schemes/dark/integralui.card.dark.js";import{iuiCardLightStyle}from"../styles/color-schemes/light/integralui.card.light.js";class IntegralUICard extends IntegralUIBase{constructor(){super();this._isFlipped=!1;this._parentCtrl=null;this._isSelected=!1;this._autoCtrlHeight=0;this._contentElem={front:null,back:null};this._contentHeight={front:999,back:999};this._contentSlotElemHeight={front:0,back:0};this._footerElem={front:null,back:null};this._footerHeight={front:0,back:0};this._isFooterVisible={front:!0,back:!0};this._headerElem={front:null,back:null};this._headerHeight={front:0,back:0};this._isHeaderVisible={front:!0,back:!0};this._updateTimer=null;this._ctrlInnerClass={};this._generalClassName="iui-card";this._generalInnerClassName=this._generalClassName+"-inner";this._currentControlStyleSettings=iuiCardDefaultStyle;this._initStyle()}_init(){super._init();this._initStyle()}setParent(t){this._parentCtrl=t}connectedCallback(){}disconnectedCallback(){this._resetLayoutTimer()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{flipped:{type:Boolean,relect:!0},footer:{type:Object},header:{type:Object},selected:{type:Boolean,relect:!0}}}get flipped(){return this._isFlipped}set flipped(t){if(this._isFlipped!==t){const e=this._isFlipped;this._isFlipped=t;this._updateControlInnerClass();this.update();this.requestUpdate("flipped",e)}}get footer(){return this._isFooterVisible}set footer(t){if(!this._commonService.isEmpty(t)){let e=!1;const i=this._isFooterVisible;if(void 0!==t.front&&this._isFooterVisible.front!==t.front){this._isFooterVisible.front=t.front;e=!0}if(void 0!==t.back&&this._isFooterVisible.back!==t.back){this._isFooterVisible.back=t.back;e=!0}if(e){this.requestUpdate("footer",i);this.updateLayout()}}}get header(){return this._isHeaderVisible}set header(t){if(!this._commonService.isEmpty(t)){let e=!1;const i=this._isHeaderVisible;if(void 0!==t.front&&this._isHeaderVisible.front!==t.front){this._isHeaderVisible.front=t.front;e=!0}if(void 0!==t.back&&this._isHeaderVisible.back!==t.back){this._isHeaderVisible.back=t.back;e=!0}if(e){this.requestUpdate("header",i);this.updateLayout()}}}get selected(){return this._isSelected}set selected(t){if(this._isSelected!==t){const e=this._isSelected;this._isSelected=t;if(t)this.state|=IntegralUIObjectState.Selected;else this.state&=~IntegralUIObjectState.Selected;this._invokeEvent("selectedChanged",{data:this.data});if(this._parentCtrl&&this._parentCtrl.invokeCtrlMethod)this._parentCtrl.invokeCtrlMethod("SELECT",this);this.requestUpdate("selected",e)}}flip(){if(this._isEnabled){this._isFlipped=!this._isFlipped;this._updateControlInnerClass();this.update()}}_getContentHeight(t){if(this._ctrlSize&&this._ctrlSize.height>0)if(t)return this._contentHeight?this._contentHeight.back:0;else return this._contentHeight?this._contentHeight.front:0;else if(t)return this._contentHeight&&this._contentSlotElemHeight?Math.max(this._contentHeight.back,this._contentSlotElemHeight.back):0;else return this._contentHeight&&this._contentSlotElemHeight?Math.max(this._contentHeight.front,this._contentSlotElemHeight.front):0}_processUpdateLayout(){let t=this;return new Promise(e=>{t._isUpdateActive=!0;if(t._isUpdateAllowed){t._resetLayoutTimer();t._updateTimer=setTimeout(function(){t._updateLayoutSize();t._updateLayoutSize();clearTimeout(t._updateTimer)},1)}})}_resetLayoutTimer(){if(this._updateTimer)clearTimeout(this._updateTimer);this._updateTimer=null}async updateLayout(){this._updateReferences();await this._processUpdateLayout();this.update()}_updateLayoutSize(){let t=this;t._clientRect={width:t._elemRef.clientWidth,height:t._elemRef.clientHeight};if(t._clientRect.height>0){let e=t._commonService.getPadding(t._elemRef);t._headerHeight={front:t._headerElem.front?t._headerElem.front.offsetHeight:0,back:t._headerElem.back?t._headerElem.back.offsetHeight:0};t._footerHeight={front:t._footerElem.front?t._footerElem.front.offsetHeight:0,back:t._footerElem.back?t._footerElem.back.offsetHeight:0};let i=e.top+e.bottom+(t._headerHeight.front+t._footerHeight.front),s=e.top+e.bottom+(t._headerHeight.back+t._footerHeight.back);t._contentHeight={front:t._clientRect.height-(e.top+e.bottom)-(t._headerHeight.front+t._footerHeight.front),back:t._clientRect.height-(e.top+e.bottom)-(t._headerHeight.back+t._footerHeight.back)};t._autoCtrlHeight=0===t._ctrlSize.height?Math.max(i+Math.max(t._contentHeight.front,t._contentSlotElemHeight.front),s+Math.max(t._contentHeight.back,t._contentSlotElemHeight.back)):0;t.refresh()}}_onClick(t){if(this._isEnabled)this._invokeEvent("click",t);t.stopPropagation()}_onMouseDown(t){if(this._isEnabled){this._invokeEvent("mouseDown",t);this.selected=!0}}_onMouseUp(t){if(this._isEnabled)this._invokeEvent("mouseUp",t)}_onMouseEnter(t){if(this._isEnabled){this.state|=IntegralUIObjectState.Hovered;this._invokeEvent("mouseEnter",t)}t.stopPropagation()}_onMouseMove(t){if(this._isEnabled)this._invokeEvent("mouseMove",t);t.stopPropagation()}_onMouseLeave(t){if(this._isEnabled){this.state&=~IntegralUIObjectState.Hovered;this._invokeEvent("mouseLeave",t)}t.stopPropagation()}_getControlInnerClass(){return this._ctrlInnerClass}_getControlStyle(){let t=this._currentInlineStyle||{};if(this._ctrlSize.width>0)t.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";else t.height=this._autoCtrlHeight+"px";return t}refresh(){this._updateStyle(this.controlStyle);this._updateControlClass();this._updateControlInnerClass();this.update();this._updateReferences()}_updateControlInnerClass(){this._ctrlInnerClass={};this._ctrlInnerClass[this._generalInnerClassName]=!0;if(this._isFlipped)this._ctrlInnerClass[this._generalInnerClassName+"-flip"]=!0}_updateColorSchemeSettings(t){this._currentColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiCardDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiCardLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiCardOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}_ctrlTouchStart(t){if(this._isEnabled){this._invokeEvent("touchStart",t);this.selected=!0}}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="card" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @click="${t=>this._onClick(t)}" @mousedown="${t=>this._onMouseDown(t)}" @mouseup="${t=>this._onMouseUp(t)}" @mouseenter="${t=>this._onMouseEnter(t)}" @mousemove="${t=>this._onMouseMove(t)}" @mouseleave="${t=>this._onMouseLeave(t)}" @touchstart="${t=>this._ctrlTouchStart(t)}">                 <div class=${classMap(this._getControlInnerClass())}>                     <div class="iui-card-front">                         ${this._isHeaderVisible&&this._isHeaderVisible.front?html`<div id="front-header" class="iui-card-front-header">                                     <slot name="front-header"></slot>                                 </div>`:html``}                         <div id="front-content" class="iui-card-front-content" style=${styleMap({height:this._getContentHeight()+"px"})}>                             <slot name="front-content"></slot>                         </div>                         ${this._isFooterVisible&&this._isFooterVisible.front?html`<div id="front-footer" class="iui-card-front-footer">                                     <slot name="front-footer"></slot>                                 </div>`:html``}                     </div>                     <div class="iui-card-back">                         ${this._isHeaderVisible&&this._isHeaderVisible.back?html`<div id="back-header" class="iui-card-back-header">                                     <slot name="back-header"></slot>                                 </div>`:html``}                         <div id="back-content" class="iui-card-back-content" style=${styleMap({height:this._getContentHeight(!0)+"px"})}>                             <slot name="back-content"></slot>                         </div>                         ${this._isFooterVisible&&this._isFooterVisible.back?html`<div id="back-footer" class="iui-card-back-footer">                                     <slot name="back-footer"></slot>                                 </div>`:html``}                     </div>                 </div>             </div>         `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiCardDefaultStyle.cssText,"../../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=card]");this._elemFront=this.shadowRoot.querySelector(".iui-card-front");this._elemBack=this.shadowRoot.querySelector(".iui-card-back");this._contentElem={front:this.shadowRoot.querySelector("#front-content"),back:this.shadowRoot.querySelector("#back-content")};let t={front:this._contentElem.front?this._contentElem.front.querySelector("slot").assignedNodes():null,back:this._contentElem.back?this._contentElem.back.querySelector("slot").assignedNodes():null};this._contentSlotElemHeight={front:t.front.length>0?t.front[0].offsetHeight:0,back:t.back.length>0?t.back[0].offsetHeight:0};this._footerElem={front:this.shadowRoot.querySelector("#front-footer"),back:this.shadowRoot.querySelector("#back-footer")};this._headerElem={front:this.shadowRoot.querySelector("#front-header"),back:this.shadowRoot.querySelector("#back-header")}}}window.customElements.define("iui-card",IntegralUICard);export default IntegralUICard;