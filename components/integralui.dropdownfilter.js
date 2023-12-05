/*
  filename: integralui.dropdownfilter.js
  version : 23.4.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBase from"./integralui.base.js";import{IntegralUIColorScheme,IntegralUIFilterType,IntegralUITheme}from"./integralui.enums.js";import IntegralUIDropDown from"./integralui.dropdown.js";import"./integralui.datepicker.js";import"./integralui.list.js";import{iuiDropDownFilterDefaultStyle}from"../styles/default/integralui.dropdownfilter.style.js";import{iuiDropDownFilterOfficeStyle}from"../styles/themes/office/integralui.dropdownfilter.office.js";import{iuiDropDownFilterDarkStyle}from"../styles/color-schemes/dark/integralui.dropdownfilter.dark.js";import{iuiDropDownFilterLightStyle}from"../styles/color-schemes/light/integralui.dropdownfilter.light.js";class IntegralUIDropDownFilter extends IntegralUIBase{_init(){super._init();this._filterValue={value:"",value2:""};this._currentDataFields={};this._currentList=[];this._filterList=[];this._currentFilter=null;this._currentOperation=null;this._currentType=IntegralUIFilterType.String;this._currentValue=null;this._currentValue2=null;this._dropDownRef=null;this._dropList=null;this._currentCalendarSize={width:250,height:200};this._currentFormat={};this._currentDropDownAdjustment={top:0,left:0,width:0,height:0};this._currentDropDownSize={width:0,height:0};this._currentMaxDropDownItems=5;this._currentParentBounds={top:0,right:0,bottom:0,left:0,height:0,width:0,x:0,y:0};this._valueRef=null;this._currentControlStyleSettings=iuiDropDownFilterDefaultStyle;this._generalClassName="iui-dropdownfilter";this._filterIcon={};this._iconClasses={equal:"iui-filter-equal",notEqual:"iui-filter-not-equal",beginsWith:"iui-filter-begins-with",endsWith:"iui-filter-ends-with",contains:"iui-filter-contains",doesNotContain:"iui-filter-not-contain",greaterThan:"iui-filter-greater-than",greaterThanEqualTo:"iui-filter-greater-than-equal",lessThan:"iui-filter-less-than",lessThanEqualTo:"iui-filter-less-than-equal",between:"iui-filter-between",search:"iui-filter-search"};this._dropListTimeout=null;this._updateDataFields();this._updateDropDownList();this._updateFilterIcon();this._initStyle()}connectedCallback(){}disconnectedCallback(){if(this._dropListTimeout)clearTimeout(this._dropListTimeout);if(this._inputFocusTimeout)clearTimeout(this._inputFocusTimeout);this._removeDropDown()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{calendarSize:{type:Object,attribute:"calendar-size"},dataFields:{type:Object,attribute:"data-fields"},dropDownAdjustment:{type:Object,attribute:"dropdown-adjustment"},dropDownSize:{type:Object,attribute:"dropdown-size"},formatOptions:{type:Object,attribute:"format-options"},items:{type:Array},maxDropDownItems:{type:Number,attribute:"max-dropdown-items",reflect:!0},operation:{type:String,reflect:!0},parentBounds:{type:Object,attribute:"parent-bounds"},type:{converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"boolean":return IntegralUIFilterType.Boolean;case"date":return IntegralUIFilterType.Date;case"numeric":return IntegralUIFilterType.Numeric;default:return IntegralUIFilterType.String}},toAttribute:t=>{switch(t){case IntegralUIFilterType.Boolean:return"Boolean";case IntegralUIFilterType.Date:return"Date";case IntegralUIFilterType.Numeric:return"Numeric";default:return"String"}}},reflect:!0},value:{type:Object}}}get calendarSize(){return this._currentCalendarSize}set calendarSize(t){if(t){const e=this._currentCalendarSize;if(t.width&&this._currentCalendarSize.width!==t.width)this._currentCalendarSize.width=t.width;if(t.height&&this._currentCalendarSize.height!==t.height)this._currentCalendarSize.height=t.height;this.requestUpdate("calendarSize",e)}}get dataFields(){return this._currentDataFields}set dataFields(t){const e=this._currentDataFields;this._updateDataFields(t);this.requestUpdate("dataFields",e)}get dropDownAdjustment(){return this._currentDropDownAdjustment}set dropDownAdjustment(t){if(t){const e=this._currentDropDownAdjustment;if(void 0!==t.top&&this._currentDropDownAdjustment.top!==t.top)this._currentDropDownAdjustment.top=t.top;if(void 0!==t.left&&this._currentDropDownAdjustment.left!==t.left)this._currentDropDownAdjustment.left=t.left;if(void 0!==t.width&&this._currentDropDownAdjustment.width!==t.width)this._currentDropDownAdjustment.width=t.width;if(void 0!==t.height&&this._currentDropDownSize.height!==t.height)this._currentDropDownAdjustment.height=t.height;this.requestUpdate("dropDownAdjustment",e)}}get dropDownSize(){return this._currentDropDownSize}set dropDownSize(t){if(t){let e=!1;const i=this._currentDropDownSize;if(void 0!==t.width&&this._currentDropDownSize.width!==t.width){this._currentDropDownSize.width=t.width;e=!0}if(void 0!==t.height&&this._currentDropDownSize.height!==t.height){this._currentDropDownSize.height=t.height;e=!0}if(e){this.updateLayout();this.requestUpdate("dropDownSize",i)}}}get format(){return this._currentFormat}set format(t){if(this._currentFormat!==t){const e=this._currentFormat;this._currentFormat=t;this.requestUpdate("formatOptions",e)}}get maxDropDownItems(){return this._currentMaxDropDownItems}set maxDropDownItems(t){if(void 0!==t&&this._currentMaxDropDownItems!==t){const e=this._currentMaxDropDownItems;this._currentMaxDropDownItems=t;this.requestUpdate("maxDropDownItems",e)}}get operation(){return this._currentOperation}set operation(t){const e=this._currentOperation;this._currentOperation=t;this._currentFilter=this._findFilterByOperation();this.refresh();this.requestUpdate("operation",e)}get parentBounds(){return this._currentParentBounds}set parentBounds(t){if(this._currentParentBounds!==t){const e=this._currentParentBounds;this._currentParentBounds=t;this.requestUpdate("parent",e)}}get type(){return this._currentType}set type(t){if(this._currentType!==t){const e=this._currentType;this._currentType=t;this._updateDropDownList();this.requestUpdate("type",e);this.update()}}get value(){return this._filterValue}set value(t){let e=!1;const i=this._filterValue;if(this._currentType===IntegralUIFilterType.Date){if(this._currentValue!==t.value){if(this._commonService.isString(t.value)&&"Z"===t.value.slice(-1)&&!isNaN(Date.parse(t.value)))this._currentValue=new Date(t.value);else this._currentValue=t.value;e=!0}if(this._currentValue2!==t.value2){if(this._commonService.isString(t.value2)&&"Z"===t.value2.slice(-1)&&!isNaN(Date.parse(t.value2)))this._currentValue2=new Date(t.value2);else this._currentValue2=t.value2;e=!0}if(e){this.requestUpdate("value",i);this.updateLayout()}}else{if(this._currentValue!==t.value){this._currentValue=t.value;e=!0}if(this._currentValue2!==t.value2){this._currentValue2=t.value2;e=!0}if(e){this.requestUpdate("value",i);this.updateLayout()}}}_isValueChanged(t){return""!==t.value||""!==t.value2}_updateDataFields(t){let e=t||{};this._dataFields={equals:e.equals?e.equals:"Equals",doesNotEqual:e.doesNotEqual?e.doesNotEqual:"Does not equal",beginsWith:e.beginsWith?e.beginsWith:"Begins with",endsWith:e.endsWith?e.endsWith:"Ends with",contains:e.contains?e.contains:"Contains",doesNotContain:e.doesNotContain?e.doesNotContain:"Does not contain",greaterThan:e.greaterThan?e.greaterThan:"Greater than",greaterThanEqualTo:e.greaterThanEqualTo?e.greaterThanEqualTo:"Greater than or equal to",lessThan:e.lessThan?e.lessThan:"Less than",lessThanEqualTo:e.lessThanEqualTo?e.lessThanEqualTo:"Less than or equal to",between:e.between?e.between:"Between",reset:e.reset?e.reset:"Reset"};this._filterList=[{id:1,icon:"iui-filter-list-icon "+this._iconClasses.equal,text:this._dataFields.equals,operation:"="},{id:2,icon:"iui-filter-list-icon "+this._iconClasses.notEqual,text:this._dataFields.doesNotEqual,operation:"!="},{id:3,icon:"iui-filter-list-icon "+this._iconClasses.beginsWith,text:this._dataFields.beginsWith,operation:"->",filterType:IntegralUIFilterType.String},{id:4,icon:"iui-filter-list-icon "+this._iconClasses.endsWith,text:this._dataFields.endsWith,operation:"<-",filterType:IntegralUIFilterType.String},{id:5,icon:"iui-filter-list-icon "+this._iconClasses.contains,text:this._dataFields.contains,operation:"[]",filterType:IntegralUIFilterType.String},{id:6,icon:"iui-filter-list-icon "+this._iconClasses.doesNotContain,text:this._dataFields.doesNotContain,operation:"][",filterType:IntegralUIFilterType.String},{id:7,icon:"iui-filter-list-icon "+this._iconClasses.greaterThan,text:this._dataFields.greaterThan,operation:">",filterType:IntegralUIFilterType.Date|IntegralUIFilterType.Numeric},{id:8,icon:"iui-filter-list-icon "+this._iconClasses.greaterThanEqualTo,text:this._dataFields.greaterThanEqualTo,operation:">=",filterType:IntegralUIFilterType.Date|IntegralUIFilterType.Numeric},{id:9,icon:"iui-filter-list-icon "+this._iconClasses.lessThan,text:this._dataFields.lessThan,operation:"<",filterType:IntegralUIFilterType.Date|IntegralUIFilterType.Numeric},{id:10,icon:"iui-filter-list-icon "+this._iconClasses.lessThanEqualTo,text:this._dataFields.lessThanEqualTo,operation:"<=",filterType:IntegralUIFilterType.Date|IntegralUIFilterType.Numeric},{id:11,icon:"iui-filter-list-icon "+this._iconClasses.between,text:this._dataFields.between,operation:"<>",filterType:IntegralUIFilterType.Date|IntegralUIFilterType.Numeric},{id:12,icon:"iui-filter-list-icon "+this._iconClasses.search,text:this._dataFields.reset,operation:null}];this._updateDropDownList()}_updateDropDownList(){this._currentList=this._filterList.filter(t=>!t.filterType||t.filterType&this._currentType);this._currentMaxDropDownItems=this._currentList.length;this._currentFilter=this._findFilterByOperation();this._resetValue()}_resetValue(){this._currentValue=this._currentValue2=null}_addDropDown(){this._removeDropDown();this._dropDownRef=document.createElement("iui-dropdown",{is:IntegralUIDropDown});document.body.appendChild(this._dropDownRef);if(this._dropDownRef){this._dropDownRef.allowAnimation=this.allowAnimation;this._dropDownRef.colorScheme=this._currentColorScheme;this._dropDownRef.contentTemplate=this._getDropDownTemplate();this._dropDownRef.customStyle=this.customStyle;this._dropDownRef.resourcePath=this.resourcePath;this._dropDownRef.size=this._getDropDownSize();this._dropDownRef.theme=this._currentTheme;let t=this._commonService.getPageRect(this._elemRef),e=this._commonService.getShiftPos();this._dropDownRef.position={top:t.bottom+e.y+this._currentDropDownAdjustment.top,left:t.left+e.x+this._currentDropDownAdjustment.left};if(t.right>this._currentParentBounds.right)this._dropDownRef.position.left+=22-this._dropDownRef.size.width;this._dropDownClosed=this._dropDownClosed.bind(this);this._dropDownRef.addEventListener("closed",this._dropDownClosed)}}_dropDownBlur(t){if(this._dropDownRef)this._dropDownRef.close()}_dropDownClosed(t){this._removeDropDown()}_filterMouseDown(t){if(this._isEnabled&&1===t.which)this._showDropDown();t.stopPropagation()}_itemDropDownSelected(t){if(this._dropList)this._dropList.clearSelection();if(t.detail.item&&this._currentFilter!==t.detail.item)this._currentFilter=t.detail.item;this._currentOperation=this._currentFilter.operation;this._updateFilterIcon();this._invokeEvent("operationChanged",{operation:this._currentOperation});if(this._currentFilter&&12===this._currentFilter.id){this._resetValue();this._callValueChanged();this._currentFilter=this._currentList[0]}this._callValueChanged();this.update();this._setFocusToValue()}_listSizeChanged(t){if(this._dropDownRef)this._dropDownRef.size={height:t.detail.size.height+4}}_removeDropDown(){if(this._dropDownRef){this._dropDownRef.removeEventListener("closed",this._dropDownClosed);this._dropDownRef.parentNode.removeChild(this._dropDownRef)}this._dropDownRef=null}_showDropDown(){let t=this;t._addDropDown();if(t._dropDownRef){t._dropDownRef.open();t._dropListTimeout=setTimeout(function(){if(t._dropDownRef){t._dropList=t._dropDownRef.getContent();if(t._dropList){t._dropList.focus();t._dropList.scrollTo(t._currentFilter)}}clearTimeout(t._dropListTimeout)},100)}}_callValueChanged(){this._invokeEvent("valueChanged",{filter:this._currentFilter,value:this._currentValue,value2:this._currentValue2})}_dateValueChanged(t,e){if(this._currentFilter&&"<>"===this._currentFilter.operation)if(e)this._currentValue2=t.detail.date;else this._currentValue=t.detail.date;else this._currentValue=t.detail.date;this._callValueChanged()}_findFilterByOperation(t){let e=t;if(!t)e=this._currentOperation?this._currentOperation:this._currentType===IntegralUIFilterType.String?"[]":"=";let i=this._filterList.filter(t=>t.operation===e);return i.length>0?i[0]:null}_isValueSet(t){return void 0!==t&&null!==t&&""!==t?!0:!1}_inputKeyDown(t,e){if(this._isEnabled)switch(t.keyCode){case 13:if(this._currentFilter&&"<>"===this._currentFilter.operation){this._setCurrentValue(t.target.value,e);if(this._isValueSet(this._currentValue)&&this._isValueSet(this._currentValue2))this._callValueChanged()}else{this._setCurrentValue(t.target.value);this._callValueChanged()}break;default:this._defaultFunc()}}_inputChange(t){if(this._isEnabled)this._invokeEvent("change",{filter:this._currentFilter,value:t.target.value})}_setCurrentValue(t,e){let i=this._currentType===IntegralUIFilterType.Numeric?Number(t):t;if(e)this._currentValue2=i;else this._currentValue=i}_inputGotFocus(){if(this._currentType===IntegralUIFilterType.String){let t=this,e=this.shadowRoot.querySelector(".iui-filter-input");if(e){e.selectionStart=e.selectionEnd=1e4;t._inputFocusTimeout=setTimeout(function(){e.setSelectionRange(e.selectionStart,e.selectionEnd);e.scrollLeft=e.scrollWidth;e.select();clearTimeout(t._inputFocusTimeout)},100)}}}_inputLostFocus(t,e){this._setCurrentValue(t.target.value,e)}_setFocusToValue(){let t=null;if(this._currentType===IntegralUIFilterType.Date){if(t=this.shadowRoot.querySelector("#iui-filter-date"))t.setFocus()}else if(t=this.shadowRoot.querySelector(".iui-filter-input"))t.focus()}_getDropDownSize(){let t={width:0!==this._currentDropDownSize.width?this._currentDropDownSize.width:this._elemRef.offsetWidth,height:0!==this._currentDropDownSize.height?this._currentDropDownSize.height:100};t.width+=this._currentDropDownAdjustment.width;t.height+=this._currentDropDownAdjustment.height;return t}_updateFilterIcon(){this._filterIcon={"iui-filter-icon":!0};switch(this._currentOperation){case"=":this._filterIcon[this._iconClasses.equal]=!0;break;case"!=":this._filterIcon[this._iconClasses.notEqual]=!0;break;case"->":this._filterIcon[this._iconClasses.beginsWith]=!0;break;case"<-":this._filterIcon[this._iconClasses.endsWith]=!0;break;case"[]":this._filterIcon[this._iconClasses.contains]=!0;break;case"][":this._filterIcon[this._iconClasses.doesNotContain]=!0;break;case">":this._filterIcon[this._iconClasses.greaterThan]=!0;break;case">=":this._filterIcon[this._iconClasses.greaterThanEqualTo]=!0;break;case"<":this._filterIcon[this._iconClasses.lessThan]=!0;break;case"<=":this._filterIcon[this._iconClasses.lessThanEqualTo]=!0;break;case"<>":this._filterIcon[this._iconClasses.between]=!0;break;default:this._filterIcon[this._iconClasses.search]=!0}}_getFilterIcon(){return this._filterIcon}refresh(){this._updateStyle(this.controlStyle);this._updateControlClass();this._updateFilterIcon();this.update();this._updateReferences()}_updateColorSchemeSettings(t){this._currentColorSchemeSettings=css``;switch(t){case IntegralUIColorScheme.Dark:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiDropDownFilterDarkStyle.cssText,"../../../icons",this._currentResourcePath);break;case IntegralUIColorScheme.Light:this._currentColorSchemeSettings.cssText=this._commonService.replaceAll(iuiDropDownFilterLightStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentColorSchemeSettings.cssText=""}}_updateThemeSettings(t){this._currentThemeSettings=css``;switch(t){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiDropDownFilterOfficeStyle.cssText,"../../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}_getDropDownTemplate(){let t=this._getDropDownSize();t.width-=4;t.height-=4;if(this._currentMaxDropDownItems>0)t={width:this._getDropDownSize().width-4};let e=css`             .iui-filter-list-icon {                 display: inline-block;                 height: 16px;                 top: 2px;                 vertical-align: top;                 width: 16px;             }         `;return html`             <iui-list                  .colorScheme="${this._currentColorScheme}"                 .customStyle="${[e,this._currentControlStyleSettings,this._currentThemeSettings,this._currentColorSchemeSettings,this.customStyle]}"                  .items="${this._currentList}"                  .maxVisibleItems="${this._currentMaxDropDownItems}"                  .selectedItem="${this._currentFilter}"                  .size="${t}"                  .theme="${this.theme}"                  @blur="${t=>this._dropDownBlur(t)}"                 @itemClick="${t=>this._itemDropDownSelected(t)}"                  @itemTouch="${t=>this._itemDropDownSelected(t)}"                 @sizeChanged="${t=>this._listSizeChanged(t)}"             ></iui-list>         `}_getFilterValueLayout(){let t=html``;if(this._currentType===IntegralUIFilterType.Date){let e=css`                 .iui-datepicker {                     background: var(--iui-datepicker-background, transparent);                     margin: var(--iui-datepicker-margin, 0);                 }                 .iui-datepicker:focus {                     outline: none !important;                 }                 .iui-datepicker-header {                     border-color:  var(--iui-datepicker-border-color, transparent);                     padding: var(--iui-datepicker-header-padding, 0);                 }                 .iui-header-expand-box-arrow {                     margin: var(--iui-header-expand-box-margin, 2px);                 }                 .iui-header-label {                     padding: var(--iui-header-label-padding, 2px 0 0 0);                 }             `,i=this._commonService.getPageRect(this._elemRef),r={top:this._currentDropDownAdjustment.top,left:i.width-this._currentCalendarSize.width-20};if(i.right-this._currentCalendarSize.width<this._currentParentBounds.left)r.left=this._currentParentBounds.left-i.left-20;if(this._currentFilter&&"<>"===this._currentFilter.operation){let i=css`                     .iui-datepicker {                         display: var(--iui-datepicker-display, inline-block);                         width: var(--iui-datepicker-width, calc(50% - 8px));                     }                 `;r.left=0;t=html`                     <iui-datepicker id="iui-filter-date"                          .allowAnimation="${this.allowAnimation}"                          .animationType="${"calendar"}"                         .calendarAlign="${"Left"}"                         .calendarSize="${this._currentCalendarSize}"                         .colorScheme="${this._currentColorScheme}"                         .customStyle="${[e,i,this.customStyle]}"                          .dropDownAdjustment="${r}"                         .enabled="${this._isEnabled}"                         .format="${"Custom"}"                         .formatOptions="${this._currentFormat.options}"                         .locales="${this._currentFormat.locales}"                         .resourcePath="${this._currentResourcePath}"                          .selectedDate=${this._currentValue}                          .theme="${this._currentTheme}"                          @dateChanged="${t=>this._dateValueChanged(t)}"                     ></iui-datepicker>                     <div class="iui-filter-separator"></div>                     <iui-datepicker                          .allowAnimation="${this.allowAnimation}"                          .animationType="${"calendar"}"                         .calendarAlign="${"Left"}"                         .calendarSize="${this._currentCalendarSize}"                         .colorScheme="${this._currentColorScheme}"                         .customStyle="${[e,i,this.customStyle]}"                          .dropDownAdjustment="${r}"                         .enabled="${this._isEnabled}"                         .format="${"Custom"}"                         .formatOptions="${this._currentFormat.options}"                         .locales="${this._currentFormat.locales}"                         .resourcePath="${this._currentResourcePath}"                          .selectedDate=${this._currentValue2}                          .theme="${this._currentTheme}"                          @dateChanged="${t=>this._dateValueChanged(t,!0)}"                     ></iui-datepicker>`}else t=html`                     <iui-datepicker id="iui-filter-date"                         .allowAnimation="${this.allowAnimation}"                          .animationType="${"calendar"}"                         .calendarAlign="${"Left"}"                         .calendarSize="${this._currentCalendarSize}"                         .colorScheme="${this._currentColorScheme}"                         .customStyle="${[e,this.customStyle]}"                          .dropDownAdjustment="${r}"                         .enabled="${this._isEnabled}"                         .format="${"Custom"}"                         .formatOptions="${this._currentFormat.options}"                         .locales="${this._currentFormat.locales}"                         .resourcePath="${this._currentResourcePath}"                          .selectedDate=${this._currentValue}                          .theme="${this._currentTheme}"                          @dateChanged="${t=>this._dateValueChanged(t)}"                     ></iui-datepicker>`}else if(this._currentFilter&&"<>"===this._currentFilter.operation)t=html`                     <input                          class="iui-filter-input"                         style=${styleMap({textAlign:"right",width:"calc(50% - 7px)"})}                         type="number"                          .value="${null===this._currentValue?"":this._currentValue}"                          @blur="${t=>this._inputLostFocus(t)}"                         @keydown="${t=>this._inputKeyDown(t)}"                     />                     <div class="iui-filter-separator"></div>                     <input                          class="iui-filter-input"                         style=${styleMap({textAlign:"right",width:"calc(50% - 7px)"})}                         type="number"                          .value="${null===this._currentValue2?"":this._currentValue2}"                          @blur="${t=>this._inputLostFocus(t,!0)}"                         @keydown="${t=>this._inputKeyDown(t,!0)}"                     />`;else t=html`                     <input                          class="iui-filter-input"                         style=${styleMap({textAlign:this._currentType===IntegralUIFilterType.Numeric?"right":"left"})}                         type="${this._currentType===IntegralUIFilterType.Numeric?"number":"text"}"                          .value="${null===this._currentValue?"":this._currentValue}"                          @blur="${t=>this._inputLostFocus(t)}"                         @focus="${()=>this._inputGotFocus()}"                         @keydown="${t=>this._inputKeyDown(t)}"                         @change="${t=>this._inputChange(t)}"                     />`;return t}firstUpdated(t){this._updateReferences();this.updateLayout()}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentColorSchemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="dropdownfilter" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())}>                 <div class="iui-filter-operation" @mousedown="${t=>this._filterMouseDown(t)}"><span class=${classMap(this._getFilterIcon())}></span></div>                 <div class="iui-filter-value">                     ${this._getFilterValueLayout()}                 </div>             </div>         `}_updateControlStyleSettings(t){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiDropDownFilterDefaultStyle.cssText,"../../icons",t)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=dropdownfilter]");this._valueRef=this.shadowRoot.querySelector(".iui-filter-value")}}window.customElements.define("iui-dropdownfilter",IntegralUIDropDownFilter);export default IntegralUIDropDownFilter;