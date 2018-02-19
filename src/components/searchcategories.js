import React, { Component } from 'react'

export default class Searchcategories extends Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="javascript:void(0)">Heroes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">Items</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">Players</a>
                </li>
            </ul>
        )        
    }
}