/*
  filename: integralui.treelistitem.js
  version : 23.2.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUIColorScheme,IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import IntegralUIItem from"./integralui.item.js";import{iuiTreeListItemDefaultStyle}from"../styles/default/integralui.treelistitem.style.js";import{iuiTreeListItemOfficeStyle}from"../styles/themes/office/integralui.treelistitem.office.js";import{iuiTreeListItemDarkStyle}from"../styles/color-schemes/dark/integralui.treelistitem.dark.js";import{iuiTreeListItemLightStyle}from"../styles/color-schemes/light/integralui.treelistitem.light.js";class IntegralUITreeListItem extends IntegralUIItem{_init(){super._init();this._templateData=[];this._clickPos={x:0,y:0};this._isClicked=!1;this._isHovered=!1;this._currentIndent=0;this._currentType="";this._positionType="relative";this._currentTemplateRef=null;this._parentCtrl=null;this._currentControlStyleSettings=iuiTreeListItemDefaultStyle;this._generalClassName="group"===this.type?"iui-treelistgroup":"iui-treelistitem";this._contentClassName=this._generalClassName+"-content";this._initStyle()}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(e,t,s){super.attributeChangedCallback(e,t,s)}static get properties(){return{indent:{type:Number,reflect:!0},templateRef:{type:Object,attribute:"template-ref"},type:{type:String,reflect:!0}}}get indent(){return this._currentIndent}set indent(e){if(this._currentIndent!==e){const t=this._currentIndent;this._currentIndent=e;this.requestUpdate("indent",t)}}get templateRef(){return this._currentTemplateRef}set templateRef(e){if(this._currentTemplateRef!==e){const t=this._currentTemplateRef;this._currentTemplateRef=e;this.requestUpdate("templateRef",t)}}get type(){return this._currentType}set type(e){if(this._currentType!==e){const t=this._currentType;this._currentType=e;this._generalClassName="group"===this._currentType?"iui-treelistgroup":"iui-treelistitem";this._contentClassName=this._generalClassName+"-content";this._initStyle();this.requestUpdate("type",t)}}_getDataType(){return this.data&&this.data.type?this.data.type:"item"}_isSeparator(){return"separator"===this._getDataType()?!0:!1}_onMouseDown(e){let t=this;if(t._isEnabled&&!t._isSeparator()){t._isClicked=!0;t._clickPos=t._commonService.getClientPos(e,t._elemRef.firstElementChild);let s=setTimeout(function(){t._isClicked=!1;clearTimeout(s)},500);t._invokeEvent("mouseDown",e);if(this._parentCtrl&&this._parentCtrl.invokeCtrlMethod)this._parentCtrl.invokeCtrlMethod("ITEM_SELECT",this)}e.stopPropagation()}_onMouseEnter(e){if(this._isEnabled){this.state|=IntegralUIObjectState.Hovered;this._isHovered=!0;this._invokeEvent("mouseEnter",e)}}_onMouseLeave(e){if(this._isEnabled){this.state&=~IntegralUIObjectState.Hovered;this._invokeEvent("mouseLeave",e)}this._isHovered=!1}_updateControlClass(){this._ctrlClass={};this._ctrlClass[this._generalClassName]=!0;if(!this._isSeparator()&&this._options.currentStyle&&this._options.currentStyle.general){this._ctrlClass[this._options.currentStyle.general.normal]=!0;if(this.state&IntegralUIObjectState.Disabled)this._ctrlClass[this._options.currentStyle.general.disabled]=!0;else if(this.state&IntegralUIObjectState.Focused)this._ctrlClass[this._options.currentStyle.general.focused]=!0;else if(this.state&IntegralUIObjectState.Selected)this._ctrlClass[this._options.currentStyle.general.selected]=!0;else if(this.state&IntegralUIObjectState.Hovered)this._ctrlClass[this._options.currentStyle.general.hovered]=!0;if(this.allowAnimation)if(this.state&IntegralUIObjectState.Hovered)this._ctrlClass[this._defaultStyle.general.normal+"-enter"]=!0;else this._ctrlClass[this._defaultStyle.general.normal+"-leave"]=!0}}_getControlStyle(){let e=this._currentInlineStyle||{};e.position=this._positionType;e.top=this._itemPos.top+"px";e.left=this._itemPos.left+"px";if(this._ctrlSize.width>0)e.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)e.height=this._ctrlSize.height+"px";if(this.indent)e["padding-left"]=this.indent+"px";return e}_updateColorSchemeSettings(e){this._currentColorSchemeSettings=css``;switch(e){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiTreeListItemDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiTreeListItemLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(e){this._currentThemeSettings=css``;switch(e){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiTreeListItemOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(e){this._updateReferences()}render(){return html`            <style>                ${this._currentControlStyleSettings}                ${this._currentThemeSettings}                ${this._currentColorSchemeSettings}                ${this._currentCustomStyle}            </style>            <li data-ctrl="treelistitem" class=${classMap({"iui-treelistitem-general":!this.allowAnimation,"iui-treelistitem-animate":this.allowAnimation,"iui-treelistitem-animate-enter-suspended":this.allowAnimation&&this._isHovered})} @mouseenter="${e=>this._onMouseEnter(e)}" @mousemove="${e=>this._onMouseMove(e)}" @mouseleave="${e=>this._onMouseLeave(e)}">                <div class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @click="${e=>this._onClick(e)}" @mousedown="${e=>this._onMouseDown(e)}" @mouseup="${e=>this._onMouseUp(e)}">                    <div class="iui-treelistitem-content-block">                        ${this.templateRef}                    </div>                </div>            </li>        `}_updateControlStyleSettings(e){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiTreeListItemDefaultStyle.cssText,"../../icons",e)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("li[data-ctrl=treelistitem]")}}window.customElements.define("iui-treelistitem",IntegralUITreeListItem);export default IntegralUITreeListItem;