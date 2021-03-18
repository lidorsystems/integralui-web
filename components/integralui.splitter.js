/*
  filename: integralui.splitter.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUIOrientation,IntegralUITheme}from"./integralui.enums.js";import IntegralUIBase from"./integralui.base.js";import{iuiSplitterDefaultStyle}from"../styles/integralui.splitter.style.js";import{iuiSplitterOfficeStyle}from"../themes/office/integralui.splitter.office.js";import{iuiSplitterMidnightStyle}from"../themes/midnight/integralui.splitter.midnight.js";class IntegralUISplitter extends IntegralUIBase{_init(){super._init();this._isSplitterActive=!1;this._maxPos={x:9999999,y:9999999};this._currentOrientation=IntegralUIOrientation.Horizontal;this._ctrlRect={top:0,right:0,bottom:0,left:0,height:0,width:0,x:0,y:0};this._currentSplitterDistance=100;this._isSplitterDistanceDefined=!1;this._panel1Border={top:0,right:0,bottom:0,left:0};this._panel2Border={top:0,right:0,bottom:0,left:0};this._panel1Size={width:0,height:0};this._panel2Size={width:0,height:0};this._splitterSize={width:0,height:0};this._splitterHandleSize={width:0,height:0};this._splitterStartPos={x:0,y:0};this._currentControlStyleSettings=iuiSplitterDefaultStyle;this._handleClass={};this._panelClass={};this._splitterClass={};this._initStyle()}connectedCallback(){this._windowMouseUp=this._windowMouseUp.bind(this);window.addEventListener("mouseup",this._windowMouseUp)}disconnectedCallback(){window.removeEventListener("mouseup",this._windowMouseUp)}_initStyle(){this._generalClassName="iui-splitter";this._handleClassName=this._generalClassName+"-handle";this._panelClassName=this._generalClassName+"-panel";this._splitterClassName=this._generalClassName+"-bar";this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"},panel:{disabled:this._panelClassName+"-disabled",normal:this._panelClassName+"-normal"},splitter:{general:{normal:this._splitterClassName,horizontal:this._splitterClassName+"-horizontal",vertical:this._splitterClassName+"-vertical"},handle:{general:this._handleClassName,horizontal:this._handleClassName+"-horizontal",vertical:this._handleClassName+"-vertical"}}};this._updateStyle(this._controlStyle);this.refresh()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{orientation:{converter:{fromAttribute:t=>"horizontal"===(t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()?IntegralUIOrientation.Horizontal:IntegralUIOrientation.Vertical,toAttribute:(t,e)=>t===IntegralUIOrientation.Horizontal?"Horizontal":"Vertical"},reflect:!0},panel1:{type:Object},panel2:{type:Object},splitterDistance:{type:Number,attribute:"splitter-distance",reflect:!0}}}get orientation(){return this._currentOrientation}set orientation(t){if(this._currentOrientation!==t){const e=this._currentOrientation;let i=this,l=setTimeout(function(){i._currentOrientation=t;i.requestUpdate("orientation",e);i.splitterDistance=i._keepSplitterPosInRange(i.splitterDistance);i.refresh();i.updateLayout();clearTimeout(l)},1)}}get splitterDistance(){return this._currentSplitterDistance}set splitterDistance(t){if(this._currentSplitterDistance!==t){const e=this._currentSplitterDistance;let i=this;i._isSplitterDistanceDefined=!0;let l=setTimeout(function(){i._currentSplitterDistance=i._keepSplitterPosInRange(t);i.requestUpdate("splitterDistance",e);i.updateLayout();i._invokeEvent("splitterMoved",{value:t});clearTimeout(l)},1)}}_keepSplitterPosInRange(t){return this.orientation===IntegralUIOrientation.Vertical?Math.max(0,Math.min(Math.max(0,t),this._maxPos.x)):Math.max(0,Math.min(Math.max(0,t),this._maxPos.y))}async updateLayout(){await this._updateControlLayout();this.update()}_updateControlLayout(){return new Promise(t=>{let e=this,i=setTimeout(function(){e._splitterSize={width:e._splitterElem.offsetWidth,height:e._splitterElem.offsetHeight};e._clientRect={width:e._elemRef.clientWidth-2,height:e._elemRef.clientHeight-2};if(!e._isSplitterDistanceDefined)e._currentSplitterDistance=e.orientation===IntegralUIOrientation.Vertical?Math.floor(e._clientRect.width-e._splitterSize.width)/2:Math.floor(e._clientRect.height-e._splitterSize.height)/2;e._panel1Border=e._commonService.getBorderWidth(e._panel1Elem);e._panel2Border=e._commonService.getBorderWidth(e._panel2Elem);e._panel1Size={width:e._currentSplitterDistance,height:e._currentSplitterDistance+e._panel1Border.top+e._panel1Border.bottom};e._panel2Size={width:e._clientRect.width-e._currentSplitterDistance-e._splitterSize.width,height:e._clientRect.height-e._currentSplitterDistance-e._splitterSize.height};if(e.orientation===IntegralUIOrientation.Vertical)e._maxPos={x:e._clientRect.width-e._splitterSize.width,y:e._clientRect.height-e._splitterSize.width};else e._maxPos={x:e._clientRect.width-e._splitterSize.height,y:e._clientRect.height-e._splitterSize.height};e._splitterHandleSize={width:e._handleElem.offsetWidth,height:e._handleElem.offsetHeight};clearTimeout(i);t()},e._isSplitterActive?1:50)})}_ctrlMouseMove(t){if(this._isEnabled&&1===t.buttons&&this._isSplitterActive){let e=this._commonService.getShiftPos(),i={x:t.pageX-this._ctrlRect.left-e.x,y:t.pageY-this._ctrlRect.top-e.y},l=this._currentSplitterDistance;if(this.orientation===IntegralUIOrientation.Vertical){l+=i.x-this._splitterStartPos.x;l=Math.min(Math.max(0,l),this._maxPos.x)}else{l+=i.y-this._splitterStartPos.y;l=Math.min(Math.max(0,l),this._maxPos.y)}if(this._currentSplitterDistance!==l){this._isSplitterDistanceDefined=!0;let t={cancel:!1,value:l};this._invokeEvent("splitterMoving",t,!1);if(!0!==t.cancel){this._currentSplitterDistance=l;this.updateLayout()}}this._splitterStartPos=i}}_splitterMouseDown(t){if(this._isEnabled){let e=this._commonService.getShiftPos(),i={x:t.pageX-this._ctrlRect.left-e.x,y:t.pageY-this._ctrlRect.top-e.y};if(this.orientation===IntegralUIOrientation.Vertical){this._splitterStartPos=i;this._isSplitterActive=!0}else{this._splitterStartPos=i;this._isSplitterActive=!0}}}_windowMouseUp(t){if(this._isEnabled){this._isSplitterActive=!1;this._invokeEvent("splitterMoved",{value:this._currentSplitterDistance})}}_changeOrientation(t){this.orientation=t?IntegralUIOrientation.Vertical:IntegralUIOrientation.Horizontal}_getInlinePanel1Style(){let t={top:"0",left:"0",width:"100%",height:"100%"};if(this.orientation===IntegralUIOrientation.Vertical){t.width=this._panel1Size.width+"px";t.height=this._clientRect.height+"px"}else{t.width=this._clientRect.width+"px";t.height=this._panel1Size.height+"px"}return t}_getInlinePanel2Style(){let t={top:"0",left:"0",width:"100%",height:"100%"};if(this.orientation===IntegralUIOrientation.Vertical){t.left=this._panel1Size.width+this._splitterSize.width+"px";t.width=this._panel2Size.width+"px";t.height=this._clientRect.height+"px"}else{t.width=this._clientRect.width+"px";t.height=this._panel2Size.height-(this._panel2Border.left+this._panel2Border.right)+"px";t.top=this._panel1Size.height+this._splitterSize.height+"px"}return t}_getInlineSplitterStyle(){let t={top:"0",left:"0",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.left=this._panel1Size.width+1+"px";t.height=this._clientRect.height+"px"}else{t.width=this._clientRect.width+"px";t.top=this._panel1Size.height+1+"px"}return t}_getInlineHandleStyle(){let t={"margin-top":"0","margin-left":"0"};if(this.orientation===IntegralUIOrientation.Vertical)t["margin-top"]=(this._splitterBlockSize.height-this._splitterHandleSize.height)/2+"px";else t["margin-left"]=(this._splitterBlockSize.width-this._splitterHandleSize.width)/2+"px";return t}_updateSplitterClass(){this._splitterClass={};this._splitterClass[this._splitterClassName]=!0;this._splitterClass[this._options.currentStyle.splitter.general.normal]=!0;if(this.orientation===IntegralUIOrientation.Vertical)this._splitterClass[this._options.currentStyle.splitter.general.vertical]=!0;else this._splitterClass[this._options.currentStyle.splitter.general.horizontal]=!0}_getSplitterClass(){return this._splitterClass}_updateHandleClass(){this._handleClass={};this._handleClass[this._handleClassName]=!0;this._handleClass[this._options.currentStyle.splitter.handle.general]=!0;if(this.orientation===IntegralUIOrientation.Vertical)this._handleClass[this._options.currentStyle.splitter.handle.vertical]=!0;else this._handleClass[this._options.currentStyle.splitter.handle.horizontal]=!0}_getHandleClass(){return this._handleClass}_updatePanelClass(){this._panelClass={};this._panelClass[this._panelClassName]=!0;this._panelClass[this._options.currentStyle.panel.normal]=!0}_getPanelClass(){return this._panelClass}_getPanelStyle(t){if(this._commonService.isString(t))return t;else if(t)return{disabled:this._commonService.isFieldAvailable(t.disabled,this._panelClassName+"-disabled"),normal:this._commonService.isFieldAvailable(t.normal,this._panelClassName)};else return{disabled:this._defaultStyle.panel.disabled,normal:this._defaultStyle.panel.normal}}_getSplitterGeneralStyle(t){if(this._commonService.isString(t))return t;else if(t)return{normal:this._commonService.isFieldAvailable(t.normal,this._splitterClassName),horizontal:this._commonService.isFieldAvailable(t.horizontal,this._splitterClassName+"-horizontal"),vertical:this._commonService.isFieldAvailable(t.vertical,this._splitterClassName+"-vertical")};else return{normal:this._defaultStyle.splitter.general.normal,horizontal:this._defaultStyle.splitter.general.horizontal,vertical:this._defaultStyle.splitter.general.vertical}}_getHandleStyle(t){if(this._commonService.isString(t))return t;else if(t)return{general:this._commonService.isFieldAvailable(t.general,this._handleClassName),horizontal:this._commonService.isFieldAvailable(t.horizontal,this._handleClassName+"-horizontal"),vertical:this._commonService.isFieldAvailable(t.vertical,this._handleClassName+"-vertical")};else return{general:this._defaultStyle.splitter.handle.general,horizontal:this._defaultStyle.splitter.handle.horizontal,vertical:this._defaultStyle.splitter.handle.vertical}}_getSplitterStyle(t){if(this._commonService.isString(t))return t;else if(t)return{general:this._getSplitterGeneralStyle(t.general),handle:this._getHandleStyle(t.handle)};else return this._getDefaultSplitterStyle()}_getDefaultStyle(){return{general:this._getDefaultGeneralStyle(),panel:this._getDefaultPanelStyle(),splitter:this._getDefaultSplitterStyle()}}_getDefaultPanelStyle(){return{disabled:this._defaultStyle.panel.disabled,normal:this._defaultStyle.panel.normal}}_getDefaultSplitterStyle(){return{general:{normal:this._defaultStyle.splitter.general.normal,horizontal:this._defaultStyle.splitter.general.horizontal,vertical:this._defaultStyle.splitter.general.vertical},handle:{general:this._defaultStyle.splitter.handle.general,horizontal:this._defaultStyle.splitter.handle.horizontal,vertical:this._defaultStyle.splitter.handle.vertical}}}_updateStyle(t){if(t)this._options.currentStyle={general:this._getGeneralStyle(t.general),panel:this._getPanelStyle(t.panel),splitter:this._getSplitterStyle(t.splitter)};else this._options.currentStyle=this._getDefaultStyle()}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiSplitterOfficeStyle.cssText,"../icons",this._currentResourcePath);break;case IntegralUITheme.Midnight:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiSplitterMidnightStyle.cssText,"../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(t){this._updateReferences();this.updateLayout()}refresh(){this._updateControlClass();this._updateHandleClass();this._updateSplitterClass();this._updatePanelClass();this.update();this._updateReferences()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="splitter" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @mousemove="${t=>this._ctrlMouseMove(t)}">                 <div id="panel1" class=${classMap(this._getPanelClass())} style=${styleMap(this._getInlinePanel1Style())}>                     <slot name="iui-panel1"></slot>                 </div> 				<div id="splitter-bar" class=${classMap(this._getSplitterClass())} style=${styleMap(this._getInlineSplitterStyle())} @mousedown="${t=>this._splitterMouseDown(t)}"> 					<span id="handle" class=${classMap(this._getHandleClass())}></span> 				</div>                 <div id="panel2" class=${classMap(this._getPanelClass())} style=${styleMap(this._getInlinePanel2Style())}>                     <slot name="iui-panel2"></slot>                 </div>             </div>         `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiSplitterDefaultStyle.cssText,"../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=splitter]");this._handleElem=this.shadowRoot.querySelector("#handle");this._panel1Elem=this.shadowRoot.querySelector("#panel1");this._panel2Elem=this.shadowRoot.querySelector("#panel2");this._splitterElem=this.shadowRoot.querySelector("#splitter-bar");this._ctrlRect=this._commonService.getPageRect(this._elemRef)}}window.customElements.define("iui-splitter",IntegralUISplitter);export default IntegralUISplitter;