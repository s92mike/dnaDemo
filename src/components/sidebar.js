import React, {Component} from 'react'
import Wantedlist from './wantedlist'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="col-3 p-2 border">
                <h4>List</h4>
                <Wantedlist />
            </div>
        )
    }
}
