declare class AttributePart {
    constructor(e: any);
    committer: any;
    setValue(e: any): void;
    value: any;
    commit(): void;
}
export class LitElement extends UpdatingElement {
    static _getUniqueStyles(): any[];
    renderRoot: ShadowRoot | undefined;
    createRenderRoot(): ShadowRoot;
    adoptStyles(): void;
    _needsShimAdoptedStyleSheets: boolean | undefined;
    render(): void;
}
export namespace LitElement {
    export const _styles: any;
    export const finalized: boolean;
    export { render$1 as render };
}
declare class PropertyPart extends AttributePart {
}
export class TemplateResult {
    constructor(e: any, t: any, s: any, i: any);
    strings: any;
    values: any;
    type: any;
    processor: any;
    getHTML(): string;
    getTemplateElement(): HTMLTemplateElement;
}
declare const defaultTemplateProcessor: DefaultTemplateProcessor;
export function css(e: any, ...t: any[]): CSSResult;
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
declare function directive(e: any): (...t: any[]) => any;
export function html(e: any, ...t: any[]): TemplateResult;
declare class UpdatingElement extends HTMLElement {
    static get observedAttributes(): any[];
    static _ensureClassProperties(): void;
    static createProperty(e: any, t?: {
        attribute: boolean;
        type: StringConstructor;
        converter: {
            toAttribute(e: any, t: any): any;
            fromAttribute(e: any, t: any): any;
        };
        reflect: boolean;
        hasChanged: (e: any, t: any) => boolean;
    }): void;
    static finalize(): void;
    static _attributeNameForProperty(e: any, t: any): string | undefined;
    static _valueHasChanged(e: any, t: any, s?: (e: any, t: any) => boolean): boolean;
    static _propertyValueFromAttribute(e: any, t: any): any;
    static _propertyValueToAttribute(e: any, t: any): any;
    _updateState: number;
    _updatePromise: Promise<boolean>;
    _changedProperties: Map<any, any>;
    initialize(): void;
    _saveInstanceProperties(): void;
    _instanceProperties: Map<any, any> | undefined;
    _applyInstanceProperties(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(e: any, t: any, s: any): void;
    _propertyToAttribute(e: any, t: any, s?: {
        attribute: boolean;
        type: StringConstructor;
        converter: {
            toAttribute(e: any, t: any): any;
            fromAttribute(e: any, t: any): any;
        };
        reflect: boolean;
        hasChanged: (e: any, t: any) => boolean;
    }): void;
    _attributeToProperty(e: any, t: any): void;
    _requestUpdate(e: any, t: any): void;
    _reflectingProperties: Map<any, any> | undefined;
    requestUpdate(e: any, t: any): Promise<boolean>;
    _enqueueUpdate(): Promise<void>;
    _hasConnectedResolver: ((value: any) => void) | undefined;
    get _hasConnected(): number;
    get _hasRequestedUpdate(): number;
    get hasUpdated(): number;
    performUpdate(): void;
    _markUpdated(): void;
    get updateComplete(): Promise<boolean>;
    _getUpdateComplete(): Promise<boolean>;
    shouldUpdate(e: any): boolean;
    update(e: any): void;
    updated(e: any): void;
    firstUpdated(e: any): void;
}
declare namespace UpdatingElement {
    const _classProperties: Map<any, any> | undefined;
    const __computed: boolean | undefined;
    const _attributeToPropertyMap: Map<any, any> | undefined;
}
declare function render$1(e: any, t: any, s: any): void;
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
 */ declare class DefaultTemplateProcessor {
    handleAttributeExpressions(e: any, t: any, s: any, i: any): AttributePart[] | EventPart[] | BooleanAttributePart[];
    handleTextExpression(e: any): NodePart;
}
declare class CSSResult {
    constructor(e: any, t: any);
    cssText: any;
    get styleSheet(): CSSStyleSheet | null;
    _styleSheet: CSSStyleSheet | null | undefined;
    toString(): any;
}
declare class EventPart {
    constructor(e: any, t: any, s: any);
    element: any;
    eventName: any;
    eventContext: any;
    __boundHandleEvent: (e: any) => void;
    setValue(e: any): void;
    __pendingValue: any;
    commit(): void;
    __options: any;
    value: any;
    handleEvent(e: any): void;
}
declare class BooleanAttributePart {
    constructor(e: any, t: any, s: any);
    element: any;
    name: any;
    strings: any;
    setValue(e: any): void;
    __pendingValue: any;
    commit(): void;
    value: any;
}
declare class NodePart {
    constructor(e: any);
    options: any;
    appendInto(e: any): void;
    startNode: any;
    endNode: any;
    insertAfterNode(e: any): void;
    appendIntoPart(e: any): void;
    insertAfterPart(e: any): void;
    setValue(e: any): void;
    __pendingValue: any;
    commit(): void;
    value: any;
    __insert(e: any): void;
    __commitNode(e: any): void;
    __commitText(e: any): void;
    __commitTemplateResult(e: any): void;
    __commitIterable(e: any): void;
    clear(e?: any): void;
}
export { AttributePart as A, LitElement as L, PropertyPart as P, TemplateResult as T, defaultTemplateProcessor as a, css as c, directive as d, html as h };
//# sourceMappingURL=lit-element.d.ts.map