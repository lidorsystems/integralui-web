export default IntegralUITabStrip;
declare class IntegralUITabStrip extends IntegralUIBase {
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
        allowDrag: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        allowDrop: {
            type: BooleanConstructor;
            attribute: string;
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
        autoSize: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        contentAnimation: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "Fade" | "Slide";
            };
            reflect: boolean;
        };
        displayMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "AutoSized" | "Justified";
            };
            reflect: boolean;
        };
        navigation: {
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Normal" | "Multiline";
            };
            reflect: boolean;
        };
        scrollMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "None" | "InBound" | "OutBound";
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
        showTabLine: {
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
        tabOrientation: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any, type: any) => "Horizontal" | "Vertical";
            };
            reflect: boolean;
        };
        tabs: {
            type: ArrayConstructor;
        };
        tabSpacing: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
        tabStripPlacement: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Top" | "Right" | "Bottom" | "Left";
            };
            reflect: boolean;
        };
    };
    set allowDrag(arg: any);
    get allowDrag(): any;
    set allowDrop(arg: any);
    get allowDrop(): any;
    set animationSpeed(arg: any);
    get animationSpeed(): any;
    set autoSize(arg: any);
    get autoSize(): any;
    set contentAnimation(arg: any);
    get contentAnimation(): any;
    set displayMode(arg: any);
    get displayMode(): any;
    set navigation(arg: any);
    get navigation(): any;
    set scrollMode(arg: any);
    get scrollMode(): any;
    set selectedIndex(arg: any);
    get selectedIndex(): any;
    set selectedTab(arg: any);
    get selectedTab(): any;
    set showTabLine(arg: any);
    get showTabLine(): any;
    set tabAlignment(arg: any);
    get tabAlignment(): any;
    set tabOrientation(arg: any);
    get tabOrientation(): any;
    get tabs(): any;
    set tabSpacing(arg: any);
    get tabSpacing(): any;
    set tabStripPlacement(arg: any);
    get tabStripPlacement(): any;
    addTab(tab: any): void;
    clearTabs(): void;
    insertTabAt(tab: any, index: any): void;
    insertTabBefore(tab: any, refTab: any): void;
    insertTabAfter(tab: any, refTab: any): void;
    removeTab(tab: any): boolean;
    removeTabAt(index: any): boolean;
    updateLayout(optimal: any): Promise<any>;
    scrollPos(value: any): number;
    scrollTo(tab: any): void;
    selectTab(tab: any, skip: any): void;
    firstUpdated(props: any): void;
    refresh(): void;
    render(): TemplateResult;
    updated(props: any): void;
}
import IntegralUIBase from "./integralui.base.js";
import IntegralUIDataService from "../services/integralui.data.service.js";
import { T as TemplateResult } from "../external/lit-element.js";
