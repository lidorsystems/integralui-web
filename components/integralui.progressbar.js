/*
  filename: integralui.progressbar.js
  version : 24.1.0
  Copyright © 2016-2024 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBaseValue from"./integralui.base.value.js";import{IntegralUIColorScheme,IntegralUILabelAlignment,IntegralUIOrientation,IntegralUITheme}from"./integralui.enums.js";import{iuiProgressBarDefaultStyle}from"../styles/default/integralui.progressbar.style.js";import{iuiProgressBarOfficeStyle}from"../styles/themes/office/integralui.progressbar.office.js";import{iuiProgressBarDarkStyle}from"../styles/color-schemes/dark/integralui.progressbar.dark.js";import{iuiProgressBarLightStyle}from"../styles/color-schemes/light/integralui.progressbar.light.js";class IntegralUIProgressBar extends IntegralUIBaseValue{_init(){super._init();this._currentValue=0;this._displayValue=0;this._previousValue=0;this._ctrlPadding={top:0,right:0,bottom:0,left:0};this._currentLabelAlignment=IntegralUILabelAlignment.Inline;this._currentOrientation=IntegralUIOrientation.Horizontal;this._contentSize={width:0,height:0};this._fadingSize={width:0,height:0};this._isLabelVisible=!0;this._labelPos={top:0,left:0};this._labelSize={width:0,height:0};this._trackPos={top:0,left:0};this._trackSize={width:0,height:0};this._labelElemRef=null;this._trackElemRef=null;this._currentControlStyleSettings=iuiProgressBarDefaultStyle;this._generalClassName="iui-progressbar";this._contentClassName=this._generalClassName+"-content";this._contentInterval=null;this._delayTimeout=null;this._fadingInterval=null;this._initStyle()}connectedCallback(){}disconnectedCallback(){this._removeContentInterval();this._removeDelayTimeout();this._removeFadingInterval()}attributeChangedCallback(e,t,l){super.attributeChangedCallback(e,t,l)}static get properties(){return{labelAlignment:{attribute:"label-alignment",converter:{fromAttribute:e=>{switch((e=e.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"bottomcenter":return IntegralUILabelAlignment.BottomCenter;case"bottomleft":return IntegralUILabelAlignment.BottomLeft;case"bottomright":return IntegralUILabelAlignment.BottomRight;case"left":return IntegralUILabelAlignment.Left;case"middlecenter":return IntegralUILabelAlignment.MiddleCenter;case"middleleft":return IntegralUILabelAlignment.MiddleLeft;case"middleright":return IntegralUILabelAlignment.MiddleRight;case"right":return IntegralUILabelAlignment.Right;case"topcenter":return IntegralUILabelAlignment.TopCenter;case"topleft":return IntegralUILabelAlignment.TopLeft;case"topright":return IntegralUILabelAlignment.TopRight;default:return IntegralUILabelAlignment.Inline}},toAttribute:e=>{switch(e){case IntegralUILabelAlignment.BottomCenter:return"BottomCenter";case IntegralUILabelAlignment.BottomLeft:return"BottomLeft";case IntegralUILabelAlignment.BottomRight:return"BottomRight";case IntegralUILabelAlignment.Left:return"Left";case IntegralUILabelAlignment.MiddleCenter:return"MiddleCenter";case IntegralUILabelAlignment.MiddleLeft:return"MiddleLeft";case IntegralUILabelAlignment.MiddleRight:return"MiddleRight";case IntegralUILabelAlignment.Right:return"Right";case IntegralUILabelAlignment.TopCenter:return"TopCenter";case IntegralUILabelAlignment.TopLeft:return"TopLeft";case IntegralUILabelAlignment.TopRight:return"TopRight";default:return"Inline"}}},reflect:!0},orientation:{converter:{fromAttribute:e=>"horizontal"===(e=e.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()?IntegralUIOrientation.Horizontal:IntegralUIOrientation.Vertical,toAttribute:(e,t)=>e===IntegralUIOrientation.Horizontal?"Horizontal":"Vertical"},reflect:!0},showLabel:{type:Boolean,attribute:"show-label",reflect:!0}}}get labelAlignment(){return this._currentLabelAlignment}set labelAlignment(e){if(this._currentLabelAlignment!==e){const t=this._currentLabelAlignment;this._currentLabelAlignment=e;this.requestUpdate("labelAlignment",t);this.updateLayout()}}get orientation(){return this._currentOrientation}set orientation(e){if(this._currentOrientation!==e){const t=this._currentOrientation;this._currentOrientation=e;this.requestUpdate("orientation",t);this.updateLayout()}}get showLabel(){return this._isLabelVisible}set showLabel(e){if(this._isLabelVisible!==e){const t=this._isLabelVisible;this._isLabelVisible=e;this.requestUpdate("showLabel",t);this.updateLayout()}}get value(){return this._currentValue}set value(e){if(this._currentValue!==e){const t=this._currentValue;this._previousValue=this._currentValue;this._currentValue=Math.max(0,Math.min(Math.floor(e),100));this._invokeEvent("valueChanged",{value:this._currentValue});this.requestUpdate("value",t);this.updateLayout()}}_updateLabelPos(){let e=this;e._labelSize=e._labelElemRef?{width:e._labelElemRef.offsetWidth,height:e._labelElemRef.offsetHeight+1}:{width:0,height:0};e._trackSize=e._trackElemRef?{width:e._trackElemRef.offsetWidth,height:e._trackElemRef.offsetHeight}:{width:0,height:0};switch(e._currentLabelAlignment){case IntegralUILabelAlignment.BottomCenter:e._labelPos.left=Math.max(e._ctrlPadding.left,(e._ctrlPadding.left+e._contentSize.width-e._labelSize.width)/2);e._labelPos.top=e._ctrlPadding.top+e._ctrlRect.height-e._labelSize.height;break;case IntegralUILabelAlignment.BottomRight:e._labelPos.left=Math.max(e._ctrlPadding.left,e._ctrlPadding.left+1+e._contentSize.width-e._labelSize.width);e._labelPos.top=e._ctrlPadding.top+e._ctrlRect.height-e._labelSize.height;break;case IntegralUILabelAlignment.Left:e._trackPos.left=e._ctrlPadding.left+e._labelSize.width;e._labelPos.left=e._ctrlPadding.left;break;case IntegralUILabelAlignment.MiddleLeft:e._labelPos.left=e._ctrlPadding.left-1;break;case IntegralUILabelAlignment.MiddleCenter:e._labelPos.left=Math.max(e._ctrlPadding.left,(e._ctrlPadding.left+e._contentSize.width-e._labelSize.width)/2);break;case IntegralUILabelAlignment.MiddleRight:e._labelPos.left=Math.max(e._ctrlPadding.left,e._ctrlPadding.left+1+e._contentSize.width-e._labelSize.width);break;case IntegralUILabelAlignment.TopCenter:e._labelPos.left=Math.max(e._ctrlPadding.left,(e._ctrlPadding.left+e._contentSize.width-e._labelSize.width)/2);break;case IntegralUILabelAlignment.TopRight:e._labelPos.left=Math.max(e._ctrlPadding.left,e._ctrlPadding.left+1+e._contentSize.width-e._labelSize.width);break;case IntegralUILabelAlignment.Right:e._labelPos.left=e._ctrlRect.width-e._ctrlPadding.right-e._labelSize.width;break;case IntegralUILabelAlignment.Inline:e._labelPos.left=e._currentValue>e._previousValue?e._ctrlPadding.left+e._contentSize.width:e._ctrlPadding.left+e._fadingSize.width;break;default:this._defaultFunc()}e.update()}_animateProgress(){let e=this;if(e._trackSize.width>0&&e._trackSize.height>0){let t=0,l=0,i=1,a=3,r=e._currentValue>=e._previousValue?1:-1;if(e._currentOrientation===IntegralUIOrientation.Horizontal){l=e._currentValue<100?Math.floor(e._trackSize.width*e._currentValue/100):e._trackSize.width;i=r*(l-e._contentSize.width)/a}else{l=e._currentValue<100?Math.floor(e._trackSize.height*e._currentValue/100):e._trackSize.height;i=r*(l-e._contentSize.height)/a}let n=(e._currentValue-e._previousValue)/i;if(e.allowAnimation){e._removeContentInterval();e._contentInterval=setInterval(function(){if(e._currentOrientation===IntegralUIOrientation.Horizontal)if(t<i){e._contentSize.width+=a*r;e.update();e._updateLabelPos();t++}else{e._contentSize.width=l;e.update();e._updateLabelPos();clearInterval(e._contentInterval)}else if(e._contentSize.height<l){e._contentSize.height+=a*r;e.update();e._updateLabelPos();t++}else{e._contentSize.height=l;e.update();e._updateLabelPos();clearInterval(e._contentInterval)}},7);e._removeDelayTimeout();let s=0,o=r<0?500:0;e._delayTimeout=setTimeout(function(){e._removeFadingInterval();e._fadingInterval=setInterval(function(){if(e._currentOrientation===IntegralUIOrientation.Horizontal)if(s<i){e._fadingSize.width-=a;if(r>0&&e._displayValue+n<e._currentValue)e._displayValue+=n;else if(r<0&&e._displayValue+n>e._currentValue)e._displayValue+=n;e.update();e._updateLabelPos();s++}else{e._fadingSize.width=l;e._displayValue=e._currentValue;e.update();e._updateLabelPos();clearInterval(e._fadingInterval)}else if(s<i){e._fadingSize.height-=a;if(r>0&&e._displayValue+n<e._currentValue)e._displayValue+=n;else if(r<0&&e._displayValue+n>e._currentValue)e._displayValue+=n;e.update();e._updateLabelPos();s++}else{e._fadingSize.height=l;e._displayValue=e._currentValue;e.update();e._updateLabelPos();clearInterval(e._fadingInterval)}},7);clearTimeout(e._delayTimeout)},o)}else{if(e._currentOrientation===IntegralUIOrientation.Horizontal)e._contentSize.width=l;else e._contentSize.height=l;e._displayValue=e._currentValue;e.update();e._updateLabelPos()}}}_removeContentInterval(){if(this._contentInterval)clearInterval(this._contentInterval)}_removeDelayTimeout(){if(this._delayTimeout)clearTimeout(this._delayTimeout)}_removeFadingInterval(){if(this._fadingInterval)clearInterval(this._fadingInterval)}_processUpdateLayout(){let e=this;return new Promise(t=>{setTimeout(function(){e.update();e._ctrlPadding=e._commonService.getPadding(e._elemRef);let l={top:0,left:0,width:e._currentOrientation===IntegralUIOrientation.Horizontal?e._elemRef.clientWidth:0,height:e._currentOrientation===IntegralUIOrientation.Horizontal?0:e._elemRef.clientHeight};e._clientRect={width:e._elemRef.clientWidth-(e._ctrlPadding.left+e._ctrlPadding.right),height:e._elemRef.clientHeight-(e._ctrlPadding.top+e._ctrlPadding.bottom)};if(e._labelElemRef){e._displayValue=e._currentValue;e._labelPos.top=-9999999;e.update();e._displayValue=e._previousValue}e._labelSize=e._labelElemRef?{width:e._labelElemRef.offsetWidth,height:e._labelElemRef.offsetHeight+1}:{width:0,height:0};e._trackSize=e._trackElemRef?{width:e._trackElemRef.offsetWidth,height:e._trackElemRef.offsetHeight}:{width:0,height:0};if(e._currentOrientation===IntegralUIOrientation.Horizontal)l.height=Math.max(e._labelSize.height,e._trackSize.height);else l.width=Math.max(e._labelSize.width,e._trackSize.width);e._trackSize={width:e._clientRect.width-e._labelSize.width,height:e._trackSize.height};if(e._currentLabelAlignment!==IntegralUILabelAlignment.Inline&&e._currentLabelAlignment!==IntegralUILabelAlignment.Left&&e._currentLabelAlignment!==IntegralUILabelAlignment.Right&&e._currentLabelAlignment!==IntegralUILabelAlignment.MiddleCenter&&e._currentLabelAlignment!==IntegralUILabelAlignment.MiddleLeft&&e._currentLabelAlignment!==IntegralUILabelAlignment.MiddleRight){l.height=e._labelSize.height+e._trackSize.height;e._trackSize.width=e._clientRect.width}e._ctrlRect=l;e._trackPos={top:Math.max(e._ctrlPadding.top+(e._labelSize.height-e._trackSize.height)/2,e._ctrlPadding.top),left:e._ctrlPadding.left};e._labelPos={top:Math.max(e._ctrlPadding.top+(e._trackSize.height-e._labelSize.height)/2,e._ctrlPadding.top+1),left:e._ctrlPadding.left};switch(e._currentLabelAlignment){case IntegralUILabelAlignment.BottomLeft:e._labelPos.left=e._ctrlPadding.left;e._labelPos.top=e._ctrlPadding.top+e._ctrlRect.height-e._labelSize.height;e._trackPos.top=e._ctrlPadding.top;break;case IntegralUILabelAlignment.BottomCenter:e._labelPos.left=Math.max(e._ctrlPadding.left,(e._ctrlPadding.left+Math.floor(e._trackSize.width*e._currentValue/100)-e._labelSize.width)/2);e._labelPos.top=e._ctrlPadding.top+e._ctrlRect.height-e._labelSize.height;e._trackPos.top=e._ctrlPadding.top;break;case IntegralUILabelAlignment.BottomRight:e._labelPos.left=Math.max(e._ctrlPadding.left,e._ctrlPadding.left+1+Math.floor(e._trackSize.width*e._currentValue/100)-e._labelSize.width);e._labelPos.top=e._ctrlPadding.top+e._ctrlRect.height-e._labelSize.height;e._trackPos.top=e._ctrlPadding.top;break;case IntegralUILabelAlignment.Left:e._labelPos.left=e._ctrlPadding.left;e._trackPos.left=e._ctrlPadding.left+e._labelSize.width;break;case IntegralUILabelAlignment.MiddleCenter:e._labelPos.left=Math.max(e._ctrlPadding.left,(e._ctrlPadding.left+Math.floor(e._trackSize.width*e._currentValue/100)-e._labelSize.width)/2);e._trackSize.width=e._clientRect.width;break;case IntegralUILabelAlignment.MiddleLeft:e._labelPos.left=e._ctrlPadding.left-1;e._trackSize.width=e._clientRect.width;break;case IntegralUILabelAlignment.MiddleRight:e._labelPos.left=Math.max(e._ctrlPadding.left,e._ctrlPadding.left+1+Math.floor(e._trackSize.width*e._currentValue/100)-e._labelSize.width);e._trackSize.width=e._clientRect.width;break;case IntegralUILabelAlignment.Right:e._labelPos.left=e._ctrlRect.width-e._ctrlPadding.right-e._labelSize.width;break;case IntegralUILabelAlignment.TopCenter:e._labelPos.left=Math.max(e._ctrlPadding.left,(e._ctrlPadding.left+Math.floor(e._trackSize.width*e._currentValue/100)-e._labelSize.width)/2);e._labelPos.top=e._ctrlPadding.top;e._trackPos.top=e._ctrlPadding.top+e._labelSize.height;break;case IntegralUILabelAlignment.TopLeft:e._labelPos.left=e._ctrlPadding.left;e._labelPos.top=e._ctrlPadding.top;e._trackPos.top=e._ctrlPadding.top+e._labelSize.height;break;case IntegralUILabelAlignment.TopRight:e._labelPos.left=Math.max(e._ctrlPadding.left,e._ctrlPadding.left+1+Math.floor(e._trackSize.width*e._currentValue/100)-e._labelSize.width);e._labelPos.top=e._ctrlPadding.top;e._trackPos.top=e._ctrlPadding.top+e._labelSize.height;break;default:e._labelPos.left=e._ctrlPadding.left+Math.floor(e._trackSize.width*e._currentValue/100)}e._animateProgress();t()},1)})}_getControlStyle(){let e=this._currentInlineStyle||{};if(this._currentOrientation===IntegralUIOrientation.Horizontal){if(this._ctrlSize.width>0)e.width=this._ctrlSize.width+"px";if(this._ctrlRect.height>0)e.height=this._ctrlRect.height+"px"}else{if(this._ctrlRect.width>0)e.width=this._ctrlRect.width+"px";if(this._ctrlSize.height>0)e.height=this._ctrlSize.height+"px"}return e}_getProgressStyle(){let e={"z-index":2};if(this._currentOrientation===IntegralUIOrientation.Horizontal)e.width=this._contentSize.width+"px";else{e.position="absolute";e.bottom="-1px";e.height=this._contentSize.height+"px"}return e}_getProgressFadingStyle(){let e={left:0,opacity:"0.25",position:"absolute",top:0,"z-index":1};if(this._currentOrientation===IntegralUIOrientation.Horizontal)e.width=this._fadingSize.width+"px";else{e.top="auto";e.bottom=0;e.height=this._fadingSize.height+"px"}return e}_getTrackStyle(){let e={top:this._trackPos.top+"px",left:this._trackPos.left+"px"};if(this._ctrlSize.width>0){e.width=this._ctrlSize.width-2+"px";if(this._currentLabelAlignment===IntegralUILabelAlignment.Left||this._currentLabelAlignment===IntegralUILabelAlignment.Right)e.width=this._ctrlSize.width-2-this._labelSize.width+"px"}return e}_updateColorSchemeSettings(e){this._currentColorSchemeSettings=css``;switch(e){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiProgressBarDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiProgressBarLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(e){this._currentThemeSettings=css``;switch(e){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiProgressBarOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(e){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="progressbar" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} draggable="true" @dragstart="${e=>this._preventDragStart(e)}">                 <div class="iui-progressbar-track" style=${styleMap(this._getTrackStyle())}>                     <div class="iui-progressbar-track-content" style=${styleMap({width:this._contentSize.width+"px"})}>                         <div class=${classMap(this._getContentClass())} style=${styleMap(this._getProgressStyle())}></div>                         ${this.allowAnimation?html`<div class=${classMap(this._getContentClass())} style=${styleMap(this._getProgressFadingStyle())}></div>`:html``}                     </div>                 </div>                 ${this._isLabelVisible?html`<div class="iui-progressbar-label" style=${styleMap({top:this._labelPos.top+"px",left:this._labelPos.left+"px"})}>${Math.floor(this._displayValue)}%</div>`:html``}             </div>         `}_updateControlStyleSettings(e){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiProgressBarDefaultStyle.cssText,"../../icons",e)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=progressbar]");this._labelElemRef=this.shadowRoot.querySelector(".iui-progressbar-label");this._trackElemRef=this.shadowRoot.querySelector(".iui-progressbar-track")}}window.customElements.define("iui-progressbar",IntegralUIProgressBar);export default IntegralUIProgressBar;