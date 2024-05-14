/*
  filename: integralui.toaster.js
  version : 24.1.0
  Copyright © 2016-2024 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{h as html}from"../external/lit-element.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUIToastAlignment}from"./integralui.enums.js";import IntegralUIToast from"./integralui.toast.js";class IntegralUIToaster extends IntegralUIBase{constructor(){super();this._currentDuration=5e3;this._currentDataFields={};this._toastList=[];this._bufferList=[];this._parentRef=null;this._inProgress=!1;this._calcToastSize={width:0,height:0};this._currentAlignment=IntegralUIToastAlignment.TopRight;this._currentOffsetSize={width:0,height:0};this._currentToastMargin={top:0,right:0,bottom:0,left:0};this._currentToastSize={width:0,height:0};this._parentBounds=this._getParentBounds();this._currentPositionAdjustment={top:0,left:0};this._generalClassName="iui-toaster";this._currentContentTemplate=null;this._currentHeaderTemplate=null;this._initStyle()}_init(){super._init();this._initStyle()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{alignment:{converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"bottomcenter":return IntegralUIToastAlignment.BottomCenter;case"bottomfull":return IntegralUIToastAlignment.BottomFull;case"bottomleft":return IntegralUIToastAlignment.BottomLeft;case"bottomright":return IntegralUIToastAlignment.BottomRight;case"topcenter":return IntegralUIToastAlignment.TopCenter;case"topfull":return IntegralUIToastAlignment.TopFull;case"topleft":return IntegralUIToastAlignment.TopLeft;default:return IntegralUIToastAlignment.TopRight}},toAttribute:t=>{switch(t){case IntegralUIToastAlignment.BottomCenter:return"BottomCenter";case IntegralUIToastAlignment.BottomFull:return"BottomFull";case IntegralUIToastAlignment.BottomLeft:return"BottomLeft";case IntegralUIToastAlignment.BottomRight:return"BottomRight";case IntegralUIToastAlignment.TopCenter:return"TopCenter";case IntegralUIToastAlignment.TopFull:return"TopFull";case IntegralUIToastAlignment.TopLeft:return"TopLeft";default:return"TopRight"}}},reflect:!0},contentTemplate:{type:Object,attribute:"content-template"},dataFields:{type:Object,attribute:"data-fields"},duration:{type:Number,reflect:!0},parentId:{type:String,attribute:"parent-id",reflect:!0},positionAdjustment:{type:Object,attribute:"position-adjustment"},toastSize:{type:Object}}}get alignment(){return this._currentAlignment}set alignment(t){if(this._currentAlignment!==t){const e=this._currentAlignment;this._currentAlignment=t;this.requestUpdate("alignment",e)}}get contentTemplate(){return this._currentContentTemplate}set contentTemplate(t){const e=this._currentContentTemplate;this._currentContentTemplate=t;this.requestUpdate("contentTemplate",e)}set dataFields(t){const e=this._currentDataFields;this._currentDataFields=t;this.requestUpdate("dataFields",e)}get duration(){return this._currentDuration}set duration(t){if(this._currentDuration!==t){const e=this._currentDuration;this._currentDuration=t;this.requestUpdate("duration",e)}}get parentId(){return this._currentParent}set parentId(t){if(this._commonService.isString(t)&&this._currentParent!==t){const e=this._currentParent;this._currentParent=t;this._setParent();this.requestUpdate("parentId",e)}}get positionAdjustment(){return this._currentPositionAdjustment}set positionAdjustment(t){if(t){const e=this._currentPositionAdjustment;if(void 0!==t.top&&this._currentPositionAdjustment.top!==t.top)this._currentPositionAdjustment.top=t.top;if(void 0!==t.left&&this._currentPositionAdjustment.left!==t.left)this._currentPositionAdjustment.left=t.left;this.requestUpdate("positionAdjustment",e)}}get toastSize(){return this._currentToastSize}set toastSize(t){if(t){const e=this._currentToastSize;this._currentToastSize={width:t.width>0?t.width:0,height:t.height>0?t.height:0};this.requestUpdate("toastSize",e)}}_getParent(){return this._parentRef?this._parentRef:document.body}_getParentBounds(){if(this._parentRef)return this._commonService.getPageRect(this._parentRef);else return{x:0,y:0,top:0,right:window.innerWidth,bottom:window.innerHeight,left:0,width:window.innerWidth,height:window.innerHeight}}_getParentSize(){return{width:this._parentRef?this._parentRef.clientWidth:window.innerWidth,height:this._parentRef?this._parentRef.clientHeight:window.innerHeight}}_setParent(){this._parentRef=""!==this._currentParent?document.querySelector("#"+this._currentParent):null;this._parentBounds=this._getParentBounds()}_createDummyToast(t){let e=this;return new Promise(i=>{let n=this._getParent(),r=document.createElement("iui-toast",{is:IntegralUIToast});if(r){r.colorScheme=this._currentColorScheme;r.contentTemplate=this.contentTemplate;r.customStyle=this.customStyle;r.data=t;r.dataFields=this._currentDataFields;r.duration=this._currentDuration;r.position={top:-99999,left:-99999};r.resourcePath=this.resourcePath;r.size={width:e._currentToastSize.width>0?e._currentToastSize.width:0,height:e._currentToastSize.height>0?e._currentToastSize.height:0};r.theme=this._currentTheme;n.appendChild(r);r.refresh();let s=r.getElemRef();if(s){this._parentBounds=this._getParentBounds();let t=e._commonService.getBorderWidth(s),i=e._commonService.getMargin(s),n=e._commonService.getPadding(s),r={width:s.offsetWidth-(n.left+n.right)-(t.left+t.right)+1,height:s.offsetHeight-(n.top+n.bottom)-(t.top+t.bottom)};if(e._currentAlignment===IntegralUIToastAlignment.BottomFull||e._currentAlignment===IntegralUIToastAlignment.TopFull)r.width=this._parentBounds.width-(n.left+n.right)-(t.left+t.right)-(i.left+i.right);e._calcToastSize={width:e._currentToastSize.width>0?e._currentToastSize.width:r.width,height:e._currentToastSize.height>0?e._currentToastSize.height:r.height};e._currentOffsetSize={width:s.offsetWidth+i.left+i.right,height:s.offsetHeight+i.top+i.bottom};e._currentToastMargin=i}r.parentNode.removeChild(r);i()}})}_getNewPosition(t,e){let i={top:t.top,left:t.left};switch(this._currentAlignment){case IntegralUIToastAlignment.BottomFull:case IntegralUIToastAlignment.BottomLeft:i.top+=-1*e*this._currentOffsetSize.height;break;case IntegralUIToastAlignment.BottomCenter:i.left=(this._parentBounds.width-this._currentOffsetSize.width)/2+this._currentPositionAdjustment.left;i.top+=-1*e*this._currentOffsetSize.height;break;case IntegralUIToastAlignment.BottomRight:i.left=this._parentBounds.width-this._currentOffsetSize.width+this._currentPositionAdjustment.left;i.top+=-1*e*this._currentOffsetSize.height;break;case IntegralUIToastAlignment.TopFull:case IntegralUIToastAlignment.TopLeft:i.top+=e*this._currentOffsetSize.height;break;case IntegralUIToastAlignment.TopCenter:i.left=(this._parentBounds.width-this._currentOffsetSize.width)/2+this._currentPositionAdjustment.left;i.top+=e*this._currentOffsetSize.height;break;default:i.left=this._parentBounds.width-this._currentOffsetSize.width+this._currentPositionAdjustment.left;i.top+=e*this._currentOffsetSize.height}return i}_getStartPosition(){let t={top:0,left:0};switch(this._currentAlignment){case IntegralUIToastAlignment.BottomFull:case IntegralUIToastAlignment.BottomLeft:t.top=this._parentBounds.height;break;case IntegralUIToastAlignment.BottomCenter:t.left=(this._parentBounds.width-this._currentOffsetSize.width)/2;t.top=this._parentBounds.height;break;case IntegralUIToastAlignment.BottomRight:t.left=this._parentBounds.width-this._currentOffsetSize.width;t.top=this._parentBounds.height;break;case IntegralUIToastAlignment.TopFull:case IntegralUIToastAlignment.TopLeft:t.top=-this._currentOffsetSize.height;break;case IntegralUIToastAlignment.TopCenter:t.left=(this._parentBounds.width-this._currentOffsetSize.width)/2;t.top=-this._currentOffsetSize.height;break;default:t.left=this._parentBounds.width-this._currentOffsetSize.width;t.top=-this._currentOffsetSize.height}t.top+=this._currentPositionAdjustment.top;t.left+=this._currentPositionAdjustment.left;return t}_getTargetPosition(){let t={top:0,left:0};switch(this._currentAlignment){case IntegralUIToastAlignment.BottomFull:case IntegralUIToastAlignment.BottomLeft:t.top=this._parentBounds.height-this._currentOffsetSize.height;break;case IntegralUIToastAlignment.BottomCenter:t.left=(this._parentBounds.width-this._currentOffsetSize.width)/2;t.top=this._parentBounds.height-this._currentOffsetSize.height;break;case IntegralUIToastAlignment.BottomRight:t.left=this._parentBounds.width-this._currentOffsetSize.width;t.top=this._parentBounds.height-this._currentOffsetSize.height;break;case IntegralUIToastAlignment.TopFull:case IntegralUIToastAlignment.TopLeft:t.top=this._currentToastMargin.top;break;case IntegralUIToastAlignment.TopCenter:t.left=(this._parentBounds.width-this._currentOffsetSize.width)/2;t.top=this._currentToastMargin.top;break;default:t.left=this._parentBounds.width-this._currentOffsetSize.width;t.top=this._currentToastMargin.top}t.top+=this._currentPositionAdjustment.top;t.left+=this._currentPositionAdjustment.left;return t}_getToastObj(t){let e=this._toastList.filter(e=>e.data===t);return e.length>0?e[0]:null}_getToastObjIndex(t){let e=this._getToastObj(t);return e?this._toastList.indexOf(e):-1}hide(t){let e=this._getToastObj(t);if(e&&e.cmp)e.cmp.hide()}async show(t){let e=this;if(t)if(e._inProgress)e._bufferList.push(t);else{e._inProgress=!0;let i=e._getParent();await e._createDummyToast(t);let n=document.createElement("iui-toast",{is:IntegralUIToast});if(n){n.colorScheme=e._currentColorScheme;n.contentTemplate=e.contentTemplate;n.customStyle=e.customStyle;n.data=t;n.dataFields=e._currentDataFields;n.duration=e._currentDuration;n.position=e._getStartPosition();n.resourcePath=e.resourcePath;n.size={width:e._calcToastSize.width,height:e._calcToastSize.height};n.theme=e._currentTheme;i.appendChild(n);n.setParent(e);n.refresh();e._updatePositions();let r={cmp:n,data:t,position:n.position};e._toastList.push(r);await n._animatePosition(e._getTargetPosition());n._startDuration();e._inProgress=!1;if(e._bufferList.length>0){let t=e._bufferList[0];e._bufferList.splice(0,1);e.show(t)}}else e._inProgress=!1}}_updatePositions(t){if(t){let e=this._getToastObjIndex(t);if(e>=0){this._toastList.splice(e,1);for(let t=e-1;t>=0;t--){let e=this._toastList[t];e.cmp._animatePosition(this._getNewPosition(e.position,-1))}}}else for(let t=this._toastList.length-1;t>=0;t--){let e=this._toastList[t];e.cmp._animatePosition(this._getNewPosition(e.position,1))}}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`             <div data-ctrl="toaster" style="display:none"></div>         `}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=toaster]")}}window.customElements.define("iui-toaster",IntegralUIToaster);export default IntegralUIToaster;