/*
  filename: integralui.animation.js
  version : 23.4.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
class IntegralUIAnimation{constructor(t,e,r){this._currentDelay=this._isNumber(e)?e:0;this._currentDuration=this._isNumber(r)?r:1e3;this._currentTarget=t;this._objStateList=[];this._isDestroyed=!1;this._animationInterval=null;this._animationTick=10;this._numSteps=Math.floor(this._currentDuration/this._animationTick)}destroy(){this._isDestroyed=!0;this._removeAnimationInterval()}get delay(){return this._currentDelay}set delay(t){if(this._isNumber(t)&&this._currentDelay!==t)this._currentDelay=t}get duration(){return this._currentDuration}set duration(t){if(this._isNumber(t)&&this._currentDuration!==t){this._currentDuration=t;this._numSteps=Math.floor(this._currentDuration/this._animationTick)}}animate(t,e,r,i){if(!this._isObject(t)&&!this._isArray(t))return Promise.resolve();else{let n=this;return new Promise(a=>{n._removeAnimationInterval();n._currentDelay=e;setTimeout(function(){if(r)n._currentDuration=r;n._numSteps=Math.floor(n._currentDuration/n._animationTick);let e=n._convertToArray(t);n._updateState(e);let s=0;n._animationInterval=setInterval(function(){let t=[];if(++s<=n._numSteps)n._objStateList.forEach(e=>t.push({element:e.element,values:n._updateCurrentValue(e.props,e.values,s)}));let e=!0,u=s===n._numSteps;if(i){if(u)n._removeAnimationInterval();e=i([...t],u)}if(!1===e){n._removeAnimationInterval();a();n._reverse(t,r/4,i)}else if(u||n._isDestroyed){n._removeAnimationInterval();n._updateState(t);a()}},n._animationTick)},n._currentDelay)})}}_reverse(t,e,r){let i=this;return new Promise(n=>{i._removeAnimationInterval();if(e)i._currentDuration=e;i._numSteps=Math.floor(i._currentDuration/i._animationTick);let a=i._convertToArray(t);i._updateState(a,!0);let s=0;i._animationInterval=setInterval(function(){let t=[];if(++s<=i._numSteps)i._objStateList.forEach(e=>t.push({element:e.element,values:i._updateCurrentValue(e.props,e.values,s)}));let e=s===i._numSteps;if(r){if(e)i._removeAnimationInterval();r([...t],e,!0)}if(e){i._removeAnimationInterval();i._updateState(t);n()}},i._animationTick)})}_getCurrentValue(t){return this.animationSpeed?this.animationSpeed(t):t}_removeAnimationInterval(){if(this._animationInterval)clearInterval(this._animationInterval);this._animationInterval=null}_updateCurrentValue(t,e,r){let i={};t.forEach(t=>i[t]=r<this._numSteps?e[t].value+this._getCurrentValue(e[t].step*r):e[t].end);return i}_getStartingValues(){let t=[];this._objStateList.forEach(e=>t.push(e.values));return t}_updateState(t,e){let r=this._getStartingValues();this._objStateList.length=0;t.forEach((t,i)=>{let n=this._getObjProperties(t.values),a={};if(t.current)a=t.current;else if(t.element&&this._isElement(t.element))a=getComputedStyle(t.element);let s={element:t.element,props:n,values:{}};n.forEach(n=>{let u=e?r[i][n].value:t.values[n],l=this._getNumValue(a[n]);s.values[n]={end:this.inverseFunction?this.inverseFunction(u):u,step:(u-l)/this._numSteps,value:l}});this._objStateList.push(s)})}_convertToArray(t){if(this._isObject(t))return[t];else if(this._isArray(t))return t;return[]}_createEmptyArray(t){return new Array(t).fill({})}_getNumValue(t){if(this._isString(t))return parseFloat(t);else if(this._isNumber(t))return t;return 0}_getObjProperties(t){return Object.keys(t)}_isArray(t){return t?Array.isArray(t):!1}_isElement(t){return t?t instanceof Element:!1}_isFieldAvailable(t){return void 0!==t?!0:!1}_isNumber(t){return void 0!==t&&!Number.isNaN(t)?"number"===typeof t||t instanceof Number:!1}_isObject(t){return t?"object"===typeof t&&null!==t&&!Array.isArray(t):!1}_isString(t){return t?"string"===typeof t||t instanceof String:!1}getTarget(){return this._currentTarget}isActive(){return null!==this._animationInterval?!0:!1}isAnimated(t){return this._isArray(this._currentTarget)?this._currentTarget.filter(e=>e===t).length>0:this._currentTarget===t}}export default IntegralUIAnimation;