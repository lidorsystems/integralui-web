export class IntegralUIContextMenuWindow extends LitElement {
    static get properties(): {
        allowAnimation: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
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
    _menuItems: any[];
    _blockDisplay: string;
    _blockElemWidth: string;
    _blockElemHeight: string;
    _blockOverflow: string;
    _blockOpacity: number;
    _currentResourcePath: string;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    _currentCustomStyle: any[];
    _currentTheme: string;
    _currentThemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    _ctrlClass: {};
    _generalClassName: string;
    _initTimout: null | undefined;
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
    _initFocus(): void;
    set allowAnimation(arg: any);
    get allowAnimation(): any;
    _isAnimationAllowed: any;
    set colorScheme(arg: any);
    get colorScheme(): any;
    _currentColorScheme: any;
    set customStyle(arg: any[]);
    get customStyle(): any[];
    set options(arg: {});
    get options(): {};
    set resourcePath(arg: string);
    get resourcePath(): string;
    set theme(arg: string);
    get theme(): string;
    _updateOptions(value: any): void;
    _invokeEvent(type: any, eventObj: any, bubbles: any, composed: any): any;
    _onBlur(e: any): void;
    _onRightClick(e: any): void;
    _defaultFunc(): void;
    invokeCtrlMethod(name: any, value: any): void;
    _getSize(): {
        width: any;
        height: any;
    };
    _adjustPosition(e: any, mode: any, pos: any, appSize: any, elemPageRect: any): void;
    open(e: any, mode: any, pos: any, appSize: any, elemPageRect: any): void;
    _getClassName(): string;
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
    _getItemTemplate(item: any): TemplateResult;
    refresh(): void;
    render(): TemplateResult;
    _updateControlStyleSettings(value: any): void;
    _updateReferences(): void;
    _elemRef: Element | null | undefined;
    _contentElem: Element | null | undefined;
    _at(): void;
    _tCmp: Element | HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null | undefined;
    _rt(): void;
    _ut(): void;
}
export default IntegralUIContextMenu;
import { L as LitElement } from "../external/lit-element.js";
import IntegralUICommonService from "../services/integralui.common.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
declare class IntegralUIContextMenu extends IntegralUIBase {
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
    };
    _currentSettings: any;
    _winScrollPos: {
        top: number;
        left: number;
    };
    _cmpRef: HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null;
    _cmp: any;
    _currentThemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    set settings(arg: any);
    get settings(): any;
    _closeContextMenu(): void;
    _removeContextMenu(): void;
    _menuItemClick(e: any): void;
    _getSize(): {
        width: any;
        height: any;
    };
    _isInsideClick(e: any): boolean;
    _contentSlotElem: any;
    _ctrlContextMenu(e: any): void;
    _ctrlMouseDown(e: any): void;
    _processMenuOpen(e: any, position: any): void;
    _addContextMenuWindow(): void;
    _removeContextMenuWindow(): void;
    render(): TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
