/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives=new WeakMap(),directive=e=>(...t)=>{const s=e(...t);directives.set(s,!0);return s},isDirective=e=>"function"===typeof e&&directives.has(e),isCEPolyfill=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,removeNodes=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t);t=s}},noChange={},nothing={},marker=`{{lit-${String(Math.random()).slice(2)}}}`,nodeMarker=`\x3c!--${marker}--\x3e`,markerRegex=new RegExp(`${marker}|${nodeMarker}`),boundAttributeSuffix="$lit$";class Template{constructor(e,t){this.parts=[];this.element=t;const s=[],i=[],r=document.createTreeWalker(t.content,133,null,!1);let n=0,o=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=r.nextNode();if(null!==e){o++;if(1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)if(endsWith(t[e].name,boundAttributeSuffix))i++;for(;i-- >0;){const t=l[a],s=lastAttributeNameRegex.exec(t)[2],i=s.toLowerCase()+boundAttributeSuffix,r=e.getAttribute(i);e.removeAttribute(i);const n=r.split(markerRegex);this.parts.push({type:"attribute",index:o,name:s,strings:n});a+=n.length-1}}if("TEMPLATE"===e.tagName){i.push(e);r.currentNode=e.content}}else if(3===e.nodeType){const t=e.data;if(t.indexOf(marker)>=0){const i=e.parentNode,r=t.split(markerRegex),n=r.length-1;for(let t=0;t<n;t++){let s,n=r[t];if(""===n)s=createMarker();else{const e=lastAttributeNameRegex.exec(n);if(null!==e&&endsWith(e[2],boundAttributeSuffix))n=n.slice(0,e.index)+e[1]+e[2].slice(0,-boundAttributeSuffix.length)+e[3];s=document.createTextNode(n)}i.insertBefore(s,e);this.parts.push({type:"node",index:++o})}if(""===r[n]){i.insertBefore(createMarker(),e);s.push(e)}else e.data=r[n];a+=n}}else if(8===e.nodeType)if(e.data===marker){const t=e.parentNode;if(null===e.previousSibling||o===n){o++;t.insertBefore(createMarker(),e)}n=o;this.parts.push({type:"node",index:o});if(null===e.nextSibling)e.data="";else{s.push(e);o--}a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(marker,t+1));){this.parts.push({type:"node",index:-1});a++}}}else r.currentNode=i.pop()}for(const e of s)e.parentNode.removeChild(e)}}const endsWith=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},isTemplatePartActive=e=>-1!==e.index,createMarker=()=>document.createComment(""),lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class TemplateInstance{constructor(e,t,s){this.__parts=[];this.template=e;this.processor=t;this.options=s}update(e){let t=0;for(const s of this.__parts){if(void 0!==s)s.setValue(e[t]);t++}for(const e of this.__parts)if(void 0!==e)e.commit()}_clone(){const e=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r,n=0,o=0,a=i.nextNode();for(;n<s.length;){r=s[n];if(isTemplatePartActive(r)){for(;o<r.index;){o++;if("TEMPLATE"===a.nodeName){t.push(a);i.currentNode=a.content}if(null===(a=i.nextNode())){i.currentNode=t.pop();a=i.nextNode()}}if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling);this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));n++}else{this.__parts.push(void 0);n++}}if(isCEPolyfill){document.adoptNode(e);customElements.upgrade(e)}return e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const commentMarker=` ${marker} `;class TemplateResult{constructor(e,t,s,i){this.strings=e;this.values=t;this.type=s;this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const e=this.strings[i],r=e.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===e.indexOf("--\x3e",r+1);const n=lastAttributeNameRegex.exec(e);if(null===n)t+=e+(s?commentMarker:nodeMarker);else t+=e.substr(0,n.index)+n[1]+n[2]+boundAttributeSuffix+n[3]+marker}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");e.innerHTML=this.getHTML();return e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const isPrimitive=e=>null===e||!("object"===typeof e||"function"===typeof e),isIterable=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class AttributeCommitter{constructor(e,t,s){this.dirty=!0;this.element=e;this.name=t;this.strings=s;this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new AttributePart(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let i=0;i<t;i++){s+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(isPrimitive(e)||!isIterable(e))s+="string"===typeof e?e:String(e);else for(const t of e)s+="string"===typeof t?t:String(t)}}return s+=e[t]}commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}class AttributePart{constructor(e){this.value=void 0;this.committer=e}setValue(e){if(e!==noChange&&(!isPrimitive(e)||e!==this.value)){this.value=e;if(!isDirective(e))this.committer.dirty=!0}}commit(){for(;isDirective(this.value);){const e=this.value;this.value=noChange;e(this)}if(this.value!==noChange)this.committer.commit()}}class NodePart{constructor(e){this.value=void 0;this.__pendingValue=void 0;this.options=e}appendInto(e){this.startNode=e.appendChild(createMarker());this.endNode=e.appendChild(createMarker())}insertAfterNode(e){this.startNode=e;this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=createMarker());e.__insert(this.endNode=createMarker())}insertAfterPart(e){e.__insert(this.startNode=createMarker());this.endNode=e.endNode;e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;isDirective(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=noChange;e(this)}const e=this.__pendingValue;if(e!==noChange)if(isPrimitive(e)){if(e!==this.value)this.__commitText(e)}else if(e instanceof TemplateResult)this.__commitTemplateResult(e);else if(e instanceof Node)this.__commitNode(e);else if(isIterable(e))this.__commitIterable(e);else if(e===nothing){this.value=nothing;this.clear()}else this.__commitText(e)}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){if(this.value!==e){this.clear();this.__insert(e);this.value=e}}__commitText(e){const t=this.startNode.nextSibling,s="string"===typeof(e=null==e?"":e)?e:String(e);if(t===this.endNode.previousSibling&&3===t.nodeType)t.data=s;else this.__commitNode(document.createTextNode(s));this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof TemplateInstance&&this.value.template===t)this.value.update(e.values);else{const s=new TemplateInstance(t,e.processor,this.options),i=s._clone();s.update(e.values);this.__commitNode(i);this.value=s}}__commitIterable(e){if(!Array.isArray(this.value)){this.value=[];this.clear()}const t=this.value;let s,i=0;for(const r of e){if(void 0===(s=t[i])){s=new NodePart(this.options);t.push(s);if(0===i)s.appendIntoPart(this);else s.insertAfterPart(t[i-1])}s.setValue(r);s.commit();i++}if(i<t.length){t.length=i;this.clear(s&&s.endNode)}}clear(e=this.startNode){removeNodes(this.startNode.parentNode,e.nextSibling,this.endNode)}}class BooleanAttributePart{constructor(e,t,s){this.value=void 0;this.__pendingValue=void 0;if(2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e;this.name=t;this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;isDirective(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=noChange;e(this)}if(this.__pendingValue===noChange)return;const e=!!this.__pendingValue;if(this.value!==e){if(e)this.element.setAttribute(this.name,"");else this.element.removeAttribute(this.name);this.value=e}this.__pendingValue=noChange}}class PropertyCommitter extends AttributeCommitter{constructor(e,t,s){super(e,t,s);this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new PropertyPart(this)}_getValue(){if(this.single)return this.parts[0].value;else return super._getValue()}commit(){if(this.dirty){this.dirty=!1;this.element[this.name]=this._getValue()}}}class PropertyPart extends AttributePart{}let eventOptionsSupported=!1;try{const e={get capture(){eventOptionsSupported=!0;return!1}};window.addEventListener("test",e,e);window.removeEventListener("test",e,e)}catch(e){}class EventPart{constructor(e,t,s){this.value=void 0;this.__pendingValue=void 0;this.element=e;this.eventName=t;this.eventContext=s;this.__boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this.__pendingValue=e}commit(){for(;isDirective(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=noChange;e(this)}if(this.__pendingValue===noChange)return;const e=this.__pendingValue,t=this.value,s=null==e||(null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive)),i=null!=e&&(null==t||s);if(s)this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options);if(i){this.__options=getOptions(e);this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)}this.value=e;this.__pendingValue=noChange}handleEvent(e){if("function"===typeof this.value)this.value.call(this.eventContext||this.element,e);else this.value.handleEvent(e)}}const getOptions=e=>e&&(eventOptionsSupported?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class DefaultTemplateProcessor{handleAttributeExpressions(e,t,s,i){const r=t[0];if("."===r){return new PropertyCommitter(e,t.slice(1),s).parts}if("@"===r)return[new EventPart(e,t.slice(1),i.eventContext)];if("?"===r)return[new BooleanAttributePart(e,t.slice(1),s)];else return new AttributeCommitter(e,t,s).parts}handleTextExpression(e){return new NodePart(e)}}const defaultTemplateProcessor=new DefaultTemplateProcessor();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function templateFactory(e){let t=templateCaches.get(e.type);if(void 0===t){t={stringsArray:new WeakMap(),keyString:new Map()};templateCaches.set(e.type,t)}let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const i=e.strings.join(marker);if(void 0===(s=t.keyString.get(i))){s=new Template(e,e.getTemplateElement());t.keyString.set(i,s)}t.stringsArray.set(e.strings,s);return s}const templateCaches=new Map(),parts=new WeakMap(),render=(e,t,s)=>{let i=parts.get(t);if(void 0===i){removeNodes(t,t.firstChild);parts.set(t,i=new NodePart(Object.assign({templateFactory:templateFactory},s)));i.appendInto(t)}i.setValue(e);i.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const html=(e,...t)=>new TemplateResult(e,t,"html",defaultTemplateProcessor),walkerNodeFilter=133;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function removeNodesFromTemplate(e,t){const{element:{content:s},parts:i}=e,r=document.createTreeWalker(s,walkerNodeFilter,null,!1);let n=nextActiveIndexInTemplateParts(i),o=i[n],a=-1,l=0;const c=[];let h=null;for(;r.nextNode();){a++;const e=r.currentNode;if(e.previousSibling===h)h=null;if(t.has(e)){c.push(e);if(null===h)h=e}if(null!==h)l++;for(;void 0!==o&&o.index===a;){o.index=null!==h?-1:o.index-l;o=i[n=nextActiveIndexInTemplateParts(i,n)]}}c.forEach(e=>e.parentNode.removeChild(e))}const countNodes=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,walkerNodeFilter,null,!1);for(;s.nextNode();)t++;return t},nextActiveIndexInTemplateParts=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(isTemplatePartActive(t))return s}return-1};function insertNodeIntoTemplate(e,t,s=null){const{element:{content:i},parts:r}=e;if(null===s||void 0===s){i.appendChild(t);return}const n=document.createTreeWalker(i,walkerNodeFilter,null,!1);let o=nextActiveIndexInTemplateParts(r),a=0,l=-1;for(;n.nextNode();){l++;if(n.currentNode===s){a=countNodes(t);s.parentNode.insertBefore(t,s)}for(;-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;){r[o].index+=a;o=nextActiveIndexInTemplateParts(r,o)}return}o=nextActiveIndexInTemplateParts(r,o)}}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const getTemplateCacheKey=(e,t)=>`${e}--${t}`;let compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS)compatibleShadyCSSVersion=!1;else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.");compatibleShadyCSSVersion=!1}const shadyTemplateFactory=e=>t=>{const s=getTemplateCacheKey(t.type,e);let i=templateCaches.get(s);if(void 0===i){i={stringsArray:new WeakMap(),keyString:new Map()};templateCaches.set(s,i)}let r=i.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(marker);if(void 0===(r=i.keyString.get(n))){const s=t.getTemplateElement();if(compatibleShadyCSSVersion)window.ShadyCSS.prepareTemplateDom(s,e);r=new Template(t,s);i.keyString.set(n,r)}i.stringsArray.set(t.strings,r);return r},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=e=>{TEMPLATE_TYPES.forEach(t=>{const s=templateCaches.get(getTemplateCacheKey(t,e));if(void 0!==s)s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set();Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)});removeNodesFromTemplate(e,s)})})},shadyRenderSet=new Set(),prepareTemplateStyles=(e,t,s)=>{shadyRenderSet.add(e);const i=s?s.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:n}=r;if(0===n){window.ShadyCSS.prepareTemplateStyles(i,e);return}const o=document.createElement("style");for(let e=0;e<n;e++){const t=r[e];t.parentNode.removeChild(t);o.textContent+=t.textContent}removeStylesFromLitTemplates(e);const a=i.content;if(s)insertNodeIntoTemplate(s,o,a.firstChild);else a.insertBefore(o,a.firstChild);window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set();e.add(o);removeNodesFromTemplate(s,e)}},render$1=(e,t,s)=>{if(!s||"object"!==typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,r=parts.has(t),n=compatibleShadyCSSVersion&&11===t.nodeType&&!!t.host,o=n&&!shadyRenderSet.has(i),a=o?document.createDocumentFragment():t;render(e,a,Object.assign({templateFactory:shadyTemplateFactory(i)},s));if(o){const e=parts.get(a);parts.delete(a);const s=e.value instanceof TemplateInstance?e.value.template:void 0;prepareTemplateStyles(i,a,s);removeNodes(t,t.firstChild);t.appendChild(a);parts.set(t,e)}if(!r&&n)window.ShadyCSS.styleElement(t.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;window.JSCompiler_renameProperty=((e,t)=>e);const defaultConverter={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e);default:return e}},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e);default:return e}}},notEqual=(e,t)=>t!==e&&(t===t||e===e),defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},microtaskPromise=Promise.resolve(!0),STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=4,STATE_IS_REFLECTING_TO_ATTRIBUTE=8,STATE_IS_REFLECTING_TO_PROPERTY=16,STATE_HAS_CONNECTED=32,finalized="finalized";class UpdatingElement extends HTMLElement{constructor(){super();this._updateState=0;this._instanceProperties=void 0;this._updatePromise=microtaskPromise;this._hasConnectedResolver=void 0;this._changedProperties=new Map();this._reflectingProperties=void 0;this.initialize()}static get observedAttributes(){this.finalize();const e=[];this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);if(void 0!==i){this._attributeToPropertyMap.set(i,s);e.push(i)}});return e}static _ensureClassProperties(){if(!this.hasOwnProperty(window.JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map();const e=Object.getPrototypeOf(this)._classProperties;if(void 0!==e)e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=defaultPropertyDeclaration){this._ensureClassProperties();this._classProperties.set(e,t);if(t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"===typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const i=this[e];this[s]=t;this._requestUpdate(e,i)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(!e.hasOwnProperty(finalized))e.finalize();this[finalized]=!0;this._ensureClassProperties();this._attributeToPropertyMap=new Map();if(this.hasOwnProperty(window.JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"===typeof s?s:"string"===typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=notEqual){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||defaultConverter,r="function"===typeof i?i:i.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return((i&&i.toAttribute)||defaultConverter.toAttribute)(e,s)}initialize(){this._saveInstanceProperties();this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t];if(!this._instanceProperties)this._instanceProperties=new Map();this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e);this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|STATE_HAS_CONNECTED;if(this._hasConnectedResolver){this._hasConnectedResolver();this._hasConnectedResolver=void 0}}disconnectedCallback(){}attributeChangedCallback(e,t,s){if(t!==s)this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=defaultPropertyDeclaration){const i=this.constructor,r=i._attributeNameForProperty(e,s);if(void 0!==r){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|STATE_IS_REFLECTING_TO_ATTRIBUTE;if(null==e)this.removeAttribute(r);else this.setAttribute(r,e);this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_ATTRIBUTE}}_attributeToProperty(e,t){if(this._updateState&STATE_IS_REFLECTING_TO_ATTRIBUTE)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s._classProperties.get(i)||defaultPropertyDeclaration;this._updateState=this._updateState|STATE_IS_REFLECTING_TO_PROPERTY;this[i]=s._propertyValueFromAttribute(t,e);this._updateState=this._updateState&~STATE_IS_REFLECTING_TO_PROPERTY}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const i=this.constructor,r=i._classProperties.get(e)||defaultPropertyDeclaration;if(i._valueHasChanged(this[e],t,r.hasChanged)){if(!this._changedProperties.has(e))this._changedProperties.set(e,t);if(!0===r.reflect&&!(this._updateState&STATE_IS_REFLECTING_TO_PROPERTY)){if(void 0===this._reflectingProperties)this._reflectingProperties=new Map();this._reflectingProperties.set(e,r)}}else s=!1}if(!this._hasRequestedUpdate&&s)this._enqueueUpdate()}requestUpdate(e,t){this._requestUpdate(e,t);return this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|STATE_UPDATE_REQUESTED;let e,t;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{e=s;t=i});try{await s}catch(e){}if(!this._hasConnected)await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();if(null!=e)await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&STATE_HAS_CONNECTED}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED}performUpdate(){if(this._instanceProperties)this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{if((e=this.shouldUpdate(t)))this.update(t)}catch(t){e=!1;throw t}finally{this._markUpdated()}if(e){if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(t)}this.updated(t)}}_markUpdated(){this._changedProperties=new Map();this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e));this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}UpdatingElement[_a=finalized]=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const supportsAdoptingStyleSheets="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,constructionToken=Symbol();class CSSResult{constructor(e,t){if(t!==constructionToken)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){if(void 0===this._styleSheet)if(supportsAdoptingStyleSheets){this._styleSheet=new CSSStyleSheet();this._styleSheet.replaceSync(this.cssText)}else this._styleSheet=null;return this._styleSheet}toString(){return this.cssText}}const textFromCSSResult=e=>{if(e instanceof CSSResult)return e.cssText;else if("number"===typeof e)return e;else throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)},css=(e,...t)=>{const s=t.reduce((t,s,i)=>t+textFromCSSResult(s)+e[i+1],e[0]);return new CSSResult(s,constructionToken)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");function arrayFlat(e,t=[]){for(let s=0,i=e.length;s<i;s++){const i=e[s];if(Array.isArray(i))arrayFlat(i,t);else t.push(i)}return t}const flattenStyles=e=>e.flat?e.flat(1/0):arrayFlat(e);class LitElement extends UpdatingElement{static finalize(){super.finalize.call(this);this._styles=this.hasOwnProperty(window.JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){flattenStyles(e).reduceRight((e,t)=>{e.add(t);return e},new Set()).forEach(e=>t.unshift(e))}else if(e)t.push(e);return t}initialize(){super.initialize();this.renderRoot=this.createRenderRoot();if(window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot)this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;if(0!==e.length)if(void 0!==window.ShadyCSS&&!window.ShadyCSS.nativeShadow)window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName);else if(supportsAdoptingStyleSheets)this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet);else this._needsShimAdoptedStyleSheets=!0}connectedCallback(){super.connectedCallback();if(this.hasUpdated&&void 0!==window.ShadyCSS)window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();if(t instanceof TemplateResult)this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this});if(this._needsShimAdoptedStyleSheets){this._needsShimAdoptedStyleSheets=!1;this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText;this.renderRoot.appendChild(t)})}}render(){}}LitElement.finalized=!0;LitElement.render=render$1;export{AttributePart as A,LitElement,LitElement as L,PropertyPart as P,TemplateResult,TemplateResult as T,defaultTemplateProcessor as a,css,css as c,directive as d,html,html as h};