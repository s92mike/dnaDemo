import React, { Component } from 'react'
import Sidebar from '../components/sidebar'
import Maincontainer from '../components/maincontainer'

import { getHeroes, searchHeroes } from '../actions/heroesActions'
import { connect } from 'react-redux'

@connect((store) => {
    return {
        heroes: store.heroes
    }
})
export default class App extends Component {
    componentWillMount() {
        //
    }
    checkTerm(terms) {
        this.props.dispatch(getHeroes())
        //this.props.dispatch(searchHeroes('mirana', this.props.heroes))
    }
    render() {
        return (
            <div className="container v1">
                <button onClick={this.checkTerm.bind(this)}>Test</button>
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