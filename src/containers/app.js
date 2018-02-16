import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Sidebar from '../components/sidebar'
import Maincontainer from '../components/maincontainer'

import * as heroesActions from '../actions/heroesActions'


@connect((store)=>{
    return {
        heroes: store.heroR,
        status: store.statusR
    }
}, (dispatch)=>{
    return {
        actions: bindActionCreators(heroesActions, dispatch)
    }
})
export default class App extends Component {
    componentWillMount() {
       this.props.actions.getHeroes()
    }
    render() {
        const { heroes } = this.props
        if(!heroes.heroes.length){
            return (
                <div className="text-center" style={{paddingTop: 18}}>
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

// const mapStateToProps = (state) => {
//     return {
//         heroes: state.heroes
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         checkTerm: (terms) => {
//             dispatch(searchHeroes(terms, this.props.heroes))
//         },
//         getAllHeroes: () => {
//             dispatch(getHeroes())
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)