import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    ACTIVE_FIRST,
    ACTIVE_LAST,
    checkDisabled
} from '../actions'
import { NEXT_PAGEList, PREV_PAGEList } from '../actions/statusActions'

class Listpagination extends Component {
    render() {
        const { 
            status, 
            NEXT_PAGEButtonProps, 
            PREV_PAGEButtonProps 
        } = this.props
        const inACTIVE_FIRST = checkDisabled(ACTIVE_FIRST, status.pageRangeFrom)
        const inACTIVE_LAST = checkDisabled(ACTIVE_LAST, status.pageRangeTo, status.searchItems.length)
        return (
            <nav aria-label="Page navigation justify-content-center" className="text-xs-center">
                <ul className="pagination">
                    <li className={`page-item${inACTIVE_FIRST}`}>
                        <a onClick={()=>{PREV_PAGEButtonProps(status.pageRangeFrom, status.pageRangeTo)}} 
                        className="page-link" 
                        href="javascript:void(0)">
                            PREV
                        </a>
                    </li>
                    <li className={`page-item${inACTIVE_LAST}`}>
                        <a onClick={()=>{NEXT_PAGEButtonProps(status.pageRangeFrom, status.pageRangeTo)}} 
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
const mapStoreToProps = ({statusR}) => {
    return {
        status: statusR
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        NEXT_PAGEButtonProps: (firstPage, maxPage) => {
            dispatch(NEXT_PAGEList(firstPage, maxPage))
        },
        PREV_PAGEButtonProps: (firstPage, maxPage) => {
            dispatch(PREV_PAGEList(firstPage, maxPage))
        }        
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Listpagination)