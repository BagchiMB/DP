import React, {Component} from 'react'
import DraggableColorList from './DraggableColorList'
import NewPaletteFormNav from './NewPaletteFormNav'
import ColorPickerForm from './ColorPickerForm'

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import { ValidatorForm} from 'react-material-ui-form-validator'
import {arrayMove} from 'react-sortable-hoc'
import styles from './styles/NewPaletteFormStyles'
import seedColors from './seedColor'

class NewpaletteForm extends Component
{
    static defaultProps={
      maxColors:20
    }
    constructor(props)
    {
        super(props)
        this.state = {open: true,colors:seedColors[0].colors,PaletteName:""};
        this.handleDrawerOpen=this.handleDrawerOpen.bind(this)
        this.handleDrawerClose=this.handleDrawerClose.bind(this)
        this.addColor=this.addColor.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleRemove=this.handleRemove.bind(this)
        this.clearPalette=this.clearPalette.bind(this)
        this.randomColor=this.randomColor.bind(this)
    }
    handleDrawerOpen()
    {
        this.setState({ open: true });
    }
    handleDrawerClose()
    {
        this.setState({ open: false });
    }
    addColor(newColor)
    {
        this.setState({colors:[...this.state.colors,newColor],ColorName:""})
    }
    handleChange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidMount()
    {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
              this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule("Nocolors", value =>
          {
            if(value=''||this.state.colors.length === 0)
            {
              return false
            }
            else
            {
              return true
            }
          }
        );
    }
    handleSubmit(Palette)
    {
      Palette.id=Palette.paletteName.replace(/ /g, '-')
      Palette.colors=this.state.colors
      this.props.addPalette(Palette)
      this.props.history.push(`/`)
    }
    handleRemove(name)
    {
      let c=[]
      for (let i = 0; i < this.state.colors.length; i++) 
      {
        if(this.state.colors[i].name !== name)
        {
          c.push(this.state.colors[i])
        }  
      }
      this.setState({colors:c})
    }
    onSortEnd = ({oldIndex, newIndex}) => {
      this.setState(({colors}) => ({
        colors: arrayMove(colors, oldIndex, newIndex),
      }));
    };
    clearPalette()
    {
      this.setState({colors:[]})
    }
    randomColor()
    {
      const allColors=this.props.palettes.map(s=>s.colors).flat()
      const colorsPresent=this.state.colors
      let c={}
      let flag=0
      function retry()
      {
        const random=Math.floor(Math.random()*allColors.length)
        c=allColors[random]
        for (let i = 0; i < colorsPresent.length; i++) 
        {
          if(colorsPresent[i].name===c.name)
          {
            flag=1
            break
          }
          else
          {
            flag=0
          }
        }
      }
      retry()
      while(flag===1)
      {
        flag=0
        retry()
      }
      this.setState((st)=>{
        return {colors:[...st.colors,c]}
      })
    }
    render() 
    {
        const { classes } = this.props;
        const { open } = this.state;
        let isPaletteFull=this.state.colors.length >=this.props.maxColors
        return (
            <div className={classes.root}>
            <NewPaletteFormNav open={this.state.open} handleSubmit={this.handleSubmit} handleDrawerOpen={this.handleDrawerOpen}/>  
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon /> 
                </IconButton>
                </div>
                <Divider />
                <div className={classes.DrawerContainer}>  
                  <Typography variant="h4" gutterBottom color="inherit" noWrap>
                      Design Your Palette
                  </Typography>
                  <div className={classes.DrawerBtns}>
                    <Button className={classes.btn} variant="contained" color="secondary" onClick={this.clearPalette}>Clear Palette</Button>
                    <Button className={classes.btn} variant="contained" color="primary" disabled={isPaletteFull} type="submit" style={{backgroundColor:isPaletteFull?"grey":''}} onClick={this.randomColor}>{isPaletteFull?'Palette Full':'Random Colour'}</Button>
                  </div>
                    <ColorPickerForm colors={this.state.colors} isPaletteFull={isPaletteFull} handleColorChangeComplete={this.handleColorChangeComplete} addColor={this.addColor}/>            
                </div>
            </Drawer>
            <main
                className={classNames(classes.content, { 
                [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} /> 
                <DraggableColorList distance={20} colors={this.state.colors} remove={this.handleRemove} axis='xy' onSortEnd={this.onSortEnd}/>
            </main>
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(NewpaletteForm);