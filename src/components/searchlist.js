import React, { Component } from 'react'
import { connect } from 'react-redux'

import SidebarConnect from '../container/sidebarconnect'
import Maincontainer from './maincontainer'

import { getAllInitialData, getAllInitialDataNoAxios } from '../redux/actions/axiosActions'

class Searchlist extends Component {
    componentWillMount() {
        //this.props.getAllLiveData(this.props.category)
        this.props.getDemoData(this.props.category)
    }
    render() {
        const {data} = this.props
        if(!data.heroes.length){
            return (
                <div
                className="text-center alert alert-info" 
                style={{paddingTop: 18, width: 300, margin: '21% auto 21px'}}>
                    <h3>Fetching!!!</h3>
                </div>
            )
        }
        return (
            <div className="container v1">
                <div className="row">
                    <SidebarConnect />
                    <Maincontainer />
                </div>
            </div>  
        )
    }
}

const mapStoreToProps = ({axiosR, statusR: {category}}) => {
    return {
        data: axiosR,
        category: category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllLiveData: (category) => {
            dispatch(getAllInitialData(category))
        },
        getDemoData: (category) => {
            dispatch(getAllInitialDataNoAxios(category))
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Searchlist)