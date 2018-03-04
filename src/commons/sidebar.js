import React from 'react'

import Pagelist from '../components/pagelist'

const Sidebar = () => {
    return (
        <div className="col-4 p-2 border">
            <h4>Master List</h4>
            <Pagelist />
        </div>
    )
}

export default Sidebar