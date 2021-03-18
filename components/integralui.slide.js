/*
  filename: integralui.slide.js
  version : 21.1.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{h as html}from"../external/lit-element.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import{iuiSlideDefaultStyle}from"../styles/integralui.slide.style.js";class IntegralUISlide extends IntegralUIBase{_init(){super._init();this._currentControlStyleSettings=iuiSlideDefaultStyle;this._initStyle()}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{}}get size(){return this._ctrlSize}set size(t){if(t){let e=!1;const i=this._ctrlSize;if(void 0!==t.width&&this._ctrlSize.width!==t.width){this._ctrlSize.width=t.width;e=!0}if(void 0!==t.height&&this._ctrlSize.height!==t.height){this._ctrlSize.height=t.height;e=!0}if(e){this._invokeEvent("sizeChanged",{size:this._ctrlSize});this.requestUpdate("size",i);this.updateLayout()}}}getSize(){return{width:this._elemRef?Math.floor(this._elemRef.offsetWidth):0,height:this._elemRef?Math.floor(this._elemRef.offsetHeight):0}}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="slide" class="iui-slide" style=${styleMap(this._getControlStyle())}>                 <slot></slot>             </div>         `}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=slide]")}}window.customElements.define("iui-slide",IntegralUISlide);export default IntegralUISlide;