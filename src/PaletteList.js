import React, {Component} from 'react'
import styles from './styles/PaletteListStyles'
import MiniPalette from './Minipalette'
import {Link} from 'react-router-dom'
import { CSSTransition,TransitionGroup } from 'react-transition-group';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'


class PaletteList extends Component
{
    constructor(props)
    {
        super(props)
        this.state={dopen:false,delId:''}
        this.goTopalette=this.goTopalette.bind(this)
        this.openDia=this.openDia.bind(this)
        this.closeDia=this.closeDia.bind(this)
        this.clickedDel=this.clickedDel.bind(this)
    }
    goTopalette(id)
    {
        this.props.history.push(`palette/${id}`)
    }
    openDia(id)
    {
        this.setState({dopen:true,delId:id})
    }
    closeDia()
    {
        this.setState({dopen:false,delId:''})    
    }
    clickedDel()
    {
        this.props.deletePalette(this.state.delId)
        this.closeDia()  
    }
    render()
    {
        return(
            <div className={this.props.classes.root}>
                    <div className={this.props.classes.container}>
                        <div className={this.props.classes.nav}>
                            <h1 className={this.props.classes.title}>Designer's Palettes</h1>
                            <Link to='/palette/new'>Create Palette</Link>
                        </div>
                        <TransitionGroup className={this.props.classes.palettes}>
                            {this.props.seedColor.map((p)=>(
                                <CSSTransition key={p.id} classNames='fade' timeout={500}>
                                    <MiniPalette deletePalette={this.openDia} key={p.id} id={p.id} {...p} handleClick={this.goTopalette}/>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </div>   
                    <Dialog open={this.state.dopen} onClose={this.closeDia}>
                        <DialogTitle>Delete this beautiful palette ?</DialogTitle>     
                        <List>
                            <ListItem button onClick={this.clickedDel}>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                        <CheckIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>Yeah</ListItemText>
                            </ListItem>

                            <ListItem button onClick={this.closeDia}>
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                        <CloseIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>Nope</ListItemText>
                            </ListItem>    
                        </List>       
                    </Dialog>    
            </div>
        );
    }   
}

export default withStyles(styles)(PaletteList)