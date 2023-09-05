/*
  filename: integralui.header.js
  version : 23.3.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUIColorScheme,IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import IntegralUIItem from"./integralui.item.js";import{iuiHeaderDefaultStyle}from"../styles/default/integralui.header.style.js";import{iuiHeaderOfficeStyle}from"../styles/themes/office/integralui.header.office.js";import{iuiHeaderDarkStyle}from"../styles/color-schemes/dark/integralui.header.dark.js";import{iuiHeaderLightStyle}from"../styles/color-schemes/light/integralui.header.light.js";class IntegralUIHeaderItem extends IntegralUIItem{_init(){super._init();this._currentAnimationState="";this._currentAnimationType="";this._expandHorizontalClass={};this._expandVerticalClass={};this._expandArrowBottomLeftClass={};this._expandArrowBottomRightClass={};this._expandArrowVerticalClass={};this._expandArrowTopLeftClass={};this._expandArrowTopRightClass={};this._generalClassName="iui-header";this._expandBoxClassName=this._generalClassName+"expand-box";this._contentClassName=this._generalClassName+"-content";this._currentControlStyleSettings=iuiHeaderDefaultStyle;this._initStyle()}connectedCallback(){}disconnectedCallback(){}_initStyle(){this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"},content:{disabled:this._contentClassName+"-disabled",focused:this._contentClassName+"-focused",normal:this._contentClassName,hovered:this._contentClassName+"-hovered",selected:this._contentClassName+"-selected"},expandBox:this._expandBoxClassName};this._updateColorSchemeSettings(this._currentColorScheme);this.refresh()}attributeChangedCallback(e,t,s){super.attributeChangedCallback(e,t,s)}static get properties(){return{animationType:{type:String},animationState:{type:String}}}get animationState(){return this._currentAnimationState}set animationState(e){if(this._currentAnimationState!==e){const t=this._currentAnimationState;this._currentAnimationState=e;this.requestUpdate("animationState",t);this.performUpdate()}}get animationType(){return this._currentAnimationType}set animationType(e){if(this._currentAnimationType!==e){const t=this._currentAnimationType;this._currentAnimationType=e;this.requestUpdate("animationType",t);this.update()}}_getExpandVerticalClass(){this._expandVerticalClass={};this._expandVerticalClass["iui-header-expand-box-vertical"]=!0;if(this.state&IntegralUIObjectState.Selected)this._expandVerticalClass["iui-header-expand-box-vertical-collapse"]=!0;else this._expandVerticalClass["iui-header-expand-box-vertical-expand"]=!0;if(this._options.currentStyle.expandBox)this._expandVerticalClass[this._options.currentStyle.expandBox]=!0;return this._expandVerticalClass}_getExpandHorizontalClass(){this._expandHorizontalClass={};this._expandHorizontalClass["iui-header-expand-box-horizontal"]=!0;if(this.state&IntegralUIObjectState.Selected)this._expandHorizontalClass["iui-header-expand-box-horizontal-collapse"]=!0;else this._expandHorizontalClass["iui-header-expand-box-horizontal-expand"]=!0;if(this._options.currentStyle.expandBox)this._expandHorizontalClass[this._options.currentStyle.expandBox]=!0;return this._expandHorizontalClass}_getExpandArrowBottomLeftClass(){this._expandArrowBottomLeftClass={};this._expandArrowBottomLeftClass["iui-header-expand-box-arrow-bottom-left"]=!0;if("expand"===this.animationState)this._expandArrowBottomLeftClass["iui-header-expand-box-arrow-bottom-left-collapse"]=!0;else this._expandArrowBottomLeftClass["iui-header-expand-box-arrow-bottom-left-expand"]=!0;if(this._options.currentStyle.expandBox)this._expandArrowBottomLeftClass[this._options.currentStyle.expandBox]=!0;return this._expandArrowBottomLeftClass}_getExpandArrowBottomRightClass(){this._expandArrowBottomRightClass={};this._expandArrowBottomRightClass["iui-header-expand-box-arrow-bottom-right"]=!0;if("expand"===this.animationState)this._expandArrowBottomRightClass["iui-header-expand-box-arrow-bottom-right-collapse"]=!0;else this._expandArrowBottomRightClass["iui-header-expand-box-arrow-bottom-right-expand"]=!0;if(this._options.currentStyle.expandBox)this._expandArrowBottomRightClass[this._options.currentStyle.expandBox]=!0;return this._expandArrowBottomRightClass}_getExpandArrowVerticalClass(){this._expandArrowVerticalClass={};this._expandArrowVerticalClass["iui-header-expand-box-arrow-vertical"]=!0;if("expand"===this.animationState)this._expandArrowVerticalClass["iui-header-expand-box-arrow-vertical-collapse"]=!0;else this._expandArrowVerticalClass["iui-header-expand-box-arrow-vertical-expand"]=!0;if(this._options.currentStyle.expandBox)this._expandArrowVerticalClass[this._options.currentStyle.expandBox]=!0;return this._expandArrowVerticalClass}_getExpandArrowTopLeftClass(){this._expandArrowTopLeftClass={};this._expandArrowTopLeftClass["iui-header-expand-box-arrow-top-left"]=!0;if("expand"===this.animationState)this._expandArrowTopLeftClass["iui-header-expand-box-arrow-top-left-expand"]=!0;else this._expandArrowTopLeftClass["iui-header-expand-box-arrow-top-left-collapse"]=!0;if(this._options.currentStyle.expandBox)this._expandArrowTopLeftClass[this._options.currentStyle.expandBox]=!0;return this._expandArrowTopLeftClass}_getExpandArrowTopRightClass(){this._expandArrowTopRightClass={};this._expandArrowTopRightClass["iui-header-expand-box-arrow-top-right"]=!0;if("expand"===this.animationState)this._expandArrowTopRightClass["iui-header-expand-box-arrow-top-right-expand"]=!0;else this._expandArrowTopRightClass["iui-header-expand-box-arrow-top-right-collapse"]=!0;if(this._options.currentStyle.expandBox)this._expandArrowTopRightClass[this._options.currentStyle.expandBox]=!0;return this._expandArrowTopRightClass}_expandBoxClicked(e){if(this._isEnabled&&1===e.which)this._invokeEvent("expandClicked",e)}_getControlStyle(){let e=this._currentInlineStyle||{};if(this._ctrlSize.width>0)e.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)e.height=this._ctrlSize.height+"px";return e}_updateStyle(e){if(e)this._options.currentStyle={general:this._getGeneralStyle(e.general),content:this._getContentStyle(e.content),expandBox:this._commonService.isFieldAvailable(e.expandBox,this._expandBoxClassName)};else this._options.currentStyle={general:{disabled:this._defaultStyle.general.disabled,focused:this._defaultStyle.general.focused,hovered:this._defaultStyle.general.hovered,normal:this._defaultStyle.general.normal,selected:this._defaultStyle.general.selected},content:{disabled:this._defaultStyle.content.disabled,focused:this._defaultStyle.content.focused,hovered:this._defaultStyle.content.hovered,normal:this._defaultStyle.content.normal,selected:this._defaultStyle.content.selected},expandBox:this._defaultStyle.expandBox}}_updateColorSchemeSettings(e){this._currentColorSchemeSettings=css``;switch(e){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiHeaderDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiHeaderLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(e){this._currentThemeSettings=css``;switch(e){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiHeaderOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}_getHeaderTemplate(){let e=this._commonService.isString(this.icon)?this.icon.split(" "):[],t={};e.map(e=>t[e]=!0);return html`             ${this.icon?html`<span class=${classMap(t)}></span>`:html``}             ${this.iconUrl?html`<img class="iui-header-icon-url" src="${this.iconUrl}" />`:html``}            ${""!==this.text?html`<span class="iui-header-label">${this.text}</span>`:html`<span class="iui-header-label-empty"></span>`}       `}firstUpdated(e){}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="header" id="content" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @click="${e=>this._onClick(e)}" @mousedown="${e=>this._onMouseDown(e)}" @mouseup="${e=>this._onMouseUp(e)}" @mouseenter="${e=>this._onMouseEnter(e)}" @mousemove="${e=>this._onMouseMove(e)}" @mouseleave="${e=>this._onMouseLeave(e)}" @touchstart="${e=>this._onTouchStart(e)}">                 ${this._getHeaderTemplate()}                 ${"plus-minus"===this._currentAnimationType?html`<div class="iui-header-expand-box" @mousedown="${e=>this._expandBoxClicked(e)}">                             <span class="iui-header-expand-box-vertical" class=${classMap(this._getExpandVerticalClass())}></span>                             <span class="iui-header-expand-box-horizontal" class=${classMap(this._getExpandHorizontalClass())}></span>                         </div>`:""}                 ${"arrow"===this._currentAnimationType?html`<div class="iui-header-expand-box-arrow" @mousedown="${e=>this._expandBoxClicked(e)}">                             <span class="iui-header-expand-box-arrow-bottom-left" class=${classMap(this._getExpandArrowBottomLeftClass())}></span>                             <span class="iui-header-expand-box-arrow-bottom-right" class=${classMap(this._getExpandArrowBottomRightClass())})}></span>                             <span class="iui-header-expand-box-arrow-top-left" class=${classMap(this._getExpandArrowTopLeftClass())}></span>                             <span class="iui-header-expand-box-arrow-top-right" class=${classMap(this._getExpandArrowTopRightClass())}></span>                         </div>`:""}                 ${"calendar"===this._currentAnimationType?html`<div class="iui-header-expand-box-calendar" @mousedown="${e=>this._expandBoxClicked(e)}"></div>`:""}                 <slot></slot>             </div>         `}_updateControlStyleSettings(e){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiHeaderDefaultStyle.cssText,"../../icons",e)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=header]");this._contentElem=this.shadowRoot.querySelector("#content")}}window.customElements.define("iui-header",IntegralUIHeaderItem);export default IntegralUIHeaderItem;