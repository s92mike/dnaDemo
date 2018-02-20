import React, { Component } from 'react'

class Listpagination extends Component {
    render() {
        return (
            <nav aria-label="Page navigation justify-content-center" className="text-xs-center">
                <ul className="pagination">
                    <li className={`page-item disable`}>
                        <a className="page-link" 
                        href="javascript:void(0)" 
                        aria-label="Previous">
                            PREV
                        </a>
                    </li>
                    <li className={`page-item disable`}>
                        <a className="page-link" 
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

export default (Listpagination)