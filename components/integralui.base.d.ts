export default IntegralUIBase;
declare class IntegralUIBase extends LitElement {
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
            type: any;
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
            type: any;
            reflect: boolean;
        };
        theme: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Office";
            };
            reflect: boolean;
        };
    };
    _init(): void;
    _commonService: IntegralUICommonService | undefined;
    _activeAnimations: any[] | undefined;
    _isAnimationAllowed: any;
    _ctrlData: any;
    _ctrlName: any;
    _ctrlState: any;
    _currentTabIndex: any;
    _isCtrlMouseActive: boolean | undefined;
    _isEnabled: any;
    _isReadOnly: any;
    _options: {
        currentStyle: null;
    } | undefined;
    _isKeyboardFocusAllowed: any;
    _ctrlRect: {
        top: number;
        left: number;
        width: number;
        height: number;
    } | undefined;
    _clientRect: {
        width: number;
        height: number;
    } | undefined;
    _ctrlSize: {
        width: number;
        height: number;
    } | undefined;
    _prevClientRect: {
        width: number;
        height: number;
    } | undefined;
    _elemRef: any;
    _currentResourcePath: any;
    _currentColorScheme: any;
    _currentColorSchemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentCustomStyle: any;
    _currentInlineStyle: any;
    _currentTheme: any;
    _currentThemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _defaultStyle: {
        general?: undefined;
    } | {
        general: {
            disabled: string;
            focused: string;
            normal: string | undefined;
            hovered: string;
            selected: string;
        };
    } | undefined;
    _ctrlClass: {} | undefined;
    _generalClassName: string | undefined;
    _isProcessAllowed: boolean | undefined;
    _isUpdateAllowed: any;
    _tCmp: any;
    _initStyle(): void;
    set allowAnimation(arg: any);
    get allowAnimation(): any;
    set allowFocus(arg: any);
    get allowFocus(): any;
    set allowUpdate(arg: any);
    get allowUpdate(): any;
    set colorScheme(arg: any);
    get colorScheme(): any;
    set customStyle(arg: any);
    get customStyle(): any;
    set data(arg: any);
    get data(): any;
    set enabled(arg: any);
    get enabled(): any;
    set name(arg: any);
    get name(): any;
    set readOnly(arg: any);
    get readOnly(): any;
    set resourcePath(arg: any);
    get resourcePath(): any;
    set size(arg: {
        width: number;
        height: number;
    } | undefined);
    get size(): {
        width: number;
        height: number;
    } | undefined;
    set state(arg: any);
    get state(): any;
    set tabIndex(arg: any);
    get tabIndex(): any;
    set theme(arg: any);
    get theme(): any;
    _invokeEvent(type: any, eventObj: any, bubbles: any, composed: any): any;
    _clearAnimations(): void;
    _clearActiveAnimations(): void;
    _defaultFunc(): void;
    getElemRef(): any;
    getSize(flag: any): {
        width: any;
        height: any;
    };
    _processStateChanged(): void;
    setFocus(obj: any): void;
    getClass(obj: any): any;
    getStyle(obj: any): any;
    _updateColorSchemeSettings(value: any): void;
    _updateThemeSettings(value: any): void;
    refresh(): void;
    setClass(value: any, obj: any): void;
    setStyle(value: any, obj: any): void;
    _updateControlClass(): void;
    _getControlClass(): {} | undefined;
    _getControlStyle(): any;
    _getDefaultStyle(): {
        general: {
            disabled: string;
            focused: string;
            hovered: string;
            normal: string | undefined;
            selected: string;
        } | {
            disabled?: undefined;
            focused?: undefined;
            hovered?: undefined;
            normal?: undefined;
            selected?: undefined;
        };
    };
    _getDefaultGeneralStyle(): {
        disabled: string;
        focused: string;
        hovered: string;
        normal: string | undefined;
        selected: string;
    } | {
        disabled?: undefined;
        focused?: undefined;
        hovered?: undefined;
        normal?: undefined;
        selected?: undefined;
    };
    _getGeneralStyle(value: any): any;
    _updateControlStyleSettings(value: any): void;
    _updateStyle(value: any): void;
    _at(): void;
    _rt(): void;
    _ut(): void;
    resolve(type: any): void;
    shouldUpdate(e: any): boolean;
    updateLayout(optimal?: any): Promise<any>;
    wait(): void;
    _updateReferences(): void;
}
export class IntegralUITComponent extends LitElement {
    _display: string;
    _data: string;
    _timer: null;
    _cycle: number;
    _default: string;
    _crpar(): string[];
    _crtr(params: any): any;
    _getControlStyle(): {
        background: string;
        border: string;
        color: string;
        display: string;
        left: number;
        opacity: number;
        padding: string;
        position: string;
        top: number;
        zIndex: number;
    };
    render(): import("../external/lit-element.js").TemplateResult;
}
import { L as LitElement } from "../external/lit-element.js";
import IntegralUICommonService from "../services/integralui.common.service.js";
