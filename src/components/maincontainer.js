import React, { Component } from 'react'

export default class Maincontainer extends Component {
    render() {
        return (
            <div className="col-9 p-2 border">
                <div className='search-bar'>
                    <input className="rounded" />
                </div>
                <div className="p-2 well">
                    <h5>Title</h5>
                    <p>Description</p>
                    <h6>Statistics</h6>
                    <div style={{height: 'auto', width: '100%', minHeight: 150}}>
                        
                    </div>
                </div>
            </div>
        )
    }
}