export default IntegralUIDatePicker;
declare class IntegralUIDatePicker extends IntegralUIBase {
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
        animationSpeed: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "VerySlow" | "Slow" | "Normal" | "Fast" | "VeryFast";
            };
            reflect: boolean;
        };
        animationType: {
            type: StringConstructor;
            reflect: boolean;
        };
        calendarAlign: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Right" | "Left";
            };
            reflect: boolean;
        };
        calendarSize: {
            type: ObjectConstructor;
            attribute: string;
        };
        dropDownAdjustment: {
            type: ObjectConstructor;
            attribute: string;
        };
        expanded: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        firstDayOfWeek: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
            };
            reflect: boolean;
        };
        format: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Short" | "Long" | "Custom";
            };
            reflect: boolean;
        };
        formatOptions: {
            type: ObjectConstructor;
            attribute: string;
        };
        locales: {
            type: StringConstructor;
            reflect: boolean;
        };
        selectedDate: {
            type: ObjectConstructor;
            attribute: string;
        };
    };
    _currentAnimationSpeed: any;
    _currentAnimationType: any;
    _cmpRef: HTMLElement | HTMLSlotElement | HTMLTemplateElement | HTMLStyleElement | HTMLObjectElement | HTMLDataElement | HTMLAnchorElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | null | undefined;
    _currentDropDownAdjustment: {
        top: number;
        left: number;
        width: number;
        height: number;
    } | undefined;
    _currentFirstDayOfWeek: any;
    _currentFormat: any;
    _currentFormatOptions: any;
    _currentLocales: any;
    _currentSelectedDate: any;
    _expandState: string | undefined;
    _isExpanded: boolean | undefined;
    _currentCalendarSize: {
        width: number;
        height: number;
    } | undefined;
    _currentCalendarAlign: any;
    _headerClass: {} | undefined;
    _headerClassName: string | undefined;
    _headerExpandBoxClassName: string | undefined;
    _calendarClassName: string | undefined;
    _calendarCellClassName: string | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _focusTimeout: null | undefined;
    set animationSpeed(arg: any);
    get animationSpeed(): any;
    set animationType(arg: any);
    get animationType(): any;
    set calendarAlign(arg: any);
    get calendarAlign(): any;
    set calendarSize(arg: {
        width: number;
        height: number;
    } | undefined);
    get calendarSize(): {
        width: number;
        height: number;
    } | undefined;
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
    set expanded(arg: boolean | undefined);
    get expanded(): boolean | undefined;
    set firstDayOfWeek(arg: any);
    get firstDayOfWeek(): any;
    set format(arg: any);
    get format(): any;
    set formatOptions(arg: any);
    get formatOptions(): any;
    set locales(arg: any);
    get locales(): any;
    set selectedDate(arg: any);
    get selectedDate(): any;
    _getSelectedDate(): string;
    _addCalendar(): void;
    _removeCtrl(e: any): void;
    _closeCalendar(): void;
    _calendarBlur(e: any): void;
    _dateChanged(e: any): void;
    _removeCalendar(): void;
    collapse(): void;
    expand(): void;
    toggle(): void;
    _ctrlKeyDown(e: any): void;
    _onCtrlMouseEnter(e: any): void;
    _onCtrlMouseLeave(e: any): void;
    _onCtrlMouseUp(e: any): void;
    _openCalendar(e: any): void;
    _onHeaderTouchStart(e: any): void;
    _getCurrentHeaderStyle(): any;
    _getContentTemplate(): import("../external/lit-element.js").TemplateResult;
    render(): import("../external/lit-element.js").TemplateResult;
    _header: Element | null | undefined;
}
import IntegralUIBase from "./integralui.base.js";
