/*
  filename: integralui.listview.js
  version : 24.1.0
  Copyright © 2016-2024 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBaseList from"./integralui.base.list.js";import{IntegralUIColorScheme,IntegralUIComponentAppearance,IntegralUIDragDropMode,IntegralUIScrollMode,IntegralUITheme}from"./integralui.enums.js";import"./integralui.scrollbar.js";import{iuiBaseDefaultStyle}from"../styles/default/integralui.style.js";import{iuiDarkStyle}from"../styles/color-schemes/dark/integralui.dark.js";import{iuiLightStyle}from"../styles/color-schemes/light/integralui.light.js";import{iuiListViewDefaultStyle}from"../styles/default/integralui.listview.style.js";import{iuiListViewOfficeStyle}from"../styles/themes/office/integralui.listview.office.js";import{iuiListViewDarkStyle}from"../styles/color-schemes/dark/integralui.listview.dark.js";import{iuiListViewLightStyle}from"../styles/color-schemes/light/integralui.listview.light.js";import{iuiListItemDefaultStyle}from"../styles/default/integralui.listitem.style.js";import{iuiListItemOfficeStyle}from"../styles/themes/office/integralui.listitem.office.js";import{iuiListItemDarkStyle}from"../styles/color-schemes/dark/integralui.listitem.dark.js";import{iuiListItemLightStyle}from"../styles/color-schemes/light/integralui.listitem.light.js";import{iuiScrollBarStyle}from"../styles/default/integralui.scrollbar.style.js";import{iuiScrollBarOfficeStyle}from"../styles/themes/office/integralui.scrollbar.office.js";import{iuiScrollBarDarkStyle}from"../styles/color-schemes/dark/integralui.scrollbar.dark.js";import{iuiScrollBarLightStyle}from"../styles/color-schemes/light/integralui.scrollbar.light.js";class IntegralUIListView extends IntegralUIBaseList{_init(){super._init();this._maxDragItems=1;this._clientSpace={width:0,height:0};this._contentPos={top:0,left:0};this._currentItemSize={width:100,height:32};this._currentItemBorder={top:2,right:2,bottom:2,left:2};this._currentItemPadding={top:0,right:0,bottom:0,left:0};this._currentItemContentBorder={top:2,right:2,bottom:2,left:2};this._currentItemContentPadding={top:3,right:3,bottom:3,left:3};this._itemsPerColumn=0;this._itemsPerRow=0;this._numColumns=0;this._numRows=0;this._currentScrollMode=IntegralUIScrollMode.Vertical;this._overflowSettings={horizontal:"auto",vertical:"auto"};this._currentBaseColorSchemeSettings=css``;this._currentBaseStyleSettings=iuiBaseDefaultStyle;this._currentControlStyleSettings=iuiListViewDefaultStyle;this._currentItemColorSchemeSettings=css``;this._currentItemStyleSettings=iuiListItemDefaultStyle;this._currentItemThemeSettings=css``;this._currentScrollColorSchemeSettings=css``;this._currentScrollStyleSettings=iuiScrollBarStyle;this._generalClassName="iui-listview";this._itemClassName="iui-listitem";this._itemContentClassName=this._itemClassName+"-content";this._updateOptions();this._initStyle();this._updateData();this._resizeObserver=new ResizeObserver(t=>{if(t&&t.length>0&&t[0].contentRect){let t=!1;if(this._elemRef)this._clientRect={width:this._elemRef.clientWidth,height:this._elemRef.clientHeight-this._groupPanelHeight-this._paginatorHeight};if(this._clientRect.width!==this._prevClientRect.width){this._prevClientRect.width=this._clientRect.width;t=!0}if(this._clientRect.height!==this._prevClientRect.height){this._prevClientRect.height=this._clientRect.height;t=!0}if(t)this._updateScrollLayout()}})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback();if(this._resizeObserver)this._resizeObserver.disconnect();this._resizeObserver=null;this._removeDropMark();this._resetLayoutTimer();this._rt()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{itemSize:{type:Object,attribute:"item-size"},scrollMode:{attribute:"scroll-mode",converter:{fromAttribute:t=>"horizontal"===(t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()?IntegralUIScrollMode.Horizontal:IntegralUIScrollMode.Vertical,toAttribute:(t,e)=>t===IntegralUIScrollMode.Horizontal?"Horizontal":"Vertical"},reflect:!0}}}get itemSize(){return this._currentItemSize}set itemSize(t){if(t){const e=this._currentItemSize;this._currentItemSize={width:t.width>0?t.width:100,height:t.height>0?t.height:32};this.requestUpdate("itemSize",e);this.updateLayout()}}get scrollMode(){return this._currentScrollMode}set scrollMode(t){if(this._currentScrollMode!==t){const e=this._currentScrollMode;this._currentScrollMode=t;this._contentPos={top:0,left:0};this._currentIndex=0;this._currentScrollPos={x:0,y:0};this.requestUpdate("scrollMode",e);this.updateLayout()}}_updateOverflowSettings(){if(!1!==this.virtualMode)this._overflowSettings={horizontal:"hidden",vertical:"hidden"};else if(this._currentScrollMode===IntegralUIScrollMode.Horizontal)this._overflowSettings={horizontal:"auto",vertical:"hidden"};else this._overflowSettings={horizontal:"hidden",vertical:"auto"}}_processAddItemGeneral(t,e,i,s,r,l){let o=this;return new Promise(h=>{if(!0!==o._invokeEvent("itemAdding",{cancel:!1,item:e}).cancel){let c=Array.isArray(e)?e:[e];o._addItemToList(t,c,i,s,r,l);o._processItemAdd(e,s);let n=o._dragDropService.getData();if(n.source){o._invokeEvent("itemAdded",{index:i,item:e});h()}else if(o._isUpdateAllowed)setTimeout(async function(){if(!n.source){if(0===o._scrollItemList.length){o.update();o._updateClientRect()}await o._processUpdateCurrentLayout()}o._invokeEvent("itemAdded",{index:i,item:e});h()},1);else{o._invokeEvent("itemAdded",{index:i,item:e});h()}}else h()})}_addItemToCurrentList(t){t.type="item";if(!t[this._options.dataFields.id])t[this._options.dataFields.id]=this._commonService.getUniqueId();if(this._isItemAllowed(t))this._currentList.push({data:t})}async _callEventAdd(t,e,i,s,r,l){return this._processAddItemGeneral(t,e,i,s,r,l)}async _callEventClear(t){this._dataService.clear(t);this._invokeEvent("clear",{parent:t});this._internalUpdateCurrentLayout();return Promise.resolve()}async _callEventRemove(t,e,i){return this._processRemoveItemGeneral(t,e,i)}loadData(t,e){this._processLoadData(t,null,e)}_updateCurrentList(){this._currentList.length=0;let t=this._dataService.getList();if(t)(t=this._applySorting(t)).map(t=>this._addItemToCurrentList(t))}_updateScrollItemList(t){this._resetScrollItemList();this._scrollItemList.length=0;this.update();let e={x:this._ctrlPadding.left,y:this._ctrlPadding.top},i=1,s=this._currentIndex,r=0;for(;s+r<this._currentList.length&&s<this._currentIndex+this._visibleRange;){let l=this._currentList[s+r];if(!this._isItemDragged(l.data)){let r={clickPos:{x:0,y:0},data:l.data,index:s-this._currentIndex,position:{x:this._ctrlPadding.left,y:this._ctrlPadding.top},inlineStyle:this._getItemInlineStyle(l),size:{width:this._currentItemSize.width,height:this._currentItemSize.height},style:{},tabIndex:i};if(this._currentScrollMode===IntegralUIScrollMode.Horizontal){if(t&&l.data===t){if(e.y+this._currentItemSize.height>this._clientSpace.height)e={x:e.x+this._currentItemSize.width,y:this._ctrlPadding.top};e.y+=this._currentItemSize.height}if(e.y+this._currentItemSize.height>this._clientSpace.height)e={x:e.x+this._currentItemSize.width,y:this._ctrlPadding.top};r.position={x:e.x,y:e.y};r.targetPosition={x:e.x,y:e.y};e.y+=this._currentItemSize.height}else{if(t&&l.data===t){if(e.x+this._currentItemSize.width>this._clientSpace.width)e={x:this._ctrlPadding.left,y:e.y+this._currentItemSize.height};e.x+=this._currentItemSize.width}if(e.x+this._currentItemSize.width>this._clientSpace.width)e={x:this._ctrlPadding.left,y:e.y+this._currentItemSize.height};r.position={x:e.x,y:e.y};r.targetPosition={x:e.x,y:e.y};e.x+=this._currentItemSize.width}this._updateItemStyle(r);this._scrollItemList.push(r);s++;i++}else r++}}_itemDragOver(t,e,i,s){if(this._isEnabled&&this._currentDragDropMode===IntegralUIDragDropMode.Static){let r=this._getItemElemList();if(r&&i>=0&&i<r.length){let l=this._commonService.getPageRect(r[i]),o={x:l.left,y:l.top,width:l.right-l.left,height:l.bottom-l.top};this._processDragOverStatic(t,e.data,o,s,this._currentScrollMode===IntegralUIScrollMode.Horizontal?"vertical":"horizontal")}t.stopPropagation()}}_processDownArrowKey(t,e){let i=this._getDownItem(t);if(i){let t=this,s=setTimeout(function(){t._processSelection(e,i.data);clearTimeout(s)},1),r=Math.floor(this._visibleRange/2);if(t._currentScrollMode===IntegralUIScrollMode.Horizontal){if(i.index>=r-this._itemsPerColumn)this.scrollPos({x:this._currentScrollPos.x+this._currentItemSize.width,y:this._currentScrollPos.y})}else if(i.index>=r-this._itemsPerRow)this.scrollPos({x:this._currentScrollPos.x,y:this._currentScrollPos.y+this._currentItemSize.height});this.focusedItem=i.data}return i}_processEndKey(t,e){let i=null,s=this;if(s._scrollItemList.length>0){if(s._currentScrollMode===IntegralUIScrollMode.Horizontal)s.scrollPos({x:s._maxScrollPos.x,y:s._currentScrollPos.y});else s.scrollPos({x:s._currentScrollPos.x,y:s._maxScrollPos.y});setTimeout(function(){i=s._scrollItemList[s._scrollItemList.length-1];s.focusedItem=i.data;let t=setTimeout(function(){s._processSelection(e,i.data);clearTimeout(t)},1)},1)}return i}_processHomeKey(t,e){let i=null,s=this;if(s._scrollItemList.length>0){if(s._currentScrollMode===IntegralUIScrollMode.Horizontal)s.scrollPos({x:0,y:s._currentScrollPos.y});else s.scrollPos({x:s._currentScrollPos.x,y:0});setTimeout(function(){i=s._scrollItemList[0];s.focusedItem=i.data;let t=setTimeout(function(){s._processSelection(e,i.data);clearTimeout(t)},1)},1)}return i}_processLeftArrowKey(t,e){let i=this._getLeftItem(t);if(i){let t=this,s=setTimeout(function(){t._processSelection(e,i.data);clearTimeout(s)},1);if(t._currentScrollMode===IntegralUIScrollMode.Horizontal){if(i.index<this._itemsPerColumn)this.scrollPos({x:this._currentScrollPos.x-this._currentItemSize.width,y:this._currentScrollPos.y})}else if(i.index<this._itemsPerRow)this.scrollPos({x:this._currentScrollPos.x,y:this._currentScrollPos.y-this._currentItemSize.height});t.focusedItem=i.data}return i}_processPageDownKey(t,e){let i=null,s=this;if(s._scrollItemList.length>0){let r=0;if(s._currentScrollMode===IntegralUIScrollMode.Horizontal){r=Math.floor((s._visibleRange-2*s._itemsPerColumn)/2);if(s._itemsPerColumn>0)s.scrollPos({x:s._currentScrollPos.x+Math.floor(r*s._currentItemSize.width/s._itemsPerColumn),y:s._currentScrollPos.y})}else{r=Math.floor((s._visibleRange-2*s._itemsPerRow)/2);if(s._itemsPerRow>0)s.scrollPos({x:s._currentScrollPos.x,y:s._currentScrollPos.y+Math.floor(r*s._currentItemSize.height/s._itemsPerRow)})}setTimeout(function(){let r=t.index>=0&&t.index<s._scrollItemList.length?t.index:s._scrollItemList.length-1;r=s._currentScrollMode===IntegralUIScrollMode.Horizontal?s._currentScrollPos.x===s._maxScrollPos.x?s._scrollItemList.length-1:r:s._currentScrollPos.y===s._maxScrollPos.y?s._scrollItemList.length-1:r;i=s._scrollItemList[r];s.focusedItem=i.data;let l=setTimeout(function(){s._processSelection(e,i.data);clearTimeout(l)},1)},1)}return i}_processPageUpKey(t,e){let i=null,s=this;if(s._scrollItemList.length>0){let r=0;if(s._currentScrollMode===IntegralUIScrollMode.Horizontal){r=Math.floor((this._visibleRange-2*this._itemsPerColumn)/2);if(s._itemsPerColumn>0)s.scrollPos({x:s._currentScrollPos.x-Math.floor(r*s._currentItemSize.width/this._itemsPerColumn),y:s._currentScrollPos.y})}else{r=Math.floor((this._visibleRange-2*this._itemsPerRow)/2);if(s._itemsPerRow>0)s.scrollPos({x:s._currentScrollPos.x,y:s._currentScrollPos.y-Math.floor(r*s._currentItemSize.height/this._itemsPerRow)})}setTimeout(function(){let r=t.index>=0&&t.index<s._scrollItemList.length?t.index:0;r=s._currentScrollMode===IntegralUIScrollMode.Horizontal?0===s._currentScrollPos.x?0:r:0===s._currentScrollPos.y?0:r;i=s._scrollItemList[r];s.focusedItem=i.data;let l=setTimeout(function(){s._processSelection(e,i.data);clearTimeout(l)},1)},1)}return i}_processRightArrowKey(t,e){let i=this._getRightItem(t);if(i){let t=this,s=setTimeout(function(){t._processSelection(e,i.data);clearTimeout(s)},1),r=Math.floor(this._visibleRange/2);if(t._currentScrollMode===IntegralUIScrollMode.Horizontal){if(i.index>=r-this._itemsPerColumn)this.scrollPos({x:this._currentScrollPos.x+this._currentItemSize.width,y:this._currentScrollPos.y})}else if(i.index>=r-this._itemsPerRow)this.scrollPos({x:this._currentScrollPos.x,y:this._currentScrollPos.y+this._currentItemSize.height});t.focusedItem=i.data}return i}_processUpArrowKey(t,e){let i=this._getUpItem(t);if(i){let t=this,s=setTimeout(function(){t._processSelection(e,i.data);clearTimeout(s)},1);if(t._currentScrollMode===IntegralUIScrollMode.Horizontal){if(i.index<this._itemsPerColumn)this.scrollPos({x:this._currentScrollPos.x-this._currentItemSize.width,y:this._currentScrollPos.y})}else if(i.index<this._itemsPerRow)this.scrollPos({x:this._currentScrollPos.x,y:this._currentScrollPos.y-this._currentItemSize.height});t.focusedItem=i.data}return i}_getDownItem(t){let e=t.index>=0&&t.index<this._scrollItemList.length-1?t.index+1:-1;if(this._currentScrollMode!==IntegralUIScrollMode.Horizontal)e=(e=t.index+this._itemsPerRow)>=0&&e<this._scrollItemList.length?e:-1;return e>=0?this._scrollItemList[e]:null}_getLeftItem(t){let e=t.index-this._itemsPerColumn;e=e>=0&&e<this._scrollItemList.length?e:-1;if(this._currentScrollMode!==IntegralUIScrollMode.Horizontal)e=t.index>0?t.index-1:-1;return e>=0&&e<this._scrollItemList.length?this._scrollItemList[e]:null}_getRightItem(t){let e=t.index+this._itemsPerColumn;e=e>=0&&e<this._scrollItemList.length?e:-1;if(this._currentScrollMode!==IntegralUIScrollMode.Horizontal)e=t.index>=0&&t.index<this._scrollItemList.length-1?t.index+1:-1;return e>=0&&e<this._scrollItemList.length?this._scrollItemList[e]:null}_getUpItem(t){let e=t.index>0?t.index-1:-1;if(this._currentScrollMode!==IntegralUIScrollMode.Horizontal)e=(e=t.index-this._itemsPerRow)>=0&&e<this._scrollItemList.length?e:-1;return e>=0?this._scrollItemList[e]:null}_itemMouseDown(t,e){if(this._isEnabled){this._isItemClicked=!0;if(this._options.allowFocus&&1===t.which)this.focusedItem=e.data;this._processSelection(t,e.data);if(this._prevClickedObj)this._prevClickedObj.isClicked=!1;e.isClicked=!0;let i=this._commonService.getShiftPos(),s=this._commonService.getMousePos(t);s.x-=i.x;s.y-=i.y;let r=this._commonService.getPageRect(this._elemRef);e.clickPos.x=Math.abs(s.x-r.left-e.position.x);this._prevClickedObj=e}t.stopPropagation()}_getContentSize(){return this.contentElem?{width:this.contentElem.offsetWidth,height:this.contentElem.offsetHeight}:{width:0,height:0}}_processUpdateCurrentLayout(){let t=this;return new Promise(e=>{if(t._isAnimationAllowed||t._isUpdateAllowed){let e=t._currentFocusObj?t._currentFocusObj.data:null;t._currentCtrlSize={width:t._clientRect.width,height:t._clientRect.height};t._updateClientRect();t._updateCurrentList();t.updateFullList();t._updateScrollItemList();t.update();t._updateScrollSize();t._updateBlockSize();t._updateItemElems();t._updateVisibleRange();t._updateScrollItemList();if(t._isAutoSized){t._clientRect.height=t._visibleRange*t._avgItemHeight;t._updateCtrlSize(10)}if(e)t.focusedItem=e;t.update();t._updateItemElems()}e()})}_processUpdateLayout(){let t=this;t._ut();if(!t._tCmp)t._at();return new Promise(e=>{if(t._isUpdateAllowed){let i=t._currentFocusObj?t._currentFocusObj.data:null;t._updateOverflowSettings();t._resetLayoutTimer();t._updateTimer=setTimeout(function(){t._updateCurrentList();t.updateFullList();t._ctrlPadding=t._commonService.getPadding(t._elemRef);if(0===t._currentList.length)t._currentScrollPos={x:0,y:0};t._clientRect={width:t._elemRef.clientWidth,height:t._elemRef.clientHeight};t._updateScrollItemList();t.update();setTimeout(function(){t._updateItemElems();t._updateBlockSize();t._avgItemHeight=t._currentItemSize.height;t._animateItemSize={width:t._currentItemSize.width,height:t._currentItemSize.height};t._updateScrollSize();t._updateVisibleRange();t._updateScrollItemList();t.refresh();if(i)t.focusedItem=i;t._updateItemElems();t._invokeEvent("updateComplete");e()},1);clearTimeout(t._updateTimer)},1)}else e()})}_updateScrollLayout(){if(0===this._currentList.length)this._currentScrollPos={x:0,y:0};this._clientRect={width:this._elemRef.clientWidth,height:this._elemRef.clientHeight};this._updateScrollSize();this._updateVisibleRange();this._updateScrollItemList();this.refresh();this._updateItemElems();this.update()}_updateScrollSize(){let t=this;t._contentSize={width:t._clientRect.width,height:t._clientRect.height};if(this._currentScrollMode===IntegralUIScrollMode.Horizontal){this._itemsPerColumn=Math.floor(this._clientRect.height/this._currentItemSize.height);let e=this._itemsPerColumn>0?this._currentList.length/this._itemsPerColumn:0;this._numColumns=Math.floor(e);if(this._numColumns<e)this._numColumns++;let i=this._numColumns*this._currentItemSize.width-t._clientRect.width+2;if(i>0){this._itemsPerColumn=Math.floor((this._clientRect.height-16)/this._currentItemSize.height);e=this._itemsPerColumn>0?this._currentList.length/this._itemsPerColumn:0;this._numColumns=Math.floor(e);if(this._numColumns<e)this._numColumns++;i=this._numColumns*this._currentItemSize.width-t._clientRect.width+2}t._scrollSize.width=i;t._contentSize.width+=this._currentItemSize.width}else{this._itemsPerRow=Math.floor(this._clientRect.width/this._currentItemSize.width);let e=this._itemsPerRow>0?this._currentList.length/this._itemsPerRow:0;this._numRows=Math.floor(e);if(this._numRows<e)this._numRows++;let i=this._numRows*this._currentItemSize.height-t._clientRect.height+2;if(i>0){this._itemsPerRow=Math.floor((this._clientRect.width-16)/this._currentItemSize.width);e=this._itemsPerRow>0?this._currentList.length/this._itemsPerRow:0;this._numRows=Math.floor(e);if(this._numRows<e)this._numRows++;i=this._numRows*this._currentItemSize.height-t._clientRect.height+2}t._scrollSize.height=i;t._contentSize.height+=this._currentItemSize.height}if(t.isVerScrollVisible()){t._contentSize.width-=18;if(t._scrollSize.width>0)t._scrollSize.width+=16}if(t.isHorScrollVisible())t._scrollSize.height+=16;t._scrollSize.width=Math.max(0,t._scrollSize.width);t._scrollSize.height=Math.max(0,t._scrollSize.height);t._maxScrollPos={x:t._scrollSize.width,y:t._scrollSize.height};if(t._currentScrollPos.x>t._maxScrollPos.x)t._changeHorizontalScrollPos(t._maxScrollPos.x);if(t._currentScrollPos.y>t._maxScrollPos.y)t._changeVerticalScrollPos(t._maxScrollPos.y);t._scrollBarSize={width:t.isVerScrollVisible()?t._clientRect.width-16:t._clientRect.width,height:t.isHorScrollVisible()?t._clientRect.height-16:t._clientRect.height};if(t._currentScrollAppearance===IntegralUIComponentAppearance.Static){t._scrollBarSize.width-=4;t._scrollBarSize.height-=4}else{if(t.isVerScrollVisible())t._scrollBarSize.height+=2;if(t.isHorScrollVisible())t._scrollBarSize.width+=2;if(t.isVerScrollVisible()&&t.isHorScrollVisible()){t._scrollBarSize.width+=5;t._scrollBarSize.height+=5}}t._scrollLargeChange={x:t._scrollBarSize.width,y:t._scrollBarSize.height};t._clientSpace={width:t._clientRect.width,height:t._clientRect.height};if(t.isHorScrollVisible())t._clientSpace.height-=16;if(t.isVerScrollVisible())t._clientSpace.width-=16}_updateVisibleRange(){this._visibleRange=1;let t=this._getItemElemList();if(t&&t.length>0)if(this._currentScrollMode===IntegralUIScrollMode.Horizontal)this._visibleRange=2*Math.floor(this._clientSpace.height/this._currentItemSize.height)*(Math.floor(this._clientSpace.width/this._currentItemSize.width)+1);else this._visibleRange=2*(Math.floor(this._clientSpace.height/this._currentItemSize.height)+1)*Math.floor(this._clientSpace.width/this._currentItemSize.width)}_changeHorizontalScrollPos(t){this._currentScrollPos.x=Math.max(0,Math.min(t,this._maxScrollPos.x));if(this._currentScrollPos.x!==this._prevScrollPos.x){this.updateView();this._invokeEvent("scrollPosChanged",{value:this.scrollPos()});this._prevScrollPos.x=this._currentScrollPos.x}}isVerScrollVisible(){if(!this.virtualMode||this._currentScrollMode===IntegralUIScrollMode.Horizontal)return!1;else return this._isEnabled&&this._scrollSize.height>0?!0:!1}isHorScrollVisible(){if(!this.virtualMode||this._currentScrollMode===IntegralUIScrollMode.Vertical)return!1;else return this._isEnabled&&this._scrollSize.width>0?!0:!1}_onHorizontalScrollChanged(t){this._changeHorizontalScrollPos(t.detail.value)}updateView(){if(this._currentScrollMode===IntegralUIScrollMode.Horizontal){let t=Math.floor(this._clientSpace.height/this._currentItemSize.height),e=Math.floor(this._currentScrollPos.x/this._currentItemSize.width);this._contentPos.left=this._currentScrollPos.x-e*this._currentItemSize.width;this._currentIndex=e*t;this.update()}else{let t=Math.floor(this._clientSpace.width/this._currentItemSize.width),e=Math.floor(this._currentScrollPos.y/this._currentItemSize.height);this._contentPos.top=this._currentScrollPos.y-e*this._currentItemSize.height;this._currentIndex=e*t;this.update()}if(this._currentIndex!==this._prevIndex){this._updateScrollItemList();this._prevIndex=this._currentIndex;this.update();this._updateItemElems()}}_listViewMouseWheel(t){if(this._isEnabled)this._processMouseWheel(t,this._currentScrollMode===IntegralUIScrollMode.Horizontal)}scrollTo(t,e){if(!1!==this.virtualMode&&t){let i=this._getItemCurrentIndex(t);if(i>=0){let t=0;if(this._currentScrollMode===IntegralUIScrollMode.Horizontal){if(this._itemsPerColumn>0&&this._currentItemSize.width>0){t=this._currentScrollPos.x-this._currentItemSize.width*Math.floor(this._currentScrollPos.x/this._currentItemSize.width);this.scrollPos({x:void 0!==e?this._currentItemSize.width*((i-e)/this._itemsPerColumn)+t:this._currentItemSize.width*(i/this._itemsPerColumn-Math.floor(this._clientSpace.width/this._currentItemSize.width)+1),y:this._currentScrollPos.y})}}else if(this._itemsPerRow>0&&this._currentItemSize.height>0){t=this._currentScrollPos.y-this._currentItemSize.height*Math.floor(this._currentScrollPos.y/this._currentItemSize.height);this.scrollPos({x:this._currentScrollPos.x,y:void 0!==e?this._currentItemSize.height*((i-e)/this._itemsPerRow)+t:this._currentItemSize.height*(i/this._itemsPerRow-Math.floor(this._clientSpace.height/this._currentItemSize.height)+1)})}this.updateLayout()}}}_getAppliedItemStyle(t){let e=this._commonService.getStyle(t.inlineStyle),i={...e.normal}||{};if(!this._isItemEnabled(t.data))i={...e.disabled}||{};else if(this._isItemSelected(t.data))i={...e.selected}||{};else if(this._isItemHovered(t.data))i={...e.hovered}||{};i.position="absolute";if(t.position){i.top=t.position.y+"px";i.left=t.position.x+"px"}i.width=this._currentItemSize.width-(this._currentItemBorder.left+this._currentItemBorder.right)-(this._currentItemPadding.left+this._currentItemPadding.right)+"px";i.height=this._currentItemSize.height-(this._currentItemBorder.top+this._currentItemBorder.bottom)-(this._currentItemPadding.top+this._currentItemPadding.bottom)+"px";return i}_getControlStyle(){let t=this._currentInlineStyle||{};t.cursor=this._ctrlCursor;t["overflow-x"]=this._overflowSettings.horizontal;t["overflow-y"]=this._overflowSettings.vertical;if(this._ctrlSize.width>0)t.width=this._ctrlSize.width+"px";if(this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";return t}_getDefaultListStyle(){return{general:this._getDefaultGeneralStyle(),item:this._getDefaultItemStyle()}}_updateColorSchemeSettings(t){this._currentBaseColorSchemeSettings=css``;this._currentColorSchemeSettings=css``;this._currentItemColorSchemeSettings=css``;this._currentScrollColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentBaseColorSchemeSettings.cssText=this._commonService.replaceAll(iuiDarkStyle.cssText,"../../../icons",this._currentResourcePath);this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiListViewDarkStyle.cssText,"../../../icons",this._currentResourcePath);this._currentItemColorSchemeSettings.cssText=this._commonService.replaceAll(iuiListItemDarkStyle.cssText,"../../../icons",this._currentResourcePath);this._currentScrollColorSchemeSettings.cssText=this._commonService.replaceAll(iuiScrollBarDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentBaseColorSchemeSettings.cssText=this._commonService.replaceAll(iuiLightStyle.cssText,"../../../icons",this._currentResourcePath);this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiListViewLightStyle.cssText,"../../../icons",this._currentResourcePath);this._currentItemColorSchemeSettings.cssText=this._commonService.replaceAll(iuiListItemLightStyle.cssText,"../../../icons",this._currentResourcePath);this._currentScrollColorSchemeSettings.cssText=this._commonService.replaceAll(iuiScrollBarLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentBaseColorSchemeSettings.cssText="";this._currentColorSchemeSettings.cssText="";this._currentItemColorSchemeSettings.cssText="";this._currentScrollColorSchemeSettings.cssText=""}}_updateThemeSettings(t){this._currentThemeSettings=css``;this._currentItemThemeSettings=css``;this._currentScrollStyleSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiListViewOfficeStyle.cssText,"../../../icons",this._currentResourcePath);this._currentItemThemeSettings.cssText=this._commonService.replaceAll(iuiListItemOfficeStyle.cssText,"../../../icons",this._currentResourcePath);this._currentScrollStyleSettings.cssText=this._commonService.replaceAll(iuiScrollBarOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText="";this._currentItemThemeSettings.cssText="";this._currentScrollStyleSettings.cssText=this._commonService.replaceAll(iuiScrollBarStyle.cssText,"../../icons",this._currentResourcePath)}}_calcDragMoveSpace(){return Math.floor(.25*Math.min(this._currentItemSize.width,this._currentItemSize.height))}_getDragDropTarget(t){let e=null,i=this._dragDropService.getData(),s=!1,r=[...this._scrollItemList];if(this._currentDragPos.y>this._prevDragPos.y||this._currentDragPos.x>this._prevDragPos.x){s=!0;if(this._currentScrollMode===IntegralUIScrollMode.Horizontal)r=r.filter((t,e)=>this._dragListPos.left+this._dragListSize.width>t.position.x+this._dragMoveSpace&&this._dragListPos.left<t.position.x+this._dragMoveSpace);else r=r.filter((t,e)=>this._dragListPos.top+this._dragListSize.height>t.position.y+this._dragMoveSpace&&this._dragListPos.top<t.position.y+this._dragMoveSpace)}else if(this._currentDragPos.y<this._prevDragPos.y||this._currentDragPos.x<this._prevDragPos.x){s=!0;if(this._currentScrollMode===IntegralUIScrollMode.Horizontal)r=r.filter((t,e)=>this._dragListPos.left<t.position.x+t.size.width-this._dragMoveSpace&&this._dragListPos.left+this._dragListSize.width>t.position.x+t.size.width-this._dragMoveSpace);else r=r.filter((t,e)=>this._dragListPos.top<t.position.y+t.size.height-this._dragMoveSpace&&this._dragListPos.top+this._dragListSize.height>t.position.y+t.size.height-this._dragMoveSpace)}if(this._currentScrollMode===IntegralUIScrollMode.Horizontal){if(s)if(this._currentDragPos.y>this._prevDragPos.y)for(let s=r.length-1;s>=0;s--){let l=r[s];e=l.data;if(this._dragListPos.top+this._dragListSize.height>l.position.y+this._dragMoveSpace){this._dragListIndex=this._scrollItemList.indexOf(l)+1;this._dropPos=2;if(t=this._isDropAllowed(i.source,e)){this._dragTargetIndex=this._dragListIndex-1;break}}}else if(this._currentDragPos.y<this._prevDragPos.y)for(let s=0;s<r.length;s++){let l=r[s];e=l.data;if(this._dragListPos.top<l.position.y+l.size.height-this._dragMoveSpace){this._dragListIndex=this._scrollItemList.indexOf(l);this._dropPos=1;if(this._currentDragPos.x>this._prevDragPos.x)this._dragListIndex+=1;if(t=this._isDropAllowed(i.source,e)){this._dragTargetIndex=this._dragListIndex;break}}}}else if(s)if(this._currentDragPos.x>this._prevDragPos.x)for(let s=r.length-1;s>=0;s--){let l=r[s];e=l.data;if(this._dragListPos.left+this._dragListSize.width>l.position.x+this._dragMoveSpace){this._dragListIndex=this._scrollItemList.indexOf(l)+1;this._dropPos=2;if(t=this._isDropAllowed(i.source,e)){this._dragTargetIndex=this._dragListIndex-1;break}}}else if(this._currentDragPos.x<this._prevDragPos.x)for(let s=0;s<r.length;s++){let l=r[s];e=l.data;if(this._dragListPos.left<l.position.x+l.size.width-this._dragMoveSpace){this._dragListIndex=this._scrollItemList.indexOf(l);this._dropPos=1;if(this._currentDragPos.y>this._prevDragPos.y)this._dragListIndex+=1;if(t=this._isDropAllowed(i.source,e)){this._dragTargetIndex=this._dragListIndex;break}}}return{pass:t,target:e}}_getDragTemplate(t){return html`             <li class=${classMap({[this._itemClassName]:!0})} style=${styleMap({width:this._currentItemSize.width-(this._currentItemBorder.left+this._currentItemBorder.right)-(this._currentItemPadding.left+this._currentItemPadding.right)+"px",height:this._currentItemSize.width-(this._currentItemBorder.top+this._currentItemBorder.bottom)-(this._currentItemPadding.top+this._currentItemPadding.bottom)+"px"})}>                 <div class=${classMap({[this._itemContentClassName]:!0})}>                     <div style=${styleMap({overflow:"hidden",textOverflow:"ellipsis"})}>                         ${this._getItemTemplate(t.data)}                     </div>                 </div>             </li>`}_updateDragItemPos(){if(this._dragListIndex>=0){let t={x:this._ctrlPadding.left,y:this._ctrlPadding.top},e=0;if(this._currentScrollMode===IntegralUIScrollMode.Horizontal)for(e=0;e<this._scrollItemList.length;e++){let i=this._scrollItemList[e];if(e===this._dragListIndex){if(t.y+this._currentItemSize.height>this._clientSpace.height)t={x:t.x+this._currentItemSize.width,y:this._ctrlPadding.top};t.y+=this._currentItemSize.height}if(t.y+this._currentItemSize.height>this._clientSpace.height)t={x:t.x+this._currentItemSize.width,y:this._ctrlPadding.top};if(0===this._activeAnimations.filter(t=>t.isAnimated(i)).length)this._animateTarget(i,t);t.y+=this._currentItemSize.height}else for(e=0;e<this._scrollItemList.length;e++){let i=this._scrollItemList[e];if(e===this._dragListIndex){if(t.x+this._currentItemSize.width>this._clientSpace.width)t={x:this._ctrlPadding.left,y:t.y+this._currentItemSize.height};t.x+=this._currentItemSize.width}if(t.x+this._currentItemSize.width>this._clientSpace.width)t={x:this._ctrlPadding.left,y:t.y+this._currentItemSize.height};if(0===this._activeAnimations.filter(t=>t.isAnimated(i)).length)this._animateTarget(i,t);t.x+=this._currentItemSize.width}}}_updateDragListSize(){this._dragListSize={width:this._currentItemSize.width-4,height:this._currentItemSize.height-4}}firstUpdated(t){this._updateReferences();this.updateLayout()}updated(t){t.forEach((t,e)=>{});this._updateFocusItem()}render(){return html`             <style>                 ${iuiScrollBarStyle}                 ${this._currentBaseStyleSettings}                 ${this._currentBaseColorSchemeSettings}                 ${this._currentScrollStyleSettings}                 ${this._currentControlStyleSettings}                 ${this._currentItemStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentItemThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentItemColorSchemeSettings}                 ${this._currentScrollColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="listview" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @DOMMouseScroll="${t=>this._listViewMouseWheel(t)}" @mousewheel="${t=>this._listViewMouseWheel(t)}" @mouseenter="${t=>this._ctrlMouseEnter(t)}" @mouseleave="${t=>this._ctrlMouseLeave(t)}" @dragenter="${t=>this._ctrlDragEnter(t)}" @dragleave="${t=>this._ctrlDragLeave(t)}" @dragover="${t=>this._ctrlDragOver(t)}" @drop="${t=>this._ctrlDragDrop(t)}" @dragend="${t=>this._ctrlDragEnd(t)}" @scroll="${t=>this._onScroll(t)}">                 <div class=${classMap({"iui-base-loading":this._isLoading?!0:!1,"iui-base-loading-end":this._isLoadingEnd?!0:!1})}>                     <ul id="content" @touchstart="${t=>this._ctrlTouchStart(t)}" @touchend="${t=>this._ctrlTouchEnd(t)}" style=${styleMap({left:-this._contentPos.left+"px",top:-this._contentPos.top+"px",width:this._contentSize.width+"px",height:this._contentSize.height+"px",position:"absolute",margin:0,padding:0})}>                         ${this._scrollItemList.map((t,e)=>html`                             <li data-item class=${classMap(t.style.general)} style=${styleMap(this._getAppliedItemStyle(t))} @click="${e=>this._itemClickEvent(e,t)}" @dblclick="${e=>this._itemDblClickEvent(e,t)}" @contextmenu="${e=>this._itemRightClickEvent(e,t)}" @mouseenter="${e=>this._itemMouseEnter(e,t)}" @mouseleave="${e=>this._itemMouseLeave(e,t)}" @mousedown="${e=>this._itemMouseDown(e,t)}" @mouseup="${e=>this._itemMouseUp(e,t)}" draggable="true" @dragstart="${i=>this._itemDragStart(i,t,e)}" @dragover="${i=>this._itemDragOver(i,t,e,!0)}" @drop="${e=>this._itemDragDrop(e,t)}" @dragend="${t=>this._ctrlDragEnd(t)}" @touchstart="${e=>this._itemTouchStart(e,t)}" @touchmove="${e=>this._itemTouchMove(e,t)}" @touchend="${e=>this._itemTouchEnd(e,t)}">                                 <div data-item-content class=${classMap(t.style.content)} tabindex="${t.tabIndex}" @focus="${e=>this._itemGotFocus(t)}" @blur="${e=>this._itemLostFocus(t)}" @keydown="${e=>this._itemKeyDown(e,t)}" @keypress="${e=>this._itemKeyPress(e,t)}" @keyup="${e=>this._itemKeyUp(e,t)}">                                     <div class="iui-listitem-content-block">                                         ${this._getItemTemplate(t.data)}                                     </div>                                 </div>                             </li>                         `)}                     </ul>                     ${this.isVerScrollVisible()?html`<iui-scrollbar id="ver-scroll" .allowAnimation="${this._isAnimationAllowed}" .appearance="${this._currentScrollAppearance}" .colorScheme="${this._currentColorScheme}" .enabled="${this.enabled}" .value="${this._currentScrollPos.y}" .max="${this._maxScrollPos.y}" .largeChange="${this._scrollLargeChange.y}" .height="${this._scrollBarSize.height}" .theme="${this._currentTheme}" .visible="${this._isScrollVisible}" @mouseenter="${t=>this._scrollMouseEnter(t)}" @valueChanged="${t=>this._onVerticalScrollChanged(t)}" @scrollStart="${t=>this._onVerticalScrollStart(t)}" @scrollEnd="${t=>this._onVerticalScrollEnd(t)}"></iui-scrollbar>`:html``}                     ${this.isHorScrollVisible()?html`<iui-scrollbar id="hor-scroll" .allowAnimation="${this._isAnimationAllowed}" .appearance="${this._currentScrollAppearance}" .colorScheme="${this._currentColorScheme}" .enabled="${this.enabled}" orientation="Horizontal" .value="${this._currentScrollPos.x}" .max="${this._maxScrollPos.x}" .width="${this._scrollBarSize.width}" .theme="${this._currentTheme}" .visible="${this._isScrollVisible}" @mouseenter="${t=>this._scrollMouseEnter(t)}" @valueChanged="${t=>this._onHorizontalScrollChanged(t)}" @scrollStart="${t=>this._onHorizontalScrollStart(t)}" @scrollEnd="${t=>this._onHorizontalScrollEnd(t)}"></iui-scrollbar>`:html``}                     ${this.isVerScrollVisible()&&this.isHorScrollVisible()?html`<div class=${classMap(this._getScrollCornerClass())}></div>`:html``}                 </div>                 ${this._isDragActive&&this._isCtrlDragEntered?html`<div id="drag-content" class=${classMap(this._getDragListClass())} style=${styleMap({left:this._dragListPos.left+"px",top:this._dragListPos.top+"px",width:this._currentItemSize.width-(this._currentItemBorder.left+this._currentItemBorder.right)-(this._currentItemPadding.left+this._currentItemPadding.right)+"px",height:this._currentItemSize.height-(this._currentItemBorder.top+this._currentItemBorder.bottom)-(this._currentItemPadding.top+this._currentItemPadding.bottom)+2+"px"})}>                             ${this._isDragCopy?html`<span class="iui-draglist-copy" style=${styleMap({top:1===this._currentDragItems?this._dragListSize.height/2-8+"px":"3px",left:this._dragListSize.width/2-8+"px"})}></span>`:html``}                             <ul style=${styleMap({margin:0,padding:0})}>                                 ${this._dragItemList.filter((t,e)=>e<this._maxDragItems).map((t,e)=>html`                                     ${this._getDragTemplate(t)}                                 `)}                             </ul>                             ${this._totalDragItems>this._currentDragItems?html`<div class="iui-draglist-corner">                                         <div class="iui-draglist-corner-block"></div>                                         <div class="iui-draglist-num">+${this._totalDragItems-this._currentDragItems}</div>                                     </div>`:html``}                         </div>`:html``}                 ${this._isLoading?html`<div class="iui-loading-icon" style=${styleMap({top:this._loadIconPos.top+"px",left:this._loadIconPos.left+"px"})}></div>`:html``}             </div>         `}_updateControlStyleSettings(t){this._currentBaseStyleSettings=css``;this._currentBaseStyleSettings.cssText=this._commonService.replaceAll(iuiBaseDefaultStyle.cssText,"../../icons",t);this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiListViewDefaultStyle.cssText,"../../icons",t);this._currentItemStyleSettings=css``;this._currentItemStyleSettings.cssText=this._commonService.replaceAll(iuiListItemDefaultStyle.cssText,"../../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=listview]");this._contentElem=this.shadowRoot.querySelector("#content");if(this._resizeObserver)this._resizeObserver.observe(this._elemRef)}}window.customElements.define("iui-listview",IntegralUIListView);export default IntegralUIListView;