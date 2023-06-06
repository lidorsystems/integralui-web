/*
  filename: integralui.window.js
  version : 23.2.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUIColorScheme,IntegralUIResize,IntegralUITheme,IntegralUIWindowState}from"./integralui.enums.js";import{iuiWindowDefaultStyle}from"../styles/default/integralui.window.style.js";import{iuiWindowOfficeStyle}from"../styles/themes/office/integralui.window.office.js";import{iuiWindowDarkStyle}from"../styles/color-schemes/dark/integralui.window.dark.js";import{iuiWindowLightStyle}from"../styles/color-schemes/light/integralui.window.light.js";class IntegralUIWindow extends IntegralUIBase{constructor(){super();this._resizeInterval=null;this._ctrlCursor="default";this._currentIcon="";this._currentIconUrl="";this._currentParent="";this._currentState=IntegralUIWindowState.Normal;this._currentText="";this._isResizeAllowed=!0;this._isSelected=!1;this._isVisible=!1;this._newState=IntegralUIWindowState.Normal;this._parentRef=null;this._contentHeight=0;this._ctrlMinSize={width:200,height:0};this._currentBorder={top:3,right:3,bottom:3,left:3};this._currentMaxSize={width:99999,height:99999};this._currentMinSize={width:0,height:0};this._currentPosition={top:0,left:0};this._headerHeight=0;this._isCloseButtonVisible=!0;this._isMaximizeButtonVisible=!0;this._isMinimizeButtonVisible=!0;this._originalBounds={top:0,left:0,width:0,height:0};this._moveStartPos={x:0,y:0};this._moveEndPos={x:0,y:0};this._isHeaderClicked=!1;this._isMovingActive=!1;this._currentResize=IntegralUIResize.None;this._isResizing=!1;this._generalClassName="iui-window";this._currentControlStyleSettings=iuiWindowDefaultStyle;this._initStyle();this._defaultCursor=document.body.style.cursor}_init(){super._init();this._initStyle()}connectedCallback(){super.connectedCallback();this._windowMouseMove=this._windowMouseMove.bind(this);window.addEventListener("mousemove",this._windowMouseMove);this._windowMouseUp=this._windowMouseUp.bind(this);window.addEventListener("mouseup",this._windowMouseUp)}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("mousemove",this._windowMouseMove);window.removeEventListener("mouseup",this._windowMouseUp);this._removeResizeInterval()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{allowResize:{type:Boolean,attribute:"allow-resize",reflect:!0},closeButton:{type:Boolean,attribute:"close-button",reflect:!0},icon:{type:String,reflect:!0},iconUrl:{type:String,attribute:"icon-url",reflect:!0},maximizeButton:{type:Boolean,attribute:"maximize-button",reflect:!0},minimizeButton:{type:Boolean,attribute:"minimize-button",reflect:!0},maxSize:{type:Object},minSize:{type:Object},parentId:{type:String,attribute:"parent-id",reflect:!0},position:{type:Object},selected:{type:Boolean,reflect:!0},state:{converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"maximized":return IntegralUIWindowState.Maximized;case"minimized":return IntegralUIWindowState.Minimized;default:return IntegralUIWindowState.Normal}},toAttribute:t=>{switch(t){case IntegralUIWindowState.Maximized:return"Maximized";case IntegralUIWindowState.Minimized:return"Minimized";default:return"Normal"}}},reflect:!0},text:{type:String,reflect:!0},visible:{type:Boolean,reflect:!0}}}get allowResize(){return this._isResizeAllowed}set allowResize(t){if(this._isResizeAllowed!==t){const e=this._isResizeAllowed;this._isResizeAllowed=t;this.requestUpdate("allowResize",e);this.update()}}get closeButton(){return this._isCloseButtonVisible}set closeButton(t){if(this._isCloseButtonVisible!==t){const e=this._isCloseButtonVisible;this._isCloseButtonVisible=t;this.requestUpdate("closeButton",e);this.update()}}get icon(){return this._currentIcon}set icon(t){if(this._currentIcon!==t){const e=this._currentIcon;this._currentIcon=t;this.requestUpdate("icon",e)}}get iconUrl(){return this._currentIconUrl}set iconUrl(t){if(this._currentIconUrl!==t){const e=this._currentIconUrl;this._currentIconUrl=t;this.requestUpdate("iconUrl",e)}}get maximizeButton(){return this._isMaximizeButtonVisible}set maximizeButton(t){if(this._isMaximizeButtonVisible!==t){const e=this._isMaximizeButtonVisible;this._isMaximizeButtonVisible=t;this.requestUpdate("maximizeButton",e);this.update()}}get minimizeButton(){return this._isMinimizeButtonVisible}set minimizeButton(t){if(this._isMinimizeButtonVisible!==t){const e=this._isMinimizeButtonVisible;this._isMinimizeButtonVisible=t;this.requestUpdate("closeButton",e);this.update()}}get maxSize(){return this._currentMaxSize}set maxSize(t){if(t){let e=!1;const i=this._currentMaxSize;if(void 0!==t.width&&this._currentMaxSize.width!==t.width){this._currentMaxSize.width=Math.max(0,Math.min(t.width,99999));e=!0}if(void 0!==t.height&&this._currentMaxSize.height!==t.height){this._currentMaxSize.height=Math.max(0,Math.min(t.height,99999));e=!0}if(e){let t={width:this._ctrlSize.width,height:this._ctrlSize.height};if(t.width>this._currentMaxSize.width)t.width=this._currentMaxSize.width;if(t.height>this._currentMaxSize.height)t.height=this._currentMaxSize.height;this.size=t;this.requestUpdate("maxSize",i);this.updateLayout()}}}get minSize(){return this._currentMinSize}set minSize(t){if(t){let e=!1;const i=this._currentMinSize;if(void 0!==t.width&&this._currentMinSize.width!==t.width){this._currentMinSize.width=Math.max(t.width,0);e=!0}if(void 0!==t.height&&this._currentMinSize.height!==t.height){this._currentMinSize.height=Math.max(t.height,0);e=!0}if(e){let t={width:this._ctrlSize.width,height:this._ctrlSize.height};if(t.width<this._currentMinSize.width)t.width=this._currentMinSize.width;if(t.height<this._currentMinSize.height)t.height=this._currentMinSize.height;this.size=t;this.requestUpdate("minSize",i);this.updateLayout()}}}get parentId(){return this._currentParent}set parentId(t){if(this._commonService.isString(t)&&this._currentParent!==t){const e=this._currentParent;this._currentParent=t;this._setParent();this.requestUpdate("parentId",e)}}get position(){return this._currentPosition}set position(t){if(t){let e=!1;const i=this._currentPosition;if(void 0!==t.top&&this._currentPosition.top!==t.top){this._currentPosition.top=Math.max(t.top,0);e=!0}if(void 0!==t.left&&this._currentPosition.left!==t.left){this._currentPosition.left=Math.max(t.left,0);e=!0}if(e){this._invokeEvent("positionChanged",{position:this._currentPosition,size:this._ctrlSize});this.requestUpdate("position",i);this.update()}}}get selected(){return this._isSelected}set selected(t){if(this._isSelected!==t){const e=this._isSelected;this._isSelected=t;if(t)this._clearOtherWindowSelection();this._invokeEvent("selectedChanged",{selected:t,window:this.data});this.requestUpdate("selected",e);this.refresh()}}get size(){return this._ctrlSize}set size(t){if(t){let e=!1;const i=this._ctrlSize;if(void 0!==t.width&&this._ctrlSize.width!==t.width){this._ctrlSize.width=Math.max(this._currentMinSize.width,Math.min(this._currentMaxSize.width,t.width));e=!0}if(void 0!==t.height&&this._ctrlSize.height!==t.height){this._ctrlSize.height=Math.max(this._currentMinSize.height,Math.min(this._currentMaxSize.height,t.height));e=!0}if(e){if(this._newState!==this._currentState)switch(this._currentState){case IntegralUIWindowState.Maximized:if(this._newState===IntegralUIWindowState.Normal)this._callSizeChanged();break;case IntegralUIWindowState.Minimized:this._callSizeChanged();break;default:if(this._newState===IntegralUIWindowState.Maximized)this._callSizeChanged()}else this._callSizeChanged();this.requestUpdate("size",i);this.updateLayout()}}}get state(){return this._currentState}set state(t){if(this._currentState!==t){const e=this._currentState;this._currentState=t;switch(t){case IntegralUIWindowState.Maximized:this.maximize();break;case IntegralUIWindowState.Minimized:this.minimize();break;default:this._resetWindowState();this.updateLayout()}this.requestUpdate("state",e);this._callStateChanged()}}get text(){return this._currentText}set text(t){if(this._currentText!==t){const e=this._currentText;this._currentText=t;this.requestUpdate("text",e);this.update()}}get visible(){return this._isVisible}set visible(t){if(void 0!==t&&this._isVisible!==t){const e=this._isVisible;this._isVisible=t;if(t){let t=this._getParent(),e=t.querySelectorAll("iui-window"),i=!1;for(let t=0;t<e.length;t++){if(e[t]===this){i=!0;break}}t.appendChild(this)}this._invokeEvent("visibleChanged",{visible:t});this.requestUpdate("visible",e);this.updateLayout()}}_animateResize(t,e){let i=this;i._removeResizeInterval();let s={top:this._currentPosition.top,left:this._currentPosition.left,width:this._ctrlSize.width,height:this._ctrlSize.height},h=0,r={factor:this._currentPosition.top>t.top?-1:1,value:Math.floor(Math.abs(t.top-this._currentPosition.top)/10)},n={factor:this._currentPosition.left>t.left?-1:1,value:Math.floor(Math.abs(t.left-this._currentPosition.left)/10)},o={factor:this._ctrlSize.width>t.width?-1:1,value:Math.floor(Math.abs(t.width-this._ctrlSize.width)/10)},l={factor:this._ctrlSize.height>t.height?-1:1,value:Math.floor(Math.abs(t.height-this._ctrlSize.height)/10)};i._resizeInterval=setInterval(function(){if(h<10)s={top:s.top+r.value*r.factor,left:s.left+n.value*n.factor,width:s.width+o.value*o.factor,height:s.height+l.value*l.factor};else s={top:t.top,left:t.left,width:t.width,height:t.height};i.position={top:s.top,left:s.left};i.size={width:s.width,height:s.height};h++;if(s.top===t.top&&s.left===t.left&&s.width===t.width&&s.height===t.height){clearInterval(i._resizeInterval);i._currentState=e;i._callStateChanged();i.updateLayout()}},15)}_clearOtherWindowSelection(){let t=this._getParent().querySelectorAll("iui-window");for(let e=0;e<t.length;e++){let i=t[e];if(i!==this)i.selected=!1}}_getParent(){return this._parentRef?this._parentRef:document.body}_getParentBounds(){if(this._parentRef)return this._commonService.getPageRect(this._parentRef);else return{x:0,y:0,top:0,right:window.innerWidth,bottom:window.innerHeight,left:0,width:window.innerWidth,height:window.innerHeight}}_getParentSize(){return{width:this._parentRef?this._parentRef.clientWidth:window.innerWidth,height:this._parentRef?this._parentRef.clientHeight:window.innerHeight}}_setParent(){this._parentRef=""!==this._currentParent?document.querySelector("#"+this._currentParent):null}_callSizeChanged(){this._invokeEvent("sizeChanged",{position:this._currentPosition,size:this._ctrlSize})}_processUpdateLayout(){let t=this;return new Promise(e=>{t.update();t._clientRect={width:t._elemRef.clientWidth,height:t._elemRef.clientHeight};t._headerHeight=t._headerElem?t._headerElem.offsetHeight:0;t._currentMinSize.height=Math.max(t._currentMinSize.height,t._headerHeight-1);if(t._contentElem){let e=t._commonService.getPadding(t._contentElem);t._contentHeight=t._clientRect.height-t._headerHeight-(e.top+e.bottom)}e()})}async updateLayout(t){this._updateReferences();await this._processUpdateLayout();this.update()}_changeCursor(t){let e="default";if(this._isEnabled)switch(t){case"ew":e="ew-resize";break;case"ns":e="ns-resize";break;case"nw":e="nw-resize";break;case"sw":e="sw-resize";break;default:e="default"}if(this._ctrlCursor!==e){this._ctrlCursor=e;this.update()}}_checkTopBorder(){let t=this._getParentBounds();return this._moveEndPos.y>=t.top+2}_checkLeftBorder(){let t=this._getParentBounds();return this._moveEndPos.x>=t.left+2}_checkBottomBorder(){let t=this._getParentBounds();return this._moveEndPos.y<=t.bottom-2}_checkRightBorder(){let t=this._getParentBounds();return this._moveEndPos.x<=t.right-2}_ctrlClick(t){if(this._isEnabled)this._invokeEvent("click",t)}_ctrlMouseDown(t){if(this._isEnabled){if(1===t.which){if(!this._isSelected)this.selected=!0;if(this._currentState===IntegralUIWindowState.Normal&&this._isResizeAllowed&&this._currentResize!==IntegralUIResize.None){let e=this._commonService.getShiftPos();this._moveStartPos={x:t.pageX-e.x,y:t.pageY-e.y};this._isResizing=!0}}this._invokeEvent("mouseDown",t)}}_ctrlMouseUp(t){if(this._isEnabled)this._invokeEvent("mouseUp",t)}_ctrlMouseEnter(t){if(this._isEnabled)this._invokeEvent("mouseEnter",t)}_ctrlMouseMove(t){if(this._isEnabled){if(this._currentState===IntegralUIWindowState.Normal&&this._isResizeAllowed){if(!this._isResizing){let e=this._commonService.getMouseOffsetPos(t,this._elemRef);if(e.x<=this._currentBorder.left&&e.y<=this._currentBorder.top){this._changeCursor("nw");this._currentResize=IntegralUIResize.TopLeft}else if(e.x>=this._clientRect.width-this._currentBorder.right&&e.y<=this._currentBorder.top){this._changeCursor("sw");this._currentResize=IntegralUIResize.TopRight}else if(e.x<=this._currentBorder.left&&e.y>=this._clientRect.height-this._currentBorder.bottom){this._changeCursor("sw");this._currentResize=IntegralUIResize.BottomLeft}else if(e.x>=this._clientRect.width-this._currentBorder.right&&e.y>=this._clientRect.height-this._currentBorder.bottom){this._changeCursor("nw");this._currentResize=IntegralUIResize.BottomRight}else if(e.x<=this._currentBorder.left){this._changeCursor("ew");this._currentResize=IntegralUIResize.Left}else if(e.x>=this._clientRect.width-this._currentBorder.right){this._changeCursor("ew");this._currentResize=IntegralUIResize.Right}else if(e.y<=this._currentBorder.top){this._changeCursor("ns");this._currentResize=IntegralUIResize.Top}else if(e.y>=this._clientRect.height-this._currentBorder.bottom){this._changeCursor("ns");this._currentResize=IntegralUIResize.Bottom}else{this._changeCursor();this._currentResize=IntegralUIResize.None}}}else{this._changeCursor();this._currentResize=IntegralUIResize.None}this._invokeEvent("mouseMove",t)}}_ctrlMouseLeave(t){if(this._isEnabled){if(!this._isResizing)this._currentResize=IntegralUIResize.None;this._invokeEvent("mouseLeave",t)}}_headerMouseDown(t){if(this._isEnabled&&1===t.which){let e=this._commonService.getShiftPos();this._moveStartPos={x:t.pageX-e.x,y:t.pageY-e.y};this._isHeaderClicked=!0;if(this._currentState===IntegralUIWindowState.Normal&&this._currentResize!==IntegralUIResize.None)this._isResizing=!0}}_headerMouseMove(t){if(this._isEnabled&&1===t.which&&this._isHeaderClicked&&!this._isMovingActive){let e=this._commonService.getShiftPos();this._moveEndPos={x:t.pageX-e.x,y:t.pageY-e.y};let i={dx:Math.abs(this._moveEndPos.x-this._moveStartPos.x),dy:Math.abs(this._moveEndPos.y-this._moveStartPos.y)};if(i.dx>6||i.dy>6)this._isMovingActive=!0}}_resetMoveEndPos(){this._moveEndPos=this._moveStartPos}_windowMouseMove(t){if(this._isEnabled){let e=this._commonService.getShiftPos();this._moveEndPos={x:t.pageX-e.x,y:t.pageY-e.y};if(this._isResizing){document.body.style.cursor=this._ctrlCursor;let t={top:this._currentPosition.top,left:this._currentPosition.left},e={width:this._ctrlSize.width,height:this._ctrlSize.height},i={dx:this._moveEndPos.x-this._moveStartPos.x,dy:this._moveEndPos.y-this._moveStartPos.y};switch(this._currentResize){case IntegralUIResize.TopLeft:if(this._checkTopBorder()&&this._checkLeftBorder()&&e.width-i.dx>=this._currentMinSize.width&&e.width-i.dx<=this._currentMaxSize.width&&e.height-i.dy>=this._currentMinSize.height&&e.height-i.dy<=this._currentMaxSize.height){t.top+=i.dy;t.left+=i.dx;e.width-=i.dx;e.height-=i.dy;this.position=t}else this._resetMoveEndPos();break;case IntegralUIResize.Top:if(this._checkTopBorder()&&e.height-i.dy>=this._currentMinSize.height&&e.height-i.dy<=this._currentMaxSize.height){t.top+=i.dy;e.height-=i.dy}else this._resetMoveEndPos();this.position=t;break;case IntegralUIResize.TopRight:if(this._checkTopBorder()&&this._checkRightBorder()&&e.width+i.dx>=this._currentMinSize.width&&e.width+i.dx<=this._currentMaxSize.width&&e.height-i.dy>=this._currentMinSize.height&&e.height-i.dy<=this._currentMaxSize.height){t.top+=i.dy;e.width+=i.dx;e.height-=i.dy}else this._resetMoveEndPos();this.position=t;break;case IntegralUIResize.Right:if(this._checkRightBorder()&&e.width+i.dx>=this._currentMinSize.width&&e.width+i.dx<=this._currentMaxSize.width)e.width+=i.dx;else this._resetMoveEndPos();break;case IntegralUIResize.BottomRight:if(this._checkBottomBorder()&&this._checkRightBorder()&&e.width+i.dx>=this._currentMinSize.width&&e.width+i.dx<=this._currentMaxSize.width&&e.height+i.dy>=this._currentMinSize.height&&e.height+i.dy<=this._currentMaxSize.height){e.width+=i.dx;e.height+=i.dy}else this._resetMoveEndPos();break;case IntegralUIResize.Bottom:if(this._checkBottomBorder()&&e.height+i.dy>=this._currentMinSize.height&&e.height+i.dy<=this._currentMaxSize.height)e.height+=i.dy;else this._resetMoveEndPos();break;case IntegralUIResize.BottomLeft:if(this._checkBottomBorder()&&this._checkLeftBorder()&&e.width-i.dx>=this._currentMinSize.width&&e.width-i.dx<=this._currentMaxSize.width&&e.height+i.dy>=this._currentMinSize.height&&e.height+i.dy<=this._currentMaxSize.height){t.left+=i.dx;e.width-=i.dx;e.height+=i.dy;this.position=t}else this._resetMoveEndPos();break;case IntegralUIResize.Left:if(this._checkLeftBorder()&&e.width-i.dx>=this._currentMinSize.width&&e.width-i.dx<=this._currentMaxSize.width){t.left+=i.dx;e.width-=i.dx;this.position=t}else this._resetMoveEndPos();break;default:this._defaultFunc()}this.size=e}else if(this._isMovingActive)if(this._checkTopBorder()&&this._checkLeftBorder()&&this._checkBottomBorder()&&this._checkRightBorder()){this._currentPosition.top+=this._moveEndPos.y-this._moveStartPos.y;this._currentPosition.left+=this._moveEndPos.x-this._moveStartPos.x;this.update()}else this._resetMoveEndPos();if(this._isMovingActive||this._isResizing)this._moveStartPos=this._moveEndPos}}_windowMouseUp(t){if(this._isResizing)document.body.style.cursor=this._defaultCursor;this._moveStartPos={x:0,y:0};this._moveEndPos={x:0,y:0};this._isHeaderClicked=!1;this._isMovingActive=!1;this._isResizing=!1}close(t){if(t)this.parentNode.removeChild(this);else if(this._isVisible){let t={cancel:!1};this._invokeEvent("closing",t);if(!t.cancel){this.visible=!1;this._invokeEvent("closed")}}}open(){if(!this._isVisible){let t={cancel:!1};this._invokeEvent("opening",t);if(!t.cancel){this.visible=!0;this._invokeEvent("opened")}}}_applyOriginalBounds(){this.position={top:this._originalBounds.top,left:this._originalBounds.left};this.size={width:this._originalBounds.width,height:this._originalBounds.height}}_callStateChanged(){this._invokeEvent("stateChanged",{state:this._currentState})}_keepBounds(){if(this._currentState===IntegralUIWindowState.Normal)this._originalBounds={top:this._currentPosition.top,left:this._currentPosition.left,width:this._ctrlSize.width,height:this._ctrlSize.height}}maximize(){if(this._currentState!==IntegralUIWindowState.Maximized){this._keepBounds();let t=this._commonService.getBorderWidth(this._elemRef),e=this._getParentSize();this._newState=IntegralUIWindowState.Maximized;if(this._isAnimationAllowed)this._animateResize({top:0,left:0,width:e.width-(t.left+t.right),height:e.height-(t.top+t.bottom)},this._newState);else{this.position={top:0,left:0};this.size={width:e.width-(t.left+t.right),height:e.height-(t.top+t.bottom)};this._ctrlState=this._newState;this._callStateChanged()}this._updateMinPos()}else this._resetWindowState();this.updateLayout()}minimize(){let t=this._commonService.getBorderWidth(this._elemRef),e=this._getParentSize(),i={top:e.height-this._headerElem.offsetHeight-(t.top+t.bottom),left:0};this._newState=IntegralUIWindowState.Minimized;if(this._currentState!==IntegralUIWindowState.Minimized){this._keepBounds();let s=this._getParent().querySelectorAll("iui-window");for(let h=0;h<s.length;h++){if(s[h].state===IntegralUIWindowState.Minimized)i.left+=this._ctrlMinSize.width+(t.left+t.right)+1;if(i.left+this._ctrlMinSize.width+(t.left+t.right)>e.width){i.left=0;i.top-=this._headerElem.offsetHeight+(t.top+t.bottom)+1}}if(this._isAnimationAllowed)this._animateResize({top:i.top,left:i.left,width:this._ctrlMinSize.width,height:this._headerElem.offsetHeight},this._newState);else{this.position={top:i.top,left:i.left};this.size={width:this._ctrlMinSize.width,height:this._headerElem.offsetHeight};this._currentState=this._newState;this._callStateChanged()}}else{this._resetWindowState();this._updateMinPos()}this.updateLayout()}_resetWindowState(){if(this._isAnimationAllowed){this._newState=IntegralUIWindowState.Normal;this._animateResize(this._originalBounds,IntegralUIWindowState.Normal)}else{this._applyOriginalBounds();this._currentState=IntegralUIWindowState.Normal;this._callStateChanged()}}_removeResizeInterval(){if(this._resizeInterval)clearInterval(this._resizeInterval);this._resizeInterval=null}_updateMinPos(){let t=this._commonService.getBorderWidth(this._elemRef),e=this._getParent(),i=this._getParentSize(),s={top:i.height-this._headerElem.offsetHeight-(t.top+t.bottom),left:0},h=e.querySelectorAll("iui-window");for(let e=0;e<h.length;e++){if(h[e]!==this&&h[e].state===IntegralUIWindowState.Minimized){h[e].position={top:s.top,left:s.left};s.left+=this._ctrlMinSize.width+(t.left+t.right)+1}if(s.left+this._ctrlMinSize.width+(t.left+t.right)>i.width){s.left=0;s.top-=this._headerElem.offsetHeight+(t.top+t.bottom)+1}}}_getControlStyle(){let t=this._currentInlineStyle||{};t=Object.assign(t,{cursor:this._ctrlCursor,display:this._isVisible?"block":"none",top:this._currentPosition?this._currentPosition.top+"px":0,left:this._currentPosition?this._currentPosition.left+"px":0});if(this._ctrlSize.width>0)t.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";if(this._currentState===IntegralUIWindowState.Maximized)t.borderRadius=0;return t}refresh(){this._updateStyle(this.controlStyle);this._updateControlClass();this.update();this._updateReferences()}_updateControlClass(){this._ctrlClass={};this._ctrlClass[this._generalClassName]=!0;if(this._options.currentStyle&&this._options.currentStyle.general){this._ctrlClass[this._options.currentStyle.general.normal]=!0;if(!this._isEnabled)this._ctrlClass[this._options.currentStyle.general.disabled]=!0;else if(this._isSelected)this._ctrlClass[this._options.currentStyle.general.selected]=!0}}_updateColorSchemeSettings(t){this._currentColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiWindowDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiWindowLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiWindowOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`            <style>                ${this._currentControlStyleSettings}                ${this._currentThemeSettings}                ${this._currentColorSchemeSettings}                ${this._currentCustomStyle}            </style>            <div data-ctrl="window" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @click="${t=>this._ctrlClick(t)}" @mousedown="${t=>this._ctrlMouseDown(t)}" @mouseup="${t=>this._ctrlMouseUp(t)}" @mouseenter="${t=>this._ctrlMouseEnter(t)}" @mousemove="${t=>this._ctrlMouseMove(t)}" @mouseleave="${t=>this._ctrlMouseLeave(t)}">                <div class="iui-window-header" @mousedown="${t=>this._headerMouseDown(t)}" @mousemove="${t=>this._headerMouseMove(t)}">                    ${this.icon?html`<span class=${classMap(this.icon)} style="display:inline-block"></span>`:html``}                    ${this.iconUrl?html`<img class="iui-window-icon-url" src="${this.iconUrl}" />`:html``}                    ${this.text?html`<span class="iui-window-title">${this.text}</span>`:html``}                    <div class="iui-window-header-content">                        <slot name="header"></slot>                    </div>                    <div class="iui-window-header-buttons">                        ${this._isMinimizeButtonVisible?html`<span class="iui-window-button ${this._currentState===IntegralUIWindowState.Minimized?"iui-window-button-maximize":"iui-window-button-minimize"}" @click="${()=>this.minimize()}"></span>`:html``}                        ${this._isMaximizeButtonVisible?html`<span class="iui-window-button ${this._currentState===IntegralUIWindowState.Maximized?"iui-window-button-maximize":"iui-window-button-window"}" @click="${()=>this.maximize()}"></span>`:html``}                        ${this._isCloseButtonVisible?html`<span class="iui-window-button iui-window-button-close" @click="${()=>this.close()}"></span>`:html``}                    </div>                </div>                <div class="iui-window-content" style=${styleMap({height:this._contentHeight+"px"})}>                    <slot name="content"></slot>                </div>            </div>        `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiWindowDefaultStyle.cssText,"../../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=window]");this._headerElem=this.shadowRoot.querySelector(".iui-window-header");this._contentElem=this.shadowRoot.querySelector(".iui-window-content")}}window.customElements.define("iui-window",IntegralUIWindow);export default IntegralUIWindow;