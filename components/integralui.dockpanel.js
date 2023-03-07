/*
  filename: integralui.dockpanel.js
  version : 23.1.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import IntegralUIDragDropService from"../services/integralui.dragdrop.service.js";import{IntegralUIColorScheme,IntegralUIDockPermission,IntegralUIDockStyle,IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import{iuiDockPanelDefaultStyle}from"../styles/default/integralui.dockpanel.style.js";import{iuiDockPanelOfficeStyle}from"../styles/themes/office/integralui.dockpanel.office.js";import{iuiDockPanelDarkStyle}from"../styles/color-schemes/dark/integralui.dockpanel.dark.js";import{iuiDockPanelLightStyle}from"../styles/color-schemes/light/integralui.dockpanel.light.js";class IntegralUIDockPanel extends IntegralUIBase{_init(){super._init();this._dragDropService=IntegralUIDragDropService.getInstance();this._currentDockPermission=IntegralUIDockPermission.All;this._currentDockStyle=IntegralUIDockStyle.None;this._isDragAllowed=!0;this._isResizeAllowed=!0;this._parentCtrl=null;this._currentDockOptions={};this._generalClassName="iui-dockpanel";this._isResizing=!1;this._startPos={x:0,y:0};this._currentControlStyleSettings=iuiDockPanelDefaultStyle;this._initStyle();this._resizeObserver=new ResizeObserver(t=>{if(t&&t.length>0&&t[0].contentRect){let t=!1;if(this._clientRect.width!==this._prevClientRect.width){this._prevClientRect.width=this._clientRect.width;t=!0}if(this._clientRect.height!==this._prevClientRect.height){this._prevClientRect.height=this._clientRect.height;t=!0}if(t)this.updateLayout()}})}connectedCallback(){super.connectedCallback();this._windowMouseMove=this._windowMouseMove.bind(this);window.addEventListener("mousemove",this._windowMouseMove);this._windowMouseUp=this._windowMouseUp.bind(this);window.addEventListener("mouseup",this._windowMouseUp)}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("mousemove",this._windowMouseMove);window.removeEventListener("mouseup",this._windowMouseUp);if(this._resizeObserver)this._resizeObserver.disconnect();this._resizeObserver=null;this._rt()}setParent(t){this._parentCtrl=t}attributeChangedCallback(t,e,s){super.attributeChangedCallback(t,e,s)}static get properties(){return{allowDock:{type:Number,attribute:"allow-dock",reflect:!0},allowDrag:{type:Boolean,attribute:"allow-drag",reflect:!0},allowResize:{type:Boolean,attribute:"allow-resize",reflect:!0},dock:{converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"bottom":return IntegralUIDockStyle.Bottom;case"fill":return IntegralUIDockStyle.Fill;case"left":return IntegralUIDockStyle.Left;case"right":return IntegralUIDockStyle.Right;case"top":return IntegralUIDockStyle.Top;default:return IntegralUIDockStyle.None}},toAttribute:t=>{switch(t){case IntegralUIDockStyle.Bottom:return"Bottom";case IntegralUIDockStyle.Fill:return"Fill";case IntegralUIDockStyle.Left:return"Left";case IntegralUIDockStyle.Right:return"Right";case IntegralUIDockStyle.Top:return"Top";default:return"None"}}},reflect:!0}}}get allowDock(){return this._currentDockPermission}set allowDock(t){if(t&&this._currentDockPermission!==t){const e=this._currentDockPermission;this._currentDockPermission=t;this.requestUpdate("allowDock",e)}}get allowDrag(){return this._isDragAllowed}set allowDrag(t){if(this._isDragAllowed!==t){const e=this._isDragAllowed;this._isDragAllowed=t;this.requestUpdate("allowDrag",e)}}get allowResize(){return this._isResizeAllowed}set allowResize(t){if(this._isResizeAllowed!==t){const e=this._isResizeAllowed;this._isResizeAllowed=t;this.requestUpdate("allowResize",e)}}get dock(){return this._currentDockStyle}set dock(t){if(this._currentDockStyle!==t){const e=this._currentDockStyle;this._currentDockStyle=t;this.updateLayout();this._updateParent();this._invokeEvent("dockChanged",{data:this.data,dock:this._currentDockStyle});this.requestUpdate("dock",e)}}_ctrlDragStart(t){if(this._isResizing||!this._isDragAllowed)t.preventDefault();else{this._dragDropService.clearData();if(t.dataTransfer)t.dataTransfer.effectAllowed="move";else if(t.originalEvent&&t.originalEvent.dataTransfer)t.originalEvent.dataTransfer.effectAllowed="move";this._dragDropService.setData({source:this});t.stopPropagation()}}_processUpdateLayout(){return new Promise(t=>{t()})}async updateLayout(t){this._ut();if(!this._tCmp)this._at();await this._processUpdateLayout();this.refresh();return Promise.resolve()}_ctrlMouseDown(t){if(this._isEnabled&&this._isResizeAllowed&&1===t.which&&this.dock!==IntegralUIDockStyle.None&&this.dock!==IntegralUIDockStyle.Fill){let e=this._commonService.getPadding(this._elemRef),s=!1;switch(this.dock){case IntegralUIDockStyle.Bottom:if(t.offsetY<=e.top)s=!0;break;case IntegralUIDockStyle.Left:if(t.offsetX>=this._ctrlSize.width-e.right)s=!0;break;case IntegralUIDockStyle.Right:if(t.offsetX<=e.left)s=!0;break;case IntegralUIDockStyle.Top:if(t.offsetY>=this._ctrlSize.height-e.bottom)s=!0;break;default:this._defaultFunc()}if(s){let e=this._commonService.getShiftPos();this._startPos={x:t.pageX-e.x,y:t.pageY-e.y};this._isResizing=!0}}}_windowMouseMove(t){if(this._isEnabled&&this._isResizeAllowed&&1===t.which&&this._isResizing&&this._parentCtrl){let e=this._commonService.getShiftPos(),s={x:t.pageX-e.x,y:t.pageY-e.y},i=!1,r={width:this.size.width,height:this.size.height},l=this._parentCtrl.getFillArea(),o=this._commonService.getPadding(this._elemRef);switch(this.dock){case IntegralUIDockStyle.Bottom:if(this._startPos.y<s.y&&r.height+this._startPos.y-s.y>o.top+o.bottom){r.height+=this._startPos.y-s.y;i=!0}else if(this._startPos.y>s.y&&r.height+this._startPos.y-s.y<r.height+l.client.height){r.height+=this._startPos.y-s.y;i=!0}break;case IntegralUIDockStyle.Left:if(s.x>this._startPos.x&&r.width+s.x-this._startPos.x<r.width+l.client.width){r.width+=s.x-this._startPos.x;i=!0}else if(s.x<this._startPos.x&&r.width+s.x-this._startPos.x>o.left+o.right){r.width+=s.x-this._startPos.x;i=!0}break;case IntegralUIDockStyle.Right:if(this._startPos.x<s.x&&r.width+this._startPos.x-s.x>o.left+o.right){r.width+=this._startPos.x-s.x;i=!0}else if(this._startPos.x>s.x&&r.width+this._startPos.x-s.x<r.width+l.client.width){r.width+=this._startPos.x-s.x;i=!0}break;case IntegralUIDockStyle.Top:if(s.y>this._startPos.y&&r.height+s.y-this._startPos.y<r.height+l.client.height){r.height+=s.y-this._startPos.y;i=!0}else if(s.y<this._startPos.y&&r.height+s.y-this._startPos.y>o.top+o.bottom){r.height+=s.y-this._startPos.y;i=!0}break;default:this._defaultFunc()}this._startPos=s;if(i){this.size=r;this._updateParent()}}}_windowMouseUp(t){if(this._isEnabled&&this._isResizing){this._isResizing=!1;this.refresh()}}_getControlStyle(){let t=this._currentInlineStyle||{};if(this._currentDockOptions.position)t.position=this._currentDockOptions.position;if(this._currentDockOptions.top>=0)t.top=this._currentDockOptions.top+"px";if(this._currentDockOptions.left>=0)t.left=this._currentDockOptions.left+"px";if(void 0!==this._currentDockOptions.width)t.width=this._currentDockOptions.width+"px";else if(this._currentDockStyle!==IntegralUIDockStyle.Fill&&this._ctrlSize.width>0)t.width=this._ctrlSize.width+"px";if(void 0!==this._currentDockOptions.height)t.height=this._currentDockOptions.height+"px";else if(this._currentDockStyle!==IntegralUIDockStyle.Fill&&this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";return t}_updateControlClass(){this._ctrlClass={};this._ctrlClass[this._generalClassName]=!0;if(this._options.currentStyle&&this._options.currentStyle.general){this._ctrlClass[this._options.currentStyle.general.normal]=!0;if(this.state&IntegralUIObjectState.Disabled)this._ctrlClass[this._options.currentStyle.general.disabled]=!0;else if(this.state&IntegralUIObjectState.Focused)this._ctrlClass[this._options.currentStyle.general.focused]=!0;else if(this.state&IntegralUIObjectState.Selected)this._ctrlClass[this._options.currentStyle.general.selected]=!0;else if(this.state&IntegralUIObjectState.Hovered)this._ctrlClass[this._options.currentStyle.general.hovered]=!0;if(this._isResizeAllowed)switch(this._currentDockStyle){case IntegralUIDockStyle.Bottom:this._ctrlClass[this._generalClassName+"-bottom"]=!0;break;case IntegralUIDockStyle.Left:this._ctrlClass[this._generalClassName+"-left"]=!0;break;case IntegralUIDockStyle.Right:this._ctrlClass[this._generalClassName+"-right"]=!0;break;case IntegralUIDockStyle.Top:this._ctrlClass[this._generalClassName+"-top"]=!0;break;default:this._defaultFunc()}if(this.allowAnimation)if(this.state&IntegralUIObjectState.Hovered)this._ctrlClass[this._defaultStyle.general.normal+"-enter"]=!0;else this._ctrlClass[this._defaultStyle.general.normal+"-leave"]=!0}}_updateColorSchemeSettings(t){this._currentColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiDockPanelDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiDockPanelLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiDockPanelOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}_updateDockOptions(t){this._currentDockOptions=t;this.update()}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="dockpanel" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @mousedown="${t=>this._ctrlMouseDown(t)}">                 <div class="${this._generalClassName}-content" draggable="true" @dragstart="${t=>this._ctrlDragStart(t)}">                     <slot></slot>                 </div>             </div>         `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiDockPanelDefaultStyle.cssText,"../../icons",t)}_updateParent(){if(this._parentCtrl&&this._parentCtrl.updateLayout)this._parentCtrl.updateLayout()}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=dockpanel]");if(this._resizeObserver)this._resizeObserver.observe(this._elemRef)}}window.customElements.define("iui-dockpanel",IntegralUIDockPanel);export default IntegralUIDockPanel;