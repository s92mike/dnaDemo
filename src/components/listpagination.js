import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    ACTIVEFIRST,
    ACTIVELAST,
    checkDisabled
} from '../actions'
import { nextPageList, prevPageList } from '../actions/statusActions'

class Listpagination extends Component {
    render() {
        const { 
            status, 
            nextPageButtonProps, 
            prevPageButtonProps 
        } = this.props
        const inActiveFirst = checkDisabled(ACTIVEFIRST, status.pageRangeFrom)
        const inActiveLast = checkDisabled(ACTIVELAST, status.pageRangeTo, status.searchItems.length)
        return (
            <nav aria-label="Page navigation justify-content-center" className="text-xs-center">
                <ul className="pagination">
                    <li className={`page-item${inActiveFirst}`}>
                        <a onClick={()=>{prevPageButtonProps(status.pageRangeFrom, status.pageRangeTo)}} 
                        className="page-link" 
                        href="javascript:void(0)">
                            PREV
                        </a>
                    </li>
                    <li className={`page-item${inActiveLast}`}>
                        <a onClick={()=>{nextPageButtonProps(status.pageRangeFrom, status.pageRangeTo)}} 
                        className="page-link" 
                        href="javascript:void(0)">
                            NEXT
                        </a>
                    </li>
                </ul>
            </nav>  
        )
    }
}
const mapStoreToProps = (store) => {
    return {
        status: store.statusR
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
export default connect(mapStoreToProps, mapDispatchToProps)(Listpagination)