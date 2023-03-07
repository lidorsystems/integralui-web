export default IntegralUIToast;
declare class IntegralUIToast extends IntegralUIBase {
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
        contentTemplate: {
            type: ObjectConstructor;
            attribute: string;
        };
        dataFields: {
            type: ObjectConstructor;
            attribute: string;
        };
        duration: {
            type: NumberConstructor;
            reflect: boolean;
        };
        position: {
            type: ObjectConstructor;
        };
    };
    _currentDuration: any;
    _positionInterval: any;
    _toastFields: {
        id: string;
        text: string;
        title: string;
        type: string;
    } | {
        id: any;
        text: any;
        title: any;
        type: any;
    } | undefined;
    _parentCtrl: any;
    _isRemoved: boolean | undefined;
    _currentPosition: {
        top: number;
        left: number;
    } | undefined;
    _currentControlStyleSettings: {
        cssText: any;
        readonly styleSheet: CSSStyleSheet | null;
        _styleSheet: CSSStyleSheet | null | undefined;
        toString(): any;
    } | undefined;
    _currentOpacity: number | undefined;
    _currentContentTemplate: any;
    setParent(cmp: any): void;
    set contentTemplate(arg: any);
    get contentTemplate(): any;
    set dataFields(arg: any);
    set duration(arg: any);
    get duration(): any;
    set position(arg: {
        top: number;
        left: number;
    } | undefined);
    get position(): {
        top: number;
        left: number;
    } | undefined;
    _animatePosition(newPos: any): Promise<any>;
    hide(): void;
    _removeDurationTimeout(): void;
    _delayTimeout: any;
    _removeOpacityInterval(): void;
    _opacityInterval: any;
    _removePositionInterval(): void;
    _startDuration(): void;
    _durationTimeout: null | undefined;
    _updateDataFields(fields: any): void;
    _updateParent(): void;
    _getContentTemplate(toast: any, type: any): TemplateResult;
    _getDefaultContentTemplate(toast: any): TemplateResult;
    render(): TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
import { T as TemplateResult } from "../external/lit-element.js";
