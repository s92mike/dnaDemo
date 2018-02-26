import React, { Component } from 'react'

import Itemsearch from './itemsearch'
import Selectcategories from './selectcategories'
import ContainerDetails from './containerdetails'

const Maincontainer = () => {
	return (
            <div className="col-8 p-2 border">
                <Selectcategories />
                <Itemsearch />
                <ContainerDetails />
            </div>
        )
}

export default Maincontainer