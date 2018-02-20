import React, { Component } from 'react'

import Itemsearch from './itemsearch'
import Searchcategories from './searchcategories'

class Maincontainer extends Component {
    render() {
        return (
            <div className="col-8 p-2 border">
                <Searchcategories />
                <Itemsearch />
                <div className="p-2 well">
                    <h5>NAME</h5>
                    <h6>Statistics: </h6>
                    <div style={{height: 'auto', width: '100%', minHeight: 150}}>

                    </div>
                </div>
            </div>
        )
    }
}

export default (Maincontainer)