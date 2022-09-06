/*
  filename: integralui.dragdrop.service.js
  version : 22.3.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
class IntegralUIDragDropServiceClass{constructor(){this.data={action:"move",clone:null,dropPos:-1,handle:null,source:null,sourceCtrl:null,sourceData:null,sourceIndex:-1,target:null,targetCtrl:null,type:""}}clearData(){this.data={action:"move",clone:null,dropPos:-1,handle:null,source:null,sourceCtrl:null,sourceData:null,sourceIndex:-1,target:null,targetCtrl:null,type:""}}getData(){return this.data}setData(t){if(t){if(t.action)this.data.action=t.action;if(!isNaN(t.dropPos))this.data.dropPos=t.dropPos;if(!isNaN(t.sourceIndex))this.data.sourceIndex=t.sourceIndex;this.data.clone=void 0!==t.clone?t.clone:null;this.data.source=void 0!==t.source?t.source:null;this.data.handle=void 0!==t.handle?t.handle:null;this.data.sourceCtrl=void 0!==t.sourceCtrl?t.sourceCtrl:null;this.data.sourceData=void 0!==t.sourceData?t.sourceData:null;this.data.target=void 0!==t.target?t.target:null;this.data.targetCtrl=void 0!==t.targetCtrl?t.targetCtrl:null;this.data.type=void 0!==t.type?t.type:""}}checkHit(t,e,r){if(t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom)return!0;else return!1}getDropPos(t,e,r,i){if("horizontal"===i)return this.getDropPosHorizontal(t,e,r);else return this.getDropPosVertical(t,e,r)}getDropPosHalf(t,e,r){let i={left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height};switch(r){case"full":if(this.checkHit(t.x,t.y,i))return 0;break;case"horizontal":i.right=e.x+e.width/2;if(this.checkHit(t.x,t.y,i))return 1;else{i.left=i.right;i.right=e.x+e.width;if(this.checkHit(t.x,t.y,i))return 2}break;default:i.bottom=e.y+e.height/2;if(this.checkHit(t.x,t.y,i))return 1;else{i.top=i.bottom;i.bottom=e.y+e.height;if(this.checkHit(t.x,t.y,i))return 2}}return-1}getDropPosHorizontal(t,e,r){if(r)return this.getDropPosHalf(t,e,"horizontal");else{let r={left:e.x+e.width/4,top:e.y,right:e.x+3*e.width/4,bottom:e.y+e.height};if(this.checkHit(t.x,t.y,r))return 0;else{r.right=r.left;r.left=e.x;if(this.checkHit(t.x,t.y,r))return 1;else{r.left=e.x+3*e.width/4;r.right=e.x+e.width;if(this.checkHit(t.x,t.y,r))return 2}}}return-1}getDropPosVertical(t,e,r){if(r)return this.getDropPosHalf(t,e,"vertical");else{let r={left:e.x,top:e.y+e.height/4,right:e.x+e.width,bottom:e.y+3*e.height/4};if(this.checkHit(t.x,t.y,r))return 0;else{r.bottom=r.top;r.top=e.y;if(this.checkHit(t.x,t.y,r))return 1;else{r.top=e.y+3*e.height/4;r.bottom=e.y+e.height;if(this.checkHit(t.x,t.y,r))return 2}}}return-1}}var IntegralUIDragDropService=function(){var t;return{getInstance:function(){if(null==t)(t=new IntegralUIDragDropServiceClass).constructor=null;return t}}}();export default IntegralUIDragDropService;