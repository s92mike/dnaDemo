import React from 'react'
import { 
    SELECTORS,
    selectItemsArray
} from '../actions'

const CategoriesLi = ({status, data, updateCategoryAndSelectedItems}) => {  
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

export default CategoriesLi