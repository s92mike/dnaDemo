import React, { Component } from 'react'
import { connect } from 'react-redux'

import Pagelist from './pagelist'
import Listpagination from './listpagination'
import { searchItemsByTerms } from '../actions'
import { updateSearchItems, searchItemsTerms, setStatusItem } from '../actions/statusActions'

class Sidebar extends Component { 
    render() {
        const { category } = this.props
        return (
            <div className="col-4 p-2 border">
                <h4>{category} List</h4>
                <Listpagination />
                <Pagelist />
            </div>
        )
    }
}
const mapStoreToProps = (store) => {
    return {
        category: store.statusR.category
    }
}
export default connect(mapStoreToProps)(Sidebar)