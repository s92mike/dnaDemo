import React, { Component } from 'react'
import Smallmessage from '../components/smallmessage'

class Home extends Component {
  componentDidMount() {
    document.title = 'Home'
  }
  render() {
    return (
      <div className='p-33-custom'>
        <Smallmessage message='Welcome to EPE AUTO Supply!!!' />
      </div>
    )
  }
}
export default Home
