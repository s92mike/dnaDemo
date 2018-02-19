import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
    PAGEMAX, 
    ACTIVEFIRST,
    ACTIVELAST,
    checkDisabled 
} from '../actions'
import { nextPageList, prevPageList } from '../actions/statusActions'

class Listpagination extends Component {
    render() {
    const { status, heroes, nextPageButtonProps, prevPageButtonProps } = this.props
    const inActiveFirst = checkDisabled(ACTIVEFIRST, status.pageListStatus)
    const inActiveLast = checkDisabled(ACTIVELAST, status.maxListStatus, status.searchItems.length)
    return (
        <nav aria-label="Page navigation justify-content-center" className="text-xs-center">
            <ul className="pagination">
                <li className={`page-item${inActiveFirst}`}>
                    <a onClick={()=>{prevPageButtonProps(status.pageListStatus, status.maxListStatus)}} 
                    className="page-link" 
                    href="javascript:void(0)" 
                    aria-label="Previous">
                        PREV
                    </a>
                </li>
                <li className={`page-item${inActiveLast}`}>
                    <a onClick={()=>{nextPageButtonProps(status.pageListStatus, status.maxListStatus)}} 
                    className="page-link" 
                    href="javascript:void(0)" 
                    aria-label="Next">
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
        status: store.statusR,
        heroes: store.heroR.heroes
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