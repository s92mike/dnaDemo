import React, { Component } from 'react'
import Maincontainer from '../commons/maincontainer'

class Vendorcenter extends Component {
  componentDidMount() {
    document.title = 'Vendor Center'
  }
  render() {
    return (
      <div className='p-33-custom'>
        <Maincontainer />
      </div>
    )
  }
}
export default Vendorcenter
