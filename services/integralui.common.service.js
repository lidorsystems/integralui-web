class IntegralUICommonService {

    _calcMargin(elem){
        if (elem)
            return {
                top: getComputedStyle(elem)['margin-top'] ? parseInt(getComputedStyle(elem)['margin-top'], 10) : (getComputedStyle(elem).marginTop ? parseInt(getComputedStyle(elem).marginTop, 10) : 0),
                right: getComputedStyle(elem)['margin-right'] ? parseInt(getComputedStyle(elem)['margin-right'], 10) : (getComputedStyle(elem).marginRight ? parseInt(getComputedStyle(elem).marginRight, 10) : 0),
                bottom: getComputedStyle(elem)['margin-bottom'] ? parseInt(getComputedStyle(elem)['margin-bottom'], 10) : (getComputedStyle(elem).marginBottom ? parseInt(getComputedStyle(elem).marginBottom, 10) : 0),
                left: getComputedStyle(elem)['margin-left'] ? parseInt(getComputedStyle(elem)['margin-left'], 10) : (getComputedStyle(elem).marginLeft ? parseInt(getComputedStyle(elem).marginLeft, 10) : 0)
            }

        return { top: 0, right: 0, bottom: 0, left: 0 }
    }

    checkHit(x, y, bounds){
        if (x >= bounds.left &&
            x <= bounds.right &&
            y >= bounds.top &&
            y <= bounds.bottom)
            return true;
            
        return false;
    }

    checkNumInRange(value, num, range){
        return value > num - range && value < num + range ? true : false;
    }

    colorToRgb(p, q, t){
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;

        return p;
    }

    convertRgbaToHex(value){
        let result = '#';

        let hexList = this.convertRgbaToNum(value, true);
        hexList.forEach((x) => { 
            x = x.toString(16); 
            result += x.length === 1 ? '0' + x : x
        });

        return result;
    }

    convertRgbaToHsl(value){
        let hslList = this.convertRgbaToNum(value, true);

        let r = hslList[0]/255;
        let g = hslList[1]/255;
        let b = hslList[2]/255;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min)
            h = s = 0;
        else {
            let delta = max - min;
            s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

            switch (max){
                case r: 
                    h = (g - b) / delta + (g < b ? 6 : 0);
                    break;

                case g: 
                    h = (b - r) / delta + 2; 
                    break;

                case b: 
                    h = (r - g) / delta + 4; 
                    break;

                default:
                      this._defaultFunc();
                      break;
            }

            h /= 6;
        }

        h = Math.round(h * 360);
          if (h < 0)
              h += 360;

        s = Math.floor(Math.round(s * 100));
        l = Math.floor(Math.round(l * 100));

        return h + String.fromCharCode(176) + ', ' + s + '%, ' + l + '%';
    }

    convertRgbaToNum(value, skipAlpha){
        value = value.replace(/[.*+?^${}()|[\]\\]/g, '');
        value = value.replace('rgba', '').replace('rgb', '');

        let rgbList = value.split(",");
        let numList = rgbList.map((x) => parseInt(x));

        if (skipAlpha)
            numList = numList.filter((x, i) => i < 3);

        numList.forEach(val => this.setNumInRange(val, 0, 255));

        return numList;
    }

    convertHexToRgba(value){
        value = value.replace(/[.*+?^${}()|[\]\\]/g, '');

        let r = 0, g = 0, b = 0;

        if (value.length === 4){
            r = Number("0x" + value[1] + value[1]);
            g = Number("0x" + value[2] + value[2]);
            b = Number("0x" + value[3] + value[3]);
        }
        else if (value.length === 7){
            r = Number("0x" + value[1] + value[2]);
            g = Number("0x" + value[3] + value[4]);
            b = Number("0x" + value[5] + value[6]);
        }

        return "rgba("+ parseInt(r, 10).toString() + "," + parseInt(g, 10).toString() + "," + parseInt(b, 10).toString() + ",1)";
    }

    convertHslToRgba(value){
        value = value.replace(/[.*+?^${}()|[\]\\]/g, '');
        value = value.replace(String.fromCharCode(176), '').replace('%', '').replace('%', '');

        let hslList = value.split(",");
        let numList = hslList
                        .filter((x, i) => i < 3)
                        .map(x => parseInt(x));

        let h = numList[0];
        let s = numList[1] / 100;
        let l = numList[2] / 100;
      
        let r = 0, g = 0, b = 0;

        if (s === 0)
            r = g = b = l;
        else {
            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;

            r = this.colorToRgb(p, q, h + 1/3);
            g = this.colorToRgb(p, q, h);
            b = this.colorToRgb(p, q, h - 1/3);
        }

        r = Math.round(r * 255);
        g = Math.round(g * 255);
        b = Math.round(b * 255);

        return 'rgba(' + r + ', ' + g + ', ' + b + ', 1)';
    }

    convertValue(value, format){
        let retValue = value !== null && value !== undefined ? value : null;

        if (format){
            let locales = format.locales || 'en-US';
            let options = format.options || {};

            if (this.isNumber(retValue))
                retValue = Intl.NumberFormat(locales, options).format(retValue);
            else if (this.isDate(retValue))
                retValue = Intl.DateTimeFormat(locales, options).format(retValue);
            else 
                retValue = this.convertValueToString(value);
        }
        else
            retValue = this.convertValueToString(value);

        return retValue;
    }

    convertValueToString(value){
        return value !== null && value !== undefined ? value.toString() : '';
    }

    _defaultFunc(){}

    _escapeRegExp(string){
        return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    getAngle(p1, p2, rad){
        return rad ? Math.atan2(p2.y - p1.y, p2.x - p1.x) : Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    }

    getBorderWidth(elem){
        if (elem)
            return {
                top: getComputedStyle(elem)['border-top-width'] ? parseInt(getComputedStyle(elem)['border-top-width'], 10) : (getComputedStyle(elem).borderTopWidth ? parseInt(getComputedStyle(elem).borderTopWidth, 10) : 0),
                right: getComputedStyle(elem)['border-right-width'] ? parseInt(getComputedStyle(elem)['border-right-width'], 10) : (getComputedStyle(elem).borderRightWidth ? parseInt(getComputedStyle(elem).borderRightWidth, 10) : 0),
                bottom: getComputedStyle(elem)['border-bottom-width'] ? parseInt(getComputedStyle(elem)['border-bottom-width'], 10) : (getComputedStyle(elem).borderTopWidth ? parseInt(getComputedStyle(elem).borderTopWidth, 10) : 0),
                left: getComputedStyle(elem)['border-left-width'] ? parseInt(getComputedStyle(elem)['border-left-width'], 10) : (getComputedStyle(elem).borderLeftWidth ? parseInt(getComputedStyle(elem).borderLeftWidth, 10) : 0),
            }

        return { top: 0, right: 0, bottom: 0, left: 0 }
    }

    getClientPos(e, elem){
        let shiftPos = this.getShiftPos();
        let mousePos = this.getMousePos(e);
        mousePos.x -= shiftPos.x;
        mousePos.y -= shiftPos.y;

        let elemRect = this.getPageRect(elem);
        
        return { x: mousePos.x - elemRect.left, y: mousePos.y - elemRect.top };
    }

    getClientRect(parent, target){
        let parentBounds = this.getPageRect(parent);
        let targetBounds = this.getPageRect(target);

        return { 
            top: targetBounds.top - parentBounds.top, 
            right: targetBounds.left + targetBounds.width, 
            bottom: targetBounds.top + targetBounds.height, 
            left: targetBounds.left - parentBounds.left, 
            height: targetBounds.height, 
            width: targetBounds.width,  
            x: targetBounds.x - parentBounds.x,  
            y: targetBounds.y - parentBounds.y
        }
    }

    getColorAtPosition(context, x, y) {
        if (context){
            const imageData = context.getImageData(x, y, 1, 1).data;
            return 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
        }

        return '';
    }

    getDateFromString(value){
        if (this.isString(value)){
            let currentValue = Date.parse(value);
            if (value.slice(-1) === 'Z' && !isNaN(currentValue))
                return new Date(currentValue);
        }
        else if (this.isDate(value))
            return value;

        return null;
    }

    getDateNum(date){
        if (this.isDate(date)){
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();
    
            return new Date(year, month, day, 0, 0, 0, 0).valueOf();
        }

        return 0;
    }

    getMargin(elem){
        return elem ? this._calcMargin(elem) : { top: 0, right: 0, bottom: 0, left: 0 };
    }

    getMouseOffsetPos(e, elem){
        let shiftPos = this.getShiftPos();
        let mousePos = this.getMousePos(e);
        mousePos.x -= shiftPos.x;
        mousePos.y -= shiftPos.y;

        let elemRect = this.getPageRect(elem);

        let mouseOffsetPos = {
            x: mousePos.x - elemRect.left,
            y: mousePos.y - elemRect.top
        }

        return mouseOffsetPos;
    }
    
    getMousePos(e){
        return {
            x: e.pageX ? e.pageX : e.originalEvent ? e.originalEvent.pageX : 0,
            y: e.pageY ? e.pageY : e.originalEvent ? e.originalEvent.pageY : 0
        }
    }

    getObjFromListById(list, id){
        let found = null;

        if (list)
            for (let j = 0; j < list.length; j++){
                if (this.isObject(list[j]) && list[j].id === id){
                    found = list[j]; 
                    break;
                }
            }

        return found;
    }
    
    getObjFromListByName(list, fieldName, value){
        let found = null;

        if (list && fieldName)
            for (let j = 0; j < list.length; j++){
                if (this.isObject(list[j]) && list[j][fieldName] === value){
                    found = list[j]; 
                    break;
                }
            }

        return found;
    }

    getPadding(elem){
        if (elem)
            return {
                top: getComputedStyle(elem)['padding-top'] ? parseInt(getComputedStyle(elem)['padding-top'], 10) : (getComputedStyle(elem).paddingTop ? parseInt(getComputedStyle(elem).paddingTop, 10) : 0),
                right: getComputedStyle(elem)['padding-right'] ? parseInt(getComputedStyle(elem)['padding-right'], 10) : (getComputedStyle(elem).paddingRight ? parseInt(getComputedStyle(elem).paddingRight, 10) : 0),
                bottom: getComputedStyle(elem)['padding-bottom'] ? parseInt(getComputedStyle(elem)['padding-bottom'], 10) : (getComputedStyle(elem).paddingBottom ? parseInt(getComputedStyle(elem).paddingBottom, 10) : 0),
                left: getComputedStyle(elem)['padding-left'] ? parseInt(getComputedStyle(elem)['padding-left'], 10) : (getComputedStyle(elem).paddingLeft ? parseInt(getComputedStyle(elem).paddingLeft, 10) : 0)
            }

        return { top: 0, right: 0, bottom: 0, left: 0 }
    }

    getPageRect(elem){
        return elem ? elem.getBoundingClientRect() : { top: 0, right: 0, bottom: 0, left: 0, height: 0, width: 0, x: 0, y: 0 };
    }

    getShiftPos(){
        let shiftPos = { 
            x: document.body.scrollLeft > 0 ? document.body.scrollLeft : (document.documentElement.scrollLeft > 0 ? document.documentElement.scrollLeft : 0),
            y: document.body.scrollTop > 0 ? document.body.scrollTop : (document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : 0) 
        }

        return shiftPos;
    }

    getStyle(value){
        return this.isObject(value) && !this.isEmpty(value) ? value : {};
    }

    getTouchData(e){
        return e.changedTouches ? e.changedTouches : e.originalEvent ? e.originalEvent.changedTouches : null;
    }

    getUniqueId(separator){
        let delimiter = separator || "-";

        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        return (S4() + S4() + delimiter + S4() + delimiter + S4() + delimiter + S4() + delimiter + S4() + S4() + S4());
    }

    isDate(value){
        return value && Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value);
    }
                
    isDefined(value){
        return value !== null && value !== undefined;
    }
    
    isElement(elem){
        return elem ? elem instanceof Element : false;
    }

    isEmpty(obj){
        if (this.isString(obj))
            return !obj.trim().length;
        else
            return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
    }

    isEqual(first, second){
        if (first && second)
            return first.toString() === second.toString();
        
        return false;
    }

    isFieldAvailable(field, value){
        return field !== undefined ? field : value;
    }
            
    isFunc(value){
        return value ? typeof value === 'function' || value instanceof Function : false;
    }

    isIndexInRange(index, list){
        return list ? index >= 0 && index < list.length : false;
    }
            
    isNumber(value){
        return value !== undefined && !Number.isNaN(value) ? typeof value === 'number' || value instanceof Number : false;
    }
            
    isObject(value){
        return value ? typeof value === 'object' && value !== null && !Array.isArray(value) : false;
    }
            
    isString(value){
        return value ? typeof value === 'string' || value instanceof String : false;
    }
     
    isTrue(value){
        return value === false ? false : true;
    }
   
    moveObject(from, to, list){
        if (this.isIndexInRange(from, list) && this.isIndexInRange(to, list))
            list.splice(to, 0, list.splice(from, 1)[0]);
    }

    pointToView(pos){
        let shiftPos = this.getShiftPos();

        return {
            x: pos.x - shiftPos.x,
            y: pos.y - shiftPos.y
        }
    }
  
    replaceAll(str, find, replace){
        return str.replace(new RegExp(this._escapeRegExp(find), 'g'), replace);
    }

    setNumInRange(value, min, max){
        return isNaN(value) ? 0 : Math.min(Math.max(value, min), max);
    }
}

export default IntegralUICommonService;