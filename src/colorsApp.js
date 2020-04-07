import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import Palette from './Palette'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette'
import {generatePalette} from './colorHelpers'
import seedColor from './seedColor';
import NewPaletteForm from './NewPaletteForm'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import Page from './Page'


class colorsApp extends Component
{
    constructor(props)
    {
        super(props)
        const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
        this.state={palettes:savedPalettes || seedColor}
        this.addPalette=this.addPalette.bind(this)
        this.deletePalette=this.deletePalette.bind(this)
    }
    findPalette(id)
    {
        return this.state.palettes.find(function(palette){
        return palette.id === id
        })
    }
    addPalette(newPalette)
    {
        this.setState({palettes:[...this.state.palettes,newPalette]},this.syncLocalStorage)    
    }
    deletePalette(id)
    {
        this.setState(
            st=> ({palettes:st.palettes.filter(palette => palette.id !== id)}),this.syncLocalStorage
        )
    }
    syncLocalStorage()
    {
        window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
    }
    render()
    {
        return(
            <Route render={({location})=>(
                <TransitionGroup>
                    <CSSTransition key={location.pathname} classNames='page' timeout={500}>
                        <Switch location={location}>
                            <Route exact path='/palette/new' render={(routeProps)=>(<Page><NewPaletteForm palettes={this.state.palettes} addPalette={this.addPalette} {...routeProps}/></Page>)}/>
                            <Route exact path='/' render={(routeProps)=>(<Page><PaletteList deletePalette={this.deletePalette} seedColor={this.state.palettes} {...routeProps}/></Page>)}/>
                            <Route exact path='/palette/:id' render={(routeProps)=>(<Page> <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/></Page>)}/>
                            <Route exact path='/palette/:pId/:cId' render={(routeProps)=>(<Page><SingleColorPalette palette={generatePalette(this.findPalette(routeProps.match.params.pId))} pId={routeProps.match.params.pId} cId={routeProps.match.params.cId}/></Page>)} /> 
                            <Route render={(routeProps)=>(<Page><PaletteList deletePalette={this.deletePalette} seedColor={this.state.palettes} {...routeProps}/></Page>)}/>   
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>)} />
        );
    }
} 
export default colorsApp