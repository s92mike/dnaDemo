import React, { Component } from 'react'
import { connect }  from 'react-redux'

import { 
    searchItemsByTerms,
    CATEGORY1,
    CATEGORY2,
    CATEGORY3
} from '../actions'
import { searchHeroes } from '../actions/heroesActions'
import { searchItemsTerms } from '../actions/statusActions'

class Itemsearch extends Component {
    render() {
        const {status, searchItemsTermsProps, heroes} = this.props
        return (
            <div className='search-bar'>
                <input 
                    value={status.terms}
                    onChange={(term)=>{searchItemsTermsProps(term.target.value, heroes)}}
                    className="rounded" />
            </div>
        )
    }
    
}

const mapStoreToProps = (store) => {
    return {
        status: store.statusR,
        heroes: store.heroR.heroes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {  
        searchItemsTermsProps: (terms, items) => {
            dispatch(searchItemsTerms(terms, searchItemsByTerms(terms, items)))
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Itemsearch)