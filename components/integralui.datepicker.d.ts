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
    collapse(): void;
    expand(): void;
    toggle(): void;
    firstUpdated(props: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
