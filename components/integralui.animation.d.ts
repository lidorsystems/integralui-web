export default IntegralUIAnimation;
declare class IntegralUIAnimation {
    constructor(target: any, delay: any, duration: any);
    destroy(): void;
    set delay(arg: any);
    get delay(): any;
    set duration(arg: any);
    get duration(): any;
    animate(newValue: any, delay: any, duration: any, callback: any): Promise<any>;
    getTarget(): any;
    isActive(): boolean;
    isAnimated(target: any): boolean;
}
