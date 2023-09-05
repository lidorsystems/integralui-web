/*
  filename: react.integralui.slide.js
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

import '../components/integralui.slide.js';

class IntegralUISlideComponent extends Component {
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
            // Standard Events
            if (this.props.onClick)
                this.ctrlRef.current.addEventListener('click', (e) => this.props.onClick(e));
            if (this.props.onMouseDown)
                this.ctrlRef.current.addEventListener('mousedown', (e) => this.props.onMouseDown(e));

            // Component Events
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
        }
    }

    componentWillUnmount(){
        if (this._isCtrlDefined()){
            // Standard Events
            if (this.props.onClick)
                this.ctrlRef.current.removeEventListener('click', this.props.onClick);
            if (this.props.onMouseDown)
                this.ctrlRef.current.removeEventListener('mousedown', this.props.onMouseDown);

            // Component Events
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
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
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.position))
                this.ctrlRef.current.position = this.props.position;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
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
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.position !== prevProps.position)
                this.ctrlRef.current.position = this.props.position;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
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
    
    // General -----------------------------------------------------------------------------------
 
    getSize(){
        return this._isCtrlDefined() ? this.ctrlRef.current.getSize() : { width: 0, height: 0 };
    }

    // Style -------------------------------------------------------------------------------------

    setClass(value){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.setClass(value);
    }

	setOpacity(value){
        if (this._isCtrlDefined())
            this.ctrlRef.current.setOpacity(value);
    }

	setScale(value){
        if (this._isCtrlDefined())
            this.ctrlRef.current.setScale(value);
    }

	setStyle(value){
        if (this._isCtrlDefined())
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
            <iui-slide id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-slide>
        );
    }
}


export default IntegralUISlideComponent;
