import { connect } from 'react-redux'
import Pagination from '../components/pagination'

import { nextPageList, prevPageList } from '../actions/statusActions'

const mapStoreToProps = ({statusR}) => {
    return {
        status: statusR
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        nextPageButtonProps: (firstPage, maxPage) => {
            dispatch(nextPageList(firstPage, maxPage))
        },
        prevPageButtonProps: (firstPage, maxPage) => {
            dispatch(prevPageList(firstPage, maxPage))
        }        
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Pagination)