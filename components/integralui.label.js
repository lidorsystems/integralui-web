/*
  filename: integralui.label.js
  version : 22.3.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBaseValue from"./integralui.base.value.js";import{IntegralUIColorScheme,IntegralUIObjectState,IntegralUILabelAlignment,IntegralUITheme}from"./integralui.enums.js";import{iuiLabelDefaultStyle}from"../styles/default/integralui.label.style.js";import{iuiLabelOfficeStyle}from"../styles/themes/office/integralui.label.office.js";import{iuiLabelDarkStyle}from"../styles/color-schemes/dark/integralui.label.dark.js";import{iuiLabelLightStyle}from"../styles/color-schemes/light/integralui.label.light.js";class IntegralUILabel extends IntegralUIBaseValue{_init(){super._init();this._positionInterval=null;this._currentLabel="Placeholder text";this._currentValue="";this._isFocused=!1;this._currentAlignment=IntegralUILabelAlignment.Left;this._blockBorder={top:0,right:0,bottom:0,left:0};this._blockMargin={top:0,right:0,bottom:0,left:0};this._blockPadding={top:0,right:0,bottom:0,left:0};this._blockSize={width:0,height:0};this._contentBorder={top:0,right:0,bottom:0,left:0};this._contentMargin={top:0,right:0,bottom:0,left:0};this._contentPadding={top:0,right:0,bottom:0,left:0};this._contentSize={width:0,height:0};this._ctrlBorder={top:0,right:0,bottom:0,left:0};this._ctrlPadding={top:0,right:0,bottom:0,left:0};this._labelFontSize=1;this._labelPadding={top:0,right:0,bottom:0,left:0};this._labelPos={top:0,left:0};this._labelSize={width:0,height:0};this._slotBounds={top:0,right:0,bottom:0,left:0};this._slotSize={width:0,height:0};this._isComponentInline=!1;this._isUpdateInProcess=!1;this._blockElemRef=null;this._contentElem=null;this._contentElemRef=null;this._labelElemRef=null;this._generalClassName="iui-label";this._contentClassName=this._generalClassName+"-content";this._labelClass={};this._currentControlStyleSettings=iuiLabelDefaultStyle;this._initStyle()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback();this._removeContentEvents();this._removePositionInterval()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{alignment:{attribute:"alignment",converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"bottomcenter":return IntegralUILabelAlignment.BottomCenter;case"bottomleft":return IntegralUILabelAlignment.BottomLeft;case"bottomright":return IntegralUILabelAlignment.BottomRight;case"inline":return IntegralUILabelAlignment.Inline;case"right":return IntegralUILabelAlignment.Right;case"topcenter":return IntegralUILabelAlignment.TopCenter;case"topleft":return IntegralUILabelAlignment.TopLeft;case"topright":return IntegralUILabelAlignment.TopRight;default:return IntegralUILabelAlignment.Left}},toAttribute:t=>{switch(t){case IntegralUILabelAlignment.BottomCenter:return"BottomCenter";case IntegralUILabelAlignment.BottomLeft:return"BottomLeft";case IntegralUILabelAlignment.BottomRight:return"BottomRight";case IntegralUILabelAlignment.Inline:return"Inline";case IntegralUILabelAlignment.Right:return"Right";case IntegralUILabelAlignment.TopCenter:return"TopCenter";case IntegralUILabelAlignment.TopLeft:return"TopLeft";case IntegralUILabelAlignment.TopRight:return"TopRight";default:return"Left"}}},reflect:!0},contentSize:{type:Object},size:{type:Object},value:{type:String,reflect:!0}}}get alignment(){return this._currentAlignment}set alignment(t){if(this._currentAlignment!==t){const e=this._currentAlignment;this._currentAlignment=t;this.requestUpdate("alignment",e);this.updateLayout()}}get contentSize(){return this._contentSize}set contentSize(t){if(t){let e=!1;const i=this._contentSize;if(void 0!==t.width&&this._contentSize.width!==t.width){this._contentSize.width=Math.max(t.width,0);e=!0}if(void 0!==t.height&&this._contentSize.height!==t.height){this._contentSize.height=Math.max(t.height,0);e=!0}if(e){this.requestUpdate("contentSize",i);this.updateLayout()}}}get size(){return this._ctrlSize}set size(t){if(t){let e=!1;const i=this._ctrlSize;if(void 0!==t.width&&this._ctrlSize.width!==t.width&&t.width>=this._contentSize.width+10){this._ctrlSize.width=Math.max(t.width,0);e=!0}if(void 0!==t.height&&this._ctrlSize.height!==t.height){this._ctrlSize.height=Math.max(t.height,0);e=!0}if(e){this._invokeEvent("sizeChanged",{size:this._ctrlSize});this.requestUpdate("size",i);this.updateLayout()}}}get value(){return this._currentValue}set value(t){if(this._currentValue!==t){const e=this._currentValue;this._currentValue=t;this._invokeEvent("valueChanged",{value:this._currentValue});this.requestUpdate("value",e);this.updateLayout()}}_animateLabel(t,e){let i=this;return new Promise(l=>{if(i._isAnimationAllowed){i._removePositionInterval();let n={top:i._labelPos.top,left:i._labelPos.left},s=i._labelFontSize,o=0,a=5,r={top:{factor:i._labelPos.top>t.top?-1:1,value:Math.floor(Math.abs(t.top-i._labelPos.top)/a)},left:{factor:i._labelPos.left>t.left?-1:1,value:Math.floor(Math.abs(t.left-i._labelPos.left)/a)},fontSize:{factor:i._labelFontSize>e?-1:1,value:Math.abs(e-i._labelFontSize)/a}};i._positionInterval=setInterval(function(){if(o<a){n={top:n.top+r.top.value*r.top.factor,left:n.left+r.left.value*r.left.factor};s+=r.fontSize.value*r.fontSize.factor}else{n={top:t.top,left:t.left};s=e}i._labelPos={top:n.top,left:n.left};i._labelFontSize=s;i.update();o++;if(n.top===t.top&&n.left===t.left&&s===e){clearInterval(i._positionInterval);l()}},15)}else{i._labelPos={top:t.top,left:t.left};i._labelFontSize=e;i.update();l()}})}_isContentEmpty(){return this._contentElem&&!this._contentElem.value&&!this._contentElem.innerText}_removePositionInterval(){if(this._positionInterval)clearInterval(this._positionInterval);this._positionInterval=null}_updateLabelPos(t){if(this._currentAlignment===IntegralUILabelAlignment.Inline)if(t||!this._isContentEmpty())this._animateLabel({top:this._blockBorder.top+this._labelPadding.top-this._labelSize.height+2,left:this._blockBorder.left+this._blockPadding.left+this._contentMargin.left+this._contentBorder.left+this._contentPadding.left-this._labelPadding.left-1},.875);else this._animateLabel({top:this._blockBorder.top+this._blockPadding.top+this._slotBounds.top+this._contentMargin.top+this._contentPadding.top-1,left:this._blockBorder.left+this._blockPadding.left+this._contentMargin.left+this._contentBorder.left+this._contentPadding.left-this._labelPadding.left-1},1);else this._setInitialLabelPos();this.refresh()}_addContentEvents(){if(this._contentElem){this._contentGotFocus=this._contentGotFocus.bind(this);this._contentLostFocus=this._contentLostFocus.bind(this);this._contentElem.addEventListener("blur",this._contentLostFocus);this._contentElem.addEventListener("focus",this._contentGotFocus)}}_contentGotFocus(t){this._isFocused=!0;if(this._currentAlignment===IntegralUILabelAlignment.Inline)this._updateLabelPos(!0);else this.refresh()}_contentLostFocus(t){this._isFocused=!1;if(this._currentAlignment===IntegralUILabelAlignment.Inline)this._updateLabelPos();else this.refresh()}_removeContentEvents(){if(this._contentElem){this._contentElem.removeEventListener("blur",this._contentLostFocus);this._contentElem.removeEventListener("focus",this._contentGotFocus)}}_processUpdateLayout(){let t=this;return new Promise(e=>{t._isUpdateInProcess=!0;t.update();t._ctrlBorder=t._commonService.getBorderWidth(t._elemRef);t._ctrlPadding=t._commonService.getPadding(t._elemRef);t._blockBorder=t._commonService.getBorderWidth(t._blockElemRef);t._blockMargin=t._commonService.getMargin(t._blockElemRef);t._blockPadding=t._commonService.getPadding(t._blockElemRef);let i=t._contentElemRef.querySelector("slot").assignedNodes();if(i.length>0){t._contentElem=i[0];t._contentBorder=t._commonService.getBorderWidth(t._contentElem);t._contentMargin=t._commonService.getMargin(t._contentElem);t._contentPadding=t._commonService.getPadding(t._contentElem)}let l={top:0,left:0,width:t._elemRef.clientWidth,height:t._elemRef.clientHeight};t._clientRect={width:t._elemRef.clientWidth-(t._ctrlPadding.left+t._ctrlPadding.right),height:t._elemRef.clientHeight-(t._ctrlPadding.top+t._ctrlPadding.bottom)};t._blockSize=t._blockElemRef?{width:t._blockElemRef.offsetWidth,height:t._blockElemRef.offsetHeight}:{width:0,height:0};t._labelSize=t._labelElemRef?{width:t._labelElemRef.offsetWidth,height:t._labelElemRef.offsetHeight}:{width:0,height:0};t._slotSize=t._contentElemRef?{width:t._contentElemRef.offsetWidth,height:t._contentElemRef.offsetHeight}:{width:0,height:0};l.height=Math.max(t._labelSize.height,t._slotSize.height);t._isComponentInline="inline-block"===getComputedStyle(t._elemRef).display?!0:!1;if(t._currentAlignment===IntegralUILabelAlignment.Inline){t._labelSize.height*=.65;l.height=0}else if(t._currentAlignment!==IntegralUILabelAlignment.Left&&t._currentAlignment!==IntegralUILabelAlignment.Right)l.height=t._labelSize.height+t._slotSize.height;if(t._currentAlignment!==IntegralUILabelAlignment.Inline)l.height+=t._blockMargin.top+t._blockMargin.bottom+t._blockBorder.top+t._blockBorder.bottom+t._blockPadding.top+t._blockPadding.bottom;t._ctrlRect=l;t._labelPadding=t._commonService.getPadding(t._labelElemRef);t._labelPos={top:t._ctrlPadding.top,left:t._ctrlPadding.left};t._slotBounds={top:0,right:0,bottom:0,left:0};t._slotSize={width:t._clientRect.width-t._labelSize.width,height:t._slotSize.height};t._setInitialLabelPos();t._isUpdateInProcess=!1;t.refresh();e()})}_setInitialLabelPos(){let t=this,e=t._labelSize.width;if(t._currentAlignment===IntegralUILabelAlignment.Left||t._currentAlignment===IntegralUILabelAlignment.Right)if(t._isComponentInline){if(t._ctrlSize.width>0)e=t._getLabelWidth()+(t._labelPadding.left+t._labelPadding.right)}else if(t._contentSize.width>0)e=t._getLabelWidth()+(t._labelPadding.left+t._labelPadding.right);switch(t._currentAlignment){case IntegralUILabelAlignment.BottomCenter:t._labelPos.left=Math.max(t._ctrlPadding.left,(t._ctrlRect.width-t._labelSize.width)/2);t._labelPos.top=t._ctrlPadding.top+t._slotSize.height;t._slotBounds.bottom=t._labelSize.height;break;case IntegralUILabelAlignment.BottomLeft:t._labelPos.left=t._ctrlPadding.left;t._labelPos.top=t._ctrlPadding.top+t._slotSize.height;t._slotBounds.bottom=t._labelSize.height;break;case IntegralUILabelAlignment.BottomRight:t._labelPos.left=t._ctrlRect.width-t._ctrlPadding.right-t._labelSize.width;t._labelPos.top=t._ctrlPadding.top+t._slotSize.height+1;t._slotBounds.bottom=t._labelSize.height;break;case IntegralUILabelAlignment.Inline:t._labelPos.left=t._ctrlPadding.left+t._contentBorder.left+t._contentPadding.left;t._labelPos.top=t._ctrlPadding.top+t._labelSize.height+t._contentBorder.top+t._contentPadding.top-1;t._slotBounds.top=0;if(!t._isAnimationAllowed)t._updateLabelPos();break;case IntegralUILabelAlignment.Right:t._labelPos.left=t._ctrlRect.width-t._ctrlPadding.right-e;t._labelPos.top=t._ctrlPadding.top+(t._ctrlRect.height-t._labelSize.height)/2;t._slotBounds.right=t._labelSize.width;break;case IntegralUILabelAlignment.TopCenter:t._labelPos.left=Math.max(t._ctrlPadding.left,(t._ctrlRect.width-t._labelSize.width)/2);t._slotBounds.top=t._labelSize.height;break;case IntegralUILabelAlignment.TopLeft:t._labelPos.left=t._ctrlPadding.left;t._slotBounds.top=t._labelSize.height;break;case IntegralUILabelAlignment.TopRight:t._labelPos.left=t._ctrlRect.width-t._ctrlPadding.right-t._labelSize.width;t._slotBounds.top=t._labelSize.height;break;default:t._labelPos.left=t._ctrlPadding.left;t._labelPos.top=t._ctrlPadding.top+(t._ctrlRect.height-t._labelSize.height)/2;t._slotBounds.left=e}}async updateLayout(){this._updateReferences();await this._processUpdateLayout();this.update()}_getContentStyle(){let t={};if(this._currentAlignment===IntegralUILabelAlignment.Left||this._currentAlignment===IntegralUILabelAlignment.Right){if(this._contentSize.width>0)t.width=this._contentSize.width+"px"}else if(0===this._ctrlSize.width&&this._contentSize.width>0)t.width=this._contentSize.width+"px";if(this._contentSize.height>0)t.height=this._contentSize.height+"px";switch(this._currentAlignment){case IntegralUILabelAlignment.BottomCenter:case IntegralUILabelAlignment.BottomLeft:case IntegralUILabelAlignment.BottomRight:t.marginBottom=this._slotBounds.bottom+"px";break;case IntegralUILabelAlignment.Inline:t.marginTop=this._slotBounds.top+"px";break;case IntegralUILabelAlignment.Right:t.marginTop=this._slotBounds.top+"px";t.marginRight=this._slotBounds.right+"px";break;case IntegralUILabelAlignment.TopCenter:case IntegralUILabelAlignment.TopLeft:case IntegralUILabelAlignment.TopRight:t.marginTop=this._slotBounds.top+"px";break;default:t.marginTop=this._slotBounds.top+"px";t.marginLeft=this._slotBounds.left+"px"}return t}_getControlStyle(){let t=this._currentInlineStyle||{};if(this._ctrlSize.width>0)t.width=this._ctrlSize.width+"px";else if(this._contentSize.width>0&&this._currentAlignment!==IntegralUILabelAlignment.Left&&this._currentAlignment!==IntegralUILabelAlignment.Right)t.width=this._contentSize.width+"px";if(this._ctrlRect.height>0)t.height=this._ctrlRect.height+"px";else if(this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";return t}_getLabelClass(){return this._labelClass}_getLabelStyle(){let t={top:this._labelPos.top+"px",left:this._labelPos.left+"px",fontSize:this._labelFontSize+"rem"};if(!this._isFocused&&this._isContentEmpty())t.background="transparent";else t.zIndex=1;if(this._currentAlignment===IntegralUILabelAlignment.Left)t.textAlign="right";if(this._currentAlignment===IntegralUILabelAlignment.Left||this._currentAlignment===IntegralUILabelAlignment.Right)if(this._isComponentInline){if(this._ctrlSize.width>0)t.width=this._getLabelWidth()+"px"}else if(this._contentSize.width>0)t.width=this._getLabelWidth()+"px";if(this._isUpdateInProcess)t.fontWeight="bold";return t}_getLabelWidth(){return this._clientRect.width-(this._labelPadding.left+this._labelPadding.right)-this._contentSize.width}refresh(){this._updateStyle(this.controlStyle);this._updateControlClass();this._updateContentClass();this._updateLabelClass();this.update()}_updateColorSchemeSettings(t){this._currentColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiLabelDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiLabelLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateControlClass(){this._ctrlClass={};this._ctrlClass[this._generalClassName]=!0;if(this._options.currentStyle&&this._options.currentStyle.general){this._ctrlClass[this._options.currentStyle.general.normal]=!0;if(this.state&IntegralUIObjectState.Disabled)this._ctrlClass[this._options.currentStyle.general.disabled]=!0;else if(this.state&IntegralUIObjectState.Focused||this._isFocused)this._ctrlClass[this._options.currentStyle.general.focused]=!0;else if(this.state&IntegralUIObjectState.Selected)this._ctrlClass[this._options.currentStyle.general.selected]=!0;else if(this.state&IntegralUIObjectState.Hovered)this._ctrlClass[this._options.currentStyle.general.hovered]=!0;if(this.allowAnimation)if(this.state&IntegralUIObjectState.Hovered)this._ctrlClass[this._defaultStyle.general.normal+"-enter"]=!0;else this._ctrlClass[this._defaultStyle.general.normal+"-leave"]=!0;if(this._currentAlignment===IntegralUILabelAlignment.Inline)this._ctrlClass[this._generalClassName+"-inline"]=!0}}_updateLabelClass(){this._labelClass={};this._labelClass[this._generalClassName+"-value"]=!0;if(this._currentAlignment===IntegralUILabelAlignment.Inline)if(this._isFocused||!this._isContentEmpty())this._labelClass[this._generalClassName+"-value-inline"]=!0}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiLabelOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="label" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())}>                 <div class=${classMap({"iui-label-block":this._currentAlignment===IntegralUILabelAlignment.Inline,"iui-label-block-focused":this._isFocused&&this._currentAlignment===IntegralUILabelAlignment.Inline})}>                     <div id="content" class="iui-label-content" style=${styleMap(this._getContentStyle())}>                         <slot @slotchange="${t=>this._slotChange(t)}"></slot>                     </div>                     <span class=${classMap(this._getLabelClass())} style=${styleMap(this._getLabelStyle())}>${this._currentValue}</span>                 </div>             </div>         `}_slotChange(t){this.updateLayout()}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiLabelDefaultStyle.cssText,"../../icons",t)}_updateReferences(){this._removeContentEvents();this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=label]");this._blockElemRef=this.shadowRoot.querySelector(".iui-label-block");this._labelElemRef=this.shadowRoot.querySelector(".iui-label-value");this._contentElemRef=this.shadowRoot.querySelector(".iui-label-content");if(this._contentElemRef){let t=this._contentElemRef.querySelector("slot").assignedNodes();if(t.length>0){this._contentElem=t[0];this._addContentEvents();this._updateLabelPos();this._contentBorder=this._commonService.getBorderWidth(this._contentElem);this._contentMargin=this._commonService.getMargin(this._contentElem);this._contentPadding=this._commonService.getPadding(this._contentElem);let e=this._contentMargin.left+this._contentMargin.right+(this._contentBorder.left+this._contentBorder.right)+(this._contentPadding.left+this._contentPadding.right);this._contentElem.style.width="calc(100% - "+e+"px)"}}}}window.customElements.define("iui-label",IntegralUILabel);export default IntegralUILabel;