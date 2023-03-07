export default IntegralUIAutoComplete;
declare class IntegralUIAutoComplete extends IntegralUIBase {
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
        dataFields: {
            type: ObjectConstructor;
            attribute: string;
        };
        dropDownSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        list: {
            type: ArrayConstructor;
        };
        maxDropDownItems: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        placeHolder: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        text: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    _dataService: IntegralUIDataService | undefined;
    _filterService: IntegralUIFilterService | undefined;
    _currentFields: {
        icon?: undefined;
        id?: undefined;
        style?: undefined;
        text?: undefined;
        visible?: undefined;
        value?: undefined;
    } | {
        icon: any;
        id: any;
        style: any;
        text: any;
        visible: any;
        value: any;
    } | {
        icon: string;
        id: string;
        style: string;
        text: string;
        visible: string;
        value: string;
    } | undefined;
    _currentList: any[] | undefined;
    _currentMaxDropDownItems: any;
    _currentPlaceHolder: any;
    _currentSelection: any;
    _currentText: any;
    _dataList: any;
    _cmpRef: HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null | undefined;
    _currentDropDownSize: {
        width: number;
        height: number;
    } | undefined;
    _dropList: any;
    _isDropDownVisible: boolean | undefined;
    _filterParams: any;
    _isFocused: boolean | undefined;
    _keepActive: boolean | undefined;
    _currentSorting: any;
    _sortComparer: any;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    set dataFields(arg: {
        icon?: undefined;
        id?: undefined;
        style?: undefined;
        text?: undefined;
        visible?: undefined;
        value?: undefined;
    } | {
        icon: any;
        id: any;
        style: any;
        text: any;
        visible: any;
        value: any;
    } | {
        icon: string;
        id: string;
        style: string;
        text: string;
        visible: string;
        value: string;
    } | undefined);
    get dataFields(): {
        icon?: undefined;
        id?: undefined;
        style?: undefined;
        text?: undefined;
        visible?: undefined;
        value?: undefined;
    } | {
        icon: any;
        id: any;
        style: any;
        text: any;
        visible: any;
        value: any;
    } | {
        icon: string;
        id: string;
        style: string;
        text: string;
        visible: string;
        value: string;
    } | undefined;
    set dropDownSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get dropDownSize(): {
        width: number;
        height: number;
    } | undefined;
    set list(arg: any);
    get list(): any;
    set maxDropDownItems(arg: any);
    get maxDropDownItems(): any;
    set placeHolder(arg: any);
    get placeHolder(): any;
    set text(arg: any);
    get text(): any;
    _updateDataFields(fields: any): void;
    _addItemToCurrentList(item: any): void;
    _updateCurrentList(): void;
    _updateData(): void;
    _addDropDown(): void;
    _removeCtrl(e: any): void;
    _closeDropDown(): void;
    _dropDownBlur(e: any): void;
    _itemSelected(e: any): void;
    _listSizeChanged(e: any): void;
    _removeDropDown(): void;
    _showDropDown(): void;
    _callValueChanged(): void;
    _ctrlKeyDown(e: any): void;
    _ctrlLostFocus(): void;
    _processDownKey(step: any): void;
    _textChanged(e: any): void;
    _applyFilter(): void;
    _getFilterTree(params: any): {
        result: boolean;
    } | null;
    resetFilter(): void;
    filter(params: any): void;
    _isItemAllowed(item: any): boolean;
    _selectContent(e: any): void;
    _getDropDownSize(): {
        width: any;
        height: number;
    };
    _applySorting(list: any): void;
    _isSortingAllowed(): boolean;
    sort(order: any, comparer: any): void;
    _getContentTemplate(): import("../external/lit-element.js").TemplateResult;
    render(): import("../external/lit-element.js").TemplateResult;
    _inputElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import IntegralUIFilterService from "../services/integralui.filter.service.js";
