/*
  filename: react.integralui.listbar.js
  version : 23.3.0
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import React, { Component } from "react";

import '../components/integralui.listbar.js';

class IntegralUIListBarComponent extends Component {
    constructor(props){
        super(props);

        this.ctrlRef = React.createRef();
    }
    
    _isCtrlDefined(){
        return this.ctrlRef && this.ctrlRef.current ? true : false;
    }

    //
    // Events ------------------------------------------------------------------------------------
    //

    componentDidMount(){
        this._initProps();

        if (this._isCtrlDefined()){
            if (this.props.afterCollapse)
                this.ctrlRef.current.addEventListener('afterCollapse', (e) => this.props.afterCollapse(e));
            if (this.props.afterExpand)
                this.ctrlRef.current.addEventListener('afterExpand', (e) => this.props.afterExpand(e));
            if (this.props.afterSelect)
                this.ctrlRef.current.addEventListener('afterSelect', (e) => this.props.afterSelect(e));
            if (this.props.beforeCollapse)
                this.ctrlRef.current.addEventListener('beforeCollapse', (e) => this.props.beforeCollapse(e));
            if (this.props.beforeExpand)
                this.ctrlRef.current.addEventListener('beforeExpand', (e) => this.props.beforeExpand(e));
            if (this.props.beforeSelect)
                this.ctrlRef.current.addEventListener('beforeSelect', (e) => this.props.beforeSelect(e));
            if (this.props.clear)
                this.ctrlRef.current.addEventListener('clear', () => this.props.clear());
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.groupAdded)
                this.ctrlRef.current.addEventListener('groupAdded', (e) => this.props.groupAdded(e));
            if (this.props.groupAdding)
                this.ctrlRef.current.addEventListener('groupAdding', (e) => this.props.groupAdding(e));
            if (this.props.groupRemoved)
                this.ctrlRef.current.addEventListener('groupRemoved', (e) => this.props.groupRemoved(e));
            if (this.props.groupRemoving)
                this.ctrlRef.current.addEventListener('groupRemoving', (e) => this.props.groupRemoving(e));
            if (this.props.selectionChanged)
                this.ctrlRef.current.addEventListener('selectionChanged', (e) => this.props.selectionChanged(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
        }
    }

    componentWillUnmount(){
        if (this._isCtrlDefined()){
            if (this.props.afterCollapse)
                this.ctrlRef.current.removeEventListener('afterCollapse', this.props.afterCollapse);
            if (this.props.afterExpand)
                this.ctrlRef.current.removeEventListener('afterExpand', this.props.afterExpand);
            if (this.props.afterSelect)
                this.ctrlRef.current.removeEventListener('afterSelect', this.props.afterSelect);
            if (this.props.beforeCollapse)
                this.ctrlRef.current.removeEventListener('beforeCollapse', this.props.beforeCollapse);
            if (this.props.beforeExpand)
                this.ctrlRef.current.removeEventListener('beforeExpand', this.props.beforeExpand);
            if (this.props.beforeSelect)
                this.ctrlRef.current.removeEventListener('beforeSelect', this.props.beforeSelect);
            if (this.props.clear)
                this.ctrlRef.current.removeEventListener('clear', this.props.clear);
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
            if (this.props.groupAdded)
                this.ctrlRef.current.removeEventListener('groupAdded', this.props.groupAdded);
            if (this.props.groupAdding)
                this.ctrlRef.current.removeEventListener('groupAdding', this.props.groupAdding);
            if (this.props.groupRemoved)
                this.ctrlRef.current.removeEventListener('groupRemoved', this.props.groupRemoved);
            if (this.props.groupRemoving)
                this.ctrlRef.current.removeEventListener('groupRemoving', this.props.groupRemoving);
            if (this.props.selectionChanged)
                this.ctrlRef.current.removeEventListener('selectionChanged', this.props.selectionChanged);
            if (this.props.sizeChanged)
                this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
            if (this.props.stateChanged)
                this.ctrlRef.current.removeEventListener('stateChanged', this.props.stateChanged);
        }
    }
 
    //
    // Properties --------------------------------------------------------------------------------
    //

    componentDidUpdate(prevProps){
        this._updateData(prevProps);
    }

    _initProps(){
        if (this._isCtrlDefined()){
            if (this._isDefined(this.props.allowAnimation))
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this._isDefined(this.props.allowUpdate))
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.groups))
                this.ctrlRef.current.groups = this.props.groups;
            if (this._isDefined(this.props.mouseWheelSpeed))
                this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.selectedGroup))
                this.ctrlRef.current.selectedGroup = this.props.selectedGroup;
            if (this._isDefined(this.props.selectedIndex))
                this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.state))
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.theme))
                this.ctrlRef.current.theme = this.props.theme;
        }
    }
     
    _isDefined(value){
        return value !== undefined ? true : false;
    }

    _updateData(prevProps){
        if (this._isCtrlDefined()){
            if (this.props.allowAnimation !== prevProps.allowAnimation)
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this.props.allowUpdate !== prevProps.allowUpdate)
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.groups))
                this.ctrlRef.current.groups = this.props.groups;
            if (this.props.mouseWheelSpeed !== prevProps.mouseWheelSpeed)
                this.ctrlRef.current.mouseWheelSpeed = this.props.mouseWheelSpeed;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.selectedGroup !== prevProps.selectedGroup)
                this.ctrlRef.current.selectedGroup = this.props.selectedGroup;
            if (this.props.selectedIndex !== prevProps.selectedIndex)
                this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
            if (this.props.size !== prevProps.size)
                this.ctrlRef.current.size = this.props.size;
            if (this.props.state !== prevProps.state)
                this.ctrlRef.current.state = this.props.state;
            if (this.props.theme !== prevProps.theme)
                this.ctrlRef.current.theme = this.props.theme;
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //
 
    // Add Remove --------------------------------------------------------------------------------
   
	addGroup(group){
        if (this._isCtrlDefined())
            this.ctrlRef.current.addGroup(group);
	}

	clearGroups(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.clearGroups();
	}

	insertGroupAt(group, index){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertGroupAt(group, index);
	}

	insertGroupBefore(group, refGroup){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertGroupBefore(group, refGroup);
	}

	insertGroupAfter(group, refGroup){
        if (this._isCtrlDefined())
            this.ctrlRef.current.insertGroupAfter(group, refGroup);
	}

	removeGroup(group){
		return this._isCtrlDefined() ? this.ctrlRef.current.removeGroup(group) : false;
	}

	removeGroupAt(index){
		return this._isCtrlDefined() ? this.ctrlRef.current.removeGroupAt(index) : false;
	}
 
    // Scrolling ---------------------------------------------------------------------------------

	scrollPos(value){
        if (this._isCtrlDefined())
            this.ctrlRef.current.scrollPos(value);
    }
 
    // Selection ---------------------------------------------------------------------------------

	clearSelection(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.clearSelection();
    }

	selectGroup(group){
        if (this._isCtrlDefined())
            this.ctrlRef.current.selectGroup(group);
    }
 
    // Style -------------------------------------------------------------------------------------

    setClass(value){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.setClass(value);
    }

	setStyle(value){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.setStyle(value);
    }

    // Update ------------------------------------------------------------------------------------

	refresh(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.refresh();
    }

	updateLayout(){
        if (this._isCtrlDefined())
            this.ctrlRef.current.updateLayout();
    }

    render(){
        return (
            <iui-listbar id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-listbar>
        );
    }
}


export default IntegralUIListBarComponent;
