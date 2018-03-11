import React, { Component } from 'react'

class Alert404 extends Component {
  componentDidMount() {
    document.title = 'Page not found!'
  }
  render() {
    return (
      <div style={{ margin: '21px auto', width: 300, padding: '21px' }}>
        <div className='alert alert-dismissible alert-danger'>
          <strong>Oh snap!</strong> Page not found
        </div>
      </div>
    )
  }
}

export default Alert404
