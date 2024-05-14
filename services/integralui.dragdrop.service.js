class IntegralUIDragDropServiceClass {

    // Construction / Destruction ----------------------------------------------------------------

    constructor() {
        this.data = {
            action: 'move',
            clone: null,
            dropPos: -1,
            handle: null,
            source: null,
            sourceCtrl: null,
            sourceData: null,
            sourceIndex: -1,
            target: null,
            targetCtrl: null,
            type: ''
        }
    }

    // Data ----------------------------------------------------------------------------------
   
    clearData(){
        this.data = {
            action: 'move',
            clone: null,
            dropPos: -1,
            handle: null,
            source: null,
            sourceCtrl: null,
            sourceData: null,
            sourceIndex: -1,
            target: null,
            targetCtrl: null,
            type: ''
        }
    }

    getData(){
        return this.data;
    }
    
    setData(value){
        if (value){
            if (value.action)
                this.data.action = value.action;
            if (!isNaN(value.dropPos))
                this.data.dropPos = value.dropPos;
            if (!isNaN(value.sourceIndex))
                this.data.sourceIndex = value.sourceIndex;
                
            this.data.clone = value.clone !== undefined ? value.clone : null;
            this.data.source = value.source !== undefined ? value.source : null;
            this.data.handle = value.handle !== undefined ? value.handle : null;
            this.data.sourceCtrl = value.sourceCtrl !== undefined ? value.sourceCtrl : null;
            this.data.sourceData = value.sourceData !== undefined ? value.sourceData : null;
            this.data.target = value.target !== undefined ? value.target : null;
            this.data.targetCtrl = value.targetCtrl !== undefined ? value.targetCtrl : null;
            this.data.type = value.type !== undefined ? value.type : '';
        }
    }

    // General -------------------------------------------------------------------------------
    
    checkHit(x, y, bounds){
        if (x >= bounds.left &&
            x <= bounds.right &&
            y >= bounds.top &&
            y <= bounds.bottom)
            return true;
            
        return false;
    }
        
    getDropPos(pos, bounds, flag, type){
        if (type === 'horizontal')
            return this.getDropPosHorizontal(pos, bounds, flag);
        
        return this.getDropPosVertical(pos, bounds, flag);
    }
        
    getDropPosHalf(pos, bounds, type){
        let innerBounds = {
            left: bounds.x,
            top: bounds.y,
            right: bounds.x + bounds.width,
            bottom: bounds.y + bounds.height
        }
        
        switch (type){
            case 'full':
                if (this.checkHit(pos.x, pos.y, innerBounds))
                    return 0;
                break;

            case 'horizontal':
                innerBounds.right = bounds.x + bounds.width / 2;
                
                if (this.checkHit(pos.x, pos.y, innerBounds))
                    return 1;
                else {
                    innerBounds.left = innerBounds.right;
                    innerBounds.right = bounds.x + bounds.width;
                
                    if (this.checkHit(pos.x, pos.y, innerBounds))
                        return 2;
                }
                break;

            default:
                innerBounds.bottom = bounds.y + bounds.height / 2;
                    
                if (this.checkHit(pos.x, pos.y, innerBounds))
                    return 1;
                else {  
                    innerBounds.top = innerBounds.bottom;
                    innerBounds.bottom = bounds.y + bounds.height;
            
                    if (this.checkHit(pos.x, pos.y, innerBounds))
                        return 2;
                }
                break;
        }
        
        return -1;
    }
    
    getDropPosHorizontal(pos, bounds, flag){
        if (flag)
            return this.getDropPosHalf(pos, bounds, 'horizontal');
        else {
            let innerBounds = {
                left: bounds.x + bounds.width / 4,
                top: bounds.y,
                right: bounds.x + 3 * bounds.width / 4,
                bottom: bounds.y + bounds.height
            }
                
            if (this.checkHit(pos.x, pos.y, innerBounds))
                return 0;
            else {  
                innerBounds.right = innerBounds.left;
                innerBounds.left = bounds.x;
            
                if (this.checkHit(pos.x, pos.y, innerBounds))
                    return 1;
                else {
                    innerBounds.left = bounds.x + 3 * bounds.width / 4;
                    innerBounds.right = bounds.x + bounds.width;
            
                    if (this.checkHit(pos.x, pos.y, innerBounds))
                        return 2;
                }
            }
        }

        return -1;
    }
    
    getDropPosVertical(pos, bounds, flag){
        if (flag)
            return this.getDropPosHalf(pos, bounds, 'vertical');
        else {
            let innerBounds = {
                left: bounds.x,
                top: bounds.y + bounds.height / 4,
                right: bounds.x + bounds.width,
                bottom: bounds.y + 3 * bounds.height / 4
            }
                
            if (this.checkHit(pos.x, pos.y, innerBounds))
                return 0;
            else {  
                innerBounds.bottom = innerBounds.top;
                innerBounds.top = bounds.y;
            
                if (this.checkHit(pos.x, pos.y, innerBounds))
                    return 1;
                else {
                    innerBounds.top = bounds.y + 3 * bounds.height / 4;
                    innerBounds.bottom = bounds.y + bounds.height;
            
                    if (this.checkHit(pos.x, pos.y, innerBounds))
                        return 2;
                }
            }
        }
        
        return -1;
    }
}

var IntegralUIDragDropService = (function(){
    var instance;

    return {
        getInstance: function(){
            if (instance == null) {
                instance = new IntegralUIDragDropServiceClass();

                // Hide the constructor to prevent new for returned object
                instance.constructor = null;
            }
            return instance;
        }
    }
})();

export default IntegralUIDragDropService;