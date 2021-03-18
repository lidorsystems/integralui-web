/*
  filename: integralui.groupbox.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import IntegralUIBase from"./integralui.base.js";import{iuiHeaderDefaultStyle}from"../styles/integralui.header.style.js";import"./integralui.header.js";import{iuiGroupBoxDefaultStyle}from"../styles/integralui.groupbox.style.js";import{iuiGroupBoxOfficeStyle}from"../themes/office/integralui.groupbox.office.js";import{iuiGroupBoxMidnightStyle}from"../themes/midnight/integralui.groupbox.midnight.js";class IntegralUIGroupBox extends IntegralUIBase{_init(){super._init();this._currentCustomStyle="";this._currentIcon="";this._currentExpandBoxType="";this._currentText="";this._clickPos={x:0,y:0};this._expandState="none";this._isClicked=!1;this._isExpanded=!1;this._isSelected=!1;this._parentCtrl=null;this._supressCallback=!1;this._contentHeight="0";this._contentDisplay="block";this._contentOpacity=0;this._headerSize={width:0,height:0};this._maxBlockHeight=0;this._currentControlStyleSettings=iuiGroupBoxDefaultStyle;this._contentClassName="";this._headerClassName="";this._contentClass={};this._headerBlockClass={};this._initStyle()}connectedCallback(){}disconnectedCallback(){}_initContent(){let e=this,t=setTimeout(function(){if(e._contentSlotElem)e._maxBlockHeight=e._contentSlotElem.offsetHeight;clearTimeout(t)},100)}_initStyle(){this._generalClassName="iui-groupbox";this._headerClassName=this._generalClassName+"-header";this._headerExpandBoxClassName=this._headerClassName+"-expand-box";this._contentClassName=this._generalClassName+"-content";this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"},header:{general:{disabled:this._headerClassName+"-disabled",focused:this._headerClassName+"-focused",normal:this._headerClassName,hovered:this._headerClassName+"-hovered",selected:this._headerClassName+"-selected"},expandBox:this._headerExpandBoxClassName},content:{general:this._contentClassName,expanded:this._contentClassName+"-expand",collapsed:this._contentClassName+"-collapse"}};this.refresh()}setParent(e){this._parentCtrl=e}attributeChangedCallback(e,t,s){super.attributeChangedCallback(e,t,s)}static get properties(){return{expandBoxType:{type:String,attribute:"expandbox-type"},expanded:{type:Boolean,reflect:!0},icon:{type:String,reflect:!0},selected:{type:Boolean,reflect:!0},text:{type:String,reflect:!0}}}get expandBoxType(){return this._currentExpandBoxType}set expandBoxType(e){if(this._currentExpandBoxType!==e){const t=this._currentExpandBoxType;this._currentExpandBoxType=e;this.requestUpdate("expandBoxType",t)}}get expanded(){return this._isExpanded}set expanded(e){if(this._isExpanded!==e){const t=this._isExpanded;let s=this;if(s._callBeforeEvent(e)){if(e)s._expandState="expand";else s._expandState="collapse";let i=setTimeout(function(){if("collapse"===s._expandState)s._expandState="none";clearTimeout(i)},300);s._isExpanded=e;s._header.animationState=s._isExpanded?"expand":"collapse";s._updateContentClass();s._toggleContent();s.requestUpdate("expanded",t)}}}get icon(){return this._currentIcon}set icon(e){if(this._currentIcon!==e){const t=this._currentIcon;this._currentIcon=e;this.requestUpdate("icon",t)}}get selected(){return this._isSelected}set selected(e){if(this._isSelected!==e){let t={cancel:!1,group:this.data};this._invokeEvent("beforeSelect",t);if(!0!==t.cancel){const t=this._isSelected;this._isSelected=e;if(this._header)if(e)this._header.state|=IntegralUIObjectState.Selected;else this._header.state&=~IntegralUIObjectState.Selected;if(!this._parentCtrl)this._invokeEvent("afterSelect",{group:this.data});this._invokeEvent("selectedChanged",{group:this.data});this._updateHeaderBlockClass();this.requestUpdate("selected",t)}}}get text(){return this._currentText}set text(e){if(this._currentText!==e){const t=this._currentText;this._currentText=e;this.requestUpdate("text",t);this.refresh()}}_callBeforeEvent(e){let t=!0;if(this._parentCtrl&&this._parentCtrl.invokeCtrlEvent)t=this._parentCtrl.invokeCtrlEvent(e?"BEFORE_EXPAND":"BEFORE_COLLAPSE",this);if(t){let s={cancel:!1,group:this.data};if(e)this._invokeEvent("beforeExpand",s);else this._invokeEvent("beforeCollapse",s);t=!s.cancel}return t}_callAfterEvent(e,t){let s={group:this.data};if(e)this._invokeEvent("afterExpand",s);else this._invokeEvent("afterCollapse",s);if(this._parentCtrl&&this._parentCtrl.invokeCtrlEvent)this._parentCtrl.invokeCtrlEvent(e?"AFTER_EXPAND":"AFTER_COLLAPSE",this,t);return!0}_onHeaderClick(e){let t=this;if(t._isEnabled&&1===e.detail.buttons){if(t._parentCtrl&&t._parentCtrl.invokeCtrlMethod)t._parentCtrl.invokeCtrlMethod("SELECT_GROUP",t);else{t.selected=!t.selected;t.expanded=!t.expanded}t._isClicked=!0;t._clickPos=t._commonService.getClientPos(e,t._header);let s=setTimeout(function(){t._isClicked=!1;clearTimeout(s)},500)}}collapse(){if(!this._parentCtrl)this.expanded=!1}expand(){this.expanded=!0}toggle(){this.expanded=!this.expanded}_toggleContent(){this._contentOpacity=1;if(this._parentCtrl&&this._parentCtrl.invokeCtrlMethod){if(this.expanded)this._parentCtrl.invokeCtrlMethod("TOGGLE_GROUPS",this);else{this._maxBlockHeight=this._contentElem.offsetHeight;this._parentCtrl.invokeCtrlMethod("COLLAPSE_GROUP",this)}return}let e=this,t=0,s=0;if(e.expanded){e._contentDisplay="block";if(e.allowAnimation){let i=setInterval(function(){if(t<e._maxBlockHeight){t+=s=0===s?1:s+2;e._contentHeight=t+"px";e.update()}else{e._contentHeight="auto";e._expandState="none";e._callAfterEvent(!0);e._supressCallback=!1;e.update();clearInterval(i)}},15)}else{e._contentHeight="auto";e._expandState="none";e._callAfterEvent(!0);e._supressCallback=!1;e.update()}}else{e._maxBlockHeight=e._contentElem.offsetHeight;t=e._maxBlockHeight;if(e.allowAnimation){let i=setInterval(function(){if(t>0){t-=s=0===s?1:s+2;e._contentHeight=t+"px";e.update()}else{e._contentDisplay="none";e._contentHeight="0";e._expandState="none";e._callAfterEvent();e._supressCallback=!1;e.update();clearInterval(i)}},15)}else{e._contentDisplay="none";e._contentHeight="0";e._expandState="none";e._callAfterEvent();e._supressCallback=!1;e.update()}}}getContentHeight(){return this._maxBlockHeight}setContentHeight(e){this._contentHeight=e;this.update()}setContentDisplay(e){this._contentDisplay=e;this.update()}_getControlStyle(){let e={};if(this._ctrlSize.width>0)e.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)e.height=this._ctrlSize.height+"px";return e}_updateContentClass(){this._contentClass={};this._contentClass[this._options.currentStyle.content.general]=!0;if(!1!==this.expanded){if("expand"===this.expandState)this._contentClass[this._options.currentStyle.content.expanded]=!0}else if("collapse"===this.expandState)this._contentClass[this._options.currentStyle.content.collapsed]=!0}_getContentClass(){return this._contentClass}_getContentStyle(e){if(this._commonService.isString(e))return e;else if(e)return{general:this._commonService.isFieldAvailable(e.general,this._contentClassName),expanded:this._commonService.isFieldAvailable(e.expanded,this._contentClassName+"-expand"),collapsed:this._commonService.isFieldAvailable(e.collapsed,this._contentClassName+"-collapse")};else return{general:this._defaultStyle.content.general,expanded:this._defaultStyle.content.expanded,collapsed:this._defaultStyle.content.collapsed}}_updateHeaderBlockClass(){this._headerBlockClass={};this._headerBlockClass["iui-groupbox-header-block"]=!0;if(this.selected)this._headerBlockClass["iui-groupbox-header-marker-down"]=!0}_getHeaderBlockClass(){return this._headerBlockClass}_getHeaderClass(){let e=this._headerClassName;if(this.state&IntegralUIObjectState.Disabled)e+=" "+this._options.currentStyle.header.disabled;else if(this.state&IntegralUIObjectState.Focused)e+=" "+this._options.currentStyle.header.focused;else if(this.state&IntegralUIObjectState.Selected)e+=" "+this._options.currentStyle.header.selected;else if(this.state&IntegralUIObjectState.Hovered)e+=" "+this._options.currentStyle.header.hovered;else e+=" "+this._options.currentStyle.header.normal;return e}_getHeaderGeneralStyle(e){if(this._commonService.isString(e))return e;else if(e)return{disabled:this._commonService.isFieldAvailable(e.hovered,this._headerClassName+"-disabled"),focused:this._commonService.isFieldAvailable(e.hovered,this._headerClassName+"-focused"),hovered:this._commonService.isFieldAvailable(e.hovered,this._headerClassName+"-hovered"),normal:this._commonService.isFieldAvailable(e.normal,this._headerClassName),selected:this._commonService.isFieldAvailable(e.selected,this._headerClassName+"-selected")};else return{disabled:this._defaultStyle.header.general.disabled,focused:this._defaultStyle.header.general.focused,hovered:this._defaultStyle.header.general.hovered,normal:this._defaultStyle.header.general.normal,selected:this._defaultStyle.header.general.selected}}_getHeaderStyle(e){if(e)return{general:this._getHeaderGeneralStyle(e.general),expandBox:this._commonService.isFieldAvailable(e.expandBox,this._headerExpandBoxClassName)};else return{general:{disabled:this._defaultStyle.header.general.disabled,focused:this._defaultStyle.header.general.focused,hovered:this._defaultStyle.header.general.hovered,normal:this._defaultStyle.header.general.normal,selected:this._defaultStyle.header.general.selected},expandBox:this._defaultStyle.header.expandBox}}_getCurrentHeaderStyle(){return this._options.currentStyle.header}setOpacity(e){this._contentOpacity=e;this.update()}_updateStyle(e){if(e)this._options.currentStyle={general:this._getGeneralStyle(e.general),header:this._getHeaderStyle(e.header),content:this._getContentStyle(e.content)};else this._options.currentStyle={general:{disabled:this._defaultStyle.general.disabled,focused:this._defaultStyle.general.focused,hovered:this._defaultStyle.general.hovered,normal:this._defaultStyle.general.normal,selected:this._defaultStyle.general.selected},header:{general:{disabled:this._defaultStyle.header.general.disabled,focused:this._defaultStyle.header.general.focused,hovered:this._defaultStyle.header.general.hovered,normal:this._defaultStyle.header.general.normal,selected:this._defaultStyle.header.general.selected},expandBox:this._defaultStyle.header.expandBox},content:{general:this._defaultStyle.content.general,expanded:this._defaultStyle.content.expanded,collapsed:this._defaultStyle.content.collapsed}}}_updateThemeSettings(e){this._currentThemeSettings=css``;switch(e){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiGroupBoxOfficeStyle.cssText,"../icons",this._currentResourcePath);break;case IntegralUITheme.Midnight:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiGroupBoxMidnightStyle.cssText,"../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(e){this._updateReferences();this._initContent();this.updateLayout()}refresh(){this._updateStyle(this.controlStyle);this._updateControlClass();this._updateContentClass();this._updateHeaderBlockClass();this.update();this._updateReferences()}render(){if(this._header)this._headerSize={width:this._header.offsetWidth,height:this._header.offsetHeight};return html`             <style>                 ${this._currentControlStyleSettings}                 ${iuiHeaderDefaultStyle}                 ${this._currentThemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="groupbox" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())}>                 <div class=${classMap(this._getHeaderBlockClass())}>                     <iui-header id="group-header" .controlStyle="${this._getCurrentHeaderStyle()}" .customStyle="${[this._currentControlStyleSettings,this._currentThemeSettings,this._currentCustomStyle]}" .enabled="${this.enabled}" .icon="${this.icon}" .text="${this.text}" .animationType="${this.expandBoxType}" @mouseDown="${e=>this._onHeaderClick(e)}">                         ${this.allowAnimation&&this._isClicked?html`                                 <span class="iui-groupbox-header-animate-select-block" style=${styleMap({height:this._headerSize.height+"px",width:this._clickPos.x+"px"})}>                                     <span class=${classMap({"iui-groupbox-header-animate-select":this._isClicked,"iui-groupbox-header-animate-select-left":this._isClicked})} style=${styleMap({height:this._headerSize.height+"px"})}></span>                                 </span>                                 <span class="iui-groupbox-header-animate-select-block" style=${styleMap({left:this._clickPos.x+"px",height:this._headerSize.height+"px",width:this._headerSize.width-this._clickPos.x+"px"})}>                                     <span class=${classMap({"iui-groupbox-header-animate-select":this._isClicked,"iui-groupbox-header-animate-select-right":this._isClicked})} style=${styleMap({height:this._headerSize.height+"px"})}></span>                                 </span>`:html``}                     </iui-header>                 </div>                 <div id="group-content" class=${classMap(this._getContentClass())} style=${styleMap({"border-width":this.expanded?"1px":"0px",display:this._contentDisplay,height:this._contentHeight,opacity:this._contentOpacity})}>                     <slot></slot>                 </div>             </div>         `}_updateControlStyleSettings(e){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiGroupBoxDefaultStyle.cssText,"../icons",e)}_updateReferences(){this._contentElem=this.shadowRoot.querySelector("#group-content");this._contentSlotElem=this.shadowRoot.querySelector("slot").assignedNodes()[1];this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=groupbox]");this._header=this.shadowRoot.querySelector("#group-header")}}window.customElements.define("iui-groupbox",IntegralUIGroupBox);export default IntegralUIGroupBox;