import React, {Component} from 'react'
import { connect } from 'react-redux'
import Wantedlist from './wantedlist'
import Listpage from '../containers/listpage'

@connect((store)=>{
    return {
        status: store.statusR.status
    }
})
export default class Sidebar extends Component {
    render() {
        const { status } = this.props
        return (
            <div className="col-4 p-2 border">
                <h4>{status} List</h4>
                <Listpage />
                <Wantedlist />
            </div>
        )
    }
}
