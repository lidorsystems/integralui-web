/*
  filename: integralui.breadcrumb.js
  version : 22.3.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html,T as TemplateResult,a as defaultTemplateProcessor}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import IntegralUIDataService from"../services/integralui.data.service.js";import{IntegralUIColorScheme,IntegralUITheme}from"./integralui.enums.js";import IntegralUIDropDown from"./integralui.dropdown.js";import"./integralui.list.js";import{iuiBreadCrumbDefaultStyle}from"../styles/default/integralui.breadcrumb.style.js";import{iuiBreadCrumbOfficeStyle}from"../styles/themes/office/integralui.breadcrumb.office.js";import{iuiBreadCrumbDarkStyle}from"../styles/color-schemes/dark/integralui.breadcrumb.dark.js";import{iuiBreadCrumbLightStyle}from"../styles/color-schemes/light/integralui.breadcrumb.light.js";class IntegralUIBreadCrumb extends IntegralUIBase{_init(){super._init();this._dataService=new IntegralUIDataService;this._visibleStartIndex=0;this._dataItems=[];this._currentDataFields={};this._currentList=[];this._fullList=[];this._isThereChildItems=!1;this._visibleList=[];this._cmpRef=null;this._activeObj=null;this._hoverItem=null;this._isListOpened=!1;this._prevActiveObj=null;this._isRootActive=null;this._isRootHovered=null;this._itemSize={width:0,height:0};this._currentDropDownSize={width:150,height:150};this._currentMaxDropDownItems=0;this._showRootButton=!1;this._startIndex=0;this._updateTimeout=null;this._dropListRef=null;this._dropList=null;this._currentSelection=null;this._generalClassName="iui-breadcrumb";this._itemClassName="iui-breadcrumb-item";this._itemContentClassName=this._itemClassName+"-content";this._expandBoxClassName=this._itemClassName+"-expand-box";this._rootButtonClassName=this._generalClassName+"-root-button";this._isExpandBoxTouched=!1;this._currentControlStyleSettings=iuiBreadCrumbDefaultStyle;this._updateDataFields();this._updateData();this._updateCurrentList();this._initStyle();this.updateLayout();this._resizeObserver=new ResizeObserver(t=>{if(t&&t.length>0&&t[0].contentRect){let t=!1;if(this._clientRect.width!==this._prevClientRect.width){this._prevClientRect.width=this._clientRect.width;t=!0}if(this._clientRect.height!==this._prevClientRect.height){this._prevClientRect.height=this._clientRect.height;t=!0}if(t)this.updateLayout()}})}_initStyle(){this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"},item:{general:{disabled:this._itemClassName+"-disabled",focused:this._itemClassName+"-focused",normal:this._itemClassName,hovered:this._itemClassName+"-hovered",selected:this._itemClassName+"-selected"},expandBox:{general:this._expandBoxClassName,load:this._expandBoxClassName+"-load",expanded:this._expandBoxClassName+"-close",collapsed:this._expandBoxClassName+"-open"},content:{disabled:this._itemContentClassName+"-disabled",focused:this._itemContentClassName+"-focused",normal:this._itemContentClassName,hovered:this._itemContentClassName+"-hovered",selected:this._itemContentClassName+"-selected"}}};this._updateColorSchemeSettings(this._currentColorScheme);this.refresh()}connectedCallback(){}disconnectedCallback(){this._resetLayoutTimer();this._removeDropDown();if(this._resizeObserver)this._resizeObserver.disconnect();this._resizeObserver=null}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{dataFields:{type:Object,attribute:"data-fields"},dropDownSize:{type:Object,attribute:"dropdown-size"},items:{type:Array},maxDropDownItems:{type:Number,attribute:"max-dropdown-items",reflect:!0},selectedItem:{type:Object,attribute:"selected-item"}}}get dataFields(){return this._currentDataFields}set dataFields(t){const e=this._currentDataFields;this._updateDataFields(t);this.requestUpdate("dataFields",e)}get dropDownSize(){return this._currentDropDownSize}set dropDownSize(t){if(t){let e=!1;const i=this._currentDropDownSize;if(void 0!==t.width&&this._currentDropDownSize.width!==t.width){this._currentDropDownSize.width=t.width;e=!0}if(void 0!==t.height&&this._currentDropDownSize.height!==t.height){this._currentDropDownSize.height=t.height;e=!0}if(e){this.updateLayout();this.requestUpdate("dropDownSize",i)}}}get items(){return this._dataItems}set items(t){const e=this._dataItems;this._dataItems=t;this._updateData();this.requestUpdate("items",e)}get maxDropDownItems(){return this._currentMaxDropDownItems}set maxDropDownItems(t){const e=this._currentMaxDropDownItems;this._currentMaxDropDownItems=t;this.requestUpdate("maxDropDownItems",e)}get selectedItem(){return this._currentSelection}set selectedItem(t){let e=t?this._isItemAllowed(t):!0;if(this._currentSelection!==t&&e){const e=this._currentSelection;this._currentSelection=t;this.updateLayout();this.requestUpdate("selectedItem",e);this._invokeEvent("selectionChanged",{item:t})}}_getItemObject(t,e){switch(e){case"text":return t[this._currentDataFields.text];default:this._defaultFunc()}return null}_updateCurrentList(){this._currentList.length=0;if(this._currentSelection){this._currentList.push({data:this._currentSelection,hasChildren:this._isThereVisibleChildren(this._currentSelection),style:{}});let t=this.getItemParent(this._currentSelection);for(;t;){this._currentList.splice(0,0,{data:t,hasChildren:!0,style:{}});t=this.getItemParent(t)}this._currentList.splice(0,0,{data:{[this._currentDataFields.items]:this.items.filter(t=>this._isItemAllowed(t))},hasChildren:!0,isRoot:!0,style:{}})}else if(this._dataItems)this._dataItems.map(t=>this._currentList.push({data:t,hasChildren:this._isThereVisibleChildren(t),style:{}}))}_updateData(){this._dataService.init([{data:this._dataItems,fields:this._currentDataFields}])}_updateDataFields(t){if(t)this._currentDataFields={allowFocus:t.allowFocus?t.allowFocus:"allowFocus",content:t.content?t.content:"content",enabled:t.enabled?t.enabled:"enabled",expanded:t.expanded?t.expanded:"expanded",hasChildren:t.hasChildren?t.hasChildren:"hasChildren",icon:t.icon?t.icon:"icon",iconUrl:t.iconUrl?t.iconUrl:"iconUrl",id:t.id?t.id:"id",items:t.items?t.items:"items",pid:t.pid?t.pid:"pid",selected:t.selected?t.selected:"selected",style:t.style?t.style:"style",text:t.text?t.text:"text",tooltip:t.tooltip?t.tooltip:"tooltip",value:t.value?t.value:"value",visible:t.visible?t.visible:"visible"};else this._currentDataFields={allowFocus:"allowFocus",content:"content",enabled:"enabled",expanded:"expanded",hasChildren:"hasChildren",icon:"icon",iconUrl:"iconUrl",id:"id",items:"items",pid:"pid",selected:"selected",style:"style",text:"text",tooltip:"tooltip",value:"value",visible:"visible"};if(this._dataService)this._dataService.updateDataFields(this._currentDataFields)}exportToJSON(t,e,i,s){i=i?i:null;t=t?t:!1===s?this.items:this.getFullList();let a=e?e:[this._currentDataFields.allowFocus,this._currentDataFields.content,this._currentDataFields.enabled,this._currentDataFields.expanded,this._currentDataFields.hasChildren,this._currentDataFields.icon,this._currentDataFields.iconUrl,this._currentDataFields.id,this._currentDataFields.pid,this._currentDataFields.selected,this._currentDataFields.style,this._currentDataFields.text,this._currentDataFields.tooltip,this._currentDataFields.value,this._currentDataFields.visible];if(!1===s)a.push(this._currentDataFields.items);return JSON.stringify(t,a,i)}_addDropDown(t,e){this._removeDropDown();this._cmpRef=document.createElement("iui-dropdown",{is:IntegralUIDropDown});document.body.appendChild(this._cmpRef);if(this._cmpRef){this._cmpRef.allowAnimation=this.allowAnimation;this._cmpRef.colorScheme=this._currentColorScheme;this._cmpRef.contentTemplate=this._getContentTemplate();this._cmpRef.customStyle=this.customStyle;this._cmpRef.dataFields=this._currentDataFields;this._cmpRef.resourcePath=this.resourcePath;this._cmpRef.size=this._currentDropDownSize;this._cmpRef.theme=this._currentTheme;let i=t?this._getButtonElemRect(e):this._commonService.getPageRect(this._topButtonElem),s=this._commonService.getPageRect(this._elemRef),a=this._commonService.getShiftPos();this._cmpRef.position={top:s.bottom+a.y,left:i.left+a.x-1};this._cmpRef.open();this._removeCtrl=this._removeCtrl.bind(this);this._cmpRef.addEventListener("closed",this._removeCtrl);this._isListOpened=!0;let r=this;setTimeout(function(){let e=r._cmpRef.getContent();if(e){let i=t?t.data[r._currentDataFields.items]?t.data[r._currentDataFields.items]:[]:r._getRootList();e.items=i;e.focus()}},100);this.refresh()}}_closeDropDown(){if(this._cmpRef)this._cmpRef.close();this._updateActiveObj(null);this._activeObj=null;this._isListOpened=!1;this._isRootActive=!1;this.refresh()}_dropDownBlur(t){this._closeDropDown()}_itemSelected(t){let e=this._cmpRef.getContent();if(e)e.clearSelection();this.selectedItem=t.detail.item;this._closeDropDown()}_listSizeChanged(t){if(this._cmpRef)this._cmpRef.size={height:t.detail.size.height+4}}_removeCtrl(t){this._invokeEvent("closed");this._removeDropDown()}_removeDropDown(){if(this._cmpRef){this._cmpRef.removeEventListener("closed",this._removeCtrl);this._cmpRef.parentNode.removeChild(this._cmpRef)}this._cmpRef=null}_expandBoxMouseDown(t,e,i){if(this._isEnabled){if(1===t.which&&!this._isExpandBoxTouched)this.toggle(e);if(1===t.which)this._addDropDown(e,i);this._isExpandBoxTouched=!1}t.stopPropagation()}_expandBoxMouseUp(t){this._isExpandBoxTouched=!1;t.stopPropagation()}_expandBoxTouchStart(t,e){if(this._isEnabled){this._isExpandBoxTouched=!0;this.toggle(e)}t.stopPropagation()}toggle(t,e){if(t){if(!t.data[this._currentDataFields.hasChildren]&&(!t.data[this._currentDataFields.items]||0===t.data[this._currentDataFields.items].length))return;else if(e&&!1!==t.data[this._currentDataFields.expanded])return;else if(!1===e&&!1===t.data[this._currentDataFields.expanded])return;let i=void 0!==e?e:!1!==t.data[this._currentDataFields.expanded]?!0:!1,s=void 0!==e?e:!i;if(s!==t.data[this._currentDataFields.expanded]){t.data[this._currentDataFields.expanded]=s;this._updateActiveObj(t)}}}_itemMouseEnter(t,e,i){if(this._isEnabled){this._hoverItem=e.data;if(this._isListOpened)this._updateActiveObj(e);if(this._cmpRef){let t=e.data[this._currentDataFields.items]?e.data[this._currentDataFields.items]:[],s=this._getButtonElemRect(i),a=this._commonService.getPageRect(this._elemRef),r=this._commonService.getShiftPos();this._cmpRef.opacity=t&&t.length>0?1:0;this._cmpRef.position={top:a.bottom+r.y,left:s.left+r.x-1};let l=this._cmpRef.getContent();if(l)l.items=t;this._cmpRef.update()}this.refresh()}t.stopPropagation()}_itemMouseLeave(t,e){if(this._isEnabled){this._hoverItem=null;this.refresh()}t.stopPropagation()}_itemMouseDown(t,e){if(this._isEnabled)this.selectedItem=e.data;t.stopPropagation()}_itemMouseUp(t,e){}_itemTouchStart(t,e){}_itemTouchEnd(t,e){}_addChildItems(t,e){let i=!0;if(!t[this._currentDataFields.items])return i=this._addItemToList(t,e);if(this._addItemToList(t,e)){i=!0;let e=t[this._currentDataFields.items];if(e)e.forEach(e=>this._addChildItems(e,t[this._currentDataFields.id]))}return i}_addItemToList(t,e){if(!t[this._currentDataFields.id])t[this._currentDataFields.id]=this._commonService.getUniqueId();if(e)t[this._currentDataFields.pid]=e;let i=this._isItemAllowed(t);if(i)this._fullList.push(t);return i}getFullList(){return this._fullList}_getItemHeight(){return this._itemSize.height>0?this._itemSize.height+"px":"auto"}getItemParent(t){return this._dataService.getParent(t)}_getRootButtonHeight(){return this._itemSize.height>0?this._itemSize.height-2+"px":"auto"}_isItemAllowed(t){return t&&!1===t[this._currentDataFields.visible]?!1:!0}_isItemEnabled(t){return this._isEnabled&&t&&!1!==t[this._currentDataFields.enabled]}_isItemHovered(t){return t&&t===this._hoverItem?!0:!1}_isItemLoading(t){return!1}_isItemSelected(t){return t===this._activeObj}_isThereVisibleChildren(t){let e=!1;if(t){let i=t[this._currentDataFields.items];if(i)for(let t=0;t<i.length;t++)if(this._isItemAllowed(i[t])){e=!0;break}}return e}_updateActiveObj(t){this._prevActiveObj=this._activeObj;this._activeObj=t;this._isRootActive=!1}updateFullList(){this._fullList.length=0;let t=this._dataService.getList();if(t)t.forEach(t=>this._addChildItems(t,null));return this._fullList}_getButtonElemRect(t){let e=this._commonService.getPageRect();if(this._buttonElems)if(t>=0&&t<this._buttonElems.length)e=this._commonService.getPageRect(this._buttonElems[t]);return e}_processUpdateLayout(){let t=this;return new Promise(e=>{t._resetLayoutTimer();t._updateTimeout=setTimeout(function(){t._updateCurrentList();t.updateFullList();for(let e=0;e<t._currentList.length;e++)t._updateItemStyle(t._currentList[e]);t.update();t._updateReferences();t._clientRect={width:t._elemRef.clientWidth,height:t._elemRef.clientHeight};setTimeout(function(){let i=[];t._startIndex=0;if(t._itemElems){let e={width:0,height:0},i=0,s=-1;for(let a=t._itemElems.length-1;a>=0;a--){e={width:t._itemElems[a].offsetWidth,height:Math.max(e.height,t._itemElems[a].offsetHeight)};if(s<0&&i+e.width>t._clientRect.width-28)s=a+1;i+=e.width}t._itemSize=e;s=s>1?s:0;t._startIndex=Math.max(0,s)}if(t._currentSelection){t._currentList.forEach((e,s)=>{if(s>=t._startIndex)i.push(e)});t._showRootButton=t._startIndex>0?!0:!1}else t._showRootButton=!0;t._visibleList=i;t.update();e()},5);clearTimeout(t._updateTimeout)},1)})}_resetLayoutTimer(){if(this._updateTimeout)clearTimeout(this._updateTimeout);this._updateTimeout=null}async updateLayout(){await this._processUpdateLayout();this.update()}_getRootList(){let t=[];if(this._currentSelection)for(let e=this._startIndex-1;e>=1;e--)t.push(this._currentList[e].data);else this._currentList.map(e=>t.push(e.data));return t}_rootMouseEnter(t){if(this._isEnabled){this._hoverItem=null;this._updateActiveObj(null);this._isRootHovered=!0;if(this._isListOpened)this._isRootActive=!0;if(this._cmpRef){let t=this._getRootList(),e=this._commonService.getPageRect(this._topButtonElem),i=this._commonService.getPageRect(this._elemRef),s=this._commonService.getShiftPos();this._cmpRef.opacity=t&&t.length>0?1:0;this._cmpRef.position={top:i.bottom+s.y,left:e.left+s.x-1};let a=this._cmpRef.getContent();if(a)a.items=t;this._cmpRef.update()}this.refresh()}t.stopPropagation()}_rootMouseLeave(t){if(this._isEnabled){this._hoverItem=null;this._isRootHovered=!1;this.refresh()}t.stopPropagation()}_rootMouseDown(t){if(this._isEnabled){if(1===t.which){this._addDropDown(null);this._isRootActive=!0}this._isExpandBoxTouched=!1}t.stopPropagation()}_rootTouchStart(t){if(this._isEnabled){this._addDropDown(null);this._isRootActive=!0}t.stopPropagation()}findItemById(t){return this._dataService.findObjectById(t)}findItemByText(t){return this._dataService.findObjectByText(t)}_getItemInlineStyle(t){return t.data[this._currentDataFields.style]||{}}refresh(t){this._updateControlClass();this._updateRootButtonStyle();this._currentList.forEach(t=>this._updateItemStyle(t));this.update();this._updateReferences()}_isThereNoItems(t){return t[this._currentDataFields.items]&&0===t[this._currentDataFields.items].length}_itemHasChildren(t){return(t.hasChildren||t.data[this._currentDataFields.hasChildren])&&(this._isThereVisibleChildren(t.data)||!t.data[this._currentDataFields.items]||this._isThereNoItems(t.data))}_updateItemStyle(t){if(t){t.style={general:{},expandBox:{},content:{}};t.inlineStyle=this._getItemInlineStyle(t);t.style.general[this._itemClassName]=!0;t.style.general[this._defaultStyle.item.general.normal]=!0;t.style.content[this._itemContentClassName]=!0;t.style.content[this._defaultStyle.item.content.normal]=!0;if(!this._isItemEnabled(t.data)){t.style.general[this._defaultStyle.item.general.disabled]=!0;t.style.content[this._defaultStyle.item.content.disabled]=!0}else if(this._isItemSelected(t)){t.style.general[this._defaultStyle.item.general.selected]=!0;t.style.content[this._defaultStyle.item.content.selected]=!0}else if(this._isItemHovered(t.data)){t.style.general[this._defaultStyle.item.general.hovered]=!0;t.style.content[this._defaultStyle.item.content.hovered]=!0}if(this._isThereChildItems||t.hasChildren)t.style.expandBox[this._defaultStyle.item.expandBox.general]=!0;if(this._itemHasChildren(t)||this._isThereVisibleChildren(t.data))if(this._isItemLoading(t.data))t.style.expandBox[this._defaultStyle.item.expandBox.load]=!0;else if(t===this._activeObj&&this._isListOpened){t.style.expandBox[this._defaultStyle.item.expandBox.collapsed]=!0;t.style.expandBox[this._defaultStyle.item.expandBox.collapsed+"-animate"]=!0}else{t.style.expandBox[this._defaultStyle.item.expandBox.expanded]=!0;if(t===this._prevActiveObj)t.style.expandBox[this._defaultStyle.item.expandBox.expanded+"-animate"]=!0}}}_updateRootButtonStyle(){this._rootButtonStyle={};this._rootButtonStyle[this._rootButtonClassName]=!0;if(!this._isEnabled)this._rootButtonStyle[this._rootButtonClassName+"-disabled"]=!0;else if(this._isRootActive)this._rootButtonStyle[this._rootButtonClassName+"-selected"]=!0;else if(this._isRootHovered)this._rootButtonStyle[this._rootButtonClassName+"-hovered"]=!0}_getButtonClass(t){let e={"iui-breadcrumb-item-button":!0};if(t.isRoot)e["iui-breadcrumb-item-button-first"]=!0;return e}_updateColorSchemeSettings(t){this._currentColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiBreadCrumbDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiBreadCrumbLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiBreadCrumbOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}_getContentTemplate(){let t={width:this._currentDropDownSize.width-4,height:this._currentDropDownSize.height-4};if(this._currentMaxDropDownItems>0)t={width:this._currentDropDownSize.width-4};return html`<iui-list .colorScheme="${this._currentColorScheme}" .customStyle="${this.customStyle}" .maxVisibleItems="${this._currentMaxDropDownItems}" .size="${t}" .theme="${this.theme}" @blur="${t=>this._dropDownBlur(t)}" @itemClick="${t=>this._itemSelected(t)}" @itemTouch="${t=>this._itemSelected(t)}" @sizeChanged="${t=>this._listSizeChanged(t)}"></iui-list>`}_getItemTemplate(t){if(this.itemTemplate){let e=this.itemTemplate(t);return new TemplateResult(e.strings,e.values,"html",defaultTemplateProcessor)}else{let e={},i=this._commonService.isString(t[this._currentDataFields.icon])?t[this._currentDataFields.icon].split(" "):[];i.map(t=>e[t]=!0);return html`                 ${i.length>0?html`<span class=${classMap(e)}></span>`:html``}                 ${t[this._currentDataFields.iconUrl]?html`<img style=${styleMap({verticalAlign:"middle"})} src="${t[this._currentDataFields.iconUrl]} />`:html``}                 <span class="iui-breadcrumb-item-label" >${t[this._currentDataFields.text]}</span>             `}}_getListLayout(t){let e={},i=t?"hidden-block":"block",s=t?"":"button-elem",a=t?"item-elem":"",r=t?this._currentList:this._visibleList;if(t)e={opacity:0,position:"absolute",top:"-9999999px"};return html`<ul id="${i}" class="iui-breadcrumb-block" style=${styleMap(e)}>                 ${r.map((t,e)=>html`<li id="${a}" class=${classMap(t.style.general)} style=${styleMap({height:this._getItemHeight()})} @mouseenter="${i=>this._itemMouseEnter(i,t,e)}" @mouseleave="${e=>this._itemMouseLeave(e,t)}">                     ${t.hasChildren?html`                             <div id="${s}" class=${classMap(this._getButtonClass(t))} style="display:inline-block" @mousedown="${i=>this._expandBoxMouseDown(i,t,e)}" @mouseup="${t=>this._expandBoxMouseUp(t)}" @touchstart="${e=>this._expandBoxTouchStart(e,t)}">                                 <span class=${classMap(t.style.expandBox)}></span>                             </div>`:html``}                     ${!t.isRoot?html`<div class=${classMap(t.style.content)} @mousedown="${e=>this._itemMouseDown(e,t)}" @mouseup="${e=>this._itemMouseUp(e,t)}" @touchend="${e=>this._itemTouchEnd(e,t)}">                                 ${this._getItemTemplate(t.data)}                             </div>`:html``}                 </li>`)}             </ul>`}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="breadcrumb" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())}>                 ${this._showRootButton?html`<div id="top-button" class=${classMap(this._rootButtonStyle)} style=${styleMap({height:this._getRootButtonHeight()})} @mousedown="${t=>this._rootMouseDown(t)}" @mouseenter="${t=>this._rootMouseEnter(t)}" @mouseleave="${t=>this._rootMouseLeave(t)}" @touchstart="${t=>this._rootTouchStart(t)}">                                 <span class="iui-breadcrumb-root-button-box"></span>                             </div>`:html``}                 ${this._getListLayout()}                 ${this._getListLayout(!0)}             </div>         `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiBreadCrumbDefaultStyle.cssText,"../../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=breadcrumb]");this._topButtonElem=this.shadowRoot.querySelector("#top-button");this._blockElem=this.shadowRoot.querySelector("#block");if(this._blockElem)this._buttonElems=this._blockElem.querySelectorAll("#button-elem");this._hiddenBlockElem=this.shadowRoot.querySelector("#hidden-block");if(this._hiddenBlockElem)this._itemElems=this._hiddenBlockElem.querySelectorAll("#item-elem");if(this._resizeObserver)this._resizeObserver.observe(this._elemRef)}}window.customElements.define("iui-breadcrumb",IntegralUIBreadCrumb);export default IntegralUIBreadCrumb;