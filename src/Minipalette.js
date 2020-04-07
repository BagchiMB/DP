import React from 'react'
import styles from './styles/MiniPaletteStyles'
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


function Minipalette(props)
{ 
    function handleClickP()
    {
        props.handleClick(props.id)
    }
    function handleDelete(e)
    {
        e.stopPropagation();
        props.deletePalette(props.id)
    }
    return(
        <div className={props.classes.root} onClick={handleClickP}>
            <div className={props.classes.delete}>
                <DeleteIcon onClick={handleDelete} className={props.classes.deleteIcon}/>
            </div>
            <div className={props.classes.colors}>
                {props.colors.map((c)=>(
                    <div className={props.classes.miniColor} style={{backgroundColor:c.color}} key={c.name} />
                ))}
            </div>
            <h5 className={props.classes.title}>
                {props.paletteName} <span className={props.classes.emoji}>{props.emoji}</span>
            </h5>
        </div>
    );
}

export default withStyles(styles)(Minipalette)