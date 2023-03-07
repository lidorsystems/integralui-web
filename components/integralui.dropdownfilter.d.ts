export default IntegralUIDropDownFilter;
declare class IntegralUIDropDownFilter extends IntegralUIBase {
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
        calendarSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        dataFields: {
            type: ObjectConstructor;
            attribute: string;
        };
        dropDownAdjustment: {
            type: ObjectConstructor;
            attribute: string;
        };
        dropDownSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        formatOptions: {
            type: ObjectConstructor;
            attribute: string;
        };
        items: {
            type: ArrayConstructor;
        };
        maxDropDownItems: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        operation: {
            type: StringConstructor;
            reflect: boolean;
        };
        parentBounds: {
            type: ObjectConstructor;
            attribute: string;
        };
        type: {
            converter: {
                fromAttribute: (value: any) => number;
                toAttribute: (value: any) => "Date" | "Numeric" | "Boolean" | "String";
            };
            reflect: boolean;
        };
        value: {
            type: ObjectConstructor;
        };
    };
    _filterValue: {
        value: string;
        value2: string;
    } | undefined;
    _currentDataFields: {} | undefined;
    _currentList: any[] | undefined;
    _filterList: any[] | ({
        id: number;
        icon: string;
        text: any;
        operation: string;
        filterType?: undefined;
    } | {
        id: number;
        icon: string;
        text: any;
        operation: string;
        filterType: number;
    } | {
        id: number;
        icon: string;
        text: any;
        operation: null;
        filterType?: undefined;
    })[] | undefined;
    _currentFilter: any;
    _currentOperation: any;
    _currentType: any;
    _currentValue: any;
    _currentValue2: any;
    _dropDownRef: HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null | undefined;
    _dropList: any;
    _currentCalendarSize: {
        width: number;
        height: number;
    } | undefined;
    _currentFormat: any;
    _currentDropDownAdjustment: {
        top: number;
        left: number;
        width: number;
        height: number;
    } | undefined;
    _currentDropDownSize: {
        width: number;
        height: number;
    } | undefined;
    _currentMaxDropDownItems: any;
    _currentParentBounds: any;
    _valueRef: Element | null | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _filterIcon: {
        'iui-filter-icon'?: undefined;
    } | {
        'iui-filter-icon': boolean;
    } | undefined;
    _iconClasses: {
        equal: string;
        notEqual: string;
        beginsWith: string;
        endsWith: string;
        contains: string;
        doesNotContain: string;
        greaterThan: string;
        greaterThanEqualTo: string;
        lessThan: string;
        lessThanEqualTo: string;
        between: string;
        search: string;
    } | undefined;
    _dropListTimeout: any;
    set calendarSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get calendarSize(): {
        width: number;
        height: number;
    } | undefined;
    set dataFields(arg: {} | undefined);
    get dataFields(): {} | undefined;
    set dropDownAdjustment(arg: {
        top: number;
        left: number;
        width: number;
        height: number;
    } | undefined);
    get dropDownAdjustment(): {
        top: number;
        left: number;
        width: number;
        height: number;
    } | undefined;
    set dropDownSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get dropDownSize(): {
        width: number;
        height: number;
    } | undefined;
    set format(arg: any);
    get format(): any;
    set maxDropDownItems(arg: any);
    get maxDropDownItems(): any;
    set operation(arg: any);
    get operation(): any;
    set parentBounds(arg: any);
    get parentBounds(): any;
    set type(arg: any);
    get type(): any;
    set value(arg: {
        value: string;
        value2: string;
    } | undefined);
    get value(): {
        value: string;
        value2: string;
    } | undefined;
    _isValueChanged(val: any): boolean;
    _updateDataFields(fields: any): void;
    _dataFields: {
        equals: any;
        doesNotEqual: any;
        beginsWith: any;
        endsWith: any;
        contains: any;
        doesNotContain: any;
        greaterThan: any;
        greaterThanEqualTo: any;
        lessThan: any;
        lessThanEqualTo: any;
        between: any;
        reset: any;
    } | undefined;
    _updateDropDownList(): void;
    _resetValue(): void;
    _addDropDown(): void;
    _dropDownClosed(e: any): void;
    _dropDownBlur(e: any): void;
    _filterMouseDown(e: any): void;
    _itemDropDownSelected(e: any): void;
    _listSizeChanged(e: any): void;
    _removeDropDown(): void;
    _showDropDown(): void;
    _callValueChanged(): void;
    _dateValueChanged(e: any, flag: any): void;
    _findFilterByOperation(value: any): any;
    _isValueSet(value: any): boolean;
    _inputKeyDown(e: any, flag: any): void;
    _inputChange(e: any): void;
    _setCurrentValue(value: any, flag: any): void;
    _inputGotFocus(): void;
    _inputLostFocus(e: any, flag: any): void;
    _setFocusToValue(): void;
    _getDropDownSize(): {
        width: any;
        height: number;
    };
    _updateFilterIcon(): void;
    _getFilterIcon(): {
        'iui-filter-icon'?: undefined;
    } | {
        'iui-filter-icon': boolean;
    } | undefined;
    _getDropDownTemplate(): import("../external/lit-element.js").TemplateResult;
    _getFilterValueLayout(): import("../external/lit-element.js").TemplateResult;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
