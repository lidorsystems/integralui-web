class IntegralUIDataService {
    
    // Construction / Destruction ----------------------------------------------------------------

    constructor() {
        this.data = [];
    }

    init(list){
        this.data.length = 0;
        for (let i = 0; i < list.length; i++){
            let obj = {
                data: list[i].data,
                fields: this.getDataFields(list[i].fields),
                key: list[i].key
            }

            this.data.push(obj);
        }
    }
 
    // Add/Remove --------------------------------------------------------------------------------
            
    clear(parent, key){
        this.getList(parent, key).length = 0;
    }
            
    insertAt(obj, index, parent, key) {
        this.insert(obj, index, parent, null, false, key);
    }
    
    insert(obj, index, parent, refObject, flag, key){
        if (obj){
            let dataObj = this.getData(key);
            if (dataObj){
                let fields = dataObj.fields;

                if (parent)
                    obj[fields.pid] = parent[fields.id];
                //else 
                    //obj[fields.pid] = '';
                
                let list = this.getList(parent, key);

                if (list){
                    if (index < 0 || index === null || index === undefined)
                        list.push(obj);
                    else {
                        index = Math.max(Math.min(index, list.length), 0);
                        if (!refObject && index < list.length)
                            refObject = list[index];
                        list.splice(index, 0, obj);
                    }
                        
                    if (!obj[fields.id])
                        obj[fields.id] = this.getUniqueId();
                }
            }
        }
    }
    
    insertByRef(obj, refObject, flag, key){
        if (obj && refObject){
            let parent = this.getParent(refObject, key);
            let list = this.getList(parent, key);
            let refIndex = list.indexOf(refObject);
            if (refIndex >= 0){
                if (flag)
                    refIndex += 1;
                
                this.insert(obj, refIndex, parent, refObject, flag, key);
            }
    
            return refIndex;
        }        
    }
            
    removeAt(obj, index, parent, key){
        let list;
        let objToRemove = null;

        let dataObj = this.getData(key);
        if (dataObj){
            if (obj){
                parent = this.getParent(obj, key);
                list = this.getList(parent, key);
                index = list.indexOf(obj);
            }
        
            if (index === null || index === undefined)
                return { obj: objToRemove, result: false };
        
            list = this.getList(parent, key);
            if (index >= 0 && index < list.length){
                objToRemove = list[index];
                objToRemove[dataObj.fields.pid] = '';
                list.splice(index, 1);
                    
                return { obj: objToRemove, result: true };
            }
        }

        return { obj: objToRemove, result: false };
    }    
  
    // Data --------------------------------------------------------------------------------------

    getData(key){
        let found = null;

        if (!this.getKey(key) && this.data.length > 0)
            found = this.data[0];
        else
            for (let i = 0; i < this.data.length; i++){
                if (this.data[i].key === key){
                    found = this.data[i];
                    break;
                }
            }

        return found;
    }

    getDataFields(value) {
        if (value)
            return {
                content: value.content ? value.content : 'content',
                icon: value.icon ? value.icon : 'icon',
                id: value.id ? value.id : 'id',
                pid: value.pid ? value.pid : 'pid',
                objects: value.objects ? value.objects : 'items',
                statusIcon: value.statusIcon ? value.statusIcon : 'statusIcon',
                subobjects: value.subobjects ? value.subobjects : 'subitems',
                text: value.text ? value.text : 'text'
            }
        else
            return {
                content: 'content',
                icon: 'icon',
                id: 'id',
                pid: 'pid',
                objects: 'items',
                statusIcon: 'statusIcon',
                subobjects: 'subitems',
                text: 'text'
            }
    }

    getKey(key) {
        return key ? key : null;
    }

    getList(obj, key){
        let dataObj = this.getData(key);
        if (dataObj){
            let fields = dataObj.fields;

            if (obj){
                if (!obj[fields.objects])
                    obj[fields.objects] = [];

                return obj[fields.objects];
            }

            return dataObj.data;
        }
        
        return [];
    }

    removeUndefined(obj, field){
        if (obj[field] === undefined)
            delete obj[field];
    }
    
    updateDataFields(value, key){
        let dataObj = this.getData(key);
        if (dataObj)
            dataObj.fields = this.getDataFields(value);
    }

    update(list){
        this.init(list);
    }

    // General -----------------------------------------------------------------------------------

    clone(obj, key, keepId) {
        let dataObj = this.getData(key);
        if (dataObj){
            let objClone = JSON.parse(JSON.stringify(obj));
            if (!keepId)
                this.createCloneIds(objClone, null, dataObj.fields);

            return objClone;
        }

        return {}
    }

    createCloneIds(obj, newPid, fields){
        obj[fields.id] = this.getUniqueId();
        obj[fields.pid] = newPid;

        let list = obj[fields.objects];
        if (list)
            for (let i = 0; i < list.length; i++)
                this.createCloneIds(list[i], obj[fields.id], fields);
    }
            
    findObjectById(id, key){
        let dataObj = this.getData(key);
        if (dataObj){
            let fields = dataObj.fields;
            let list = dataObj.data;

            return id ? this.searchObj(id, list, fields) : null;
        }

        return null;
    }        
    
    findObjectByText(text, key){
        let dataObj = this.getData(key);
        if (dataObj){
            let fields = dataObj.fields;
            let list = dataObj.data;

            return text !== undefined ? this.searchObj(text, list, fields, "text") : null;
        }

        return null;
    }        

    findParent(obj, list, fields){
        let found = null;
        
        if (obj && list){
            let i = 0;
            while (!found && i < list.length){
                if (list[i][fields.id] && obj[fields.pid] && list[i][fields.id].toString() === obj[fields.pid].toString())
                    found = list[i];
                else
                    found = this.findParent(obj, list[i][fields.objects], fields); 
                        
                i++;
            }
        }
        
        return found;
    }
    
    getParent(obj, key){
        if (obj){
            let dataObj = this.getData(key);
            if (dataObj)
                return this.findParent(obj, dataObj.data, dataObj.fields);
        }

        return null;
    }

    getUniqueId(separator){
        let delimiter = separator || "-";

        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        return (S4() + S4() + delimiter + S4() + delimiter + S4() + delimiter + S4() + delimiter + S4() + S4() + S4());
    }

    searchObj(value, list, fields, type){
        let found = null;

        if (value && list){
            let i = 0;
            let match = false;
            while (!found && i < list.length){
                switch (type){
                    case "text":
                        if (list[i][fields.text])
                            match = list[i][fields.text].toString() === value.toString();
                        break;

                    default:
                        if (list[i][fields.id])
                            match = list[i][fields.id].toString() === value.toString();
                        break;
                }
                
                found = match ? list[i] : this.searchObj(value, list[i][fields.objects], fields, type);
                        
                i++;
            }
        }

        return found;
    }
}

export default IntegralUIDataService;