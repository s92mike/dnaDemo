import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { 
    SELECTORS,
    CATEGORY1,
    CATEGORY2,
    CATEGORY3
} from '../actions'
import { setCategoryType } from '../actions/statusActions'

class Searchcategories extends PureComponent {
    render() {
        const {status, updateCategory, terms} = this.props
        const categoryLI = SELECTORS.map((category,i)=><li key={`category_LI_${i}`} className="nav-item">
                    <a  onClick={()=>{updateCategory(category)}} 
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
    }
}

const mapDispatchToPRops = (dispatch) => {
    return {
        updateCategory: (type) => {
            dispatch(setCategoryType(type))
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToPRops)(Searchcategories)