export default IntegralUIPaginator;
declare class IntegralUIPaginator extends IntegralUIBase {
    static get properties(): {
        allowAnimation: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowFocus: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowUpdate: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        colorScheme: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Dark" | "Light";
            };
            reflect: boolean;
        };
        customStyle: {
            type: ObjectConstructor;
            attribute: string;
        };
        data: {
            type: ObjectConstructor;
        };
        enabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        name: {
            type: StringConstructor;
            reflect: boolean;
        };
        readOnly: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        resourcePath: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        size: {
            type: ObjectConstructor;
        };
        state: {
            type: NumberConstructor;
            reflect: boolean;
        };
        theme: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Office";
            };
            reflect: boolean;
        };
        currentPage: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        maxPages: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    _currentPageNumber: any;
    _maxPageNumber: any;
    _minPageNumber: number | undefined;
    _numPages: string | undefined;
    _inputWidth: number | undefined;
    _prevValue: any;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    set currentPage(arg: any);
    get currentPage(): any;
    set maxPages(arg: any);
    get maxPages(): any;
    _onInputChange(e: any): void;
    _updateCurrentPage(): void;
    _processUpdateLayout(): Promise<any>;
    firstPage(): void;
    lastPage(): void;
    nextPage(): void;
    prevPage(): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _inputLabelElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
