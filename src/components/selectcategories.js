import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { 
    SELECTORS,
    selectItemsArray
} from '../actions'
import { setCategoryAndItems } from '../actions/statusActions'

class Selectcategories extends PureComponent {
    render() {
        const {
            status,
            data,
            updateCategoryAndSelectedItems 
        } = this.props
        const categoryLI = SELECTORS.map((category,i)=><li key={`category_LI_${i}`} className="nav-item">
                    <a  onClick={()=>{updateCategoryAndSelectedItems(category, selectItemsArray(category,data.heroes,data.players,data.teams).items, data.fetching, data.axiosSource)}} 
                        className={`nav-link${status.category==category?' active':''}`} 
                        href="javascript:void(0)">{category}</a>
                </li>)
        return (
            <ul className="nav nav-tabs">
                {categoryLI}
            </ul>
        )        
    }
}

const mapStoreToProps = (store) => {
    return {
        status: store.statusR,
        data: store.axiosR
    }
}

const mapDispatchToPRops = (dispatch) => {
    return {
        updateCategoryAndSelectedItems: (type, items, fetching, source) => {
            if(fetching)
                source.cancel('fetching') 
            dispatch(setCategoryAndItems(type,items))
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToPRops)(Selectcategories)