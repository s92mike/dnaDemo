import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sidebar from './sidebar'
import Maincontainer from './maincontainer'

import { getHeroes } from '../actions/heroesActions'

class App extends Component {
    componentWillMount() {
        this.props.getAllHeroes()
    }
    render() {
        const {heroes} = this.props
        if(!heroes.heroes.length){
            return (
                <div className="text-center" 
                    style={{paddingTop: 18}}>
                    <h1>Loading!!!</h1>
                </div>
            )
        }
        return (
            <div className="container v1">
                <div className="row">
                    <Sidebar />
                    <Maincontainer />
                </div>
            </div>  
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        heroes: store.heroR
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllHeroes: () => {
            dispatch(getHeroes())
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App)