export class IntegralUIPopOverWindow extends LitElement {
    static get properties(): {
        colorScheme: {
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
        options: {
            type: ObjectConstructor;
        };
        resourcePath: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        theme: {
            converter: {
                fromAttribute: (value: any) => any;
                toAttribute: (value: any) => "None" | "Dark" | "Office";
            };
            reflect: boolean;
        };
    };
    _commonService: IntegralUICommonService;
    _currentOptions: {};
    _showTimer: any;
    _popupTimer: any;
    _mousePos: {
        x: number;
        y: number;
    };
    _currentPos: {
        top: number;
        left: number;
    };
    _currentSize: {
        width: number;
        height: number;
    };
    _popoverDisplay: string;
    _currentResourcePath: string;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    _currentCustomStyle: {};
    _currentTheme: string;
    _currentThemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    _ctrlClass: {};
    _generalClassName: string;
    _initStyle(): void;
    _defaultStyle: {
        general: {
            disabled: string;
            focused: string;
            normal: string;
            hovered: string;
            selected: string;
        };
    } | undefined;
    set colorScheme(arg: any);
    get colorScheme(): any;
    _currentColorScheme: any;
    set customStyle(arg: {});
    get customStyle(): {};
    set options(arg: {});
    get options(): {};
    set resourcePath(arg: string);
    get resourcePath(): string;
    set theme(arg: string);
    get theme(): string;
    _updateOptions(value: any): void;
    close(): void;
    open(elemPageRect: any, elemSize: any): void;
    _show(elemPageRect: any, elemSize: any): void;
    _getSize(): {
        width: any;
        height: any;
    };
    _updateMousePos(value: any): void;
    _invokeEvent(type: any, eventObj: any, bubbles: any, composed: any): any;
    _defaultFunc(): void;
    _preventBubbleUp(e: any): void;
    _removeTimers(): void;
    _getControlClass(): {};
    _updateControlClass(): void;
    _updateColorSchemeSettings(value: any): void;
    _currentColorSchemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _updateThemeSettings(value: any): void;
    _getContentTemplate(): TemplateResult;
    refresh(): void;
    render(): TemplateResult;
    _updateControlStyleSettings(value: any): void;
    _updateReferences(): void;
    _elemRef: Element | null | undefined;
    _contentElem: Element | null | undefined;
}
export default IntegralUIPopOver;
import { L as LitElement } from "../external/lit-element.js";
import IntegralUICommonService from "../services/integralui.common.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
declare class IntegralUIPopOver extends IntegralUIBase {
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
        settings: {
            type: ObjectConstructor;
        };
        visible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    _currentSettings: {
        activation: string;
        autoPopDelay: number;
        closeButton: boolean;
        enabled: boolean;
        header: boolean;
        initialDelay: number;
        position: string;
        showMarker: boolean;
        title: string;
    };
    _currentMousePos: {
        x: number;
        y: number;
    };
    _isVisible: any;
    _cmpRef: HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null;
    _currentTheme: string;
    _currentThemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    set settings(arg: {
        activation: string;
        autoPopDelay: number;
        closeButton: boolean;
        enabled: boolean;
        header: boolean;
        initialDelay: number;
        position: string;
        showMarker: boolean;
        title: string;
    });
    get settings(): {
        activation: string;
        autoPopDelay: number;
        closeButton: boolean;
        enabled: boolean;
        header: boolean;
        initialDelay: number;
        position: string;
        showMarker: boolean;
        title: string;
    };
    set visible(arg: any);
    get visible(): any;
    close(): void;
    open(pos: any): void;
    _removeCtrl(e: any): void;
    _openCtrl(e: any): void;
    toggle(): void;
    _getSize(): {
        width: any;
        height: any;
    };
    _ctrlMouseEnter(e: any): void;
    _ctrlMouseLeave(e: any): void;
    _ctrlMouseMove(e: any): void;
    _addWindow(): void;
    _removeWindow(): void;
    render(): TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
