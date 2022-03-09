import{d as directive,A as AttributePart}from"./lit-element.js";
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
 */const previousValues=new WeakMap(),ifDefined=directive(e=>t=>{const i=previousValues.get(t);if(void 0===e&&t instanceof AttributePart){if(void 0!==i||!previousValues.has(t)){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else if(e!==i)t.setValue(e);previousValues.set(t,e)});export{ifDefined as i};