/*
  filename: integralui.dropdown.js
  version : 23.4.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUIDropDownDirection,IntegralUISpeedMode}from"./integralui.enums.js";class IntegralUIDropDown extends IntegralUIBase{_init(){super._init();this._closeTimer=null;this._currentAnimationSpeed=IntegralUISpeedMode.Normal;this._currentDirection=IntegralUIDropDownDirection.Down;this._openTimer=null;this._keepActive=!1;this._currentValue=null;this._ctrlDisplay="block";this._ctrlOpacity=1;this._ctrlPos={top:0,left:0};this._contentDisplay="absolute";this._contentOpacity=0;this._contentPos={top:-9999,left:0};this._generalClassName="iui-dropdown";this._currentContentTemplate=html``;this._initStyle()}_initStyle(){this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"}};this._updateColorSchemeSettings(this._currentColorScheme);this.refresh()}connectedCallback(){}disconnectedCallback(){this._removeCloseTimer();this._removeOpenTimer()}static get properties(){return{animationSpeed:{attribute:"animation-speed",converter:{fromAttribute:e=>{switch((e=e.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"veryslow":return IntegralUISpeedMode.VerySlow;case"slow":return IntegralUISpeedMode.Slow;case"fast":return IntegralUISpeedMode.Fast;case"veryfast":return IntegralUISpeedMode.VeryFast;default:return IntegralUISpeedMode.Normal}},toAttribute:e=>{switch(e){case IntegralUISpeedMode.VerySlow:return"VerySlow";case IntegralUISpeedMode.Slow:return"Slow";case IntegralUISpeedMode.Fast:return"Fast";case IntegralUISpeedMode.VeryFast:return"VeryFast";default:return"Normal"}}},reflect:!0},contentTemplate:{type:Object,attribute:"content-template"},direction:{converter:{fromAttribute:e=>{switch((e=e.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"up":return IntegralUIDropDownDirection.Up;default:return IntegralUIDropDownDirection.Down}},toAttribute:e=>{switch(e){case IntegralUIDropDownDirection.Up:return"Up";default:return"Down"}}},reflect:!0},display:{type:String,reflect:!0},opacity:{type:Number,reflect:!0},position:{type:Object},value:{type:Number,reflect:!0}}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i)}get animationSpeed(){return this._currentAnimationSpeed}set animationSpeed(e){if(this._currentAnimationSpeed!==e){const t=this._currentAnimationSpeed;this._currentAnimationSpeed=e;this.requestUpdate("animationSpeed",t)}}get contentTemplate(){return this._currentContentTemplate}set contentTemplate(e){const t=this._currentContentTemplate;this._currentContentTemplate=e;this.requestUpdate("contentTemplate",t)}get direction(){return this._currentDirection}set direction(e){if(this._currentDirection!==e){const t=this._currentDirection;this._currentDirection=e;this.requestUpdate("direction",t)}}get display(){return this._ctrlDisplay}set display(e){if(this._ctrlDisplay!==e){const t=this._ctrlDisplay;this._ctrlDisplay=e;this.requestUpdate("display",t)}}get opacity(){return this._ctrlOpacity}set opacity(e){if(this._ctrlOpacity!==e){const t=this._ctrlOpacity;this._ctrlOpacity=e;this.requestUpdate("opacity",t)}}get position(){return this._ctrlPos}set position(e){const t=this._ctrlPos;this._ctrlPos=e;this.requestUpdate("position",t)}get value(){return this._currentValue}set value(e){if(this._currentValue!==e){const t=this._currentValue;this._currentValue=e;this._invokeEvent("valueChanged",{value:this._currentValue});this.requestUpdate("value",t);this.updateLayout()}}_onBlur(){this.close()}getContent(){return this._contentElem.firstElementChild}close(){if(this._currentDirection===IntegralUIDropDownDirection.Up)this._closeUp();else this._closeDown()}_closeDown(){let e=this;e._removeCloseTimer();e._removeOpenTimer();if(e._isAnimationAllowed&&e._ctrlSize.height>0){e._contentOpacity=1;e._contentPos.top=0;let t=e._getAnimationFactor(!0);e._closeTimer=setInterval(function(){if(e._contentPos.top>-e._ctrlSize.height){e._contentPos.top-=t;e._contentOpacity=Math.abs(1+e._contentPos.top/e._ctrlSize.height);e.update()}else{e._contentPos.top=-e._ctrlSize.height;e._contentOpacity=0;e.update();e._invokeEvent("closed",{value:this._currentValue});e._removeCloseTimer()}},5)}else{e._contentPos.top=-e._ctrlSize.height;e._contentOpacity=0;e.update();e._invokeEvent("closed",{value:this._currentValue})}e._keepActive=!1}_closeUp(){let e=this;e._removeCloseTimer();e._removeOpenTimer();if(e._isAnimationAllowed&&e._ctrlSize.height>0){e._contentOpacity=1;e._contentPos.top=0;let t=e._getAnimationFactor(!0);e._closeTimer=setInterval(function(){if(e._contentPos.top<e._ctrlSize.height){e._contentPos.top+=t;e._contentOpacity=Math.abs(1-e._contentPos.top/e._ctrlSize.height);e.update()}else{e._contentPos.top=e._ctrlSize.height;e._contentOpacity=0;e.update();e._invokeEvent("closed",{value:this._currentValue});e._removeCloseTimer()}},5)}else{e._contentPos.top=e._ctrlSize.height;e._contentOpacity=0;e.update();e._invokeEvent("closed",{value:this._currentValue})}e._keepActive=!1}_getAnimationFactor(e){let t=10;switch(this._currentAnimationSpeed){case IntegralUISpeedMode.VerySlow:t=e?2:1;break;case IntegralUISpeedMode.Slow:t=e?4:3;break;case IntegralUISpeedMode.Fast:t=e?9:7;break;case IntegralUISpeedMode.VeryFast:t=e?12:10;break;default:t=e?7:5}return t}open(){if(this._currentDirection===IntegralUIDropDownDirection.Up)this._openUp();else this._openDown()}_openDown(){let e=this;e._removeCloseTimer();e._removeOpenTimer();if(e._isAnimationAllowed&&e._ctrlSize.height>0)setTimeout(function(){e._contentOpacity=0;e._contentPos.top=-e._ctrlSize.height;let t=e._getAnimationFactor();e._openTimer=setInterval(function(){if(e._contentPos.top<0){e._contentPos.top+=t;e._contentOpacity=Math.abs(1+e._contentPos.top/e._ctrlSize.height);e.update()}else{e._contentPos.top=0;e._contentOpacity=1;e._removeOpenTimer();e.update()}},5)},1);else{e._contentPos.top=0;e._contentOpacity=1;e.update()}}_openUp(){let e=this;e._removeCloseTimer();e._removeOpenTimer();if(e._isAnimationAllowed&&e._ctrlSize.height>0)setTimeout(function(){e._contentOpacity=0;e._contentPos.top=e._ctrlSize.height;let t=e._getAnimationFactor();e._openTimer=setInterval(function(){if(e._contentPos.top>0){e._contentPos.top-=t;e._contentOpacity=Math.abs(1-e._contentPos.top/e._ctrlSize.height);e.update()}else{e._contentPos.top=0;e._contentOpacity=1;e._removeOpenTimer();e.update()}},5)},1);else{e._contentPos.top=0;e._contentOpacity=1;e.update()}}_removeCloseTimer(){if(this._closeTimer)clearInterval(this._closeTimer)}_removeOpenTimer(){if(this._openTimer)clearInterval(this._openTimer)}_getContentStyle(){return{opacity:this._contentOpacity,left:this._contentPos.left+"px",position:this._contentDisplay,top:this._contentPos.top+"px"}}_getControlStyle(){let e=this._currentInlineStyle||{};e=Object.assign(e,{display:this._ctrlDisplay,opacity:this._ctrlOpacity,left:this._ctrlPos.left+"px",overflow:"hidden",position:"absolute",top:this._ctrlPos.top+"px",zIndex:9999999});if(this._ctrlSize.width>0)e.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)e.height=this._ctrlSize.height+"px";return e}firstUpdated(e){this._updateReferences()}refresh(){this._updateControlClass();this.update();this._updateReferences()}async updateLayout(e){this.update();this._updateReferences();return Promise.resolve()}render(){return html`             <style>                 ${this._currentCustomStyle}             </style>             <div data-ctrl="dropdown" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())}>                 <div id="content" style=${styleMap(this._getContentStyle())}>                     ${this._currentContentTemplate}                 </div>             </div>         `}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=dropdown]");this._contentElem=this.shadowRoot.querySelector("#content")}}window.customElements.define("iui-dropdown",IntegralUIDropDown);export default IntegralUIDropDown;