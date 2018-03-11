import React from 'react'

export default ({ message }) => {
  return (
    <div className='card border-secondary mb-3 centered'
      style={{ maxWidth: '20rem', margin: '0px auto' }}>
      <div className='card-header'>{message}</div>
    </div>
  )
}
