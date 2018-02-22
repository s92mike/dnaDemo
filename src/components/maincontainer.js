import React, { Component } from 'react'
import { connect } from 'react-redux'

import Itemsearch from './itemsearch'
import Selectcategories from './selectcategories'
import ContainerDetails from './containerdetails'

class Maincontainer extends Component {
    render() {  
        return (
            <div className="col-8 p-2 border">
                <Selectcategories />
                <Itemsearch />
                <ContainerDetails />
            </div>
        )
    }
}

export default Maincontainer