import React from 'react'
import styles from './styles/PaletteFooterStyles'
import { withStyles } from '@material-ui/core/styles'



function PalatteFooter(props)
{
    return(
        <div className={props.classes.PaletteFooter}>{props.paletteName} <span>{props.emoji}</span></div>
    );
}
export default withStyles(styles)(PalatteFooter)