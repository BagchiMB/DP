import React, {Component} from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

class MetaForm extends Component
{
    constructor(props)
    {
        super(props)
        this.state={open:"form",PaletteName:""}
        this.handleChange=this.handleChange.bind(this)
        this.formSubmitHandle=this.formSubmitHandle.bind(this)
        this.EmojiAdded=this.EmojiAdded.bind(this)
    }
    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    }
    formSubmitHandle()
    {
        this.setState({open:'emoji'})
    }
    EmojiAdded(emo)
    {
        const Palette={paletteName:this.state.PaletteName,emoji:emo.native}
        this.props.handleSubmit(Palette)
        this.setState({open:''})
    }
    openForm()
    {
        this.setState({open:'form'})
    }
    render() 
    {
      return (
        <div>
            <Dialog open={this.state.open==='emoji'} onClose={this.props.FormHide}>
                <DialogTitle id="form-dialog-title">Pick an Emoji for your Palette</DialogTitle>
                <Picker style={{width:'320px'}} onSelect={this.EmojiAdded} title='Emoji Description'/>
            </Dialog>
            <Dialog
              open={this.state.open==='form'}
              onClose={this.props.FormHide}
              aria-labelledby="form-dialog-title"
            >
            <ValidatorForm onSubmit={this.formSubmitHandle}>
              <DialogTitle id="form-dialog-title">Palette Name</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter a name for your beautiful palette (maal sa daalna kuch XD)
                </DialogContentText>
                <TextValidator fullWidth label='Palette Name' name="PaletteName" value={this.state.PaletteName} onChange={this.handleChange} validators={["required","isPaletteNameUnique","Nocolors"]} errorMessages={["Palette should be given a valid name","Palette Name already taken","No colors added"]}/>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.props.FormHide} color="primary">
                  Cancel
                </Button>
                <Button variant="contained" color="secondary" type="submit">Add Palette</Button>
              </DialogActions>
            </ValidatorForm>
            </Dialog>
        </div>
      );
    }
}
export default MetaForm