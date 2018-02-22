import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { 
    SELECTORS,
    CATEGORY1,
    CATEGORY2,
    CATEGORY3,
    selectItemsArray
} from '../actions'
import { setCategoryAndItems } from '../actions/statusActions'
import { getPlayers } from '../actions/axiosActions'

class Selectcategories extends PureComponent {
    render() {
        const {
            status,
            data,
            updateCategoryAndSelectedItems 
        } = this.props
        const categoryLI = SELECTORS.map((category,i)=><li key={`category_LI_${i}`} className="nav-item">
                    <a  onClick={()=>{updateCategoryAndSelectedItems(category, selectItemsArray(category,data.heroes,data.players,data.teams).items)}} 
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
        updateCategoryAndSelectedItems: (type, items) => {
            dispatch(setCategoryAndItems(type,items))
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToPRops)(Selectcategories)