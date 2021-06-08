/*
  filename: integralui.calendar.js
  version : 21.2.0
  Copyright © 2016-2021 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUIWeekDays,IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import IntegralUIBase from"./integralui.base.js";import{iuiCalendarDefaultStyle}from"../styles/integralui.calendar.style.js";import{iuiCalendarOfficeStyle}from"../themes/office/integralui.calendar.office.js";import{iuiCalendarMidnightStyle}from"../themes/midnight/integralui.calendar.midnight.js";class IntegralUICalendar extends IntegralUIBase{_init(){super._init();this._animateCurrentPos=0;this._animateNextPos=0;this._animatePrevPos=0;this._animateCurrentOpacity=1;this._animateNextOpacity=0;this._animatePrevOpacity=0;this._decadeOpacity=0;this._monthOpacity=1;this._yearOpacity=0;this._isDecadeAnimated=!1;this._isMonthAnimated=!1;this._isYearAnimated=!1;this._currentDate=new Date();this._currentFirstDayOfWeek=IntegralUIWeekDays.Sunday;this._currentLocales="en-us";this._currentSelectedDate=new Date();this._currentTodayDate=new Date();this._listDayWeek=[];this._title="";this._listYears=[];this._nextListYears=[];this._prevListYears=[];this._listMonths=[];this._nextListMonths=[];this._prevListMonths=[];this._listDaysInMonth=[];this._nextListDaysInMonth=[];this._prevListDaysInMonth=[];this._hoverDate=null;this._prevHoverDate=null;this._buttonMargin={top:2,right:2,bottom:2,left:2};this._ctrlOpacity=1;this._contentSize={width:0,height:0};this._displayMode=0;this._headerSize={width:0,height:0};this._isTodayVisible=!0;this._prevDisplayMode=0;this._titleMargin={top:2,right:2,bottom:2,left:2};this._titleSize={width:0,height:0};this._updateTimer=null;this._currentControlStyleSettings=iuiCalendarDefaultStyle;this._generalClassName="iui-calendar";this._cellClassName=this._generalClassName+"-cell";this._isNavigationActive=!1;this._navTimer=null;for(let e=0;e<7;e++)this._listDayWeek.push({});let e=this._currentSelectedDate.getDate(),t=this._currentSelectedDate.getMonth(),a=this._currentSelectedDate.getFullYear();this._currentDate=new Date(a,t,e);this._initStyle();this.updateLayout()}_initStyle(){this._defaultStyle={general:{disabled:this._generalClassName+"-disabled",focused:this._generalClassName+"-focused",normal:this._generalClassName,hovered:this._generalClassName+"-hovered",selected:this._generalClassName+"-selected"},cell:{disabled:this._cellClassName+"-disabled",focused:this._cellClassName+"-focused",grayed:this._cellClassName+"-grayed",normal:this._cellClassName,hovered:this._cellClassName+"-hovered",selected:this._cellClassName+"-selected",today:this._cellClassName+"-today"}};this.refresh()}connectedCallback(){this._windowMouseUp=this._windowMouseUp.bind(this);window.addEventListener("mouseup",this._windowMouseUp)}disconnectedCallback(){window.removeEventListener("mouseup",this._windowMouseUp)}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a)}static get properties(){return{firstDayOfWeek:{attribute:"first-dayofweek",converter:{fromAttribute:e=>{switch((e=e.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"monday":return IntegralUIWeekDays.Monday;case"tuesday":return IntegralUIWeekDays.Tuesday;case"wednesday":return IntegralUIWeekDays.Wednesday;case"thursday":return IntegralUIWeekDays.Thursday;case"friday":return IntegralUIWeekDays.Friday;case"saturday":return IntegralUIWeekDays.Saturday;default:return IntegralUIWeekDays.Sunday}},toAttribute:e=>{switch(e){case IntegralUIWeekDays.Monday:return"Monday";case IntegralUIWeekDays.Tuesday:return"Tuesday";case IntegralUIWeekDays.Wednesday:return"Wednesday";case IntegralUIWeekDays.Thursday:return"Thursday";case IntegralUIWeekDays.Friday:return"Friday";case IntegralUIWeekDays.Saturday:return"Saturday";default:return"Sunday"}}},reflect:!0},locales:{type:String,reflect:!0},selectedDate:{type:Object,attribute:"selected-date"},showToday:{type:Boolean,attribute:"show-today",reflect:!0},todayDate:{type:Object,attribute:"today-date"}}}get firstDayOfWeek(){return this._currentFirstDayOfWeek}set firstDayOfWeek(e){if(this._currentFirstDayOfWeek!==e){const t=this._currentFirstDayOfWeek;this._currentFirstDayOfWeek=e;this.requestUpdate("firstDayOfWeek",t)}}get locales(){return this._currentLocales}set locales(e){if(this._currentLocales!==e){const t=this._currentLocales;this._currentLocales=e;this.requestUpdate("locales",t)}}get selectedDate(){return this._currentSelectedDate}set selectedDate(e){if(this._currentSelectedDate!==e){const t=this._currentSelectedDate;this._currentSelectedDate=e;this._currentDate=new Date(e.getFullYear(),e.getMonth(),e.getDate());this.requestUpdate("selectedDate",t)}}get showToday(){return this._isTodayVisible}set showToday(e){if(this._isTodayVisible!==e){const t=this._isTodayVisible;this._isTodayVisible=e;this.requestUpdate("showToday",t)}}get todayDate(){return this._currentTodayDate}set todayDate(e){if(this._currentTodayDate!==e){const t=this._currentTodayDate;this._currentTodayDate=e;this.updateLayout();this.requestUpdate("todayDate",t)}}_clearDisplayAnimation(){this._isMonthAnimated=!1;this._isDecadeAnimated=!1;this._isYearAnimated=!1}_animateDisplayChanges(e){let t=this;if(!e)t.updateLayout();else{let e=t._currentDate.getDate(),a=t._currentDate.getMonth(),i=t._currentDate.getFullYear();t._updateHeaderTitle(new Date(i,a,e))}if(t._isAnimationAllowed){t._isMonthAnimated=0===t._prevDisplayMode?!0:!1;t._isDecadeAnimated=2===t._prevDisplayMode?!0:!1;t._isYearAnimated=1===t._prevDisplayMode?!0:!1;let e=.03,a=setInterval(function(){switch(t._displayMode){case 1:if(t._yearOpacity<1){t._yearOpacity+=e;t._decadeOpacity=t._decadeOpacity>0?t._decadeOpacity-e:0;t._monthOpacity=t._monthOpacity>0?t._monthOpacity-e:0}else{t._decadeOpacity=0;t._monthOpacity=0;t._yearOpacity=1;t._clearDisplayAnimation();t.refresh();clearInterval(a)}break;case 2:if(t._decadeOpacity<1){t._decadeOpacity+=e;t._monthOpacity=t._monthOpacity>0?t._monthOpacity-e:0;t._yearOpacity=t._yearOpacity>0?t._yearOpacity-e:0}else{t._decadeOpacity=1;t._monthOpacity=0;t._yearOpacity=0;t._clearDisplayAnimation();t.refresh();clearInterval(a)}break;default:if(t._monthOpacity<1){t._monthOpacity+=e;t._decadeOpacity=t._decadeOpacity>0?t._decadeOpacity-e:0;t._yearOpacity=t._yearOpacity>0?t._yearOpacity-e:0}else{t._decadeOpacity=0;t._monthOpacity=1;t._yearOpacity=0;t._clearDisplayAnimation();t.refresh();clearInterval(a)}}},5)}else{t._isMonthAnimated=!1;t._isDecadeAnimated=!1;t._isYearAnimated=!1;switch(t._displayMode){case 1:t._decadeOpacity=0;t._monthOpacity=0;t._yearOpacity=1;t.refresh();break;case 2:t._decadeOpacity=1;t._monthOpacity=0;t._yearOpacity=0;t.refresh();break;default:t._decadeOpacity=0;t._monthOpacity=1;t._yearOpacity=0;t.refresh()}}}_getCorrectDayInMonth(e,t,a){let i=this._getLastDayFromMonth(t,e);return a<=i?a:i}_getDayofWeekOrder(){switch(this._currentFirstDayOfWeek){case IntegralUIWeekDays.Monday:return 0;case IntegralUIWeekDays.Tuesday:return 1;case IntegralUIWeekDays.Wednesday:return 2;case IntegralUIWeekDays.Thursday:return 3;case IntegralUIWeekDays.Friday:return 4;case IntegralUIWeekDays.Saturday:return 5;default:return 6}}_getLastDayFromMonth(e,t){if(1===e)return t%4===0?29:28;else if(3===e||5===e||8===e||10===e)return 30;else return 31}_getPrevMonth(e){let t=e.getMonth();return 0===t?11:t-1}_getPrevYear(e){let t=e.getMonth(),a=e.getFullYear();return 1===this._displayMode?a-1:0===t?a-1:a}_getNextMonth(e){let t=e.getMonth();return 11===t?0:t+1}_getNextYear(e){let t=e.getMonth(),a=e.getFullYear();return 1===this._displayMode?a+1:11===t?a+1:a}_getWeekNames(){let e=new Date(2017,0,2),t=[];for(let a=0;a<7;a++){t.push(e.toLocaleString(this._currentLocales,{weekday:"long"}));e.setDate(e.getDate()+1)}return t}_isDateEqual(e,t){return this._isYearEqual(e,t)&&this._isMonthEqual(e,t)&&e.getDate()===t.getDate()}_isMonthEqual(e,t){return e.getMonth()===t.getMonth()}_isYearEqual(e,t){return e.getFullYear()===t.getFullYear()}_reset(){this._displayMode=0;this._decadeOpacity=0;this._monthOpacity=1;this._yearOpacity=0}refresh(){this._updateControlClass();if(this._currentDate){let e=this._currentDate.getDate(),t=this._currentDate.getMonth(),a=this._currentDate.getFullYear(),i=new Date(a,t,e),s=null;for(let e=0;e<this._listDaysInMonth.length;e++){let t=this._listDaysInMonth[e];for(let e=0;e<t.days.length;e++)(s=t.days[e]).style=this._getDayObjectStyle(i,s.value,s.grayed)}for(let e=0;e<this._listMonths.length;e++){let t=this._listMonths[e];for(let e=0;e<t.months.length;e++)(s=t.months[e]).style=this._getMonthObjectStyle(i,s.value,!1)}for(let e=0;e<this._listYears.length;e++){let t=this._listYears[e];for(let e=0;e<t.years.length;e++)(s=t.years[e]).style=this._getYearObjectStyle(i,s.value,s.grayed)}}this.update();this._updateReferences()}async updateLayout(){await this._processUpdateLayout();this.update()}_processUpdateLayout(){let e=this;return new Promise(t=>{e._updateTimer=setTimeout(function(){e._clientRect={width:e._elemRef.clientWidth,height:e._elemRef.clientHeight};e._headerSize={width:e._clientRect.width-4,height:e._headerElem.offsetHeight};e._contentSize={width:e._clientRect.width,height:e._clientRect.height-e._headerSize.height};e._listYears.length=0;e._nextListYears.length=0;e._prevListYears.length=0;e._listMonths.length=0;e._nextListMonths.length=0;e._prevListMonths.length=0;e._listDaysInMonth.length=0;e._nextListDaysInMonth.length=0;e._prevListDaysInMonth.length=0;let a=e._currentDate.getDate(),i=e._currentDate.getMonth(),s=e._currentDate.getFullYear(),r=new Date(s,i,a);r.setFullYear(s-10);e._updateDecadeLayout(e._prevListYears,r);r.setFullYear(s+10);e._updateDecadeLayout(e._nextListYears,r);r.setFullYear(s);e._updateDecadeLayout(e._listYears,r);r.setFullYear(s-1);e._updateYearLayout(e._prevListMonths,r);r.setFullYear(s+1);e._updateYearLayout(e._nextListMonths,r);r.setFullYear(s);e._updateYearLayout(e._listMonths,r);r=new Date(e._getPrevYear(e._currentDate),e._getPrevMonth(e._currentDate),1);e._updateMonthLayout(e._prevListDaysInMonth,r);r=new Date(e._getNextYear(e._currentDate),e._getNextMonth(e._currentDate),1);e._updateMonthLayout(e._nextListDaysInMonth,r);r=new Date(s,i,a);e._updateMonthLayout(e._listDaysInMonth,r);e._updateHeaderTitle(r);e.update();e._updateHeaderLayout();e._animatePrevPos=-e._contentSize.width;e._animateCurrentPos=0;e._animateNextPos=e._contentSize.width;e._animatePrevOpacity=0;e._animateCurrentOpacity=1;e._animateNextOpacity=0;e.refresh();clearTimeout(e._updateTimer);t()},1)})}_updateHeaderLayout(){this._buttonMargin={top:(this._headerSize.height-this._headerButtonElem.offsetHeight)/2,right:2,bottom:2,left:2};this._titleMargin={top:(this._headerSize.height-this._headerTitleElem.offsetHeight)/2,right:2,bottom:2,left:2};this._titleSize={width:this._headerSize.width-2*(this._headerButtonElem.offsetWidth+this._buttonMargin.left+this._buttonMargin.right)-(this._titleMargin.left+this._titleMargin.right),height:this._headerSize.height}}_updateHeaderTitle(e){switch(this._displayMode){case 1:this._title=e.getFullYear().toString();break;case 2:let t=10*Math.floor(e.getFullYear()/10);this._title=t.toString()+" - "+(t+9).toString();break;default:let a=e.toLocaleString(this.locales,{month:"long"}),i=e.getFullYear().toString();this._title=a+", "+i}}_updateDecadeLayout(e,t){let a=10*Math.floor(t.getFullYear()/10)-1,i=!1;for(let s=0;s<3;s++){let r={years:[]};for(let e=0;e<4;e++){i=(0===s&&0===e)||(2===s&&3===e)?!0:!1;r.years.push({grayed:i,style:this._getYearObjectStyle(t,a,i),value:a});a++}e.push(r)}}_updateMonthLayout(e,t){let a=this._getWeekNames(),i=this._getDayofWeekOrder(),s=i;this._listDayWeek.length=0;for(let e=0;e<7&&s<a.length;e++){this._listDayWeek.push({text:a[s].substring(0,2)});s=s<6?s+1:0}let r=t.getFullYear(),l=t.getMonth(),n=this._getLastDayFromMonth(l,r),h=new Date(r,l,1).getDay();s=i+1;h=(h=h>i?h-s:h-s+7)>0?h:7;let o=l>0?l-1:11,_=this._getLastDayFromMonth(o,r),c=!1,d=0;for(let a=0;a<6;a++){let i={days:[]};if(0===a){for(let e=0;e<h;e++){let a=_-h+1+e,s={grayed:!0,isPrev:!0,style:this._getDayObjectStyle(t,a,!0),value:a};i.days.push(s)}for(let e=h;e<7;e++){d++;let e={grayed:!1,style:this._getDayObjectStyle(t,d,!1),value:d};i.days.push(e)}}else for(let e=0;e<7;e++){if(!c&&d>=n)c=!0;d=d<n?d+1:1;let e={grayed:c,isNext:c,style:this._getDayObjectStyle(t,d,c),value:d};i.days.push(e)}e.push(i)}}_updateYearLayout(e,t){let a=0;for(let i=0;i<3;i++){let i={months:[]};for(let e=0;e<4;e++){let e=new Date();e.setMonth(a);i.months.push({text:e.toLocaleString(this.locales,{month:"long"}).substring(0,3),style:this._getMonthObjectStyle(t,a,!1),value:a});a++}e.push(i)}}_updateCurrentDate(e,t){if(e)this._currentDate=new Date(e.getFullYear(),e.getMonth(),e.getDate());else{let e=this._currentDate.getFullYear();switch(this._displayMode){case 1:this._currentDate=new Date(t?this._getPrevYear(this._currentDate):this._getNextYear(this._currentDate),this._currentDate.getMonth(),1);break;case 2:this._currentDate.setFullYear(t?e-10:e+10);break;default:this._currentDate=new Date(t?this._getPrevYear(this._currentDate):this._getNextYear(this._currentDate),t?this._getPrevMonth(this._currentDate):this._getNextMonth(this._currentDate),1)}}this.updateLayout()}_btnNextClicked(e){let t=this;t.next(e);t._removeNavigationTimer();t._isNavigationActive=!0;t._navTimer=setInterval(function(){if(t._isNavigationActive)t.next(e);else t._removeNavigationTimer()},500);e.stopPropagation()}_btnPrevClicked(e){let t=this;t.prev(e);t._removeNavigationTimer();t._isNavigationActive=!0;t._navTimer=setInterval(function(){if(t._isNavigationActive)t.prev(e);else t._removeNavigationTimer()},500);e.stopPropagation()}_ctrlClick(e){e.stopPropagation()}_ctrlMouseDown(e){e.stopPropagation()}_ctrlMouseEnter(e){this.state|=IntegralUIObjectState.hovered}_ctrlMouseLeave(e){this.state&=~IntegralUIObjectState.hovered}_ctrlMouseUp(e){this._removeNavigationTimer();e.stopPropagation()}_ctrlTouchEnd(e){e.stopPropagation()}_dayClicked(e,t){if(1===e.which&&this._isEnabled)this._processDayClicked(e,t);e.stopPropagation()}_dayTouchEnd(e,t){if(this._isEnabled)this._processDayClicked(e,t);e.stopPropagation()}_dayEnter(e,t){if(this._isEnabled){let e=t.isPrev?this._getPrevYear(this._currentDate):t.isNext?this._getNextYear(this._currentDate):this._currentDate.getFullYear(),a=t.isPrev?this._getPrevMonth(this._currentDate):t.isNext?this._getNextMonth(this._currentDate):this._currentDate.getMonth(),i=t.value;this._hoverDate=new Date(e,a,i);this.refresh()}e.stopPropagation()}_dayLeave(e,t){if(this._isEnabled){this._prevHoverDate=this._hoverDate;this._hoverDate=null;this.refresh()}e.stopPropagation()}_headerClicked(e,t){if((t||1===e.which)&&this._isEnabled&&this._displayMode<2){this._prevDisplayMode=this._prevDisplayMode!==this._displayMode?this._displayMode:this._prevDisplayMode;this._displayMode=this._displayMode<2?this._displayMode+1:2;this._animateDisplayChanges(!0)}this._hoverDate=null;e.stopPropagation()}_monthClicked(e,t){if(1===e.which&&this._isEnabled)this._processMonthClicked(t);e.stopPropagation()}_monthTouchEnd(e,t){if(this._isEnabled)this._processMonthClicked(t);e.stopPropagation()}_monthEnter(e,t){if(this._isEnabled){let e=this._currentSelectedDate.getFullYear(),a=t.value,i=this._getCorrectDayInMonth(e,a,this._currentSelectedDate.getDate());this._hoverDate=new Date(e,a,i);this.refresh()}e.stopPropagation()}_monthLeave(e,t){if(this._isEnabled){this._prevHoverDate=this._hoverDate;this._hoverDate=null;this.refresh()}e.stopPropagation()}_yearClicked(e,t){if(1===e.which&&this._isEnabled)this._processYearClicked(t);e.stopPropagation()}_yearTouchEnd(e,t){if(this._isEnabled)this._processYearClicked(t);e.stopPropagation()}_yearEnter(e,t){if(this._isEnabled){let e=t.value,a=this._currentSelectedDate.getMonth(),i=this._currentSelectedDate.getDate();this._hoverDate=new Date(e,a,i);this.refresh()}e.stopPropagation()}_yearLeave(e,t){if(this._isEnabled){this._prevHoverDate=this._hoverDate;this._hoverDate=null;this.refresh()}e.stopPropagation()}next(e,t){let a=this;if(a._isAnimationAllowed){let e=setInterval(function(){if(a._animateNextPos>0){a._animateCurrentPos-=5;a._animateNextPos-=5;a._animateCurrentOpacity=a._animateCurrentOpacity>0?a._animateCurrentOpacity-.01:0;a._animateNextOpacity=a._animateNextOpacity<1?a._animateNextOpacity+.01:1;a.update()}else{a._animateCurrentPos=-a._contentSize.width;a._animateNextPos=0;a._animateCurrentOpacity=0;a._animateNextOpacity=1;a._updateCurrentDate(t);a._prevHoverDate=null;a._hoverDate=null;a.update();clearInterval(e)}},5)}else{a._updateCurrentDate(t);a._prevHoverDate=null;a._hoverDate=null;a.update()}e.stopPropagation()}prev(e,t){let a=this;if(a._isAnimationAllowed){let e=setInterval(function(){if(a._animatePrevPos<0){a._animateCurrentPos+=5;a._animatePrevPos+=5;a._animateCurrentOpacity=a._animateCurrentOpacity>0?a._animateCurrentOpacity-.01:0;a._animatePrevOpacity=a._animatePrevOpacity<1?a._animatePrevOpacity+.01:1;a.update()}else{a._animateCurrentPos=a._contentSize.width;a._animatePrevPos=0;a._animateCurrentOpacity=0;a._animatePrevOpacity=1;a._updateCurrentDate(t,!0);a._prevHoverDate=null;a._hoverDate=null;a.update();clearInterval(e)}},5)}else{a._updateCurrentDate(t,!0);a._prevHoverDate=null;a._hoverDate=null;a.update()}e.stopPropagation()}_removeNavigationTimer(){this._isNavigationActive=!1;if(this._navTimer)clearInterval(this._navTimer);this._navTimer=null}_processDayClicked(e,t){let a=t.isPrev?this._getPrevYear(this._currentDate):t.isNext?this._getNextYear(this._currentDate):this._currentDate.getFullYear(),i=t.isPrev?this._getPrevMonth(this._currentDate):t.isNext?this._getNextMonth(this._currentDate):this._currentDate.getMonth(),s=t.value;this.selectedDate=new Date(a,i,s);t.isPrev?this.prev(e,this.selectedDate):t.isNext?this.next(e,this.selectedDate):this.refresh();this._invokeEvent("dateChanged",{date:this._currentSelectedDate})}_processMonthClicked(e){let t=this._currentDate.getFullYear(),a=e.value,i=this._getCorrectDayInMonth(t,a,this._currentSelectedDate.getDate());this.selectedDate=new Date(t,a,i);this._prevDisplayMode=this._displayMode;this._displayMode=0;this._animateDisplayChanges()}_processYearClicked(e){let t=e.value,a=this._currentDate.getMonth(),i=this._currentSelectedDate.getDate();this.selectedDate=new Date(t,a,i);this._prevDisplayMode=this._displayMode;this._displayMode=1;this._animateDisplayChanges()}_windowMouseUp(e){this._removeNavigationTimer()}_getDayObjectStyle(e,t,a){return this._getCellObjectStyle(e,new Date(e.getFullYear(),e.getMonth(),t),a)}_getMonthObjectStyle(e,t,a){return this._getCellObjectStyle(e,new Date(e.getFullYear(),t,1),a)}_getYearObjectStyle(e,t,a){return this._getCellObjectStyle(e,new Date(t,0,1),a)}_getCellObjectStyle(e,t,a){let i={};i[this._cellClassName]=!0;switch(this._displayMode){case 1:if(!a)if(this._isMonthEqual(t,this._currentDate))i[this._defaultStyle.cell.selected]=!0;else if(this._hoverDate&&this._isMonthEqual(t,this._hoverDate)){i[this._defaultStyle.cell.hovered]=!0;if(this._isAnimationAllowed)i[this._cellClassName+"-enter"]=!0}else if(this._prevHoverDate&&this._isMonthEqual(t,this._prevHoverDate)){i[this._defaultStyle.cell.normal]=!0;if(this._isAnimationAllowed)i[this._cellClassName+"-leave"]=!0}else i[this._defaultStyle.cell.normal]=!0;else i[this._defaultStyle.cell.grayed]=!0;break;case 2:if(this._isYearEqual(t,this._currentDate))i[this._defaultStyle.cell.selected]=!0;else if(this._hoverDate&&this._isYearEqual(t,this._hoverDate)){i[this._defaultStyle.cell.hovered]=!0;if(this._isAnimationAllowed)i[this._cellClassName+"-enter"]=!0}else if(this._prevHoverDate&&this._isYearEqual(t,this._prevHoverDate)){i[this._defaultStyle.cell.normal]=!0;if(this._isAnimationAllowed)i[this._cellClassName+"-leave"]=!0}else i[this._defaultStyle.cell.normal]=!0;break;default:if(!a){if(this._isDateEqual(t,this._currentSelectedDate))i[this._defaultStyle.cell.selected]=!0;else if(this._hoverDate&&this._isDateEqual(t,this._hoverDate)){i[this._defaultStyle.cell.hovered]=!0;if(this._isAnimationAllowed&&(!this.showToday||!this._isDateEqual(t,this._currentTodayDate)))i[this._cellClassName+"-enter"]=!0}else if(this._prevHoverDate&&this._isDateEqual(t,this._prevHoverDate)){i[this._defaultStyle.cell.normal]=!0;if(this._isAnimationAllowed&&(!this.showToday||!this._isDateEqual(t,this._currentTodayDate)))i[this._cellClassName+"-leave"]=!0}else i[this._defaultStyle.cell.normal]=!0;if(this._isTodayVisible&&this._isDateEqual(t,this._currentTodayDate))i[this._defaultStyle.cell.today]=!0}else i[this._defaultStyle.cell.grayed]=!0}return i}_updateThemeSettings(e){this._currentThemeSettings=css``;switch(e){case IntegralUITheme.Office:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiCalendarOfficeStyle.cssText,"../../icons",this._currentResourcePath);break;case IntegralUITheme.Midnight:this._currentThemeSettings.cssText=this._commonService.replaceAll(iuiCalendarMidnightStyle.cssText,"../../icons",this._currentResourcePath);break;default:this._currentThemeSettings.cssText=""}}firstUpdated(e){this._updateReferences();this.updateLayout()}_getCalendarLayout(){switch(this._displayMode){case 1:return this._getYearLayout();case 2:return this._getDecadeLayout();default:return this._getMonthLayout()}}_getDecadeLayout(){return html`             <div id="content" style=${styleMap({opacity:this._decadeOpacity})}>                 <table cellspacing="2" cellpadding="1" style=${styleMap({position:"absolute",height:this._contentSize.height+"px",left:this._animatePrevPos+"px",width:"100%"})}>                     ${this._prevListYears.map(e=>html`<tr>                                 ${e.years.map(e=>html`                                     <td class=${classMap(e.style)} style="width:25%;height:33%;text-align:center;">                                         <span>${e.value}</span>                                     </td>                                 `)}                         </tr>`)}                 </table>                 <table cellspacing="2" cellpadding="1" style=${styleMap({position:"absolute",height:this._contentSize.height+"px",left:this._animateCurrentPos+"px",width:"100%"})}>                     ${this._listYears.map(e=>html`<tr>                                 ${e.years.map(e=>html`                                     <td class=${classMap(e.style)} style="width:25%;height:33%;text-align:center;" @mouseenter="${t=>this._yearEnter(t,e)}" @mousedown="${t=>this._yearClicked(t,e)}" @mouseleave="${t=>this._yearLeave(t,e)}" @touchend="${t=>this._yearTouchEnd(t,e)}">                                         <span>${e.value}</span>                                     </td>                                 `)}                         </tr>`)}                 </table>                 <table cellspacing="2" cellpadding="1" style=${styleMap({position:"absolute",height:this._contentSize.height+"px",left:this._animateNextPos+"px",width:"100%"})}>                     ${this._nextListYears.map(e=>html`<tr>                                 ${e.years.map(e=>html`                                     <td class=${classMap(e.style)} style="width:25%;height:33%;text-align:center;">                                         <span>${e.value}</span>                                     </td>                                 `)}                         </tr>`)}                 </table>             </div>`}_getMonthLayout(){return html`             <div id="content" style=${styleMap({opacity:this._monthOpacity})}>                 <table cellspacing="2" cellpadding="1" style=${styleMap({position:"absolute",height:this._contentSize.height+"px",left:this._animatePrevPos+"px",opacity:1,width:"100%"})}>                     <tr>                         ${this._listDayWeek.map(e=>html`                             <th class="iui-calendar-cell-header" style="width:14.2857%;height:14.2857%;">                                 <span>${e.text}</span>                             </th>`)}                     </tr>                     ${this._prevListDaysInMonth.map(e=>html`<tr>                         ${e.days.map(e=>html`                             <td class=${classMap(e.style)} style="width:14.2857%;height:14.2857%;">                                 <span>${e.value}</span>                             </td>`)}                         </tr>`)}                 </table>                 <table cellspacing="2" cellpadding="1" style=${styleMap({position:"absolute",height:this._contentSize.height+"px",left:this._animateCurrentPos+"px",opacity:1,width:"100%"})}>                     <tr>                         ${this._listDayWeek.map(e=>html`                             <th class="iui-calendar-cell-header" style="width:14.2857%;height:14.2857%;">                                 <span>${e.text}</span>                             </th>`)}                     </tr>                     ${this._listDaysInMonth.map(e=>html`<tr>                         ${e.days.map(e=>html`                             <td class=${classMap(e.style)} style="width:14.2857%;height:14.2857%;" @mouseenter="${t=>this._dayEnter(t,e)}" @mousedown="${t=>this._dayClicked(t,e)}" @mouseleave="${t=>this._dayLeave(t,e)}" @touchend="${t=>this._dayTouchEnd(t,e)}">                                 <span>${e.value}</span>                             </td>`)}                         </tr>`)}                 </table>                 <table cellspacing="2" cellpadding="1" style=${styleMap({position:"absolute",height:this._contentSize.height+"px",left:this._animateNextPos+"px",opacity:1,width:"100%"})}>                     <tr>                         ${this._listDayWeek.map(e=>html`                             <th class="iui-calendar-cell-header" style="width:14.2857%;height:14.2857%;">                                 <span>${e.text}</span>                             </th>`)}                     </tr>                     ${this._nextListDaysInMonth.map(e=>html`<tr>                         ${e.days.map(e=>html`                             <td class=${classMap(e.style)} style="width:14.2857%;height:14.2857%;">                                 <span>${e.value}</span>                             </td>`)}                         </tr>`)}                 </table>             </div>         `}_getYearLayout(){return html`             <div id="content" style=${styleMap({opacity:this._yearOpacity})}>                 <table cellspacing="2" cellpadding="1" style=${styleMap({position:"absolute",height:this._contentSize.height+"px",left:this._animatePrevPos+"px",width:"100%"})}>                     ${this._prevListMonths.map(e=>html`<tr>                                 ${e.months.map(e=>html`                                     <td class=${classMap(e.style)} style="width:25%;height:33%;text-align:center;">                                         <span>${e.text}</span>                                     </td>                                 `)}                         </tr>`)}                 </table>                 <table cellspacing="2" cellpadding="1" style=${styleMap({position:"absolute",height:this._contentSize.height+"px",left:this._animateCurrentPos+"px",width:"100%"})}>                     ${this._listMonths.map(e=>html`<tr>                                 ${e.months.map(e=>html`                                     <td class=${classMap(e.style)} style="width:25%;height:33%;text-align:center;" @mouseenter="${t=>this._monthEnter(t,e)}" @mousedown="${t=>this._monthClicked(t,e)}" @mouseleave="${t=>this._monthLeave(t,e)}" @touchend="${t=>this._monthTouchEnd(t,e)}">                                         <span>${e.text}</span>                                     </td>                                 `)}                         </tr>`)}                 </table>                 <table cellspacing="2" cellpadding="1" style=${styleMap({position:"absolute",height:this._contentSize.height+"px",left:this._animateNextPos+"px",width:"100%"})}>                     ${this._nextListMonths.map(e=>html`<tr>                                 ${e.months.map(e=>html`                                     <td class=${classMap(e.style)} style="width:25%;height:33%;text-align:center;">                                         <span>${e.text}</span>                                     </td>                                 `)}                         </tr>`)}                 </table>             </div>         `}render(){return html`             <style>                 ${this._currentControlStyleSettings}                 ${this._currentThemeSettings}                 ${this._currentCustomStyle}             </style>             <div data-ctrl="calendar" class=${classMap(this._getControlClass())} style=${styleMap(this._getControlStyle())} tabindex="0" @click="${e=>this._ctrlClick(e)}" @mouseenter="${e=>this._ctrlMouseEnter(e)}" @mouseleave="${e=>this._ctrlMouseLeave(e)}" @mousedown="${e=>this._ctrlMouseDown(e)}" @mouseup="${e=>this._ctrlMouseUp(e)}" @touchend="${e=>this._ctrlTouchEnd(e)}">                 <div id="header" style="height:14%;margin:0 2px;">                     <div id="header-button" class="iui-calendar-header-button iui-calendar-header-button-prev" style=${styleMap({marginTop:this._buttonMargin.top+"px",marginLeft:this._buttonMargin.left+"px"})} @mousedown="${e=>this._btnPrevClicked(e)}" @touchend="${e=>this._btnPrevClicked(e)}"><span></span></div>                     <div id="header-title" class="iui-calendar-header-title" style=${styleMap({marginTop:this._titleMargin.top+"px",marginLeft:this._titleMargin.left+"px",width:this._titleSize.width+"px"})} @click="${e=>this._headerClicked(e)}" @touchend="${e=>this._headerClicked(e,!0)}"><span>${this._title}</span></div>                     <div class="iui-calendar-header-button iui-calendar-header-button-next" style=${styleMap({marginTop:this._buttonMargin.top+"px",marginRight:this._buttonMargin.right+"px"})} @mousedown="${e=>this._btnNextClicked(e)}" @touchend="${e=>this._btnNextClicked(e)}"><span></span></div>                 </div>                 <div style="position:relative;overflow:hidden;" style=${styleMap({height:this._contentSize.height+"px"})}>                     ${this._getCalendarLayout()}                 </div>             </div>         `}_updateControlStyleSettings(e){this._currentControlStyleSettings=css``;this._currentControlStyleSettings.cssText=this._commonService.replaceAll(iuiCalendarDefaultStyle.cssText,"../icons",e)}_updateReferences(){this._elemRef=this.shadowRoot.querySelector("div[data-ctrl=calendar]");this._headerElem=this.shadowRoot.querySelector("#header");this._headerButtonElem=this.shadowRoot.querySelector("#header-button");this._headerTitleElem=this.shadowRoot.querySelector("#header-title")}}window.customElements.define("iui-calendar",IntegralUICalendar);export default IntegralUICalendar;