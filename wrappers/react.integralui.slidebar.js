/*
  filename: react.integralui.slidebar.js
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

import '../components/integralui.slidebar.js';

class IntegralUISlideBarComponent extends Component {
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
            if (this.props.enabledChanged)
                this.ctrlRef.current.addEventListener('enabledChanged', (e) => this.props.enabledChanged(e));
            if (this.props.sizeChanged)
                this.ctrlRef.current.addEventListener('sizeChanged', (e) => this.props.sizeChanged(e));
            if (this.props.slideChanged)
                this.ctrlRef.current.addEventListener('slideChanged', (e) => this.props.slideChanged(e));
            if (this.props.stateChanged)
                this.ctrlRef.current.addEventListener('stateChanged', (e) => this.props.stateChanged(e));
        }
    }

    componentWillUnmount(){
        if (this.ctrlRef && this.ctrlRef.current){
            if (this.props.enabledChanged)
                this.ctrlRef.current.removeEventListener('enabledChanged', this.props.enabledChanged);
            if (this.props.sizeChanged)
                this.ctrlRef.current.removeEventListener('sizeChanged', this.props.sizeChanged);
            if (this.props.slideChanged)
                this.ctrlRef.current.removeEventListener('slideChanged', this.props.slideChanged);
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
            if (this._isDefined(this.props.animationPause))
                this.ctrlRef.current.animationPause = this.props.animationPause;
            if (this._isDefined(this.props.animationSpeed))
                this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
            if (this._isDefined(this.props.colorScheme))
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this._isDefined(this.props.customStyle))
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this._isDefined(this.props.data))
                this.ctrlRef.current.data = this.props.data;
            if (this._isDefined(this.props.displayMode))
                this.ctrlRef.current.displayMode = this.props.displayMode;
            if (this._isDefined(this.props.enabled))
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this._isDefined(this.props.name))
                this.ctrlRef.current.name = this.props.name;
            if (this._isDefined(this.props.navigationButtons))
                this.ctrlRef.current.navigationButtons = this.props.navigationButtons;
            if (this._isDefined(this.props.resourcePath))
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
            if (this._isDefined(this.props.size))
                this.ctrlRef.current.size = this.props.size;
            if (this._isDefined(this.props.selectedIndex))
                this.ctrlRef.current.selectedIndex = this.props.selectedIndex;
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
            if (this.props.allowUpdate !== prevProps.allowUpdate)
                this.ctrlRef.current.allowUpdate = this.props.allowUpdate;
            if (this.props.animationPause !== prevProps.animationPause)
                this.ctrlRef.current.animationPause = this.props.animationPause;
            if (this.props.animationSpeed !== prevProps.animationSpeed)
                this.ctrlRef.current.animationSpeed = this.props.animationSpeed;
            if (this.props.colorScheme !== prevProps.colorScheme)
                this.ctrlRef.current.colorScheme = this.props.colorScheme;
            if (this.props.customStyle !== prevProps.customStyle)
                this.ctrlRef.current.customStyle = this.props.customStyle;
            if (this.props.data !== prevProps.data)
                this.ctrlRef.current.data = this.props.data;
            if (this.props.displayMode !== prevProps.displayMode)
                this.ctrlRef.current.displayMode = this.props.displayMode;
            if (this.props.enabled !== prevProps.enabled)
                this.ctrlRef.current.enabled = this.props.enabled;
            if (this.props.name !== prevProps.name)
                this.ctrlRef.current.name = this.props.name;
            if (this.props.navigationButtons !== prevProps.navigationButtons)
                this.ctrlRef.current.navigationButtons = this.props.navigationButtons;
            if (this.props.resourcePath !== prevProps.resourcePath)
                this.ctrlRef.current.resourcePath = this.props.resourcePath;
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

    // Animations --------------------------------------------------------------------------------

	startAnimation(){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.startAnimation();
    }

	stopAnimation(){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.stopAnimation();
    }

	// Navigation --------------------------------------------------------------------------------

	prevSlide(){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.prevSlide();
    }

	nextSlide(){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.nextSlide();
    }
 
	// Selection ---------------------------------------------------------------------------------

	selectSlide(slide){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.selectSlide(slide);
    }

	selectSlideByIndex(index){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.selectSlideByIndex(index);
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
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.refresh();
    }

	updateLayout(){
        if (this.ctrlRef && this.ctrlRef.current)
            this.ctrlRef.current.updateLayout();
    }

    render(){
        return (
            <iui-slidebar id={this.props.id} ref={this.ctrlRef}>
                {this.props.children}
            </iui-slidebar>
        );
    }
}


export default IntegralUISlideBarComponent;
