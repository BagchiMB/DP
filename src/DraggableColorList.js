import React from 'react'
import DraggableColorBox from './DraggableColorBox'
import {SortableContainer} from 'react-sortable-hoc'

const DraggableColorList= SortableContainer(({colors,remove})=>
{
    return(
        <div style={{height:'100%'}}>
            {colors.map((c,i) =>(
                <DraggableColorBox index={i} key={c.name} handleRemove={remove} color={c.color} name={c.name}/>
            ))}
        </div>
    );
})

export default DraggableColorList

