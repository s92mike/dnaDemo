import React, { Component } from 'react'

import Pagelist from './pagelist'
import Listpagination from './listpagination'

class Sidebar extends Component {
    render() {
        return (
            <div className="col-4 p-2 border">
                <h4>List</h4>
                <Listpagination />
                <Pagelist />
            </div>
        )
    }
}

export default (Sidebar)