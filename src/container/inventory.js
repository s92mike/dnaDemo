import React, { Component } from 'react'
import Inventory from '../components/inventory'

class InventoryContainer extends Component {
  componentDidMount() {
    document.title = 'Items'
  }
  render() {
    return (
      <Inventory />
    )
  }
}

export default InventoryContainer
