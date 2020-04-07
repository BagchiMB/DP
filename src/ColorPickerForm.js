import React, {Component} from 'react'

import Button from '@material-ui/core/Button';

import { ChromePicker } from 'react-color';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles'

class ColorPickerForm extends Component
{
    constructor(props)
    {
        super(props)
        this.state={currColor:'teal',ColorName:""}
        this.handleColorChangeComplete=this.handleColorChangeComplete.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    }
    handleColorChangeComplete(e)
    {
        this.setState({currColor:e.hex})
    }
    handleSubmit()
    {
        const newColor=
        {
            color:this.state.currColor,
            name:this.state.ColorName
        };
        this.props.addColor(newColor)
    }
    componentDidMount()
    {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.props.colors.every(({color}) => color !== this.state.currColor )
        );
    }
    render()
    {
        const {isPaletteFull,classes}=this.props;
        return(
            <div>
                <ChromePicker
                    color={this.state.currColor}
                    onChangeComplete={this.handleColorChangeComplete}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
                    <TextValidator label='Enter desired colour name' className={classes.colorNameInput} margin='normal' variant='filled' name="ColorName" value={this.state.ColorName} onChange={this.handleChange} validators={["required","isColorNameUnique","isColorUnique"]} errorMessages={["Name is Mandatory","Color name should be unique","Color is already present in the palette"]}/>
                    <Button className={classes.addColor} variant="contained" color="primary" disabled={isPaletteFull} type="submit" style={{backgroundColor:isPaletteFull?"grey":this.state.currColor}}>{isPaletteFull?'Palette Full':'Add Colour'}</Button>
                </ValidatorForm> 
            </div>
        );
    }
}

export default withStyles(styles)(ColorPickerForm)