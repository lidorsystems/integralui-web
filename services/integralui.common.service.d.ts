export default IntegralUICommonService;
declare class IntegralUICommonService {
    _calcMargin(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    checkHit(x: any, y: any, bounds: any): boolean;
    checkNumInRange(value: any, num: any, range: any): boolean;
    colorToRgb(p: any, q: any, t: any): any;
    convertRgbaToHex(value: any): string;
    convertRgbaToHsl(value: any): string;
    convertRgbaToNum(value: any, skipAlpha: any): any;
    convertHexToRgba(value: any): string;
    convertHslToRgba(value: any): string;
    convertValue(value: any, format: any): any;
    convertValueToString(value: any): any;
    _defaultFunc(): void;
    _escapeRegExp(string: any): any;
    getAngle(p1: any, p2: any, rad: any): number;
    getBorderWidth(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getClientPos(e: any, elem: any): {
        x: number;
        y: number;
    };
    getClientRect(parent: any, target: any): {
        top: number;
        right: any;
        bottom: any;
        left: number;
        height: any;
        width: any;
        x: number;
        y: number;
    };
    getColorAtPosition(context: any, x: any, y: any): string;
    getMargin(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getMouseOffsetPos(e: any, elem: any): {
        x: number;
        y: number;
    };
    getMousePos(e: any): {
        x: any;
        y: any;
    };
    getObjFromListById(list: any, id: any): any;
    getObjFromListByName(list: any, fieldName: any, value: any): any;
    getPadding(elem: any): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    getPageRect(elem: any): any;
    getShiftPos(): {
        x: number;
        y: number;
    };
    getStyle(value: any): any;
    getTouchData(e: any): any;
    getUniqueId(separator?: any): string;
    isDate(value: any): any;
    isDefined(value: any): boolean;
    isElement(elem: any): boolean;
    isEmpty(obj: any): any;
    isEqual(first: any, second: any): boolean;
    isFieldAvailable(field: any, value: any): any;
    isFunc(value: any): boolean;
    isIndexInRange(index: any, list: any): boolean;
    isNumber(value: any): boolean;
    isObject(value: any): boolean;
    isString(value: any): boolean;
    isTrue(value: any): boolean;
    moveObject(from: any, to: any, list: any): void;
    pointToView(pos: any): {
        x: number;
        y: number;
    };
    replaceAll(str: any, find: any, replace: any): any;
    setNumInRange(value: any, min: any, max: any): number;
}
