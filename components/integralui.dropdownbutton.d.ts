export default IntegralUIDropDownButton;
declare class IntegralUIDropDownButton extends IntegralUIBase {
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
        direction: {
            converter: {
                fromAttribute: (value: any) => number;
                toAttribute: (value: any) => "None" | "Right" | "Left" | "Above" | "Below";
            };
            reflect: boolean;
        };
        dropDownAdjustment: {
            type: ObjectConstructor;
            attribute: string;
        };
        dropDownIcon: {
            type: BooleanConstructor;
            attribute: string;
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
        placement: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Top" | "Right" | "Bottom" | "Left";
            };
            reflect: boolean;
        };
    };
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
    _currentDirection: any;
    _currentPlacement: any;
    _isDropDownIconVisible: any;
    _isExpanded: any;
    _buttonClassName: string | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    set direction(arg: any);
    get direction(): any;
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
    set dropDownIcon(arg: any);
    get dropDownIcon(): any;
    set dropDownSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get dropDownSize(): {
        width: number;
        height: number;
    } | undefined;
    set expanded(arg: any);
    get expanded(): any;
    set placement(arg: any);
    get placement(): any;
    _preventDragStart(e: any): void;
    _addDropDown(): void;
    _cmpRef: HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null | undefined;
    _removeCtrl(e: any): void;
    _closeDropDown(): void;
    _getDropDownSize(): {
        width: any;
        height: number;
    };
    _openDropDown(e: any): void;
    _removeDropDown(): void;
    collapse(): void;
    expand(): void;
    toggle(): void;
    _ctrlMouseDown(e: any): void;
    _ctrlMouseEnter(e: any): void;
    _ctrlMouseLeave(e: any): void;
    _getButtonClass(): {} | undefined;
    _updateButtonClass(): void;
    _buttonClass: {} | undefined;
    _getContentTemplate(): TemplateResult;
    _ctrlTouchStart(e: any): void;
    render(): TemplateResult;
    _buttonElem: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
import { T as TemplateResult } from "../external/lit-element.js";
