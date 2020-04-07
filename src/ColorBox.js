import React,{Component} from 'react'
import styles from './styles/ColorBoxStyles'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'


class ColorBox extends Component
{
    constructor(props)
    {
        super(props)
        this.state={copies:false}
        this.changeCopyState=this.changeCopyState.bind(this)
    }
    changeCopyState()
    {
        this.setState({copied:true},() => (
            setTimeout(()=> this.setState({copied:false}),1500)))
    }
    render()
    {
        return(
            <CopyToClipboard text={this.props.background} onCopy={this.changeCopyState}>
                <div style={{backgroundColor:this.props.background}} className={this.props.classes.ColorBox}>
                <div style={{backgroundColor:this.props.background}} className={`${this.props.classes.ColorBoxOverlay} ${this.state.copied && this.props.classes.ShowOverlaybackground}`}></div>
                <div className={`${this.props.classes.ColorBoxOverlayText} ${this.state.copied && this.props.classes.ColorBoxOverlayText2}`}>
                   <h1>Copied!</h1>
                   <p className={this.props.classes.copyText}>{this.props.background}</p> 
                </div>
                <div>
                        <div className={this.props.classes.ColorBoxContent}>
                            <span className={this.props.classes.colorName}>{this.props.name}</span>
                        </div>
                        <button className={this.props.classes.copyName}>COPY</button>
                </div>
                {this.props.showColorBox && <Link to={`/palette/${this.props.pID}/${this.props.cId}`} onClick={e => e.stopPropagation()}>
                    <span className={this.props.classes.MoreButton}>More</span>
                </Link>}
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox)