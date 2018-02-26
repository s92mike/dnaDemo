import React, { PureComponent } from 'react'
import { connect }  from 'react-redux'
import axios from 'axios'

import { 
    searchItemsByTerms,
    selectItemsArray,
    CATEGORY2
} from '../actions'
import { searchItemsTerms, setTerms } from '../actions/statusActions'
import { searchPlayer } from '../actions/axiosActions'

class Itemsearch extends PureComponent {
    render() {     
        const {status, searchItemsTermsProps, data} = this.props
        const selectedArray = selectItemsArray(
            status.category, 
            data.heroes, 
            data.players, 
            data.teams
        )
        return (
            <div className='search-bar'>
                <input 
                    value={status.terms}
                    onChange={(term)=>{searchItemsTermsProps(
                        status.category, 
                        term.target.value, 
                        selectedArray.items, 
                        data.axiosSource, 
                        data.fetching,
                        data.players
                    )}}
                    className="rounded" />
            </div>
        )
    }
    
}

const mapStoreToProps = (store) => {
    return {
        status: store.statusR,
        data: store.axiosR
    }
}

const mapDispatchToProps = (dispatch) => {
    return {  
        searchItemsTermsProps: (category, terms, items, source, fetching, players) => {
            if(category == CATEGORY2 && terms.length){
                dispatch(setTerms(terms))
                if(fetching){
                    source.cancel('fetching') 
                    dispatch(searchPlayer(terms, axios.CancelToken.source()))
                } else{
                    dispatch(searchPlayer(terms, source))
                } 
            } else{
                if(category==CATEGORY2) source.cancel('blank terms')
                dispatch(searchItemsTerms(terms, searchItemsByTerms(terms, items)))
            }
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Itemsearch)