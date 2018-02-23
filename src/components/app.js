import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sidebar from './sidebar'
import Maincontainer from './maincontainer'

import { getAllInitialData, getAllInitialDataNoAxios } from '../actions/axiosActions'

class App extends Component {
    componentWillMount() {
        //this.props.getAllInitializedData()
        this.props.getDemoData()
    }
    render() {
        const {data} = this.props
        if(!data.heroes.length){
            return (
                <div
                className="text-center alert alert-info" 
                style={{paddingTop: 18, marginTop: '21%'}}>
                    <h3>Loading!!!</h3>
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
        data: store.axiosR
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllInitializedData: () => {
            dispatch(getAllInitialData())
        },
        getDemoData: () => {
            dispatch(getAllInitialDataNoAxios())
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App)