export default IntegralUICalendar;
declare class IntegralUICalendar extends IntegralUIBase {
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
        firstDayOfWeek: {
            attribute: string;
            converter: {
                fromAttribute: (value: any) => string;
                toAttribute: (value: any) => "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
            };
            reflect: boolean;
        };
        locales: {
            type: StringConstructor;
            reflect: boolean;
        };
        selectedDate: {
            type: ObjectConstructor;
            attribute: string;
        };
        showToday: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        todayDate: {
            type: ObjectConstructor;
            attribute: string;
        };
    };
    set firstDayOfWeek(arg: any);
    get firstDayOfWeek(): any;
    set locales(arg: any);
    get locales(): any;
    set selectedDate(arg: any);
    get selectedDate(): any;
    set showToday(arg: any);
    get showToday(): any;
    set todayDate(arg: any);
    get todayDate(): any;
    refresh(): void;
    firstUpdated(props: any): void;
    render(): import("../external/lit-element.js").TemplateResult;
}
import IntegralUIBase from "./integralui.base.js";
