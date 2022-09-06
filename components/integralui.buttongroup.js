/*
  filename: integralui.buttongroup.js
  version : 22.3.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{h as html}from"../external/lit-element.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUISelectionMode}from"./integralui.enums.js";class IntegralUIButtonGroup extends IntegralUIBase{constructor(){super();this._buttonList=[];this._currentSelectionMode=IntegralUISelectionMode.One;this._selectedComponent=null;this._selectedIndex=-1;this._initStyle()}_init(){super._init();this._initStyle()}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n)}static get properties(){return{selectionMode:{attribute:"selection-mode",converter:{fromAttribute:e=>{switch((e=e.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"none":return IntegralUISelectionMode.None;case"multisimple":return IntegralUISelectionMode.MultiSimple;case"multiextended":return IntegralUISelectionMode.MultiExtended;default:return IntegralUISelectionMode.One}},toAttribute:e=>{switch(e){case IntegralUISelectionMode.None:return"None";case IntegralUISelectionMode.MultiSimple:return"MultiSimple";case IntegralUISelectionMode.MultiExtended:return"MultiExtended";default:return"One"}}},reflect:!0}}}get selectionMode(){return this._currentSelectionMode}set selectionMode(e){if(this._currentSelectionMode!==e){const t=this._currentSelectionMode;this._currentSelectionMode=e;this._clearCmpSelection(this._selectedComponent);let n=this,o=setTimeout(function(){if(n._currentSelectionMode===IntegralUISelectionMode.None)n._selectedComponent=null;n.requestUpdate("selectionMode",t);clearTimeout(o)},1)}}_getComponentCurrentIndex(e){return e&&this._buttonList?this._buttonList.indexOf(e):-1}_getComponentData(e){return e&&e.data?e.data:null}invokeCtrlEvent(e,t,n){let o=!0;if(this._isEnabled){let l=this._getComponentData(t);switch(e){case"PRESS":this._invokeEvent("buttonPressed",{index:n,button:l,pressed:t.pressed});break;default:o=!0}}return o}invokeCtrlMethod(e,t){let n=!0;if(this._isEnabled)switch(e){case"PRESS":this._selectComponent(t);break;default:n=!0}return n}_processUpdateLayout(){let e=this;return new Promise(t=>{switch(this._currentSelectionMode){case IntegralUISelectionMode.None:e._clearCmpSelection();break;case IntegralUISelectionMode.One:let t=e._buttonList.filter(e=>e.pressed);e._selectedComponent=t.length>0?t[t.length-1]:null;e._selectedIndex=e._getComponentCurrentIndex(e._selectedComponent);e._clearCmpSelection(e._selectedComponent);break;default:e._defaultFunc()}t()})}clearSelection(){this._clearCmpSelection()}_clearCmpSelection(e){let t=!1;switch(this._currentSelectionMode){case IntegralUISelectionMode.None:e=null;break;case IntegralUISelectionMode.MultiSimple:case IntegralUISelectionMode.MultiExtended:t=!0;break;default:t=!1}if(!t){this._buttonList.forEach(function(t){if(t!==e)t.pressed=!1});if(!e){this._selectedComponent=null;this._selectedIndex=-1}}}_selectComponent(e){let t=this;if(e){let n=!0,o=t._getComponentCurrentIndex(e);t._selectedIndex=o;t._selectedComponent=e;t._clearCmpSelection(e);switch(this._currentSelectionMode){case IntegralUISelectionMode.None:e.pressed=!1;n=!1;break;case IntegralUISelectionMode.MultiSimple:case IntegralUISelectionMode.MultiExtended:e.pressed=!e.pressed;break;default:e.pressed=!0}if(n)t.invokeCtrlEvent("PRESS",e,o);return!0}return!1}firstUpdated(e){this._updateReferences();this.updateLayout()}_refreshGroupParent(){let e=this;return new Promise(t=>{setTimeout(function(){e._contentSlotElem=e.shadowRoot.querySelector("slot").assignedNodes();e._buttonList=e._contentSlotElem.filter(e=>"iui-button"===e.nodeName.toLowerCase());e._buttonList.forEach(t=>{t.allowAnimation=e.allowAnimation;t.allowFocus=e.allowFocus;t.colorScheme=e.colorScheme;t.resourcePath=e.resourcePath;t.theme=e.theme;t.setParent(e)});t()},10)})}render(){return html`             <div data-ctrl="buttongroup">                 <slot @slotchange="${e=>this._slotChange(e)}"></slot>             </div>         `}_slotChange(e){this.updateLayout()}async updateLayout(){await this._refreshGroupParent();await this._processUpdateLayout();this.update()}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=buttongroup]")}}window.customElements.define("iui-buttongroup",IntegralUIButtonGroup);export default IntegralUIButtonGroup;