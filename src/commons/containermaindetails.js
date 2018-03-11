import React, { Component } from 'react'
import { DOTA_ICON } from '../redux/actions'

export default class ContainerMainDetails extends Component {
  setImgToDefault(event) {
    event.target.src = DOTA_ICON
  }
  render() {
    return (
      <div className='p-2 row'>
        <div className='card mx-auto' style={{ width: '300px' }}>
          <div className='card-block'>
            <h4 className='card-title'>Sample</h4>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>list 1</li>
            <li className='list-group-item'>list 2</li>
            <li className='list-group-item'>list 3</li>
          </ul>
        </div>
      </div>
    )
  }
}
