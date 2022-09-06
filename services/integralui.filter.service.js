/*
  filename: integralui.filter.service.js
  version : 22.3.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
class IntegralUIFilterService{isString(e){return e?"string"===typeof e||e instanceof String:!1}isFilterCondition(e){if("a"===e||"b"===e||"c"===e||"d"===e||"e"===e||"f"===e||"g"===e||"h"===e||"i"===e||"j"===e||"k"===e||"l"===e||"m"===e||"n"===e||"o"===e||"p"===e||"q"===e||"r"===e||"s"===e||"t"===e||"u"===e||"v"===e||"w"===e||"x"===e||"y"===e||"z"===e)return!0;else return!1}beginsWith(e,t,i){if(void 0!==e&&void 0!==t&&this.isString(e)&&this.isString(t))if(e.length>=t.length)if(!1!==i)return e.substring(0,t.length)===t?!0:!1;else return e.toLowerCase().substring(0,t.length)===t.toLowerCase()?!0:!1;return!1}endsWith(e,t,i){if(void 0!==e&&void 0!==t&&this.isString(e)&&this.isString(t))if(e.length>=t.length)if(!1!==i)return e.substring(e.length-t.length,e.length)===t?!0:!1;else return e.toLowerCase().substring(e.length-t.length,e.length)===t.toLowerCase()?!0:!1;return!1}getFilterCondition(e,t){let i="abcdefghijklmnopqrstuvwxyz".indexOf(t);return e&&i>=0&&i<e.length?e[i]:null}createFilterNode(){return{result:!1}}setFilterNode(e,t,i,r){let s=this.createFilterNode();s.condition=this.getFilterCondition(t,i);s.negative=r;if(!e.left)e.left=s;else if(!e.right)e.right=s}getMatchResult(e,t,i,r,s){let l=!1;if(void 0!==e&&void 0!==i){switch(t){case">":l=e>i;break;case">=":l=e>=i;break;case"<":l=e<i;break;case"<=":l=e<=i;break;case"=":if(this.isString(e)&&this.isString(i))l=!1!==s?e===i:e.toLowerCase()===i.toLowerCase();else l=e===i;break;case"!=":case"<>":if(this.isString(e)&&this.isString(i))l=!1!==s?e!==i:e.toLowerCase()!==i.toLowerCase();else l=e!==i;break;case"->":l=this.beginsWith(e,i,s);break;case"<-":l=this.endsWith(e,i,s);break;case"><":case"[]":l=this.isString(e)&&this.isString(i)?!1!==s?e.indexOf(i)>-1:e.toLowerCase().indexOf(i.toLowerCase())>-1:!1;break;case"][":l=!(l=this.isString(e)&&this.isString(i)?!1!==s?e.indexOf(i)>-1:e.toLowerCase().indexOf(i.toLowerCase())>-1:!1);break;default:l=!1}if(!0===r)l=!l}return l}getFilterResult(e,t,i,r){if(t){if(Array.isArray(t.value)){let s=[];for(let l=0;l<t.value.length;l++)s.push(this.getMatchResult(e,t.operation,t.value[l],i,r));let l=!0;if("&"===t.join)for(let e=0;e<s.length;e++)l=l&&s[e];else{l=!1;for(let e=0;e<s.length;e++)l=l||s[e]}return l}return this.getMatchResult(e,t.operation,t.value,i,r)}return!0}applyFilter(e,t,i){if(t){let r=t,s=r;if(s.left)if(s.left.condition)s.left.result=this.getFilterResult(e,s.left.condition,s.left.negative,i);else{s=s.left;this.applyFilter(e,s,i)}if((s=r).right)if(s.right.condition)s.right.result=this.getFilterResult(e,s.right.condition,s.right.negative,i);else{s=s.right;this.applyFilter(e,s,i)}if("&"===r.operator){r.result=!0;if(r.left)r.result=r.result&&r.left.result;if(r.right)r.result=r.result&&r.right.result}else{r.result=!1;if(r.left)r.result=r.result||r.left.result;if(r.right)r.result=r.result||r.right.result}return r.result}return!0}createTree(e,t){if(t){let i=this.createFilterNode(),r=i,s=null,l=!1;for(let i=0;i<t.length;i++)if(this.isFilterCondition(t[i]))this.setFilterNode(r,e,t[i],l);else if("&"===t[i]||"|"===t[i]){l=!1;r.operator=t[i]}else if("!"===t[i])l=!0;else if("("===t[i]){l=!1;(s=this.createFilterNode()).parent=r;r=s}else if(")"===t[i]){l=!1;if(r.parent)if(!r.parent.left)r.parent.left=r;else if(!r.parent.right)r.parent.right=r;r=r.parent}return i}return null}match(e,t,i,r,s){if(Array.isArray(t)){if(!r)r=this.createTree(t,i);return this.applyFilter(e,r,s)}let l=t?t.negative:!1;return this.getFilterResult(e,t,l,s)}filter(e,t,i,r,s,l){let n=[];if(e&&Array.isArray(e))for(let a=0;a<e.length;a++){let h=t?e[a][t]:e[a];if(this.match(h,i,r,s,l))n.push(e[a])}return n}}export default IntegralUIFilterService;