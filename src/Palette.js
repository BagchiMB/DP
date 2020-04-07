import React,{Component} from 'react'
import styles from './styles/PaletteStyles'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'

import { withStyles } from '@material-ui/core/styles'


class Pallete extends Component
{
    constructor(props)
    {
        super(props)
        this.state={level:500,format:"hex"}
        this.handleChange=this.handleChange.bind(this)
        this.handleChangeFormat=this.handleChangeFormat.bind(this)
    }
    handleChange(step)
    {
        this.setState({level:step})
    }
    handleChangeFormat(val)
    {
        this.setState({format:val})
    }
    render()
    {
        let f=this.state.format
        const colorBoxes=this.props.palette.colors[this.state.level].map(c=>(<ColorBox background={c[f]} name={c.name} key={c.id} cId={c.id} pID={this.props.palette.id} showColorBox={true}/>))
        return(
            <div className={this.props.classes.Palette}>
                <Navbar handleNavbarLevelChange={this.handleChange} level={this.state.level} format={this.state.format} handleChangeFormat={this.handleChangeFormat} ShowSlider={true}/>
                <div className={this.props.classes.PaletteColors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji}/>
            </div>
        );
    }
}

export default withStyles(styles)(Pallete)