import React, { Component } from 'react'

const Pagination = (props) => {
    return (
        <nav aria-label="Page navigation justify-content-center" className="text-xs-center">
            <ul className="pagination">
                <li className={`page-item`}>
                    <a onClick={(e)=>{e.preventDefault()}} 
                    className="page-link" 
                    href="javascript:void(0)">
                        PREV
                    </a>
                </li>
                <li className={`page-item`}>
                    <a onClick={(e)=>{e.preventDefault()}} 
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