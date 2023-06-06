export default IntegralUISideBar;
declare class IntegralUISideBar extends IntegralUIBase {
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
        allowResize: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        animation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Fade";
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
        autoHide: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        expanded: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        inbound: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        parentId: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
        placement: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Top" | "Right" | "Bottom" | "Left";
            };
            reflect: boolean;
        };
        selectedIndex: {
            type: NumberConstructor;
            attribute: string;
        };
        selectedTab: {
            type: ObjectConstructor;
            attribute: string;
        };
        showHeader: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        tabAlignment: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "BottomRight" | "TopLeft" | "Middle";
            };
            reflect: boolean;
        };
        tabs: {
            type: ArrayConstructor;
        };
    };
    set allowResize(arg: any);
    get allowResize(): any;
    set animation(arg: any);
    get animation(): any;
    set animationSpeed(arg: any);
    get animationSpeed(): any;
    set autoHide(arg: any);
    get autoHide(): any;
    set expanded(arg: boolean | undefined);
    get expanded(): boolean | undefined;
    set inbound(arg: any);
    get inbound(): any;
    set parentId(arg: any);
    get parentId(): any;
    set placement(arg: any);
    get placement(): any;
    set selectedIndex(arg: any);
    get selectedIndex(): any;
    set selectedTab(arg: any);
    get selectedTab(): any;
    set showHeader(arg: any);
    get showHeader(): any;
    set tabAlignment(arg: any);
    get tabAlignment(): any;
    get tabs(): any[] | undefined;
    collapse(): void;
    expand(): void;
    toggle(): void;
    selectTab(tab: any, skip: any): void;
    refresh(): void;
    render(): TemplateResult;
    updated(props: any): void;
}
import IntegralUIBase from "./integralui.base.js";
import { T as TemplateResult } from "../external/lit-element.js";
