export default IntegralUISelect;
declare class IntegralUISelect extends IntegralUIBase {
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
        dropDownAdjustment: {
            type: ObjectConstructor;
            attribute: string;
        };
        dropDownDirection: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Down" | "Up";
            };
            reflect: boolean;
        };
        dropDownSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        expanded: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        maxDropDownItems: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        items: {
            type: ArrayConstructor;
        };
        selectedIndex: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        selectedItem: {
            type: ObjectConstructor;
            attribute: string;
        };
    };
    _dataItems: any;
    _cmpRef: HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null | undefined;
    _currentDropDownDirection: any;
    _dropList: any;
    _isDropDownVisible: boolean | undefined;
    _isDropDownUpdateAllowed: boolean | undefined;
    _expandState: string | undefined;
    _isExpanded: boolean | undefined;
    _isSelected: boolean | undefined;
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
    _currentSelection: any;
    _currentIndex: any;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _dropListTimeout: any;
    _headerClassName: string | undefined;
    _headerExpandBoxClassName: string | undefined;
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
    set dropDownDirection(arg: any);
    get dropDownDirection(): any;
    set dropDownSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get dropDownSize(): {
        width: number;
        height: number;
    } | undefined;
    set expanded(arg: boolean | undefined);
    get expanded(): boolean | undefined;
    set items(arg: any);
    get items(): any;
    set maxDropDownItems(arg: any);
    get maxDropDownItems(): any;
    set selectedIndex(arg: any);
    get selectedIndex(): any;
    set selectedItem(arg: any);
    get selectedItem(): any;
    _addDropDown(): void;
    _removeCtrl(e: any): void;
    _closeDropDown(): void;
    _onCtrlMouseUp(e: any): void;
    _dropDownBlur(e: any): void;
    _itemSelected(e: any): void;
    _listSizeChanged(e: any): void;
    _removeDropDown(): void;
    _showDropDown(): void;
    _headerClick(e: any): void;
    _onHeaderTouchStart(e: any): void;
    collapse(): void;
    expand(): void;
    toggle(): void;
    _getHeaderIcon(): any;
    _getHeaderIconUrl(): any;
    _getHeaderText(): any;
    _ctrlKeyDown(e: any): void;
    _processEnterKey(e: any): void;
    _keepActive: boolean | undefined;
    _getDropDownSize(): {
        width: any;
        height: number;
    };
    _processMouseWheel(e: any): void;
    clearSelection(): void;
    _getCurrentHeaderStyle(): any;
    _getContentTemplate(): import("../external/lit-element.js").TemplateResult;
    render(): import("../external/lit-element.js").TemplateResult;
    _header: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
