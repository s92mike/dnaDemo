import { connect } from 'react-redux'

import { setCategoryAndItems } from '../actions/statusActions'
import CategoriesLi from '../components/categoriesli'

const mapStoreToProps = ({axiosR, statusR}) => {
    return {
        status: statusR,
        data: axiosR
    }
}

const mapDispatchToPRops = (dispatch) => {
    return {
        updateCategoryAndSelectedItems: (type, items, fetching, source) => {
            if(fetching) source.cancel('fetching') 
            dispatch(setCategoryAndItems(type,items))
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToPRops)(CategoriesLi)