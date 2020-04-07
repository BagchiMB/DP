import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles'


class Navbar extends Component
{
    constructor(props)
    {
        super(props)
        this.state={format:"hex", openS:false}
        this.handleChange=this.handleChange.bind(this)
        this.handleChangeFormat=this.handleChangeFormat.bind(this)
        this.closeSnackbar=this.closeSnackbar.bind(this)
    }
    handleChange(step)
    {
        this.props.handleNavbarLevelChange(step)
    }
    handleChangeFormat(e)
    {
        this.setState({format:e.target.value,openS:true})
        this.props.handleChangeFormat(e.target.value)
    }
    closeSnackbar()
    {
        this.setState({openS:false})
    }
    render()
    {
        return(
            <div className={this.props.classes.Navbar}>
                <div className={this.props.classes.logo}>
                    <Link to='/'>Designer's Palette</Link>
                </div>
                {this.props.ShowSlider && <div className={this.props.classes.NavbarSlider}>
                    <span>Level: {this.props.level}</span>
                    <Slider step={100} min={100} max={900} defaultValue={500} onAfterChange={this.handleChange}/>
                </div>}
                <div className={this.props.classes.SelectContainer}>
                    <Select value={this.state.format} onChange={this.handleChangeFormat}>
                        <MenuItem value="hex">hex - #ffffff</MenuItem>
                        <MenuItem value="rgb">rgb - (255,255,255)</MenuItem>
                        <MenuItem value="rgba">rgba - (255,255,255,1.0)</MenuItem>
                    </Select> 
                </div>
                <Snackbar 
                    anchorOrigin={{vertical:'bottom',horizontal:'left'}} 
                    open={this.state.openS} 
                    onClose={this.closeSnackbar}
                    autoHideDuration={3000} 
                    message={<span id="MessageID">Format changed to {this.state.format.toUpperCase()}</span>} 
                    action={[
                            <IconButton onClick={this.closeSnackbar} color='inherit' key='close'>
                                <CloseIcon/>
                            </IconButton>
                            ]}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Navbar)