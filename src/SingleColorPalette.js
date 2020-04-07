import React , {Component} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import {Link} from 'react-router-dom'
import styles from './styles/SingleColorPaletteStyles'

import { withStyles } from '@material-ui/core/styles'


class SingleColorPalette extends Component
{
    constructor(props)
    {
        super(props)
        this._shades=this.getShades(this.props.palette.colors,this.props.cId)
        this.state={format:"hex"}
        this.handleChangeFormat=this.handleChangeFormat.bind(this)
    }
    getShades(allColors,id)
    {
        let shades=[]
        let levels=[100,200,300,400,500,600,700,800,900]
        for (let i = 0; i < levels.length; i++) 
        {
            allColors[levels[i]].map((c)=>{
                if(c.id===id)
                {
                    shades.push(c)
                }
                return null
            })
            
        }
        return shades    
    }
    handleChangeFormat(val)
    {
        console.log(val)
        this.setState({format:val})
    }
    render()
    {
        let f=this.state.format
        return(
            <div className={this.props.classes.Palette}>
                <Navbar format={this.state.format} handleChangeFormat={this.handleChangeFormat} ShowSlider={false}/>
                <div className={this.props.classes.PaletteColors}>
                    {this._shades.map((c)=>(
                        <ColorBox background={c[f]} name={c.name} id={c.name} showColorBox={false} key={c.name}/>
                    ))}
                    <div className={this.props.classes.ColorBox}>
                        <Link to={`/palette/${this.props.palette.id}`} className={this.props.classes.GoBackButton}>Go Back</Link>
                    </div>
                </div> 
                <PaletteFooter paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji}/>
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette)