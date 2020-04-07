import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc'
import styles from './styles/DraggableColorBoxStyles'


const DraggableColorBox=SortableElement(props =>
{
    function handleRemove()
    {
        props.handleRemove(props.name)
    }
    return(
        <div className={props.classes.root}style={{backgroundColor:props.color}}>
            <div className={props.classes.ColorBoxContent}>
                <span>{props.name}</span>
                <DeleteIcon onClick={handleRemove}/>
            </div>
        </div>
    );
})
export default withStyles(styles)(DraggableColorBox)