/*
  filename: react.integralui.dropdownfilter.js
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

import '../components/integralui.dropdownfilter.js';

class IntegralUIDropDownFilterComponent extends Component {
    constructor(props){
        super(props);

        this.ctrlRef = React.createRef();
    }
 
    //
    // Events ------------------------------------------------------------------------------------
    //

    componentDidMount(){
        this._initProps();

        if (this.ctrlRef && this.ctrlRef.current){
            if (this.props.change)
                this.ctrlRef.current.addEventListener('change', (e) => this.props.change(e));
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.operationChanged)
                this.ctrlRef.current.addEventListener('operationChanged', (e) => this.props.operationChanged(e));
            if (this.props.pressedChanged)
                this.ctrlRef.current.addEventListener('pressedChanged', (e) => this.props.pressedChanged(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
            if (this.props.valueChanged)
                this.ctrlRef.current.addEventListener('valueChanged', (e) => this.props.valueChanged(e));
        }
    }

    componentWillUnmount(){
        if (this.ctrlRef && this.ctrlRef.current){
            if (this.props.change)
                this.ctrlRef.current.removeEventListener('change', this.props.change);
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
            if (this.props.operationChanged)
                this.ctrlRef.current.removeEventListener('operationChanged', this.props.operationChanged);
            if (this.props.pressedChanged)
                this.ctrlRef.current.removeEventListener('pressedChanged', this.props.pressedChanged);
            if (this.props.sizeChanged)
                this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
            if (this.props.stateChanged)
                this.ctrlRef.current.removeEventListener('stateChanged', this.props.stateChanged);
            if (this.props.valueChanged)
                this.ctrlRef.current.removeEventListener('valueChanged', this.props.valueChanged);
        }
    }
 
    //
    // Properties --------------------------------------------------------------------------------
    //

    componentDidUpdate(prevProps){
        this._updateData(prevProps);
    }

    _initProps(){
        if (this.ctrlRef && this.ctrlRef.current){
            if (this._isDefined(this.props.allowAnimation))
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this._isDefined(this.props.allowFocus))
                this.ctrlRef.current.allowFocus = this.props.allowFocus;
            if (this._isDefined(this.props.allowUpdate))
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this._isDefined(this.props.calendarSize))
                this.ctrlRef.current.calendarSize = this.props.calendarSize;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.dataFields))
                this.ctrlRef.current.dataFields = this.props.dataFields;
            if (this._isDefined(this.props.dropDownAdjustment))
                this.ctrlRef.current.dropDownAdjustment = this.props.dropDownAdjustment;
            if (this._isDefined(this.props.dropDownSize))
                this.ctrlRef.current.dropDownSize = this.props.dropDownSize;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.formatOptions))
                this.ctrlRef.current.formatOptions = this.props.formatOptions;
            if (this._isDefined(this.props.items))
                this.ctrlRef.current.items = this.props.items;
            if (this._isDefined(this.props.maxDropDownItems))
                this.ctrlRef.current.maxDropDownItems = this.props.maxDropDownItems;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.operation))
                this.ctrlRef.current.operation = this.props.operation;
            if (this._isDefined(this.props.parentBounds))
                this.ctrlRef.current.parentBounds = this.props.parentBounds;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.state))
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.theme))
                this.ctrlRef.current.theme = this.props.theme;
            if (this._isDefined(this.props.type))
                this.ctrlRef.current.type = this.props.type;
            if (this._isDefined(this.props.value))
                this.ctrlRef.current.value = this.props.value;
        }
    }
    
    _isDefined(value){
        return value !== undefined ? true : false;
    }

    _updateData(prevProps){
        if (this.ctrlRef && this.ctrlRef.current){
            if (this.props.allowAnimation !== prevProps.allowAnimation)
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this.props.allowFocus !== prevProps.allowFocus)
                this.ctrlRef.current.allowFocus = this.props.allowFocus;
            if (this.props.allowUpdate !== prevProps.allowUpdate)
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this.props.calendarSize !== prevProps.calendarSize)
                this.ctrlRef.current.calendarSize = this.props.calendarSize;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.dataFields !== prevProps.dataFields)
                this.ctrlRef.current.dataFields = this.props.dataFields;
            if (this.props.dropDownAdjustment !== prevProps.dropDownAdjustment)
                this.ctrlRef.current.dropDownAdjustment = this.props.dropDownAdjustment;
            if (this.props.dropDownSize !== prevProps.dropDownSize)
                this.ctrlRef.current.dropDownSize = this.props.dropDownSize;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this.props.formatOptions !== prevProps.formatOptions)
                this.ctrlRef.current.formatOptions = this.props.formatOptions;
            if (this._isDefined(this.props.items))
                this.ctrlRef.current.items = this.props.items;
            if (this.props.maxDropDownItems !== prevProps.maxDropDownItems)
                this.ctrlRef.current.maxDropDownItems = this.props.maxDropDownItems;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.operation !== prevProps.operation)
                this.ctrlRef.current.operation = this.props.operation;
            if (this.props.parentBounds !== prevProps.parentBounds)
                this.ctrlRef.current.parentBounds = this.props.parentBounds;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.size !== prevProps.size)
                this.ctrlRef.current.size = this.props.size;
            if (this.props.state !== prevProps.state)
                this.ctrlRef.current.state = this.props.state;
            if (this.props.theme !== prevProps.theme)
                this.ctrlRef.current.theme = this.props.theme;
            if (this.props.type !== prevProps.type)
                this.ctrlRef.current.type = this.props.type;
            if (this.props.value !== prevProps.value)
                this.ctrlRef.current.value = this.props.value;
        }
    }
 
    //
    // Methods -----------------------------------------------------------------------------------
    //

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
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.refresh();
    }

	updateLayout(){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.updateLayout();
    }

    render(){
        return (
            <iui-dropdownfilter id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-dropdownfilter>
        );
    }
}


export default IntegralUIDropDownFilterComponent;
