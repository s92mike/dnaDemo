import React, { Component } from 'react'

import Sidebar from './sidebar'
import Maincontainer from './maincontainer'


class App extends Component {
    render() {
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

export default (App)