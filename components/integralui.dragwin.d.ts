export default IntegralUIDragWindow;
declare class IntegralUIDragWindow extends LitElement {
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
        display: {
            type: StringConstructor;
            reflect: boolean;
        };
        dragNum: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        iconClass: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        position: {
            type: ObjectConstructor;
        };
        resourcePath: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        size: {
            type: ObjectConstructor;
        };
        title: {
            type: StringConstructor;
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
    _currentDragNum: number;
    _currentIconClass: string;
    _currentPosition: {
        x: number;
        y: number;
    };
    _currentSize: {
        width: number;
        height: number;
    };
    _currentTitle: string;
    _currentDisplay: string;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    _currentResourcePath: string;
    _currentCustomStyle: {};
    _currentTheme: string;
    _currentThemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    };
    set colorScheme(arg: any);
    get colorScheme(): any;
    _currentColorScheme: any;
    set customStyle(arg: {});
    get customStyle(): {};
    set display(arg: string);
    get display(): string;
    set dragNum(arg: number);
    get dragNum(): number;
    set iconClass(arg: string);
    get iconClass(): string;
    set position(arg: {
        x: number;
        y: number;
    });
    get position(): {
        x: number;
        y: number;
    };
    set resourcePath(arg: string);
    get resourcePath(): string;
    set size(arg: {
        width: number;
        height: number;
    });
    get size(): {
        width: number;
        height: number;
    };
    set theme(arg: string);
    get theme(): string;
    updatePos(value: any): void;
    _getTitleStyle(): {
        border: number;
    };
    _updateColorSchemeSettings(value: any): void;
    _currentColorSchemeSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _updateThemeSettings(value: any): void;
    refresh(): void;
    render(): import("../external/lit-element.js").TemplateResult;
    _updateControlStyleSettings(value: any): void;
}
import { L as LitElement } from "../external/lit-element.js";
import IntegralUICommonService from "../services/integralui.common.service.js";
