/*
  filename: react.integralui.datepicker.js
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

import '../components/integralui.datepicker.js';

class IntegralUIDatePickerComponent extends Component {
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
            if (this.props.beforeExpand)
                this.ctrlRef.current.addEventListener('beforeExpand', (e) => this.props.beforeExpand(e));
            if (this.props.closed)
                this.ctrlRef.current.addEventListener('closed', (e) => this.props.closed(e));
            if (this.props.dateChanged)
                this.ctrlRef.current.addEventListener('dateChanged', (e) => this.props.dateChanged(e));
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.keyDown)
                this.ctrlRef.current.addEventListener('keyDown', (e) => this.props.keyDown(e));
            if (this.props.opened)
                this.ctrlRef.current.addEventListener('opened', (e) => this.props.opened(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
        }
    }

    componentWillUnmount(){
        if (this.ctrlRef && this.ctrlRef.current){
            if (this.props.beforeExpand)
                this.ctrlRef.current.removeEventListener('beforeExpand', this.props.beforeExpand);
            if (this.props.closed)
                this.ctrlRef.current.removeEventListener('closed', this.props.closed);
            if (this.props.dateChanged)
                this.ctrlRef.current.removeEventListener('dateChanged', this.props.dateChanged);
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
            if (this.props.keyDown)
                this.ctrlRef.current.removeEventListener('keyDown', this.props.keyDown);
            if (this.props.opened)
                this.ctrlRef.current.removeEventListener('opened', this.props.opened);
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
        if (this.ctrlRef && this.ctrlRef.current){
            if (this._isDefined(this.props.allowAnimation))
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this._isDefined(this.props.animationType))
                this.ctrlRef.current.animationType = this.props.animationType;
            if (this._isDefined(this.props.allowFocus))
                this.ctrlRef.current.allowFocus = this.props.allowFocus;
            if (this._isDefined(this.props.allowUpdate))
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this._isDefined(this.props.animationSpeed))
                this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
            if (this._isDefined(this.props.calendarAlign))
                this.ctrlRef.current.calendarAlign = this.props.calendarAlign;
            if (this._isDefined(this.props.calendarSize))
                this.ctrlRef.current.calendarSize = this.props.calendarSize;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.dropDownAdjustment))
                this.ctrlRef.current.dropDownAdjustment = this.props.dropDownAdjustment;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.firstDayOfWeek))
                this.ctrlRef.current.firstDayOfWeek = this.props.firstDayOfWeek;
            if (this._isDefined(this.props.format))
                this.ctrlRef.current.format = this.props.format;
            if (this._isDefined(this.props.formatOptions))
                this.ctrlRef.current.formatOptions = this.props.formatOptions;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.locales))
                this.ctrlRef.current.locales = this.props.locales;
            if (this._isDefined(this.props.selectedDate))
                this.ctrlRef.current.selectedDate = this.props.selectedDate;
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
        if (this.ctrlRef && this.ctrlRef.current){
            if (this.props.allowAnimation !== prevProps.allowAnimation)
                this.ctrlRef.current.allowAnimation = this.props.allowAnimation;
            if (this.props.animationType !== prevProps.animationType)
                this.ctrlRef.current.animationType = this.props.animationType;
            if (this.props.allowFocus !== prevProps.allowFocus)
                this.ctrlRef.current.allowFocus = this.props.allowFocus;
           if (this.props.allowUpdate !== prevProps.allowUpdate)
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this.props.animationSpeed !== prevProps.animationSpeed)
                this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
            if (this.props.calendarAlign !== prevProps.calendarAlign)
                this.ctrlRef.current.calendarAlign = this.props.calendarAlign;
           if (this.props.calendarSize !== prevProps.calendarSize)
                this.ctrlRef.current.calendarSize = this.props.calendarSize;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.dropDownAdjustment !== prevProps.dropDownAdjustment)
                this.ctrlRef.current.dropDownAdjustment = this.props.dropDownAdjustment;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this.props.firstDayOfWeek !== prevProps.firstDayOfWeek)
                this.ctrlRef.current.firstDayOfWeek = this.props.firstDayOfWeek;
            if (this.props.format !== prevProps.format)
                this.ctrlRef.current.format = this.props.format;
            if (this.props.formatOptions !== prevProps.formatOptions)
                this.ctrlRef.current.formatOptions = this.props.formatOptions;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.locales !== prevProps.locales)
                this.ctrlRef.current.locales = this.props.locales;
            if (this.props.selectedDate !== prevProps.selectedDate)
                this.ctrlRef.current.selectedDate = this.props.selectedDate;
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
            <iui-datepicker id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-datepicker>
        );
    }
}


export default IntegralUIDatePickerComponent;
