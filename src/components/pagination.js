import React, { Component } from 'react'
import { 
    ACTIVE_FIRST,
    ACTIVE_LAST,
    checkDisabled
} from '../redux/actions'

const Pagination = (props) => {
    const { 
        status, 
        nextPageButtonProps, 
        prevPageButtonProps 
    } = props
    const inactiveFirst = checkDisabled(ACTIVE_FIRST, status.pageRangeFrom)
    const inactiveLast = checkDisabled(ACTIVE_LAST, status.pageRangeTo, status.searchItems.length)
    return (
        <nav aria-label="Page navigation justify-content-center" className="text-xs-center">
            <ul className="pagination">
                <li className={`page-item${inactiveFirst}`}>
                    <a onClick={()=>{prevPageButtonProps(status.pageRangeFrom, status.pageRangeTo)}} 
                    className="page-link" 
                    href="javascript:void(0)">
                        PREV
                    </a>
                </li>
                <li className={`page-item${inactiveLast}`}>
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
export default Pagination