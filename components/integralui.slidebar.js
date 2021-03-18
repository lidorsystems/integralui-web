/*
  filename: integralui.slidebar.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUISpeedMode,IntegralUITheme}from"./integralui.enums.js";import IntegralUIBase from"./integralui.base.js";import IntegralUISlide from"./integralui.slide.js";import{iuiSlideBarDefaultStyle}from"../styles/integralui.slidebar.style.js";import{iuiSlideBarOfficeStyle}from"../themes/office/integralui.slidebar.office.js";import{iuiSlideBarMidnightStyle}from"../themes/midnight/integralui.slidebar.midnight.js";class IntegralUISlideBar extends IntegralUIBase{_init(){super._init();this._animationTimeout=null;this._animationTimer=null;this._currentAnimationPause=2e3;this._currentAnimationSpeed=IntegralUISpeedMode.Normal;this._arrowTopPos=0;this._arrowDisplay="none";this._buttons=[];this._cloneElem=null;this._isCloneAdded=!1;this._numSlides=0;this._blockMargin=0;this._blockSize={width:0,height:0};this._elemSize={width:0,height:0};this._showNavigationButtons=!0;this._slideList=[];this._slideSize={width:0,height:0};this._currentSelection=null;this._currentSelectedIndex=-1;this._removeIndex=-1;this._selectedSlideComponent=null;this._currentControlStyleSettings=iuiSlideBarDefaultStyle;this._initStyle()}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i)}static get properties(){return{animationPause:{type:Number,attribute:"animation-pause",reflect:!0},animationSpeed:{attribute:"animation-speed",converter:{fromAttribute:e=>{switch((e=e.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"veryslow":return IntegralUISpeedMode.VerySlow;case"slow":return IntegralUISpeedMode.Slow;case"fast":return IntegralUISpeedMode.Fast;case"veryfast":return IntegralUISpeedMode.VeryFast;default:return IntegralUISpeedMode.Normal}},toAttribute:e=>{switch(e){case IntegralUISpeedMode.VerySlow:return"VerySlow";case IntegralUISpeedMode.Slow:return"Slow";case IntegralUISpeedMode.Fast:return"Fast";case IntegralUISpeedMode.VeryFast:return"VeryFast";default:return"Normal"}}},reflect:!0},navigationButtons:{type:Boolean,attribute:"navigation-buttons",reflect:!0},selectedIndex:{type:Number,attribute:"selected-index",reflect:!0}}}get animationPause(){return this._currentAnimationPause}set animationPause(e){if(this._currentAnimationPause!==e){const t=this._currentAnimationPause;this._currentAnimationPause=e;this.requestUpdate("animationPause",t)}}get animationSpeed(){return this._currentAnimationSpeed}set animationSpeed(e){if(this._currentAnimationSpeed!==e){const t=this._currentAnimationSpeed;this._currentAnimationSpeed=e;this.requestUpdate("animationSpeed",t)}}get navigationButtons(){return this._showNavigationButtons}set navigationButtons(e){if(this._showNavigationButtons!==e){const t=this._showNavigationButtons;this._showNavigationButtons=e;this.updateLayout();this.requestUpdate("navigationButtons",t)}}get selectedIndex(){return this._currentSelectedIndex}set selectedIndex(e){if(this._currentSelectedIndex!==e){const t=this._currentSelectedIndex;this._currentSelectedIndex=e;this._selectSlideByIndex(e);this.requestUpdate("selectedIndex",t)}}_getButtonClass(e){let t={"iui-slidebar-navigator-button":!0},i=this._getSlideCurrentIndex(this._selectedSlideComponent);if(e&&e.index===i)t["iui-slidebar-navigator-button-selected"]=!0;return t}_cancelAnimation(){if(this._animationTimer)clearInterval(this._animationTimer);this._animationTimer=null}_changeSlide(){let e=this._getSlideCurrentIndex(this._selectedSlideComponent);if(e>=0)this._blockMargin=-this._slideSize.width*e;this._invokeEvent("slideChanged",{index:e,slide:this._getSlideData(e)});this.startAnimation();this.update()}_getSpeedFactor(){switch(this._currentAnimationSpeed){case IntegralUISpeedMode.VeryFast:return 25;case IntegralUISpeedMode.Fast:return 15;case IntegralUISpeedMode.Slow:return 5;case IntegralUISpeedMode.VerySlow:return 2;default:return 10}}startAnimation(){let e=this;if(e._animationTimeout)clearTimeout(e._animationTimeout);e._animationTimeout=setTimeout(function(){e._cancelAnimation();if(!1!==e._isAnimationAllowed&&e._slideList.length>1){let t=e._getSlideCurrentIndex(e._selectedSlideComponent),i=0,s=e._getSpeedFactor();e._animationTimer=setInterval(function(){if(i<e._slideSize.width){i+=s;e._blockMargin-=s;e.update()}else{i=0;e._cancelAnimation();t++;if(e._commonService.isIndexInRange(t,e._slideList))e._selectSlideByIndex(t);else e._selectSlideByIndex(0)}},15)}clearTimeout(e._animationTimeout)},e._currentAnimationPause)}stopAnimation(){this.cancelAnimation();let e=this._getSlideCurrentIndex(this._selectedSlideComponent);this._blockMargin=-this._slideSize.width*e;this.update()}_getSlideCurrentIndex(e){return e&&this._slideList?this._slideList.indexOf(e):-1}_getSlideData(e){return this._slideList&&e>=0&&e<this._slideList.length?this._slideList[e].data:null}_ctrlMouseEnter(e){if(this._isEnabled){this._arrowDisplay="block";this.update()}}_ctrlMouseLeave(e){this._arrowDisplay="none";this.update()}prevSlide(){if(this._isEnabled){let e=this._getSlideCurrentIndex(this._selectedSlideComponent)-1;if(this._commonService.isIndexInRange(e,this._slideList))this._selectSlideByIndex(e);else this._selectSlideByIndex(this._slideList.length-1)}}nextSlide(){if(this._isEnabled){let e=this._getSlideCurrentIndex(this._selectedSlideComponent)+1;if(this._commonService.isIndexInRange(e,this._slideList))this._selectSlideByIndex(e);else this._selectSlideByIndex(0)}}async updateLayout(){await this._processUpdateLayout();this.update()}_processUpdateLayout(){let e=this;return new Promise(t=>{e._buttons.length=0;if(e._slideList&&e._slideList.length>0){e._blockSize.width=0;e._addClone();if(!e._selectedSlideComponent)e._selectedSlideComponent=e._slideList[0];let t=0;e._slideList.forEach(function(i){let s=i.getSize();e._blockSize.width+=s.width;e._blockSize.height=s.height;if(i===e._slideList[0]){e._blockSize.width+=s.width;e._elemSize.width=s.width}e._slideSize.width=s.width;e._slideSize.height=s.height;e._buttons.push({index:t});t++});e._blockSize.width++;e._arrowTopPos=e._arrowElem?Math.floor((e._blockSize.height-e._arrowElem.offsetHeight)/2):-999}t()})}_selectSlideByIndex(e){if(this._commonService.isIndexInRange(e,this._slideList)){this._selectedSlideComponent=this._slideList[e];this._changeSlide()}}_getControlStyle(){let e={width:this._elemSize.width+"px"};if(this._ctrlSize.width>0)e.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)e.height=this._ctrlSize.height+"px";return e}_updateThemeSettings(e){this._currentThemeSettings=css``;switch(e){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiSlideBarOfficeStyle.cssText,"../icons",this._currentResourcePath);break;case IntegralUITheme.Midnight:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiSlideBarMidnightStyle.cssText,"../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}_addClone(){this._removeClone();if(this._slideList.length>0&&!this._cloneElem){this._cloneElem=document.createElement("iui-slide",{is:IntegralUISlide});this._cloneElem.size={width:this._slideSize.width,height:this._slideSize.height};this._blockElem.appendChild(this._cloneElem)}}firstUpdated(e){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="slidebar" class="iui-slidebar" style=${styleMap(this._getControlStyle())} @mouseenter="${e=>this._ctrlMouseEnter(e)}" @mouseleave="${e=>this._ctrlMouseLeave(e)}">                 <ul id="block" class="iui-slidebar-container" style=${styleMap({marginLeft:this._blockMargin+"px",width:this._blockSize.width+"px",height:this._blockSize.height+"px"})}>                     <slot @slotchange="${e=>this._slotChange(e)}"></slot>                 </ul>                 <div class="iui-slidebar-navigator">                     ${this._buttons.map((e,t)=>html`                         <span class=${classMap(this._getButtonClass(e))} @click="${()=>this._selectSlideByIndex(t)}"></span>                     `)}                 </div>                 ${this._showNavigationButtons?html`<div id="arrow" class="iui-slidebar-arrow iui-slidebar-arrow-left" style=${styleMap({display:this._arrowDisplay,top:this._arrowTopPos+"px"})} @click="${e=>this.prevSlide()}"><span></span></div>`:html``}                 ${this._showNavigationButtons?html`<div id="arrow" class="iui-slidebar-arrow iui-slidebar-arrow-right" style=${styleMap({display:this._arrowDisplay,top:this._arrowTopPos+"px"})} @click="${e=>this.nextSlide()}"><span></span></div>`:html``}             </div>         `}_refreshSlides(){let e=this.shadowRoot.querySelector("slot").assignedNodes();this._slideList=e?e.filter(e=>"iui-slide"===e.nodeName.toLowerCase()):[];this._addClone();if(this._slideList){if(this._numSlides!==this._slideList.length){if(this._numSlides>this._slideList.length){if(this._removeIndex===this._slideList.length)this._removeIndex=this._slideList.length-1;if(this._removeIndex>=0&&this._removeIndex<this._slideList.length)if(this._commonService.isIndexInRange(this._removeIndex,this._slideList))this._selectSlideByIndex(this._removeIndex);else this._selectSlideByIndex(this._slideList.length-1)}this._numSlides=this._slideList.length}if(0===this._numSlides){this._removeClone();this._selectedSlideComponent=null;this._arrowDisplay="none"}}this.updateLayout();this._changeSlide()}_removeClone(){if(this._cloneElem)this._cloneElem.parentNode.removeChild(this._cloneElem);this._cloneElem=null}_slotChange(e){this._refreshSlides()}_updateControlStyleSettings(e){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiSlideBarDefaultStyle.cssText,"../icons",e)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=slidebar]");this._blockElem=this.shadowRoot.querySelector("#block");this._arrowElem=this.shadowRoot.querySelector("#arrow");this._refreshSlides()}}window.customElements.define("iui-slidebar",IntegralUISlideBar);export default IntegralUISlideBar;