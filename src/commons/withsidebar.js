import React, { Component } from 'react'

import SidebarConnect from '../container/sidebarconnect'
import Maincontainer from './maincontainer'


class WithSidebar extends Component {
    render() {
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


export default WithSidebar