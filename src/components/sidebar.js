import React from 'react'

import Pagelist from './pagelist'
import Listpagination from '../container/listpagination'

const Sidebar = ({category}) => {
    return (
        <div className="col-4 p-2 border">
            <h4>{category} List</h4>
            <Listpagination />
            <Pagelist />
        </div>
    )
}

export default Sidebar