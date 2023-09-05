/*
  filename: react.integralui.item.js
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

import '../components/integralui.item.js';

class IntegralUIItemComponent extends Component {
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
            if (this.props.click)
                this.ctrlRef.current.addEventListener('click', (e) => this.props.click(e));
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.mouseDown)
                this.ctrlRef.current.addEventListener('mouseDown', (e) => this.props.mouseDown(e));
            if (this.props.mouseEnter)
                this.ctrlRef.current.addEventListener('mouseEnter', (e) => this.props.mouseEnter(e));
            if (this.props.mouseLeave)
                this.ctrlRef.current.addEventListener('mouseLeave', (e) => this.props.mouseLeave(e));
            if (this.props.mouseMove)
                this.ctrlRef.current.addEventListener('mouseMove', (e) => this.props.mouseMove(e));
            if (this.props.mouseUp)
                this.ctrlRef.current.addEventListener('mouseUp', (e) => this.props.mouseUp(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
        }
    }

    componentWillUnmount(){
        if (this.ctrlRef && this.ctrlRef.current){
            if (this.props.click)
                this.ctrlRef.current.removeEventListener('click', this.props.click);
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
            if (this.props.mouseDown)
                this.ctrlRef.current.removeEventListener('mouseDown', this.props.mouseDown);
            if (this.props.mouseEnter)
                this.ctrlRef.current.removeEventListener('mouseEnter', this.props.mouseEnter);
            if (this.props.mouseLeave)
                this.ctrlRef.current.removeEventListener('mouseLeave', this.props.mouseLeave);
            if (this.props.mouseMove)
                this.ctrlRef.current.removeEventListener('mouseMove', this.props.mouseMove);
            if (this.props.mouseUp)
                this.ctrlRef.current.removeEventListener('mouseUp', this.props.mouseUp);
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
            if (this._isDefined(this.props.icon))
                this.ctrlRef.current.icon = this.props.icon;
            if (this._isDefined(this.props.iconUrl))
                this.ctrlRef.current.iconUrl = this.props.iconUrl;
            if (this._isDefined(this.props.iconSize))
                this.ctrlRef.current.iconSize = this.props.iconSize;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.state))
                this.ctrlRef.current.state = this.props.state;
            if (this._isDefined(this.props.text))
                this.ctrlRef.current.text = this.props.text;
            if (this._isDefined(this.props.theme))
                this.ctrlRef.current.theme = this.props.theme;
            if (this._isDefined(this.props.visible))
                this.ctrlRef.current.visible = this.props.visible;
        }
    }
    
    _isDefined(value){
        return value !== undefined ? true : false;
    }

    _updateData(prevProps){
        if (this.ctrlRef && this.ctrlRef.current){
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
            if (this.props.icon !== prevProps.icon)
                this.ctrlRef.current.icon = this.props.icon;
            if (this.props.iconUrl !== prevProps.iconUrl)
                this.ctrlRef.current.iconUrl = this.props.iconUrl;
            if (this.props.iconSize !== prevProps.iconSize)
                this.ctrlRef.current.iconSize = this.props.iconSize;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this.props.size !== prevProps.size)
                this.ctrlRef.current.size = this.props.size;
            if (this.props.state !== prevProps.state)
                this.ctrlRef.current.state = this.props.state;
            if (this.props.text !== prevProps.text)
                this.ctrlRef.current.text = this.props.text;
            if (this.props.theme !== prevProps.theme)
                this.ctrlRef.current.theme = this.props.theme;
            if (this.props.visible !== prevProps.visible)
                this.ctrlRef.current.visible = this.props.visible;
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
            <iui-item id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-item>
        );
    }
}


export default IntegralUIItemComponent;
