import{d as directive,A as AttributePart,P as PropertyPart}from"./lit-element.js";
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const styleMapCache=new WeakMap(),styleMap=directive(t=>e=>{if(!(e instanceof AttributePart)||e instanceof PropertyPart||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:s}=e,{style:r}=s.element;if(!styleMapCache.has(e))r.cssText=s.strings.join(" ");const i=styleMapCache.get(e);for(const e in i)if(!(e in t))if(-1===e.indexOf("-"))r[e]=null;else r.removeProperty(e);for(const e in t)if(-1===e.indexOf("-"))r[e]=t[e];else r.setProperty(e,t[e]);styleMapCache.set(e,t)});export{styleMap, styleMap as s,};