import React, { Component } from 'react'

class Itemsearch extends Component {
    render() {
        const {status, searchItemsTermsProps, heroes} = this.props
        return (
            <div className='search-bar'>
                <input className="rounded" />
            </div>
        )
    }
    
}

export default (Itemsearch)