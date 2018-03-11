import React from 'react'

import Sidebar from './sidebar'
import Container from './container'

const Maincontainer = () => {
  return (
    <div className='container v1'>
      <div className='row'>
        <Sidebar />
        <Container />
      </div>
    </div>
  )
}
export default Maincontainer
