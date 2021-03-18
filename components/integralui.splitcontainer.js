/*
  filename: integralui.splitcontainer.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUIOrientation,IntegralUITheme}from"./integralui.enums.js";import IntegralUIBase from"./integralui.base.js";import{iuiSplitContainerDefaultStyle}from"../styles/integralui.splitcontainer.style.js";import{iuiSplitContainerOfficeStyle}from"../themes/office/integralui.splitcontainer.office.js";import{iuiSplitContainerMidnightStyle}from"../themes/midnight/integralui.splitcontainer.midnight.js";class IntegralUISplitContainer extends IntegralUIBase{_init(){super._init();this._panel1Data={text:"Panel1"};this._panel2Data={text:"Panel2"};this._isSplitterActive=!1;this._blockPos={top:"0",right:"auto",bottom:"auto",left:"0"};this._cmdButtonsAllowed=!0;this._isContentSwapped=!1;this._maxPos={x:9999999,y:9999999};this._tabSize={width:0,height:0};this._currentOrientation=IntegralUIOrientation.Horizontal;this._ctrlRect={top:0,right:0,bottom:0,left:0,height:0,width:0,x:0,y:0};this._currentSplitterDistance=100;this._panel1Size={width:0,height:0};this._panel2Size={width:0,height:0};this._splitterSize={width:0,height:0};this._splitterBlockSize={width:0,height:0};this._splitterButtonBlockSize={width:0,height:0};this._splitterHandleSize={width:0,height:0};this._splitterStartPos={x:0,y:0};this._swapButtonSize={width:0,height:0};this._tab1Size={width:0,height:0};this._tab1ContentSize={width:0,height:0};this._tab2Size={width:0,height:0};this._tab2ContentSize={width:0,height:0};this._currentControlStyleSettings=iuiSplitContainerDefaultStyle;this._buttonClass={};this._handleClass={};this._panelClass={};this._splitterClass={};this._swapButtonClass={};this._tabClass={};this._initStyle()}connectedCallback(){this._windowMouseUp=this._windowMouseUp.bind(this);window.addEventListener("mouseup",this._windowMouseUp)}disconnectedCallback(){window.removeEventListener("mouseup",this._windowMouseUp);this._rt()}_initStyle(){this._generalClassName="iui-splitcontainer";this._buttonClassName=this._generalClassName+"-button";this._handleClassName=this._generalClassName+"-handle";this._panelClassName=this._generalClassName+"-panel";this._splitterClassName=this._generalClassName+"-splitter";this._swapButtonClassName=this._generalClassName+"-swap-button";this._tabClassName=this._generalClassName+"-tab";this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"},panel:{disabled:this._panelClassName+"-disabled",normal:this._panelClassName+"-normal"},splitter:{general:{normal:this._splitterClassName,horizontal:this._splitterClassName+"-horizontal",vertical:this._splitterClassName+"-vertical"},handle:{general:this._handleClassName,horizontal:this._handleClassName+"-horizontal",vertical:this._handleClassName+"-vertical"},swapButton:{disabled:this._swapButtonClassName+"-disabled",hovered:this._swapButtonClassName+"-hovered",normal:this._swapButtonClassName+"-normal",selected:this._swapButtonClassName+"-selected"},tab:{disabled:this._tabClassName+"-disabled",focused:this._tabClassName+"-focused",hovered:this._tabClassName+"-hovered",normal:this._tabClassName+"-normal",selected:this._tabClassName+"-selected"}}};this._updateStyle(this._controlStyle);this.refresh()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{orientation:{converter:{fromAttribute:t=>"horizontal"===(t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()?IntegralUIOrientation.Horizontal:IntegralUIOrientation.Vertical,toAttribute:(t,e)=>t===IntegralUIOrientation.Horizontal?"Horizontal":"Vertical"},reflect:!0},panel1:{type:Object},panel2:{type:Object},showButtons:{type:Boolean,attribute:"show-buttons",reflect:!0},splitterDistance:{type:Number,attribute:"splitter-distance",reflect:!0}}}get orientation(){return this._currentOrientation}set orientation(t){if(this._currentOrientation!==t){const e=this._currentOrientation;let i=this,s=setTimeout(function(){i._currentOrientation=t;i.requestUpdate("orientation",e);i.splitterDistance=i._keepSplitterPosInRange(i.splitterDistance);i.refresh();i.updateLayout();i.updateLayout();clearTimeout(s)},1)}}get panel1(){return this._panel1Data}set panel1(t){if(this._panel1Data!==t){const e=this._panel1Data;this._panel1Data=t;this.requestUpdate("panel1",e);this.updateLayout()}}get panel2(){return this._panel2Data}set panel2(t){if(this._panel2Data!==t){const e=this._panel2Data;this._panel2Data=t;this.requestUpdate("panel2",e);this.updateLayout()}}get showButtons(){return this._cmdButtonsAllowed}set showButtons(t){if(this._cmdButtonsAllowed!==t){const e=this._cmdButtonsAllowed;let i=this,s=setTimeout(function(){i._cmdButtonsAllowed=t;i.requestUpdate("panel2",e);i.refresh();i.updateLayout();clearTimeout(s)},100)}}get splitterDistance(){return this._currentSplitterDistance}set splitterDistance(t){if(this._currentSplitterDistance!==t){const e=this._currentSplitterDistance;let i=this,s=setTimeout(function(){i._currentSplitterDistance=i._keepSplitterPosInRange(t);i.requestUpdate("splitterDistance",e);i.updateLayout();i._invokeEvent("splitterMoved",{value:t});clearTimeout(s)},1)}}_swapButtonClicked(){if(this._isEnabled){this._isContentSwapped=!this._isContentSwapped;let t=this._panel1Data;this._panel1Data=this._panel2Data;this._panel2Data=t;this._invokeEvent("panelsSwapped");this.updateLayout()}}_keepSplitterPosInRange(t){return this.orientation===IntegralUIOrientation.Vertical?Math.min(Math.max(0,t),this._maxPos.x):Math.min(Math.max(0,t),this._maxPos.y)}async updateLayout(){this._ut();if(!this._tCmp)this._at();await this._updateControlLayout();await this._updateControlLayout();this.update()}_updateControlLayout(){return new Promise(t=>{let e=this,i=setTimeout(function(){e._splitterSize={width:0,height:0};let s=e._splitterElem.children;for(let t=0;t<s.length-1;t++){switch(t){case 0:e._tab1Size={width:s[t].offsetWidth,height:s[t].offsetHeight};break;case 1:e._swapButtonSize={width:s[t].offsetWidth,height:s[t].offsetHeight};break;case 2:e._tab2Size={width:s[t].offsetWidth,height:s[t].offsetHeight};break;default:e._defaultFunc()}if(e._splitterSize.width<s[t].offsetWidth)e._splitterSize.width=s[t].offsetWidth;if(e._splitterSize.height<s[t].offsetHeight)e._splitterSize.height=s[t].offsetHeight}e._tab1ContentSize={width:e._tab1ContentElem.offsetWidth,height:e._tab1ContentElem.offsetHeight};e._tab2ContentSize={width:e._tab2ContentElem.offsetWidth,height:e._tab2ContentElem.offsetHeight};e._splitterSize.width+=2;e._splitterSize.height+=2;e._clientRect={width:e._elemRef.clientWidth-2,height:e._elemRef.clientHeight-2};e._panel1Size={width:e._currentSplitterDistance,height:e._currentSplitterDistance};e._panel2Size={width:e._clientRect.width-e._currentSplitterDistance-e._splitterSize.width-4,height:e._clientRect.height-e._currentSplitterDistance-e._splitterSize.height-4};e.update();e._splitterButtonBlockSize=e._buttonBlockElem?{width:e._buttonBlockElem.offsetWidth,height:e._buttonBlockElem.offsetHeight}:{width:90,height:0};if(e.orientation===IntegralUIOrientation.Vertical){e._splitterBlockSize={width:e._splitterElem.clientWidth,height:e._splitterElem.clientHeight-(e._tab1ContentSize.width+e._swapButtonSize.height+e._tab2ContentSize.width+e._splitterButtonBlockSize.height+16)};e._maxPos={x:e._clientRect.width-e._splitterSize.width-4,y:e._clientRect.height-e._splitterSize.width-4}}else{e._splitterBlockSize={width:e._splitterElem.clientWidth-(e._tab1Size.width+e._swapButtonSize.width+e._tab2Size.width+e._splitterButtonBlockSize.width+16),height:e._splitterElem.clientHeight};e._maxPos={x:e._clientRect.width-e._splitterSize.height-4,y:e._clientRect.height-e._splitterSize.height-4}}e._splitterHandleSize={width:e._handleElem.offsetWidth,height:e._handleElem.offsetHeight};e.update();clearTimeout(i);t()},10)})}_ctrlMouseMove(t){if(this._isEnabled&&1===t.buttons&&this._isSplitterActive){let e=this._commonService.getShiftPos(),i={x:t.pageX-this._ctrlRect.left-e.x,y:t.pageY-this._ctrlRect.top-e.y},s=this._currentSplitterDistance;if(this.orientation===IntegralUIOrientation.Vertical){s+=i.x-this._splitterStartPos.x;s=Math.min(Math.max(0,s),this._maxPos.x)}else{s+=i.y-this._splitterStartPos.y;s=Math.min(Math.max(0,s),this._maxPos.y)}if(this._currentSplitterDistance!==s){let t={cancel:!1,value:s};this._invokeEvent("splitterMoving",t);if(!0!==t.cancel){this._currentSplitterDistance=s;this.updateLayout()}}this._splitterStartPos=i}}_splitterMouseDown(t){if(this._isEnabled){let e=this._commonService.getShiftPos(),i={x:t.pageX-this._ctrlRect.left-e.x,y:t.pageY-this._ctrlRect.top-e.y};if(this.orientation===IntegralUIOrientation.Vertical){if(i.y>this._tab1Size.height+this._swapButtonSize.height+this._tab2Size.height+10){this._splitterStartPos=i;this._isSplitterActive=!0}}else if(i.x>this._tab1Size.width+this._swapButtonSize.width+this._tab2Size.width+10){this._splitterStartPos=i;this._isSplitterActive=!0}}}_windowMouseUp(t){if(this._isEnabled){this._isSplitterActive=!1;this._invokeEvent("splitterMoved",{value:this._currentSplitterDistance})}}_changeOrientation(t){this.orientation=t?IntegralUIOrientation.Vertical:IntegralUIOrientation.Horizontal}_getControlStyle(){let t={};if(this._ctrlSize.width>0)t.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";return t}_getInlinePanel1Style(){let t={top:"0",left:"0",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.width=this._panel1Size.width+"px";t.height=this._clientRect.height+"px"}else t.height=this._panel1Size.height+"px";return t}_getInlinePanel2Style(){let t={top:"0",left:"0",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.left=this._panel1Size.width+this._splitterSize.width+1+"px";t.width=this._panel2Size.width+"px";t.height=this._clientRect.height+"px"}else{t.height=this._panel2Size.height+"px";t.top=this._panel1Size.height+this._splitterSize.height+"px"}return t}_getInlineSplitterStyle(){let t={top:"0",left:"0",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.left=this._panel1Size.width+"px";t.width=this._splitterSize.width+"px";t.height=this._clientRect.height+"px"}else{t.width=this._clientRect.width+"px";t.height=this._splitterSize.height+"px";t.top=this._panel1Size.height+1+"px"}return t}_getInlineTab1Style(){let t={top:"-1px",left:"0",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.left="-1px";t["border-left"]="0";t.width=this._tab1ContentSize.height+"px";t.height=this._tab1ContentSize.width+"px"}else{t.left="-1px";t["border-top"]="0";t.width=this._tab1ContentSize.width+"px";t.height=this._tab1ContentSize.height+"px"}return t}_getInlineTab1ContentStyle(){let t={top:"0",left:"0"};if(this.orientation===IntegralUIOrientation.Vertical){t.top=(this._tab1ContentSize.width-this._tab1ContentSize.height)/2+"px";t.left=(this._tab1ContentSize.height-this._tab1ContentSize.width)/2+"px"}return t}_getInlineTab2Style(){let t={top:"auto",right:"auto",bottom:"auto",left:"auto",width:"auto",height:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t["border-right"]="0";t.right="-1px";t.top=this._tab1ContentSize.width+this._swapButtonSize.height+4+"px";t.width=this._tab2ContentSize.height+"px";t.height=this._tab2ContentSize.width+"px"}else{t.bottom="-1px";t.left=this._tab1ContentSize.width+this._swapButtonSize.width+4+"px";t["border-bottom"]="0";t.width=this._tab2ContentSize.width+"px";t.height=this._tab2ContentSize.height+"px"}return t}_getInlineTab2ContentStyle(){let t={top:"0",right:"0"};if(this.orientation===IntegralUIOrientation.Vertical){t.top=(this._tab2ContentSize.width-this._tab2ContentSize.height)/2+"px";t.right=(this._tab2ContentSize.height-this._tab2ContentSize.width)/2+"px"}return t}_getInlineHandleBlockStyle(){let t={cursor:"ew-resize",width:"auto",height:"auto",top:"auto",left:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.height=this._splitterBlockSize.height+"px";t.top=this._tab1ContentSize.width+this._swapButtonSize.height+this._tab2ContentSize.width+8+"px";t.left=(this._splitterBlockSize.width-this._splitterHandleSize.width)/2+"px"}else{t.cursor="ns-resize";t.width=this._splitterBlockSize.width+"px";t.top=(this._splitterBlockSize.height-this._splitterHandleSize.height)/2+"px";t.left=this._tab1Size.width+this._swapButtonSize.width+this._tab2Size.width+8+"px"}return t}_getInlineHandleStyle(){let t={"margin-top":"0","margin-left":"0"};if(this.orientation===IntegralUIOrientation.Vertical)t["margin-top"]=(this._splitterBlockSize.height-this._splitterHandleSize.height)/2+"px";else t["margin-left"]=(this._splitterBlockSize.width-this._splitterHandleSize.width)/2+"px";return t}_getInlineSwapButtonStyle(){if(this.orientation===IntegralUIOrientation.Vertical)return{top:this._tab1ContentSize.width+2+"px",left:(this._splitterSize.width-this._swapButtonSize.width)/2+"px"};else return{top:(this._splitterSize.height-this._swapButtonSize.height)/2+"px",left:this._tab1ContentSize.width+2+"px"}}_getInlineButtonBlockStyle(){let t={top:"auto",right:"auto",bottom:"auto",left:"auto"};if(this.orientation===IntegralUIOrientation.Vertical){t.bottom="0px";t.left=Math.abs((this._splitterBlockSize.width-this._splitterButtonBlockSize.width)/2)+"px"}else{t.top=Math.abs((this._splitterBlockSize.height-this._splitterButtonBlockSize.height)/2)+"px";t.right="2px"}return t}_updateButtonClass(){this._buttonClass={};this._buttonClass[this._buttonClassName]=!0;this._buttonClass[this._options.currentStyle.splitter.button.general.normal]=!0}_getButtonClass(){return this._buttonClass}_updateSplitterClass(){this._splitterClass={};this._splitterClass[this._splitterClassName]=!0;this._splitterClass[this._options.currentStyle.splitter.general.normal]=!0;if(this.orientation===IntegralUIOrientation.Vertical)this._splitterClass[this._options.currentStyle.splitter.general.vertical]=!0;else this._splitterClass[this._options.currentStyle.splitter.general.horizontal]=!0}_getSplitterClass(){return this._splitterClass}_updateHandleClass(){this._handleClass={};this._handleClass[this._handleClassName]=!0;this._handleClass[this._options.currentStyle.splitter.handle.general]=!0;if(this.orientation===IntegralUIOrientation.Vertical)this._handleClass[this._options.currentStyle.splitter.handle.vertical]=!0;else this._handleClass[this._options.currentStyle.splitter.handle.horizontal]=!0}_getHandleClass(){return this._handleClass}_updatePanelClass(){this._panelClass={};this._panelClass[this._panelClassName]=!0;this._panelClass[this._options.currentStyle.panel.normal]=!0}_getPanelClass(){return this._panelClass}_updateSwapButtonClass(){this._swapButtonClass={};this._swapButtonClass[this._swapButtonClassName]=!0;this._swapButtonClass[this._options.currentStyle.splitter.swapButton.normal]=!0;if(this.orientation===IntegralUIOrientation.Vertical)this._swapButtonClass[this._swapButtonClassName+"-vertical"]=!0}_getSwapButtonClass(){return this._swapButtonClass}_updateTabClass(){this._tabClass={};this._tabClass[this._tabClassName]=!0;this._tabClass[this._options.currentStyle.splitter.tab.selected]=!0;if(this.orientation===IntegralUIOrientation.Vertical)this._tabClass[this._tabClassName+"-vertical"]=!0}_getTabClass(){return this._tabClass}_getPanelStyle(t){if(this._commonService.isString(t))return t;else if(t)return{disabled:this._commonService.isFieldAvailable(t.disabled,this._panelClassName+"-disabled"),normal:this._commonService.isFieldAvailable(t.normal,this._panelClassName)};else return{disabled:this._defaultStyle.panel.disabled,normal:this._defaultStyle.panel.normal}}_getSplitterGeneralStyle(t){if(this._commonService.isString(t))return t;else if(t)return{normal:this._commonService.isFieldAvailable(t.normal,this._splitterClassName),horizontal:this._commonService.isFieldAvailable(t.horizontal,this._splitterClassName+"-horizontal"),vertical:this._commonService.isFieldAvailable(t.vertical,this._splitterClassName+"-vertical")};else return{normal:this._defaultStyle.splitter.general.normal,horizontal:this._defaultStyle.splitter.general.horizontal,vertical:this._defaultStyle.splitter.general.vertical}}_getHandleStyle(t){if(this._commonService.isString(t))return t;else if(t)return{general:this._commonService.isFieldAvailable(t.general,this._handleClassName),horizontal:this._commonService.isFieldAvailable(t.horizontal,this._handleClassName+"-horizontal"),vertical:this._commonService.isFieldAvailable(t.vertical,this._handleClassName+"-vertical")};else return{general:this._defaultStyle.splitter.handle.general,horizontal:this._defaultStyle.splitter.handle.horizontal,vertical:this._defaultStyle.splitter.handle.vertical}}_getSwapButtonStyle(t){if(this._commonService.isString(t))return t;else if(t)return{disabled:this._commonService.isFieldAvailable(t.disabled,this._swapButtonClassName+"-disabled"),hovered:this._commonService.isFieldAvailable(t.hovered,this._swapButtonClassName+"-hovered"),normal:this._commonService.isFieldAvailable(t.normal,this._swapButtonClassName),selected:this._commonService.isFieldAvailable(t.selected,this._swapButtonClassName+"-selected")};else return{disabled:this._defaultStyle.splitter.swapButton.disabled,hovered:this._defaultStyle.splitter.swapButton.hovered,normal:this._defaultStyle.splitter.swapButton.normal,selected:this._defaultStyle.splitter.swapButton.selected}}_getTabStyle(t){if(this._commonService.isString(t))return t;else if(t)return{disabled:this._commonService.isFieldAvailable(t.disabled,this._tabClassName+"-disabled"),focused:this._commonService.isFieldAvailable(t.focused,this._tabClassName+"-focused"),hovered:this._commonService.isFieldAvailable(t.hovered,this._tabClassName+"-hovered"),normal:this._commonService.isFieldAvailable(t.normal,this._tabClassName),selected:this._commonService.isFieldAvailable(t.selected,this._tabClassName+"-selected")};else return{disabled:this._defaultStyle.splitter.tab.disabled,focused:this._defaultStyle.splitter.tab.focused,hovered:this._defaultStyle.splitter.tab.hovered,normal:this._defaultStyle.splitter.tab.normal,selected:this._defaultStyle.splitter.tab.selected}}_getSplitterStyle(t){if(this._commonService.isString(t))return t;else if(t)return{general:this._getSplitterGeneralStyle(t.general),handle:this._getHandleStyle(t.handle),swapButton:this._getSwapButtonStyle(t.swapButton),tab:this._getTabStyle(t.tab)};else return this._getDefaultSplitterStyle()}_getDefaultStyle(){return{general:this._getDefaultGeneralStyle(),panel:this._getDefaultPanelStyle(),splitter:this._getDefaultSplitterStyle()}}_getDefaultPanelStyle(){return{disabled:this._defaultStyle.panel.disabled,normal:this._defaultStyle.panel.normal}}_getDefaultSplitterStyle(){return{general:{normal:this._defaultStyle.splitter.general.normal,horizontal:this._defaultStyle.splitter.general.horizontal,vertical:this._defaultStyle.splitter.general.vertical},handle:{general:this._defaultStyle.splitter.handle.general,horizontal:this._defaultStyle.splitter.handle.horizontal,vertical:this._defaultStyle.splitter.handle.vertical},swapButton:{disabled:this._defaultStyle.splitter.swapButton.disabled,hovered:this._defaultStyle.splitter.swapButton.hovered,normal:this._defaultStyle.splitter.swapButton.normal,selected:this._defaultStyle.splitter.swapButton.selected},tab:{disabled:this._defaultStyle.splitter.tab.disabled,focused:this._defaultStyle.splitter.tab.focused,hovered:this._defaultStyle.splitter.tab.hovered,normal:this._defaultStyle.splitter.tab.normal,selected:this._defaultStyle.splitter.tab.selected}}}_updateStyle(t){if(t)this._options.currentStyle={general:this._getGeneralStyle(t.general),panel:this._getPanelStyle(t.panel),splitter:this._getSplitterStyle(t.splitter)};else this._options.currentStyle=this._getDefaultStyle()}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiSplitContainerOfficeStyle.cssText,"../icons",this._currentResourcePath);break;case IntegralUITheme.Midnight:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiSplitContainerMidnightStyle.cssText,"../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(t){this._updateReferences();this.updateLayout()}refresh(){this._updateControlClass();this._updateSplitterClass();this._updateHandleClass();this._updatePanelClass();this._updateSwapButtonClass();this._updateTabClass();this.update();this._updateReferences()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="splitcontainer" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @mousemove="${t=>this._ctrlMouseMove(t)}">                 <div id="panel1" class=${classMap(this._getPanelClass())} style=${styleMap(this._getInlinePanel1Style())}>                     ${this._isContentSwapped?html`<slot name="iui-panel2"></slot>`:html`<slot name="iui-panel1"></slot>`}                 </div>                 <div id="splitter" class=${classMap(this._getSplitterClass())} style=${styleMap(this._getInlineSplitterStyle())} @mousedown="${t=>this._splitterMouseDown(t)}">                     <div class=${classMap(this._getTabClass())} style=${styleMap(this._getInlineTab1Style())}>                         <div id="tab1Content" style=${styleMap(this._getInlineTab1ContentStyle())}>                             ${this._panel1Data.text?html`<span>${this._panel1Data.text}</span>`:html``}                         </div>                     </div>                     <div id="btnSwap" class=${classMap(this._getSwapButtonClass())} style=${styleMap(this._getInlineSwapButtonStyle())} @click="${t=>this._swapButtonClicked()}">                         <span></span>                     </div>                     <div class=${classMap(this._getTabClass())} style=${styleMap(this._getInlineTab2Style())}>                         <div id="tab2Content" style=${styleMap(this._getInlineTab2ContentStyle())}>                             ${this._panel2Data.text?html`<span>${this._panel2Data.text}</span>`:html``}                         </div>                     </div>                     <div class=${classMap(this._getHandleClass())} style=${styleMap(this._getInlineHandleBlockStyle())}>                         <span id="handle" style=${styleMap(this._getInlineHandleStyle())}></span>                     </div>                     ${this._cmdButtonsAllowed?html`                             <div id="buttonBlock" class="iui-splitcontainer-button-block" style=${styleMap(this._getInlineButtonBlockStyle())}>                                 <div class=${classMap({"iui-splitcontainer-button":!0,"iui-splitcontainer-button-vertical":!0,"iui-splitcontainer-button-selected":this.orientation===IntegralUIOrientation.Vertical})} style=${styleMap({display:this.orientation===IntegralUIOrientation.Vertical?"block":"inline-block"})} @click="${t=>this._changeOrientation(!0)}">                                     <span></span>                                 </div>                                 <div class=${classMap({"iui-splitcontainer-button":!0,"iui-splitcontainer-button-horizontal":!0,"iui-splitcontainer-button-selected":this.orientation===IntegralUIOrientation.Horizontal})} style=${styleMap({display:this.orientation===IntegralUIOrientation.Vertical?"block":"inline-block"})} @click="${t=>this._changeOrientation()}">                                     <span></span>                                 </div>                             </div>`:html``}                 </div>                 <div id="panel2" class=${classMap(this._getPanelClass())} style=${styleMap(this._getInlinePanel2Style())}>                     ${this._isContentSwapped?html`<slot name="iui-panel1"></slot>`:html`<slot name="iui-panel2"></slot>`}                 </div>             </div>         `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiSplitContainerDefaultStyle.cssText,"../icons",t)}_updateReferences(){this._buttonBlockElem=this.shadowRoot.querySelector("#buttonBlock");this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=splitcontainer]");this._handleElem=this.shadowRoot.querySelector("#handle");this._panel1Elem=this.shadowRoot.querySelector("#panel1");this._panel2Elem=this.shadowRoot.querySelector("#panel2");this._splitterElem=this.shadowRoot.querySelector("#splitter");this._tab1ContentElem=this.shadowRoot.querySelector("#tab1Content");this._tab2ContentElem=this.shadowRoot.querySelector("#tab2Content");this._ctrlRect=this._commonService.getPageRect(this._elemRef)}}window.customElements.define("iui-splitcontainer",IntegralUISplitContainer);export default IntegralUISplitContainer;