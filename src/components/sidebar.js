import React, { Component } from 'react'
import { connect } from 'react-redux'

import Pagelist from './pagelist'
import Listpagination from './listpagination'
import { searchItemsByTerms } from '../actions'
import { updateSearchItems, searchItemsTerms } from '../actions/statusActions'

class Sidebar extends Component {
    componentWillMount() {
        if(this.props.terms.length){
            this.props.setSearchItemProps(this.props.terms, searchItemsByTerms(this.props.terms, this.props.heroes))
        } else {
            this.props.setSearchInitialItems(this.props.heroes)
        }
        
    }    
    render() {
        const { status } = this.props
        return (
            <div className="col-4 p-2 border">
                <h4>{status} List</h4>
                <Listpagination />
                <Pagelist />
            </div>
        )
    }
}
const mapStoreToProps = (store) => {
    return {
        status: store.statusR.status,
        terms: store.statusR.terms,
        heroes: store.heroR.heroes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSearchItemProps: (terms, items) => {
            dispatch(searchItemsTerms(terms, items))
        },
        setSearchInitialItems: (items) => {
            dispatch(updateSearchItems(items))
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Sidebar)