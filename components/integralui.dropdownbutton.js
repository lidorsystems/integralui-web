/*
  filename: integralui.dropdownbutton.js
  version : 23.3.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html,T as TemplateResult,a as defaultTemplateProcessor}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUIColorScheme,IntegralUIDirection,IntegralUIObjectState,IntegralUIPlacement,IntegralUITheme}from"./integralui.enums.js";import IntegralUIDropDown from"./integralui.dropdown.js";import{iuiDropDownButtonDefaultStyle}from"../styles/default/integralui.dropdownbutton.style.js";import{iuiDropDownButtonDarkStyle}from"../styles/color-schemes/dark/integralui.dropdownbutton.dark.js";import{iuiDropDownButtonOfficeStyle}from"../styles/themes/office/integralui.dropdownbutton.office.js";import{iuiDropDownButtonLightStyle}from"../styles/color-schemes/light/integralui.dropdownbutton.light.js";class IntegralUIDropDownButton extends IntegralUIBase{_init(){super._init();this._currentDropDownAdjustment={top:0,left:0,width:0,height:0};this._currentDropDownSize={width:0,height:0};this._currentDirection=IntegralUIDirection.Below;this._currentPlacement=IntegralUIPlacement.Right;this._isDropDownIconVisible=!0;this._isExpanded=!1;this._generalClassName="iui-dropdownbutton";this._buttonClassName=this._generalClassName+"-btn";this._currentControlStyleSettings=iuiDropDownButtonDefaultStyle;this._initStyle()}_initStyle(){this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"},button:{disabled:this._buttonClassName+"-disabled",focused:this._buttonClassName+"-focused",normal:this._buttonClassName,hovered:this._buttonClassName+"-hovered",selected:this._buttonClassName+"-selected"}};this._updateColorSchemeSettings(this._currentColorScheme);this.refresh()}connectedCallback(){}disconnectedCallback(){this._removeDropDown()}attributeChangedCallback(t,e,s){super.attributeChangedCallback(t,e,s)}static get properties(){return{direction:{converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"none":return IntegralUIDirection.None;case"above":return IntegralUIDirection.Above;case"right":return IntegralUIDirection.Right;case"left":return IntegralUIDirection.Left;default:return IntegralUIDirection.Below}},toAttribute:t=>{switch(t){case IntegralUIDirection.None:return"None";case IntegralUIDirection.Above:return"Above";case IntegralUIDirection.Right:return"Right";case IntegralUIDirection.Left:return"Left";default:return"Below"}}},reflect:!0},dropDownAdjustment:{type:Object,attribute:"dropdown-adjustment"},dropDownIcon:{type:Boolean,attribute:"dropdown-icon",reflect:!0},dropDownSize:{type:Object,attribute:"dropdown-size"},expanded:{type:Boolean,reflect:!0},placement:{converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"top":return IntegralUIPlacement.Top;case"bottom":return IntegralUIPlacement.Bottom;case"left":return IntegralUIPlacement.Left;default:return IntegralUIPlacement.Right}},toAttribute:t=>{switch(t){case IntegralUIPlacement.Top:return"Top";case IntegralUIPlacement.Bottom:return"Bottom";case IntegralUIPlacement.Left:return"Left";default:return"Right"}}},reflect:!0}}}get direction(){return this._currentDirection}set direction(t){const e=this._currentDirection;this._currentDirection=t;this.requestUpdate("direction",e);this.refresh()}get dropDownAdjustment(){return this._currentDropDownAdjustment}set dropDownAdjustment(t){if(t){const e=this._currentDropDownAdjustment;if(void 0!==t.top&&this._currentDropDownAdjustment.top!==t.top)this._currentDropDownAdjustment.top=t.top;if(void 0!==t.left&&this._currentDropDownAdjustment.left!==t.left)this._currentDropDownAdjustment.left=t.left;if(void 0!==t.width&&this._currentDropDownAdjustment.width!==t.width)this._currentDropDownAdjustment.width=t.width;if(void 0!==t.height&&this._currentDropDownSize.height!==t.height)this._currentDropDownAdjustment.height=t.height;this.requestUpdate("dropDownAdjustment",e)}}get dropDownIcon(){return this._isDropDownIconVisible}set dropDownIcon(t){if(this._isDropDownIconVisible!==t){const e=this._isDropDownIconVisible;this._isDropDownIconVisible=t;this.update();this.requestUpdate("dropDownIcon",e)}}get dropDownSize(){return this._currentDropDownSize}set dropDownSize(t){if(t){let e=!1;const s=this._currentDropDownSize;if(void 0!==t.width&&this._currentDropDownSize.width!==t.width){this._currentDropDownSize.width=t.width;e=!0}if(void 0!==t.height&&this._currentDropDownSize.height!==t.height){this._currentDropDownSize.height=t.height;e=!0}if(e){this.updateLayout();this.requestUpdate("dropDownSize",s)}}}get expanded(){return this._isExpanded}set expanded(t){if(this._isExpanded!==t){const e=this._isExpanded;this._isExpanded=t;if(this._isExpanded)this._addDropDown();else this._closeDropDown();this._invokeEvent("expandedChanged",{expanded:t});this.requestUpdate("expanded",e)}}get placement(){return this._currentPlacement}set placement(t){const e=this._currentPlacement;this._currentPlacement=t;this.requestUpdate("placement",e);this.refresh()}_preventDragStart(t){t.preventDefault();t.stopPropagation()}_addDropDown(){this._removeDropDown();this._cmpRef=document.createElement("iui-dropdown",{is:IntegralUIDropDown});document.body.appendChild(this._cmpRef);if(this._cmpRef){this._cmpRef.allowAnimation=this.allowAnimation;this._cmpRef.colorScheme=this._currentColorScheme;this._cmpRef.contentTemplate=this._getContentTemplate();this._cmpRef.customStyle=this.customStyle;this._cmpRef.resourcePath=this.resourcePath;this._cmpRef.size=this._getDropDownSize();this._cmpRef.theme=this._currentTheme;this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=dropdownbutton]");let t=this._commonService.getPageRect(this._elemRef),e=this._commonService.getShiftPos();this._cmpRef.position={top:t.bottom+e.y+this._currentDropDownAdjustment.top,left:t.left+e.x+this._currentDropDownAdjustment.left};this._cmpRef.open();this._removeCtrl=this._removeCtrl.bind(this);this._cmpRef.addEventListener("closed",this._removeCtrl)}}_closeDropDown(){if(this._cmpRef)this._cmpRef.close()}_getDropDownSize(){let t={width:0!==this._currentDropDownSize.width&&this._currentDropDownSize.width>this._elemRef.offsetWidth?this._currentDropDownSize.width:this._elemRef.offsetWidth,height:0!==this._currentDropDownSize.height?this._currentDropDownSize.height:100};t.width+=this._currentDropDownAdjustment.width;t.height+=this._currentDropDownAdjustment.height;return t}_openDropDown(t){if(this._isEnabled&&1===t.which){this.toggle();this._invokeEvent("opened",{event:t,expanded:!0})}}_removeCtrl(t){this.collapse();this._invokeEvent("closed",{event:t,expanded:!1});this._removeDropDown()}_removeDropDown(){if(this._cmpRef){this._cmpRef.removeEventListener("closed",this._removeCtrl);this._cmpRef.parentNode.removeChild(this._cmpRef)}this._cmpRef=null}collapse(){this.expanded=!1}expand(){this.expanded=!0}toggle(){this.expanded=!this.expanded}_ctrlMouseDown(t){this._openDropDown(t)}_ctrlMouseEnter(t){if(this._isEnabled)this.state|=IntegralUIObjectState.Hovered}_ctrlMouseLeave(t){if(this._isEnabled)this.state&=~IntegralUIObjectState.Hovered}_getButtonClass(){return this._buttonClass}_updateButtonClass(){this._buttonClass={};if(this._currentPlacement===IntegralUIPlacement.Left){this._buttonClass[this._buttonClassName+"-left"]=!0;if(this._currentDirection&IntegralUIDirection.Left)this._buttonClass[this._generalClassName+"-open-left"]=!0;else if(this._currentDirection&IntegralUIDirection.Above)this._buttonClass[this._generalClassName+"-open-above"]=!0}else{this._buttonClass[this._buttonClassName+"-right"]=!0;if(this._currentDirection&IntegralUIDirection.Right)this._buttonClass[this._generalClassName+"-open-right"]=!0;else if(this._currentDirection&IntegralUIDirection.Above)this._buttonClass[this._generalClassName+"-open-above"]=!0}if(this._defaultStyle){this._buttonClass[this._defaultStyle.button.normal]=!0;if(this.state&IntegralUIObjectState.Disabled)this._buttonClass[this._defaultStyle.button.disabled]=!0;else if(this.state&IntegralUIObjectState.Focused)this._buttonClass[this._defaultStyle.button.focused]=!0;else if(this.state&IntegralUIObjectState.Selected)this._buttonClass[this._defaultStyle.button.selected]=!0;else if(this.state&IntegralUIObjectState.Hovered)this._buttonClass[this._defaultStyle.button.hovered]=!0}}_updateColorSchemeSettings(t){this._currentColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiDropDownButtonDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiDropDownButtonLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiDropDownButtonOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}_getContentTemplate(){if(this.contentTemplate){let t=this.contentTemplate(this._ctrlData);return new TemplateResult(t.strings,t.values,"html",defaultTemplateProcessor)}return html``}_ctrlTouchStart(t){t.preventDefault();this._openDropDown(t)}firstUpdated(t){this._updateReferences();this.updateLayout()}refresh(){this._updateStyle(this.controlStyle);this._updateButtonClass();this._updateControlClass();this.update();this._updateReferences()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="dropdownbutton" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} draggable="true" @dragstart="${t=>this._preventDragStart(t)}" @mousedown="${t=>this._ctrlMouseDown(t)}" @mouseenter="${t=>this._ctrlMouseEnter(t)}" @mouseleave="${t=>this._ctrlMouseLeave(t)}" @touchstart="${t=>this._ctrlTouchStart(t)}">                 <slot></slot>                 ${this._isDropDownIconVisible?html`<div id="button" class=${classMap(this._getButtonClass())}>                             <span></span>                         </div>`:html``}             </div>         `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiDropDownButtonDefaultStyle.cssText,"../../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=dropdownbutton]");this._buttonElem=this.shadowRoot.querySelector("#button")}}window.customElements.define("iui-dropdownbutton",IntegralUIDropDownButton);export default IntegralUIDropDownButton;