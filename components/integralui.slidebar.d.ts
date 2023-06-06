export default IntegralUISlideBar;
declare class IntegralUISlideBar extends IntegralUIBase {
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
        animationPause: {
            type: NumberConstructor;
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
        displayMode: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Carousel" | "Stream";
            };
            reflect: boolean;
        };
        navigationButtons: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        selectedIndex: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    set animationPause(arg: any);
    get animationPause(): any;
    set animationSpeed(arg: any);
    get animationSpeed(): any;
    set displayMode(arg: any);
    get displayMode(): any;
    set navigationButtons(arg: any);
    get navigationButtons(): any;
    set selectedIndex(arg: number | undefined);
    get selectedIndex(): number | undefined;
    startAnimation(): void;
    stopAnimation(): void;
    invokeCtrlMethod(key: any, slide: any): boolean;
    prevSlide(): void;
    nextSlide(): void;
    selectSlide(slide: any): void;
    selectSlideByIndex(index: any): Promise<void>;
    firstUpdated(props: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
