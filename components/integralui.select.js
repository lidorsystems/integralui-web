/*
  filename: integralui.select.js
  version : 24.1.0
  Copyright © 2016-2024 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUIColorScheme,IntegralUIDropDownDirection,IntegralUITheme}from"./integralui.enums.js";import IntegralUIDropDown from"./integralui.dropdown.js";import"./integralui.header.js";import"./integralui.list.js";import{iuiSelectDefaultStyle}from"../styles/default/integralui.select.style.js";import{iuiSelectOfficeStyle}from"../styles/themes/office/integralui.select.office.js";import{iuiSelectDarkStyle}from"../styles/color-schemes/dark/integralui.select.dark.js";import{iuiSelectLightStyle}from"../styles/color-schemes/light/integralui.select.light.js";class IntegralUISelect extends IntegralUIBase{_init(){super._init();this._dataItems=[];this._cmpRef=null;this._currentDropDownDirection=IntegralUIDropDownDirection.Down;this._dropList=null;this._isDropDownVisible=!1;this._isDropDownUpdateAllowed=!0;this._expandState="none";this._isExpanded=!1;this._isSelected=!1;this._currentDropDownAdjustment={top:0,left:0,width:0,height:0};this._currentDropDownSize={width:0,height:0};this._currentMaxDropDownItems=5;this._currentSelection=null;this._currentIndex=-1;this._currentControlStyleSettings=iuiSelectDefaultStyle;this._dropListTimeout=null;this._generalClassName="iui-select";this._headerClassName=this._generalClassName+"-header";this._headerExpandBoxClassName=this._headerClassName+"-expand-box";this._initStyle()}_initStyle(){this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"},header:{general:{disabled:this._headerClassName+"-disabled",focused:this._headerClassName+"-focused",normal:this._headerClassName,hovered:this._headerClassName+"-hovered",selected:this._headerClassName+"-selected"},expandBox:this._headerExpandBoxClassName}};this._updateColorSchemeSettings(this._currentColorScheme);this.refresh()}connectedCallback(){}disconnectedCallback(){if(this._dropListTimeout)clearTimeout(this._dropListTimeout);this._removeDropDown()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i)}static get properties(){return{dropDownAdjustment:{type:Object,attribute:"dropdown-adjustment"},dropDownDirection:{attribute:"dropdown-direction",converter:{fromAttribute:e=>{switch((e=e.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"up":return IntegralUIDropDownDirection.Up;default:return IntegralUIDropDownDirection.Down}},toAttribute:e=>{switch(e){case IntegralUIDropDownDirection.Up:return"Up";default:return"Down"}}},reflect:!0},dropDownSize:{type:Object,attribute:"dropdown-size"},expanded:{type:Boolean,reflect:!0},maxDropDownItems:{type:Number,attribute:"max-dropdown-items",reflect:!0},items:{type:Array},selectedIndex:{type:Number,attribute:"selected-index",reflect:!0},selectedItem:{type:Object,attribute:"selected-item"}}}get dropDownAdjustment(){return this._currentDropDownAdjustment}set dropDownAdjustment(e){if(e){const t=this._currentDropDownAdjustment;if(void 0!==e.top&&this._currentDropDownAdjustment.top!==e.top)this._currentDropDownAdjustment.top=e.top;if(void 0!==e.left&&this._currentDropDownAdjustment.left!==e.left)this._currentDropDownAdjustment.left=e.left;if(void 0!==e.width&&this._currentDropDownAdjustment.width!==e.width)this._currentDropDownAdjustment.width=e.width;if(void 0!==e.height&&this._currentDropDownSize.height!==e.height)this._currentDropDownAdjustment.height=e.height;this.requestUpdate("dropDownAdjustment",t)}}get dropDownDirection(){return this._currentDropDownDirection}set dropDownDirection(e){if(this._currentDropDownDirection!==e){const t=this._currentDropDownDirection;this._currentDropDownDirection=e;this.requestUpdate("dropDownDirection",t)}}get dropDownSize(){return this._currentDropDownSize}set dropDownSize(e){if(e){let t=!1;const i=this._currentDropDownSize;if(void 0!==e.width&&this._currentDropDownSize.width!==e.width){this._currentDropDownSize.width=e.width;t=!0}if(void 0!==e.height&&this._currentDropDownSize.height!==e.height){this._currentDropDownSize.height=e.height;t=!0}if(t){this.updateLayout();this.requestUpdate("dropDownSize",i)}}}get expanded(){return this._isExpanded}set expanded(e){if(this._isExpanded!==e){const t=this._isExpanded;let i=this,s={cancel:!1,item:this._currentSelection};i._invokeEvent("beforeExpand",s);if(!0!==s.cancel){i._isExpanded=e;if(e)i._expandState="expand";else i._expandState="collapse";let s=setTimeout(function(){if("collapse"===i._expandState)i._expandState="none";clearTimeout(s)},300);i._header.animationState=i._isExpanded?"expand":"collapse";if(this._isExpanded)this._showDropDown();else this._closeDropDown();i.requestUpdate("expanded",t)}}}get items(){return this._dataItems}set items(e){const t=this._dataItems;this._dataItems=e;this.requestUpdate("items",t)}get maxDropDownItems(){return this._currentMaxDropDownItems}set maxDropDownItems(e){if(void 0!==e&&this._currentMaxDropDownItems!==e){const t=this._currentMaxDropDownItems;this._currentMaxDropDownItems=e;this.requestUpdate("maxDropDownItems",t)}}get selectedIndex(){return this._currentIndex}set selectedIndex(e){if(this._commonService.isIndexInRange(e,this._dataItems)&&this._currentIndex!==e){this._invokeEvent("selectedIndexChanged",{index:e,item:this._dataItems[e]});this.selectedItem=this._dataItems[e]}}get selectedItem(){return this._currentSelection}set selectedItem(e){let t={cancel:!1,item:e};this._invokeEvent("beforeSelect",t);if(!0!==t.cancel&&this._currentSelection!==e){const t=this._currentSelection;this._currentSelection=e;this._currentIndex=this._dataItems.indexOf(e);this.requestUpdate("selectedItem",t);this._invokeEvent("afterSelect",{item:e});this._invokeEvent("selectedIndexChanged",{index:this._currentIndex,item:e});this._invokeEvent("selectionChanged",{item:e});this.update()}}_addDropDown(){this._removeDropDown();this._cmpRef=document.createElement("iui-dropdown",{is:IntegralUIDropDown});document.body.appendChild(this._cmpRef);if(this._cmpRef){this._cmpRef.allowAnimation=this.allowAnimation;this._cmpRef.colorScheme=this._currentColorScheme;this._cmpRef.contentTemplate=this._getContentTemplate();this._cmpRef.customStyle=this.customStyle;this._cmpRef.direction=this._currentDropDownDirection;this._cmpRef.resourcePath=this.resourcePath;this._cmpRef.size=this._getDropDownSize();this._cmpRef.theme=this._currentTheme;let e=this._commonService.getPageRect(this._elemRef),t=this._commonService.getShiftPos();this._cmpRef.position={top:e.top+this._header.getSize().height+t.y+this._currentDropDownAdjustment.top,left:e.left+t.x+this._currentDropDownAdjustment.left};if(this._currentDropDownDirection===IntegralUIDropDownDirection.Up)this._cmpRef.position.top=e.top+t.y-this._currentDropDownAdjustment.top-this._cmpRef.size.height;this._removeCtrl=this._removeCtrl.bind(this);this._cmpRef.addEventListener("closed",this._removeCtrl)}}_closeDropDown(){if(this._dropList)this._dropList.allowUpdate=!1;if(this._cmpRef)this._cmpRef.close();this._isDropDownVisible=!1}_onCtrlMouseUp(e){e.stopPropagation()}_dropDownBlur(e){this.expanded=!1;this._invokeEvent("lostFocus",{item:this._currentSelection})}_itemSelected(e){if(this._dropList)this._dropList.clearSelection();if(e.detail.item&&this.selectedItem!==e.detail.item)this.selectedItem=e.detail.item;this.expanded=!1;this._elemRef.focus()}_listSizeChanged(e){if(this._cmpRef){this._cmpRef.size={height:e.detail.size.height+4};if(this._currentDropDownDirection===IntegralUIDropDownDirection.Up){let e=this._commonService.getPageRect(this._elemRef),t=this._commonService.getShiftPos();this._cmpRef.position={top:e.top+t.y-this._currentDropDownAdjustment.top-this._cmpRef.size.height,left:e.left+t.x+this._currentDropDownAdjustment.left}}}}_removeCtrl(e){this._invokeEvent("closed",{item:this._currentSelection});this._removeDropDown()}_removeDropDown(){if(this._cmpRef){this._cmpRef.removeEventListener("closed",this._removeCtrl);this._cmpRef.parentNode.removeChild(this._cmpRef)}this._cmpRef=null;this._isDropDownVisible=!1;if(this._dropList)this._dropList.allowUpdate=!0}_showDropDown(){let e=this;e._addDropDown();if(e._cmpRef){e._cmpRef.open();e._dropListTimeout=setTimeout(function(){if(e._cmpRef){e._dropList=e._cmpRef.getContent();if(e._dropList){e._dropList.focus();e._dropList.scrollTo(e._currentSelection)}}e._isDropDownVisible=e._cmpRef?!0:!1;clearTimeout(e._dropListTimeout)},100)}}_headerClick(e){if(this._isEnabled&&1===e.detail.which){this.expanded=!0;this._invokeEvent("opened",{event:e.detail})}}_onHeaderTouchStart(e){if(this._isEnabled){this.expanded=!0;this._invokeEvent("opened",{event:e.detail})}}collapse(){this.expanded=!1}expand(){this.expanded=!0}toggle(){this.expanded=!this.expanded}_getHeaderIcon(){return this._currentSelection?this._currentSelection.icon:""}_getHeaderIconUrl(){return this._currentSelection?this._currentSelection.iconUrl:""}_getHeaderText(){return this._currentSelection?this._currentSelection.text:""}_ctrlGotFocus(e){this._invokeEvent("gotFocus",{event:e})}_ctrlKeyDown(e){if(this._isEnabled){let t={cancel:!1,item:this._currentSelection,event:e};this._invokeEvent("keyDown",t);switch(e.keyCode){case 13:this._processEnterKey(e);break;case 40:break;default:this._defaultFunc()}}}_ctrlLostFocus(e){this._invokeEvent("lostFocus",{event:e})}_processEnterKey(e){this._keepActive=!0;this.expanded=!0;this._invokeEvent("opened",{event:e.detail})}_getDropDownSize(){let e={width:0!==this._currentDropDownSize.width&&this._currentDropDownSize.width>this._elemRef.offsetWidth?this._currentDropDownSize.width:this._elemRef.offsetWidth,height:0!==this._currentDropDownSize.height?this._currentDropDownSize.height:100};e.width+=this._currentDropDownAdjustment.width;e.height+=this._currentDropDownAdjustment.height;return e}_processMouseWheel(e){}clearSelection(){this._currentSelection=null;this.refresh()}_getCurrentHeaderStyle(){return this._defaultStyle.header}_updateColorSchemeSettings(e){this._currentColorSchemeSettings=css``;switch(e){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiSelectDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiSelectLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(e){this._currentThemeSettings=css``;switch(e){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiSelectOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}_getContentTemplate(){let e=this._getDropDownSize();e.width-=4;e.height-=4;if(this._currentMaxDropDownItems>0)e={width:this._getDropDownSize().width-4};return html`<iui-list .colorScheme="${this._currentColorScheme}" .customStyle="${this.customStyle}" .items="${this._dataItems}" .maxVisibleItems="${this._currentMaxDropDownItems}" .selectedItem="${this._currentSelection}" .size="${e}" .theme="${this.theme}" @blur="${e=>this._dropDownBlur(e)}" @itemClick="${e=>this._itemSelected(e)}" @itemTouch="${e=>this._itemSelected(e)}" @selectionChanged="${e=>this._itemSelected(e)}" @sizeChanged="${e=>this._listSizeChanged(e)}"></iui-list>`}firstUpdated(e){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="select" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} tabindex="999" @blur="${e=>this._ctrlLostFocus(e)}" @focus="${e=>this._ctrlGotFocus(e)}" @keydown="${e=>this._ctrlKeyDown(e)}" @DOMMouseScroll="${e=>this._processMouseWheel(e)}" @mousewheel="${e=>this._processMouseWheel(e)}" @mouseup="${e=>this._onCtrlMouseUp(e)}">                 <iui-header id="header" .colorScheme="${this._currentColorScheme}" .controlStyle="${this._getCurrentHeaderStyle()}" .customStyle="${[this._currentControlStyleSettings,this._currentThemeSettings,this._currentColorSchemeSettings,this._currentCustomStyle]}" .enabled="${this.enabled}" .icon="${this._getHeaderIcon()}" .iconUrl="${this._getHeaderIconUrl()}" .text="${this._getHeaderText()}" .animationType="${"arrow"}" @mouseDown="${e=>this._headerClick(e)}" @touchStart="${e=>this._onHeaderTouchStart(e)}"></iui-header>             </div>         `}_updateControlStyleSettings(e){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiSelectDefaultStyle.cssText,"../../icons",e)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=select]");this._header=this.shadowRoot.querySelector("#header")}}window.customElements.define("iui-select",IntegralUISelect);export default IntegralUISelect;