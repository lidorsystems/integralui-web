/*
  filename: integralui.listbox.js
  version : 24.1.0
  Copyright © 2016-2024 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{L,c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIAnimation from"./integralui.animation.js";import IntegralUIBaseList from"./integralui.base.list.js";import"./integralui.scrollbar.js";import{IntegralUIColorScheme,IntegralUIComponentAppearance,IntegralUIMoveDirection,IntegralUITheme}from"./integralui.enums.js";import{iuiBaseDefaultStyle}from"../styles/default/integralui.style.js";import{iuiDarkStyle}from"../styles/color-schemes/dark/integralui.dark.js";import{iuiLightStyle}from"../styles/color-schemes/light/integralui.light.js";import{iuiListBoxDefaultStyle}from"../styles/default/integralui.listbox.style.js";import{iuiListBoxOfficeStyle}from"../styles/themes/office/integralui.listbox.office.js";import{iuiListBoxDarkStyle}from"../styles/color-schemes/dark/integralui.listbox.dark.js";import{iuiListBoxLightStyle}from"../styles/color-schemes/light/integralui.listbox.light.js";import{iuiListItemDefaultStyle}from"../styles/default/integralui.listitem.style.js";import{iuiListItemOfficeStyle}from"../styles/themes/office/integralui.listitem.office.js";import{iuiListItemDarkStyle}from"../styles/color-schemes/dark/integralui.listitem.dark.js";import{iuiListItemLightStyle}from"../styles/color-schemes/light/integralui.listitem.light.js";import{iuiScrollBarStyle}from"../styles/default/integralui.scrollbar.style.js";import{iuiScrollBarOfficeStyle}from"../styles/themes/office/integralui.scrollbar.office.js";import{iuiScrollBarDarkStyle}from"../styles/color-schemes/dark/integralui.scrollbar.dark.js";import{iuiScrollBarLightStyle}from"../styles/color-schemes/light/integralui.scrollbar.light.js";class IntegralUIListBox extends IntegralUIBaseList{_init(){super._init();this._isCheckBoxVisible=!1;this._isAutoExpanded=!0;this._isExpandBoxVisible=!0;this._currentBaseColorSchemeSettings=css``;this._currentBaseStyleSettings=iuiBaseDefaultStyle;this._currentControlStyleSettings=iuiListBoxDefaultStyle;this._currentItemColorSchemeSettings=css``;this._currentItemStyleSettings=iuiListItemDefaultStyle;this._currentItemThemeSettings=css``;this._currentScrollColorSchemeSettings=css``;this._currentScrollStyleSettings=iuiScrollBarStyle;this._generalClassName="iui-listbox";this._groupClassName="iui-listgroup";this._groupContentClassName=this._groupClassName+"-content";this._expandBoxClassName=this._groupClassName+"-expand-box";this._itemClassName="iui-listitem";this._itemContentClassName=this._itemClassName+"-content";this._updateOptions();this._initStyle();this._updateData();this._resizeObserver=new ResizeObserver(t=>{let e=this;if(!e._isAnimationInProcess&&t&&t.length>0&&t[0].contentRect){let t=!1;if(e._elemRef)e._updateClientRect();if(e._clientRect.width!==e._prevClientRect.width){e._prevClientRect.width=e._clientRect.width;t=!0}if(e._clientRect.height!==e._prevClientRect.height){e._prevClientRect.height=e._clientRect.height;t=!0}if(t){e._updateScrollLayout();e._invokeEvent("sizeChanged",{size:e._clientRect})}}})}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback();this._stackAdd.length=0;this._stackRemove.length=0;if(this._elemObserver)this._elemObserver.disconnect();this._elemObserver=null;if(this._resizeObserver)this._resizeObserver.disconnect();this._resizeObserver=null;this._removeDropMark();this._resetLayoutTimer();this._rt()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{autoSize:{type:Boolean,attribute:"auto-size",reflect:!0},checkBoxes:{type:Boolean,attribute:"check-boxes",reflect:!1},defaultGroupName:{type:String,attribute:"default-group-name",reflect:!0},groupBy:{type:String,attribute:"group-by",reflect:!0},groups:{type:Array},showExpandBox:{type:Boolean,attribute:"show-expandbox",reflect:!0},showGroups:{type:Boolean,attribute:"show-groups",reflect:!0}}}get autoSize(){return this._isAutoSized}set autoSize(t){if(this._isAutoSized!==t){const e=this._isAutoSized;this._isAutoSized=t;this.requestUpdate("autoSize",e);this._internalUpdateLayout()}}get checkBoxes(){return this._isCheckBoxVisible}set checkBoxes(t){if(this._isCheckBoxVisible!==t){const e=this._isCheckBoxVisible;this._isCheckBoxVisible=t;this.requestUpdate("checkBoxes",e);this._internalUpdateLayout()}}get defaultGroupName(){return this._currentDefaultGroupName}set defaultGroupName(t){if(this._currentDefaultGroupName!==t){const e=this._currentDefaultGroupName;this._currentDefaultGroupName=t;this.requestUpdate("defaultGroupName",e);this._internalUpdateLayout()}}get groupBy(){return this._currentGroupBy}set groupBy(t){if(t&&this._currentGroupBy!==t){const e=this._currentGroupBy;this._currentGroupBy=t;this.requestUpdate("groupBy",e);this._internalUpdateLayout()}}get groups(){return this._dataGroups}set groups(t){if(t&&Array.isArray(t)){const e=this._dataGroups;this._dataGroups=t.concat({[this._options.dataFields.name]:this._currentDefaultGroupName});this._dataGroups.forEach(t=>t.type="group");this.requestUpdate("groups",e)}}get showExpandBox(){return this._isExpandBoxVisible}set showExpandBox(t){if(this._isExpandBoxVisible!==t){const e=this._isExpandBoxVisible;this._isExpandBoxVisible=t;this.requestUpdate("showExpandBox",e);this._internalUpdateLayout()}}get showGroups(){return this._isGroupingEnabled}set showGroups(t){if(this._isGroupingEnabled!==t){const e=this._isGroupingEnabled;this._isGroupingEnabled=t;this.requestUpdate("showGroups",e);this._internalUpdateLayout()}}async _updateItemCollapse(t){let e=this,i=e._getObjFromScrollItem(t);if(i){e._updateItemStyle(i);let s=e._scrollItemList.indexOf(i);if(s<e._scrollItemList.length){let i=e._scrollItemList[s];e._currentCtrlSize.height=e._clientRect.height;e._clientRect.height=(e._currentList.length-t[e._options.dataFields.childCount])*e._avgItemHeight;if(s<e._scrollItemList.length-1){let i=[],l=e._scrollItemList.length-1,r=e._scrollItemList[e._scrollItemList.length-1],o={x:r.position.x,y:r.position.y+e._currentItemSize.height},a=e._getItemCurrentIndex(r.data);if(a>=0){let s=a+1;for(let r=0;r<t[e._options.dataFields.childCount]&&r+s<e._currentList.length;r++){let t={clickPos:{x:0,y:0},data:e._currentList[r+s].data,index:r+l+1,inlineStyle:{},position:{x:o.x,y:o.y},size:{width:0,height:e._currentItemSize.height},targetPosition:{x:o.x,y:o.y},style:{},tabIndex:0,zIndex:0};i.push(t);e._updateItemStyle(t);e._scrollItemList.splice(t.index,0,t);o.y+=e._currentItemSize.height}e.update()}let n=t[e._options.dataFields.childCount]*e._currentItemSize.height;e._moveItemsUpward(e._scrollItemList,s+t[e._options.dataFields.childCount]+1,-n)}let l=[],r=0;for(let o=s+1;o<e._scrollItemList.length&&r<t[e._options.dataFields.childCount];o++,r++){let t=e._scrollItemList[o];t.targetPosition={x:i.position.x,y:i.position.y};l.push(t)}await e._moveItemsUpward(l,0)}}e._internalUpdateCurrentLayout();e._isAnimationInProcess=!1;return Promise.resolve()}async _updateItemExpand(t){let e=this,i=e._getObjFromScrollItem(t);if(i){let s=e._scrollItemList.indexOf(i);if(s<e._scrollItemList.length){let i=e._scrollItemList[s],l={x:i.position.x,y:i.position.y};if(s<e._scrollItemList.length-1){let i=t[e._options.dataFields.childCount]*e._currentItemSize.height;e._moveItemsDownward(e._scrollItemList,s+1,i)}let r=e._currentGroupBy?e._currentGroupBy:e._options.dataFields.group,o=e._fullList.filter(i=>i[r]===t[e._options.dataFields.name]&&e._isItemAllowed(i)),a=[];e._currentCtrlSize.height=e._clientRect.height;e._clientRect.height=(e._currentList.length+o.length)*e._avgItemHeight;for(let t=0;t<o.length;t++){let i={clickPos:{x:0,y:0},data:o[t],index:t+s,inlineStyle:{},position:{x:l.x,y:l.y},size:{width:0,height:e._currentItemSize.height},targetPosition:{x:l.x,y:l.y+(t+1)*e._currentItemSize.height},style:{},tabIndex:0,zIndex:0};a.push(i);e._updateItemStyle(i);e._scrollItemList.splice(i.index,0,i)}await e._moveItemsDownward(a,0)}}e._internalUpdateCurrentLayout();e._isAnimationInProcess=!1;return Promise.resolve()}async _moveItemAt(t,e,i,s){let l=this;if(i===IntegralUIMoveDirection.Before||i===IntegralUIMoveDirection.Up)if(e)s=l._fullList.indexOf(e);else return Promise.resolve();else if(i===IntegralUIMoveDirection.After||i===IntegralUIMoveDirection.Down||i===IntegralUIMoveDirection.Last)if(e)s=l._fullList.indexOf(e);else return Promise.resolve();return new Promise(r=>{let o=t.filter(t=>l._fullList.indexOf(t)>=0);if(l._commonService.isIndexInRange(s,l._fullList)){for(let t=0;t<o.length;t++)l._dataService.removeAt(o[t]);if(i===IntegralUIMoveDirection.At&&s>l._dataService.getList().length)s=l._dataService.getList().length;let t=i===IntegralUIMoveDirection.Before||i===IntegralUIMoveDirection.Up?o:o.toReversed();for(let r=0;r<t.length;r++){let o=t[r];if(i===IntegralUIMoveDirection.First||i===IntegralUIMoveDirection.Right||i===IntegralUIMoveDirection.At)l._dataService.insert(o,s,e);else if(i===IntegralUIMoveDirection.Before||i===IntegralUIMoveDirection.Up)l._dataService.insertByRef(o,e);else if(i===IntegralUIMoveDirection.After||i===IntegralUIMoveDirection.Left||i===IntegralUIMoveDirection.Down||i===IntegralUIMoveDirection.Last)l._dataService.insertByRef(o,e,!0)}let a=l._fullList[s],n=l._fullList.indexOf(a),c=l._getObjFromScrollItem(a),h=l._getItemScrollIndex(c);if(i===IntegralUIMoveDirection.After||i===IntegralUIMoveDirection.Down||i===IntegralUIMoveDirection.Last)h+=1;let d=0;for(let t=0;t<o.length;t++){let e=l._fullList.indexOf(o[t]),i=l._getObjFromScrollItem(o[t]);if(e<n&&!i)d++}setTimeout(async function(){if(l._isAnimationAllowed){l._isAnimationInProcess=!0;if(l._scrollItemList.length>0){let t=l._scrollItemList[0],e=l._scrollItemList.length-1,i=l._scrollItemList[e],s=[];for(let r=0;r<o.length;r++){let a=l._getObjFromItem(o[r]),c=l._fullList.indexOf(o[r]),h=l._getObjFromScrollItem(o[r]);if(h)s.push(h);else{let h={clickPos:{x:0,y:0},data:o[r],indent:a?a.indent:0,index:e+r+1,inlineStyle:{},position:{x:i.position.x,y:i.position.y+l._currentItemSize.height},showCheckBox:l._isItemCheckBoxAllowed(o[r]),showRadioButton:l._isItemRadioButtonAllowed(o[r]),size:{width:0,height:l._currentItemSize.height},targetPosition:{x:i.position.x,y:i.position.y+l._currentItemSize.height},style:{},tabIndex:0,zIndex:0};if(c<n){h.position.y=t.position.y-l._currentItemSize.height;h.targetPosition.y=h.position.y}l._updateItemStyle(h);s.push(h);l._scrollItemList.splice(h.index,0,h)}}l.update();let r=l._scrollItemList.filter(t=>o.indexOf(t.data)<0),a={x:l._ctrlPadding.left,y:l._ctrlPadding.top};for(let t=0;t<l._scrollItemList.length&&t<h+d;t++){let e=l._scrollItemList[t];if(s.indexOf(e)<0){e.targetPosition.y=a.y;a.y+=l._currentItemSize.height}}s.forEach(t=>{t.targetPosition.y=a.y;t.zIndex=999;a.y+=l._currentItemSize.height});for(let t=h+d;t<l._scrollItemList.length;t++){let e=l._scrollItemList[t];if(s.indexOf(e)<0){e.targetPosition.y=a.y;a.y+=l._currentItemSize.height}}l._repositionItems(s,0,250);await l._repositionItems(r,0,250)}}l._currentIndex=Math.max(0,l._currentIndex-d);l._currentScrollPos.y=Math.max(0,Math.min(l._avgItemHeight*l._currentIndex,l._maxScrollPos.y));await l._processUpdateCurrentLayout();l._invokeEvent("itemMoved",{item:o});l._isAnimationInProcess=!1;r()},1)}else r()})}_checkItem(t,e){if(e){e[this._options.dataFields.checked]=!this._getItemCheckValue(e);this.refresh();this._invokeEvent("checkedChanged",{event:t,item:e,checked:e[this._options.dataFields.checked]})}t.stopPropagation()}_getItemCheckValue(t){return t&&!0===t[this._options.dataFields.checked]?!0:!1}_isItemCheckBoxAllowed(t){return this._isCheckBoxVisible&&t&&this._commonService.isTrue(t[this._options.dataFields.allowCheckBox])}_checkedChanged(t,e){if(!this._isAnimationInProcess){let i=t.detail.checked;if(e.data[this._options.dataFields.checked]!==i){e.data[this._options.dataFields.checked]=i;this._updateItemRadioButtonValue(e);this._invokeEvent("checkedChanged",{event:t,item:e.data,checked:e.data[this._options.dataFields.checked],radioGroup:e.data[this._options.dataFields.radioGroup]});this.update()}}}_getItemRadioValue(t){return t&&!0===t[this._options.dataFields.checked]?!0:!1}_isItemRadioButtonAllowed(t){return t&&!0===t[this._options.dataFields.allowRadioButton]}_updateItemRadioButtonValue(t){if(t){this._fullList.filter(e=>e[this._options.dataFields.radioGroup]===t.data[this._options.dataFields.radioGroup]).forEach(e=>{if(this._isItemRadioButtonAllowed(e)&&e!==t.data)e[this._options.dataFields.checked]=!1})}}_addItemToCurrentList(t,e){if(e)t.type="group";else if(!this.isSeparator(t))t.type="item";if(!t[this._options.dataFields.id])t[this._options.dataFields.id]=this._commonService.getUniqueId();if(e?!0:this._isItemAllowed(t))this._currentList.push({data:t})}isGroupItem(t){return t&&"group"===t.type?!0:!1}_isGroupPresent(t,e){return e.filter(e=>e.name===t).length>0?!0:!1}isSeparator(t){return t&&"separator"===t.type?!0:!1}loadData(t,e){this._processLoadData(t,null,e)}_getGroupExpandedValue(t){let e=this,i=!1;for(let s=0;s<e._dataGroups.length;s++){let l=e._dataGroups[s];if(l.name===t){i=l[e._options.dataFields.expanded];break}}return i}_updateCurrentList(){let t=this;t._currentList.length=0;t._currentGroupList.length=0;let e=t._dataService.getList();if(e){e=t._applySorting(e);if(t._isGroupingEnabled){let i=t._currentGroupBy;if(t._currentGroupBy){let i=[];e.forEach(e=>{if(!t._isGroupPresent(e[t._currentGroupBy],i)){let s={[t._options.dataFields.name]:e[t._currentGroupBy],[t._options.dataFields.expanded]:t._getGroupExpandedValue(e[t._currentGroupBy]),type:"group"};t._dataService.removeUndefined(s,t._options.dataFields.expanded);i.push(s)}});let s={[t._options.dataFields.name]:t._currentDefaultGroupName,[t._options.dataFields.expanded]:t._getGroupExpandedValue(t._currentDefaultGroupName),type:"group"};t._dataService.removeUndefined(s,t._options.dataFields.expanded);i.push(s);t._dataGroups=i}else i=t._options.dataFields.group;t._dataGroups.forEach(e=>{if(t._commonService.isObject(e))t._currentGroupList.push(e);else t._currentGroupList.push({[t._options.dataFields.name]:e,type:"group"})});t._currentGroupList.forEach(t=>delete t.visibleOnDrag);let s=[];if(t._dragDropService.getData().source&&t._dragItemList.length>0)t._currentGroupList.forEach(l=>{if((s=t._dragItemList.filter(e=>e.data[i]===l[t._options.dataFields.name]&&t._isItemAllowed(e.data))).length>0){let r=e.filter(e=>e[i]===l[t._options.dataFields.name]&&t._isItemAllowed(e));l[t._options.dataFields.childCount]=r.length;l.visibleOnDrag=r.length!==s.length?!0:!1}});t._currentGroupList=t._applySorting(t._currentGroupList);t._currentGroupList.filter(t=>!1!==t.visibleOnDrag).filter(e=>t._isGroupAllowed(e)&&e[t._options.dataFields.name]!==t._currentDefaultGroupName).forEach(l=>{if((s=e.filter(e=>e[i]===l[t._options.dataFields.name]&&t._isItemAllowed(e))).length>0){l[t._options.dataFields.childCount]=s.length;t._addItemToCurrentList(l,!0);if(t.isItemExpanded(l))s.map(e=>t._addItemToCurrentList(e))}});if((s=t._currentGroupList.filter(e=>e[t._options.dataFields.name]===t._currentDefaultGroupName)).length>0){let l=s[0];if((s=e.filter(t=>void 0===t[i])).length>0){t._addItemToCurrentList(l,!0);if(t.isItemExpanded(l))s.map(e=>t._addItemToCurrentList(e))}}}else e.map(e=>t._addItemToCurrentList(e))}}_updateScrollItemList(t){let e=this;e._resetScrollItemList();e._scrollItemList.length=0;e.update();let i=e._isInitAnimationAllowed(),s=i?{x:-e._clientRect.width,y:0}:{x:0,y:0},l={x:e._ctrlPadding.left+s.x,y:e._ctrlPadding.top+s.y},r=e._currentIndex,o=0;for(;r+o<e._currentList.length&&r<e._currentIndex+e._visibleRange;){let s=e._currentList[r+o];if(!e._isItemDragged(s.data)){if(t&&s.data===t)l.y+=e._dragListSize.height;let o={clickPos:{x:0,y:0},data:s.data,index:r-e._currentIndex,inlineStyle:e._getItemInlineStyle(s),position:{x:i?l.x-25*r:l.x,y:l.y},showCheckBox:e._isItemCheckBoxAllowed(s.data),showRadioButton:e._isItemRadioButtonAllowed(s.data),size:{width:0,height:e._currentItemSize.height},style:{},tabIndex:0,targetPosition:{x:e._ctrlPadding.left,y:l.y},zIndex:e._currentIndex+e._visibleRange-r};e._updateItemStyle(o);e._scrollItemList.push(o);l.y+=e.isSeparator(s.data)?15:e._currentItemSize.height;r++}else o++}}_expandBoxMouseDown(t,e){if(this._isEnabled&&1===t.which)this.toggle(e);t.stopPropagation()}_expandBoxTouchStart(t,e){if(this._isEnabled)this.toggle(e);t.stopPropagation()}async collapse(t){return this.toggle(t,!1)}async expand(t){return this.toggle(t,!0)}async toggle(t,e){let i=this,s=Promise.resolve();if(t){if(e&&!1!==t[i._options.dataFields.expanded])return s;else if(!1===e&&!1===t[i._options.dataFields.expanded])return s;let l=void 0!==e?e:!1!==t[i._options.dataFields.expanded]?!0:!1,r=void 0!==e?e:!l;if(r!==t[i._options.dataFields.expanded]){t[i._options.dataFields.expanded]=r;if(!i._isAnimationAllowed)i._internalUpdateCurrentLayout();else{i._isAnimationInProcess=!0;i._clearAnimations();if(r)s=i._updateItemExpand(t);else s=i._updateItemCollapse(t)}}}else{i._currentGroupList.forEach(t=>t[i._options.dataFields.expanded]=e);i._internalUpdateCurrentLayout()}i.update();return s}_updateBlockSize(){this._blockSize={width:this._contentElem.offsetWidth,height:this._contentElem.offsetHeight}}_getContentSize(){return this._contentElem?{width:this._contentElem.offsetWidth,height:this._contentElem.offsetHeight}:{width:0,height:0}}_processUpdateLayout(){let t=this;t._ut();if(!t._tCmp)t._at();return new Promise(e=>{if(t._isUpdateAllowed){let i=t._currentFocusObj?t._currentFocusObj.data:null;t._stackAdd.length=0;t._stackRemove.length=0;t._updateCurrentList();t.updateFullList();t._ctrlPadding=t._commonService.getPadding(t._elemRef);t._currentCtrlSize={width:t._clientRect.width,height:t._clientRect.height};t._updateClientRect();t._updateScrollItemList();t.update();t._updateItemElems();t._updateBlockSize();t._updateCurrentItemSize();t._updateScrollSize();t._updateVisibleRange();t._updateScrollItemList();t._currentItemSize.width=t._contentSize.width;if(t._isAutoSized){t._clientRect.height=t._visibleRange*t._avgItemHeight;t._updateCtrlSize()}else t._currentCtrlSize={width:t._clientRect.width,height:t._clientRect.height};t._updateScrollItemPos();if(i)t.focusedItem=i;t.update();t._updateItemElems();t._updateHoverContentPos();t._updateSelectContentPos();t.refresh();t._invokeEvent("updateComplete");e()}else e()})}_updateCurrentLayout(t){let e=this;if(e._isUpdateAllowed){e._resetLayoutTimer();e._updateCurrentList();e._updateScrollItemList();e._updateScrollSize();e._updateTimer=setTimeout(function(){e._updateBlockSize();e.update();e._updateItemElems();e._updateHoverContentPos();e._updateSelectContentPos();e.update();clearTimeout(e._updateTimer)},1)}}_updateScrollLayout(){this._updateClientRect();this._updateScrollSize();this._currentItemSize={width:this._contentSize.width,height:this._avgItemHeight};this.refresh();this._updateItemElems();this.update()}_updateScrollSize(){let t=this;t._contentSize={width:t._clientRect.width,height:t._clientRect.height};t._scrollSize={width:0,height:t._avgItemHeight*t._currentList.length-t._clientRect.height+t._avgItemHeight};if(t._isDragActive)t._scrollSize.height+=t._scrollSizeAddition;if(t.isVerScrollVisible()){t._contentSize.width-=6;if(t._currentScrollAppearance===IntegralUIComponentAppearance.Static)t._contentSize.width-=14;if(t._scrollSize.width>0)t._scrollSize.width+=16}else t._contentSize.width-=4;if(t.isHorScrollVisible())t._scrollSize.height+=16;t._scrollSize.width=Math.max(0,t._scrollSize.width);t._scrollSize.height=Math.max(0,t._scrollSize.height);t._maxScrollPos={x:t._scrollSize.width,y:t._scrollSize.height};if(t._currentScrollPos.x>t._maxScrollPos.x)t._changeHorizontalScrollPos(t._maxScrollPos.x);if(t._currentScrollPos.y>t._maxScrollPos.y)t._changeVerticalScrollPos(t._maxScrollPos.y);t._scrollBarSize={width:t.isVerScrollVisible()?t._clientRect.width-16:t._clientRect.width,height:t.isHorScrollVisible()?t._clientRect.height-16:t._clientRect.height};if(t._currentScrollAppearance===IntegralUIComponentAppearance.Static){t._scrollBarSize.width-=2;t._scrollBarSize.height-=2}else{if(t.isVerScrollVisible())t._scrollBarSize.height+=2;if(t.isHorScrollVisible())t._scrollBarSize.width+=2;if(t.isVerScrollVisible()&&t.isHorScrollVisible()){t._scrollBarSize.width+=5;t._scrollBarSize.height+=5}}t._scrollLargeChange={x:t._scrollBarSize.width,y:t._scrollBarSize.height};t._blockHoverRect={height:t._avgItemHeight-2,left:0,top:-9999999,width:t._clientRect.width-2};let e={height:t._avgItemHeight-2,left:0,top:-9999999,width:t._clientRect.width-2};if(t.isVerScrollVisible()){t._blockHoverRect.width-=16;e.width-=16;if(t._currentScrollAppearance===IntegralUIComponentAppearance.Dynamic){t._blockHoverRect.width+=5;e.width+=5}}t._blockSelectRect.forEach(t=>{t.width=e.width;t.height=e.height})}_getAppliedItemClass(t){return t.style.general}_getAppliedItemStyle(t,e){let i=this._commonService.getStyle(t.inlineStyle),s={...i.normal}||{};if(!this._isItemEnabled(t.data))s={...i.disabled}||{};else if(this._isItemSelected(t.data))s={...i.selected}||{};else if(this._isItemHovered(t.data))s={...i.hovered}||{};s.position="absolute";if(t.position){s.top=t.position.y+"px";if(!t.removeStart)s.left=t.position.x+"px"}if(void 0!==t.scale)s.transform="scale("+t.scale+")";if(void 0!==t.animateLeft)s.left=t.animateLeft+"%";s.zIndex=void 0!==t.zIndex?t.zIndex:this._visibleRange-e;s.width=this._currentItemSize.width+"px";return s}_getCheckBoxClass(t){let e={"iui-listitem-checkbox":!0};if(t[this._options.dataFields.checked])e["iui-listitem-checkbox-checked"]=!0;return e}_getContentTemplateClass(t){let e={"iui-listitem-content-template":!0};if(t)if(t.showCheckBox&&t.showRadioButton)e["iui-listitem-content-both"]=!0;else if(t.showCheckBox)e["iui-listitem-content-checkbox"]=!0;else if(t.showRadioButton)e["iui-listitem-content-radio"]=!0;return e}_getControlStyle(){let t=this._currentInlineStyle||{};t.cursor=this._ctrlCursor;t.overflow=this.virtualMode?"hidden":"auto";if(this._ctrlSize.width>0)t.width=this._ctrlSize.width+"px";if(this._isAutoSized)t.height=this._currentCtrlSize.height+"px";else if(this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";if(this._ctrlSize.height>0)t.height=this._ctrlSize.height+"px";return t}_updateColorSchemeSettings(t){this._currentBaseColorSchemeSettings=css``;this._currentColorSchemeSettings=css``;this._currentItemColorSchemeSettings=css``;this._currentScrollColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentBaseColorSchemeSettings.cssText=this._commonService.replaceAll(iuiDarkStyle.cssText,"../../../icons",this._currentResourcePath);this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiListBoxDarkStyle.cssText,"../../../icons",this._currentResourcePath);this._currentItemColorSchemeSettings.cssText=this._commonService.replaceAll(iuiListItemDarkStyle.cssText,"../../../icons",this._currentResourcePath);this._currentScrollColorSchemeSettings.cssText=this._commonService.replaceAll(iuiScrollBarDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentBaseColorSchemeSettings.cssText=this._commonService.replaceAll(iuiLightStyle.cssText,"../../../icons",this._currentResourcePath);this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiListBoxLightStyle.cssText,"../../../icons",this._currentResourcePath);this._currentItemColorSchemeSettings.cssText=this._commonService.replaceAll(iuiListItemLightStyle.cssText,"../../../icons",this._currentResourcePath);this._currentScrollColorSchemeSettings.cssText=this._commonService.replaceAll(iuiScrollBarLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentBaseColorSchemeSettings.cssText="";this._currentColorSchemeSettings.cssText="";this._currentItemColorSchemeSettings.cssText="";this._currentScrollColorSchemeSettings.cssText=""}}_updateThemeSettings(t){this._currentThemeSettings=css``;this._currentItemThemeSettings=css``;this._currentScrollStyleSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiListBoxOfficeStyle.cssText,"../../../icons",this._currentResourcePath);this._currentItemThemeSettings.cssText=this._commonService.replaceAll(iuiListItemOfficeStyle.cssText,"../../../icons",this._currentResourcePath);this._currentScrollStyleSettings.cssText=this._commonService.replaceAll(iuiScrollBarOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText="";this._currentItemThemeSettings.cssText="";this._currentScrollStyleSettings.cssText=this._commonService.replaceAll(iuiScrollBarStyle.cssText,"../../icons",this._currentResourcePath)}}_getRadioButtonLayout(t){let e=html``;if(t.showRadioButton){let i=css`                 .iui-radio-button {                     margin: var(--iui-radio-button-margin, 0);                     padding: var(--iui-radio-button-padding, 3px 0);                 }                 .iui-radio-button-btn {                     margin: var(--iui-radio-button-btn-margin, 0);                 }                 .iui-radio-button-btn span {                     height: var(--iui-radio-button-btn-content-height, 10px);                     width: var(--iui-radio-button-btn-content-width, 10px);                 }             `;e=html`                 <iui-radiobutton                      .checked=${this._getItemRadioValue(t.data)}                     .colorScheme="${this._currentColorScheme}"                     .customStyle="${[i,this.customStyle]}"                     .enabled="${this.enabled}"                      .theme="${this._currentTheme}"                     @checkedChanged="${e=>this._checkedChanged(e,t)}"                 ></iui-radiobutton>`}return e}firstUpdated(t){let e=this;e._updateReferences();setTimeout(function(){e._isHoverTemplatePresent=e.itemHoverTemplate?!0:!1;e._isSelectedTemplatePresent=e.itemSelectTemplate?!0:!1;e._internalUpdateLayout()},1)}updated(t){t.forEach((t,e)=>{});this._updateFocusItem()}_getLayoutTemplate(t,e){if("group"===t.data.type)return html`                 <div data-item-content class=${classMap(t.style.content)} tabindex="${t.tabIndex}" @dblclick="${e=>this._itemDblClickEvent(e,t)}" @focus="${e=>this._itemGotFocus(t)}" @blur="${e=>this._itemLostFocus(t)}" @keydown="${e=>this._itemKeyDown(e,t)}" @keypress="${e=>this._itemKeyPress(e,t)}" @keyup="${e=>this._itemKeyUp(e,t)}" @mousedown="${e=>this._itemMouseDown(e,t)}" @touchstart="${e=>this._itemTouchStart(e,t)}">                     <div class="iui-listgroup-content-block">                         ${this.showExpandBox?html`<span class=${classMap(t.style.expandBox)} @mousedown="${e=>this._expandBoxMouseDown(e,t.data)}" @touchstart="${e=>this._expandBoxTouchStart(e,t.data)}"></span>`:html``}                         <div style="display:inline-block">                             ${this._getItemTemplate(t.data)}                         </div>                     </div>                 </div>             `;else if(this.isSeparator(t.data))return html`<hr class="iui-listitem-separator" />`;else return html`                 <div data-item-content class=${classMap(t.style.content)} tabindex="${t.tabIndex}" @focus="${e=>this._itemGotFocus(t)}" @blur="${e=>this._itemLostFocus(t)}" @keydown="${e=>this._itemKeyDown(e,t)}" @keypress="${e=>this._itemKeyPress(e,t)}" @keyup="${e=>this._itemKeyUp(e,t)}" @mousedown="${e=>this._itemMouseDown(e,t)}" @mousemove="${e=>this._itemMouseMove(e,t)}" @mouseup="${e=>this._itemMouseUp(e,t)}" draggable="true" @dragstart="${i=>this._itemDragStart(i,t,e)}" @dragover="${i=>this._itemDragOver(i,t,e,!0)}" @drop="${e=>this._itemDragDrop(e,t)}" @dragend="${t=>this._ctrlDragEnd(t)}" @touchstart="${e=>this._itemTouchStart(e,t)}" @touchmove="${e=>this._itemTouchMove(e,t)}" @touchend="${e=>this._itemTouchEnd(e,t)}">                     <div class="iui-listitem-content-block">                         ${t.showCheckBox?html`<span class=${classMap(this._getCheckBoxClass(t.data))} @mousedown="${e=>this._checkItem(e,t.data)}" @touchstart="${e=>this._checkItem(e,t.data)}"></span>`:html``}                         ${this._getRadioButtonLayout(t)}                         <div class=${classMap(this._getContentTemplateClass(t))} @click="${e=>this._itemClickEvent(e,t)}" @dblclick="${e=>this._itemDblClickEvent(e,t)}" @contextmenu="${e=>this._itemRightClickEvent(e,t)}">                             ${this._getItemTemplate(t.data)}                         </div>                     </div>                 </div>             `}_getDragTemplate(t){return html`             <div class=${classMap({[this._itemClassName]:!0})}>                 <div class=${classMap({[this._itemContentClassName]:!0})}>                     ${this._isCheckBoxVisible?html`<span class=${classMap(this._getCheckBoxClass(t.data))}></span>`:html``}                     <div class=${classMap(this._getContentTemplateClass(t))}>                         ${this._getItemTemplate(t.data)}                     </div>                 </div>             </div>         `}render(){return html`             <style>                 ${iuiScrollBarStyle}                 ${this._currentBaseStyleSettings}                 ${this._currentBaseColorSchemeSettings}                 ${this._currentScrollStyleSettings}                 ${this._currentControlStyleSettings}                 ${this._currentItemStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentItemThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentItemColorSchemeSettings}                 ${this._currentScrollColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="listbox" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} @DOMMouseScroll="${t=>this._processMouseWheel(t)}" @mousewheel="${t=>this._processMouseWheel(t)}" @mouseenter="${t=>this._ctrlMouseEnter(t)}" @mouseleave="${t=>this._ctrlMouseLeave(t)}" @mousemove="${t=>this._onCtrlMouseMove(t)}" @dragenter="${t=>this._ctrlDragEnter(t)}" @dragleave="${t=>this._ctrlDragLeave(t)}" @dragover="${t=>this._ctrlDragOver(t)}" @drop="${t=>this._ctrlDragDrop(t)}" @dragend="${t=>this._ctrlDragEnd(t)}" @scroll="${t=>this._onScroll(t)}">                 <div class=${classMap({"iui-base-loading":this._isLoading?!0:!1,"iui-base-loading-end":this._isLoadingEnd?!0:!1})}>                     <ul id="content" @touchstart="${t=>this._ctrlTouchStart(t)}" @touchend="${t=>this._ctrlTouchEnd(t)}" style=${styleMap({width:this._contentSize.width+"px",height:this._contentSize.height+"px",padding:0})}>                         ${this._scrollItemList.map((t,e)=>html`                             <li data-item class=${classMap(this._getAppliedItemClass(t))} style=${styleMap(this._getAppliedItemStyle(t,e))} @mouseenter="${e=>this._itemMouseEnter(e,t)}" @mouseleave="${e=>this._itemMouseLeave(e,t)}">                                 ${this._getLayoutTemplate(t,e)}                             </li>                         `)}                     </ul>                     ${!this._isDragActive&&this._isHoverTemplatePresent&&!this._isUpdateActive&&this._hoverItemObj&&this._isContentAllowed(this._hoverItemObj.data,"hover")?html`<div class="iui-listbox-block iui-listbox-block-hover" style=${styleMap({left:this._blockHoverRect.left+"px",top:this._blockHoverRect.top+"px",height:this._blockHoverRect.height+"px",width:this._blockHoverRect.width+"px"})}>                                 <div style=${styleMap({height:this._blockHoverRect.height+"px"})} @mousemove="${t=>this._hoverBlockMouseMove(t)}" @mouseleave="${t=>this._hoverBlockMouseLeave(t)}">                                     ${this._getItemTemplate(this._hoverItemObj.data,"hover")}                                 </div>                             </div>`:html``}                     ${!this._isDragActive&&this._isSelectedTemplatePresent&&!this._isUpdateActive?this._currentSelectedItems.map((t,e)=>html`<span>                                 ${this._isContentAllowed(t,"select")?html`<div class="iui-listbox-block iui-listbox-block-select" style=${styleMap(this._getSelectBlockRect(e))}>                                         <div style=${styleMap({height:this._blockSelectHeight+"px"})}>                                             ${this._getItemTemplate(t,"select")}                                         </div>                                     </div>`:html``}                                 </span>`):html``}                     ${this.isVerScrollVisible()?html`<iui-scrollbar id="ver-scroll" .allowAnimation="${this._isAnimationAllowed}" .appearance="${this._currentScrollAppearance}" .colorScheme="${this._currentColorScheme}" .enabled="${this.enabled}" .value="${this._currentScrollPos.y}" .max="${this._maxScrollPos.y}" .largeChange="${this._scrollLargeChange.y}" .height="${this._scrollBarSize.height}" .theme="${this._currentTheme}" .visible="${this._isScrollVisible}" @mouseenter="${t=>this._scrollMouseEnter(t)}" @valueChanged="${t=>this._onVerticalScrollChanged(t)}" @scrollStart="${t=>this._onVerticalScrollStart(t)}" @scrollEnd="${t=>this._onVerticalScrollEnd(t)}"></iui-scrollbar>`:html``}                     ${this.isHorScrollVisible()?html`<iui-scrollbar id="hor-scroll" .allowAnimation="${this._isAnimationAllowed}" .appearance="${this._currentScrollAppearance}" .colorScheme="${this._currentColorScheme}" .enabled="${this.enabled}" orientation="Horizontal" .value="${this._currentScrollPos.x}" .max="${this._maxScrollPos.x}" .width="${this._scrollBarSize.width}" .theme="${this._currentTheme}" .visible="${this._isScrollVisible}" @mouseenter="${t=>this._scrollMouseEnter(t)}" @valueChanged="${t=>this._onHorizontalScrollChanged(t)}" @scrollStart="${t=>this._onHorizontalScrollStart(t)}" @scrollEnd="${t=>this._onHorizontalScrollEnd(t)}"></iui-scrollbar>`:html``}                     ${this.isVerScrollVisible()&&this.isHorScrollVisible()?html`<div class=${classMap(this._getScrollCornerClass())}></div>`:html``}                 </div>                 ${this._isDragActive&&this._isCtrlDragEntered?html`<div id="drag-content" class=${classMap(this._getDragListClass())} style=${styleMap({top:this._dragListPos.top+"px",width:this._contentSize.width-2+"px"})}>                             ${this._isDragCopy?html`<span class="iui-draglist-copy" style=${styleMap({top:1===this._currentDragItems?this._dragListSize.height/2-8+"px":"3px",left:this._dragListSize.width/2-8+"px"})}></span>`:html``}                             <ul style=${styleMap({margin:0,padding:0})}>                                 ${this._dragItemList.filter((t,e)=>e<this._maxDragItems).map((t,e)=>html`                                     <li class=${classMap({"iui-listitem-animate":this._isAnimationAllowed})}>                                         ${this._getDragTemplate(t)}                                     </li>                                 `)}                             </ul>                             ${this._totalDragItems>this._currentDragItems?html`<div class="iui-draglist-corner">                                         <div class="iui-draglist-corner-block"></div>                                         <div class="iui-draglist-num">+${this._totalDragItems-this._currentDragItems}</div>                                     </div>`:html``}                         </div>`:html``}                 ${this._isLoading?html`<div class="iui-loading-icon" style=${styleMap({top:this._loadIconPos.top+"px",left:this._loadIconPos.left+"px"})}></div>`:html``}             </div>         `}_updateControlStyleSettings(t){this._currentBaseStyleSettings=css``;this._currentBaseStyleSettings.cssText=this._commonService.replaceAll(iuiBaseDefaultStyle.cssText,"../../icons",t);this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiListBoxDefaultStyle.cssText,"../../icons",t);this._currentItemStyleSettings=css``;this._currentItemStyleSettings.cssText=this._commonService.replaceAll(iuiListItemDefaultStyle.cssText,"../../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=listbox]");this._contentElem=this.shadowRoot.querySelector("#content");if(this._resizeObserver)this._resizeObserver.observe(this._elemRef)}}window.customElements.define("iui-listbox",IntegralUIListBox);export default IntegralUIListBox;