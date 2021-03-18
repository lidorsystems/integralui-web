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
 */const classMapCache=new WeakMap(),classMap=directive(t=>e=>{if(!(e instanceof AttributePart)||e instanceof PropertyPart||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:s}=e,{element:a}=s;if(!classMapCache.has(e))a.className=s.strings.join(" ");const{classList:r}=a,c=classMapCache.get(e);for(const e in c)if(!(e in t))r.remove(e);for(const e in t){const s=t[e];if(!c||s!==c[e]){r[s?"add":"remove"](e)}}classMapCache.set(e,t)});export{classMap, classMap as c};