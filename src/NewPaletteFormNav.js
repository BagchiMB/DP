import React, {Component} from 'react'
import MetaForm from './MetaForm'
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {Link} from 'react-router-dom'
import styles from './styles/NewPaletteFormNavStyles'

class NewPaletteFormNav extends Component
{
    constructor(props)
    {
        super(props)
        this.state={PaletteName:"",isFormShowing:false}
        this.FormShow=this.FormShow.bind(this)
        this.FormHide=this.FormHide.bind(this)
        
    }
    FormShow()
    {
        this.setState({isFormShowing:true})
    }
    FormHide()
    {
        this.setState({isFormShowing:false})
    }
    render()
    {
        const { classes,open } = this.props;
        return(
            <div className="root">
                {/*<CssBaseline />*/}
                <AppBar
                    position="fixed"
                    color="default"
                    className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                      <IconButton
                          color="inherit"
                          aria-label="Open drawer"
                          onClick={this.props.handleDrawerOpen}
                          className={classNames(classes.menuButton, open && classes.hide)}
                      >
                          <ChevronRightIcon />
                      </IconButton>
                      <Typography className={classes.head} variant="h6" color="inherit" noWrap>
                          Create your Palette
                      </Typography>
                    </Toolbar>
                    <div className={classes.NavBtn}>
                        <Link to='/'>
                            <Button variant="contained" color="secondary" className={classes.Btn}>Go back</Button>
                        </Link>
                        <Button variant="contained" color="primary" onClick={this.FormShow} className={classes.Btn}>Save</Button>
                        {this.state.isFormShowing ? <MetaForm FormHide={this.FormHide} handleSubmit={this.props.handleSubmit}/>:''}
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNav);