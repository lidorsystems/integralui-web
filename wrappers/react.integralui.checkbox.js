/*
  filename: react.integralui.checkbox.js
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

import '../components/integralui.checkbox.js';

class IntegralUICheckBoxComponent extends Component {
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
            if (this.props.checkedChanged)
                this.ctrlRef.current.addEventListener('checkedChanged', (e) => this.props.checkedChanged(e));
            if (this.props.checkStateChanged)
                this.ctrlRef.current.addEventListener('checkStateChanged', (e) => this.props.checkStateChanged(e));
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.keyDown)
                this.ctrlRef.current.addEventListener('keyDown', (e) => this.props.keyDown(e));
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
            if (this.props.checkedChanged)
                this.ctrlRef.current.removeEventListener('checkedChanged', this.props.checkedChanged);
            if (this.props.checkStateChanged)
                this.ctrlRef.current.removeEventListener('checkStateChanged', this.props.checkStateChanged);
            if (this.props.keyDown)
                this.ctrlRef.current.removeEventListener('keyDown', this.props.keyDown);
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
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
            if (this._isDefined(this.props.checked))
                this.ctrlRef.current.checked = this.props.checked;
            if (this._isDefined(this.props.checkState))
                this.ctrlRef.current.checkState = this.props.checkState;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.state))
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.theme))
                this.ctrlRef.current.theme = this.props.theme;
            if (this._isDefined(this.props.threeState))
                this.ctrlRef.current.threeState = this.props.threeState;
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
            if (this.props.checked !== prevProps.checked)
                this.ctrlRef.current.checked = this.props.checked;
            if (this.props.checkState !== prevProps.checkState)
                this.ctrlRef.current.checkState = this.props.checkState;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.size !== prevProps.size)
                this.ctrlRef.current.size = this.props.size;
            if (this.props.state !== prevProps.state)
                this.ctrlRef.current.state = this.props.state;
            if (this.props.theme !== prevProps.theme)
                this.ctrlRef.current.theme = this.props.theme;
            if (this.props.threeState !== prevProps.threeState)
                this.ctrlRef.current.threeState = this.props.threeState;
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
            <iui-checkbox id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-checkbox>
        );
    }
}


export default IntegralUICheckBoxComponent;
