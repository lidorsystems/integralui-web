/*
  filename: integralui.tooltip.js
  version : 22.4.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{L as LitElement,c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import IntegralUICommonService from"../services/integralui.common.service.js";import{IntegralUIColorScheme,IntegralUISpeedMode,IntegralUITheme}from"./integralui.enums.js";import{iuiTooltipStyle}from"../styles/default/integralui.tooltip.style.js";import{iuiTooltipOfficeStyle}from"../styles/themes/office/integralui.tooltip.office.js";import{iuiTooltipDarkStyle}from"../styles/color-schemes/dark/integralui.tooltip.dark.js";import{iuiTooltipLightStyle}from"../styles/color-schemes/light/integralui.tooltip.light.js";export class IntegralUITooltipWindow extends LitElement{constructor(){super();this._commonService=new IntegralUICommonService;this._animationTimer=null;this._currentOpacity=0;this._currentOptions={};this._showTimer=null;this._popupTimer=null;this._mousePos={x:0,y:0};this._currentPos={x:0,y:0};this._currentSize={width:0,height:0};this._tooltipDisplay="none";this._startPos={x:0,y:0};this._tooltipSize={width:0,height:0};this._updateOptions();this._currentTheme=IntegralUITheme.None;this._currentThemeSettings=css``;this._ctrlClass={};this._generalClassName="iui-tooltip";this._initStyle()}connectedCallback(){}disconnectedCallback(){this._removeAnimationTimer();this._removeTimers()}_initStyle(){this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"}};this._updateColorSchemeSettings(this._currentColorScheme)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{colorScheme:{converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"light":return IntegralUIColorScheme.Light;case"dark":return IntegralUIColorScheme.Dark;default:return IntegralUIColorScheme.None}},toAttribute:t=>{switch(t){case IntegralUIColorScheme.Light:return"Light";case IntegralUIColorScheme.Dark:return"Dark";default:return"None"}}},reflect:!0},options:{type:Object},theme:{converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"office":return IntegralUITheme.Office;case"dark":return IntegralUITheme.Dark;default:return IntegralUITheme.None}},toAttribute:t=>{switch(t){case IntegralUITheme.Office:return"Office";case IntegralUITheme.Dark:return"Dark";default:return"None"}}},reflect:!0}}}get colorScheme(){return this._currentColorScheme}set colorScheme(t){if(this._currentColorScheme!==t){const e=this._currentColorScheme;this._currentColorScheme=t;this._updateColorSchemeSettings(t);this.requestUpdate("colorScheme",e);this.refresh()}}get options(){return this._currentOptions}set options(t){const e=this._currentOptions;this._updateOptions(t);this.refresh();this.requestUpdate("options",e)}get theme(){return this._currentTheme}set theme(t){if(this._currentTheme!==t){const e=this._currentTheme;this._currentTheme=t;this._updateThemeSettings(t);this.requestUpdate("theme",e)}}_animateHide(){let t=this;t._removeAnimationTimer();setTimeout(function(){t._currentOpacity=1;t._currentPos={x:t._startPos.x,y:t._startPos.y};t._currentSize={width:t._tooltipSize.width,height:t._tooltipSize.height};let e={x:t._startPos.x+t._tooltipSize.width/2,y:t._startPos.y+t._tooltipSize.height/2},i=t._getAnimationFactor(),s=t._tooltipSize.width/(2*i),r=t._tooltipSize.height/(2*i),o=e.x-t._startPos.x;t._animationTimer=setInterval(function(){if(t._currentPos.x<e.x){t._currentPos.x+=s;t._currentSize.width-=2*s;t._currentOpacity=Math.abs(1-(t._currentPos.x-t._startPos.x)/o)}else{t._currentPos.x=e.x;t._currentSize.width=0;t._currentOpacity=0}if(t._currentPos.y<e.y){t._currentPos.y+=r;t._currentSize.height-=2*r}else{t._currentPos.y=e.y;t._currentSize.height=0}t.update();if(t._currentPos.x>=e.x&&t._currentPos.y>=e.y){t._removeTimers();t._removeAnimationTimer();t._invokeEvent("closed")}},5)},1)}_animateShow(){let t=this;t._removeAnimationTimer();setTimeout(function(){t._currentOpacity=0;t._currentPos={x:t._startPos.x+t._tooltipSize.width/2,y:t._startPos.y+t._tooltipSize.height/2};t._currentSize={width:0,height:0};let e=t._getAnimationFactor(),i=t._tooltipSize.width/(2*e),s=t._tooltipSize.height/(2*e),r=t._currentPos.x-t._startPos.x;t._animationTimer=setInterval(function(){if(t._currentPos.x>t._startPos.x){t._currentPos.x-=i;t._currentSize.width+=2*i;t._currentOpacity=Math.abs(1-(t._currentPos.x-t._startPos.x)/r)}else{t._currentPos.x=t._startPos.x;t._currentSize.width=t._tooltipSize.width;t._currentOpacity=1}if(t._currentPos.y>t._startPos.y){t._currentPos.y-=s;t._currentSize.height+=2*s}else{t._currentPos.y=t._startPos.y;t._currentSize.height=t._tooltipSize.height}t.update();if(t._currentPos.x<=t._startPos.x&&t._currentPos.y<=t._startPos.y)t._removeAnimationTimer()},5)},1)}_getAnimationFactor(){let t=30;switch(this._currentOptions.animationSpeed){case IntegralUISpeedMode.VerySlow:t=50;break;case IntegralUISpeedMode.Slow:t=40;break;case IntegralUISpeedMode.Fast:t=20;break;case IntegralUISpeedMode.VeryFast:t=10;break;default:t=30}return t}_removeAnimationTimer(){if(this._animationTimer)clearInterval(this._animationTimer)}_updateOptions(t){if(t)this._currentOptions={allowAnimation:this._commonService.isFieldAvailable(t.allowAnimation,!0),animationSpeed:this._commonService.isFieldAvailable(t.animationSpeed,!0),autoPopDelay:this._commonService.isFieldAvailable(t.autoPopDelay,5e4),enabled:this._commonService.isFieldAvailable(t.enabled,!0),initialDelay:this._commonService.isFieldAvailable(t.initialDelay,500),position:this._commonService.isFieldAvailable(t.position,"mouse"),showMarker:this._commonService.isFieldAvailable(t.showMarker,!0),title:this._commonService.isFieldAvailable(t.title,"")};else this._currentOptions={allowAnimation:!0,animationSpeed:IntegralUISpeedMode.Normal,autoPopDelay:5e3,enabled:!0,initialDelay:500,position:"mouse",showMarker:!0,title:""}}_invokeEvent(t,e,i,s){let r=new CustomEvent(t,{detail:e,bubbles:void 0!==i?i:!1,composed:void 0!==s?s:!1});this.dispatchEvent(r);return e}_defaultFunc(){}_removeTimers(){if(this._showTimer){clearTimeout(this._showTimer);this._showTimer=null}if(this._popupTimer){clearTimeout(this._popupTimer);this._popupTimer=null}}close(){if(this._currentOptions.allowAnimation)this._animateHide();else{this._currentOpacity=0;this._currentPos={x:this._startPos.x,y:this._startPos.y};this._currentSize={width:this._currentOptions.width,height:this._tooltipSize.height};this._invokeEvent("closed");this.update()}}open(t,e){let i=this;i._startPos.y=-9999999;i._tooltipDisplay="block";i.update();let s=setTimeout(function(){i._tooltipSize=i._getSize();i._tooltipDisplay="none";i.update();i._removeTimers();if(i._currentOptions.enabled&&""!==i._currentOptions.title)i._showTimer=setTimeout(function(){i._show(t,e);i._popupTimer=setTimeout(function(){i.close();clearTimeout(i._popupTimer)},i._currentOptions.autoPopDelay);clearTimeout(i._showTimer)},i._currentOptions.initialDelay);clearTimeout(s)},1)}_show(t,e){this._startPos={x:this._mousePos.x,y:this._mousePos.y+24};switch(this._currentOptions.position){case"above":this._startPos={x:t.left+Math.floor((e.width-this._tooltipSize.width)/2),y:t.top-4-this._tooltipSize.height};break;case"below":this._startPos={x:t.left+Math.floor((e.width-this._tooltipSize.width)/2),y:t.bottom+4};break;case"left":this._startPos={x:t.left-4-this._tooltipSize.width,y:t.top+Math.floor((e.height-this._tooltipSize.height)/2)};break;case"right":this._startPos={x:t.right+4,y:t.top+Math.floor((e.height-this._tooltipSize.height)/2)};break;default:this._startPos={x:this._mousePos.x,y:this._mousePos.y+24}}this._tooltipDisplay="block";if(this._currentOptions.allowAnimation)this._animateShow();else{this._currentOpacity=1;this._currentPos={x:this._startPos.x,y:this._startPos.y};this._currentSize={width:this._tooltipSize.width,height:this._tooltipSize.height};this.update()}}_getSize(){return{width:(this._contentElem?this._contentElem.offsetWidth:0)+2,height:(this._contentElem?this._contentElem.offsetHeight:0)+2}}updateMousePos(t){this._mousePos=t}_getControlClass(){return this._ctrlClass}_updateControlClass(){this._ctrlClass={};this._ctrlClass["iui-tooltip"]=!0;if(this._currentOptions.showMarker)switch(this._currentOptions.position){case"above":this._ctrlClass["iui-tooltip-marker-bottom"]=!0;break;case"right":this._ctrlClass["iui-tooltip-marker-left"]=!0;break;case"below":this._ctrlClass["iui-tooltip-marker-top"]=!0;break;case"left":this._ctrlClass["iui-tooltip-marker-right"]=!0;break;default:this._defaultFunc()}if(!1===this._currentOptions.allowAnimation)this._ctrlClass["iui-tooltip-animation-none"]=!0}_updateColorSchemeSettings(t){this._currentColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiTooltipDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiTooltipLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiTooltipOfficeStyle.cssText,"../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(t){this._updateReferences()}refresh(){this._updateControlClass();this.update();this._updateReferences()}render(){return html`             <style>                 ${iuiTooltipStyle}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}             </style>             <div data-ctrl="tooltip-win" class=${classMap(this._getControlClass())} style=${styleMap({display:this._tooltipDisplay,top:this._currentPos.y+"px",left:this._currentPos.x+"px",width:this._currentSize.width+"px",height:this._currentSize.height+"px",opacity:this._currentOpacity})}>                 <div id="content">${this._currentOptions.title}</div>             </div>         `}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=tooltip-win]");this._contentElem=this.shadowRoot.querySelector("#content")}};window.customElements.define("iui-tooltip-win",IntegralUITooltipWindow);class IntegralUITooltip extends IntegralUIBase{_init(){super._init();this._currentSettings=null;this._cmpRef=null;this._currentTheme=IntegralUITheme.None;this._currentThemeSettings=css``;this._generalClassName="iui-tooltip-block"}connectedCallback(){}disconnectedCallback(){this._removeWindow()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{settings:{type:Object}}}get settings(){return this._currentSettings}set settings(t){if(this._currentSettings!==t){const e=this._currentSettings;this._currentSettings=t;this.requestUpdate("settings",e)}}_close(){if(this._cmpRef)this._cmpRef.close()}_getSize(){return{width:this._elemRef.offsetWidth,height:this._elemRef.offsetHeight}}_ctrlMouseEnter(t){if(this._isEnabled){this._addWindow();if(this._cmpRef){this._cmpRef.colorScheme=this._currentColorScheme;this._cmpRef.options=this._currentSettings;this._cmpRef.theme=this._currentTheme;this._cmpRef.updateMousePos(this._commonService.getMousePos(t));let e=this._elemRef.getBoundingClientRect();this._cmpRef.open(e,this._getSize());this._removeCtrl=this._removeCtrl.bind(this);this._cmpRef.addEventListener("closed",this._removeCtrl)}}}_ctrlMouseLeave(t){this._close();this._removeWindow()}_ctrlMouseMove(t){if(this._cmpRef)this._cmpRef.updateMousePos(this._commonService.getMousePos(t))}_removeCtrl(t){this._removeWindow()}_addWindow(){this._removeWindow();this._cmpRef=document.createElement("iui-tooltip-win",{is:IntegralUITooltipWindow});document.body.appendChild(this._cmpRef)}_removeWindow(){if(this._cmpRef){this._cmpRef.removeEventListener("closed",this._removeCtrl);this._cmpRef.parentNode.removeChild(this._cmpRef)}this._cmpRef=null}firstUpdated(t){this._updateReferences()}render(){return html`             <style>                 ${this._currentCustomStyle}             </style>             <div data-ctrl="tooltip" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @mouseenter="${t=>this._ctrlMouseEnter(t)}" @mouseleave="${t=>this._ctrlMouseLeave(t)}" @mousemove="${t=>this._ctrlMouseMove(t)}">                 <slot></slot>             </div>         `}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=tooltip]")}}window.customElements.define("iui-tooltip",IntegralUITooltip);export default IntegralUITooltip;