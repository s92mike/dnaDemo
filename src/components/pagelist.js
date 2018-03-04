import React, {Component} from 'react'

import { DOTA_ICON } from '../redux/actions'

class Pagelist extends Component {    
    setImgToDefault(event) {
        event.target.src=DOTA_ICON
    }
    render() {
        return (
            <ul className="list-group" style={{padding: 6}}>
                <li onClick={()=>{}} 
                    style={{cursor: 'pointer'}} 
                    className={`list-group-item`}>
                    <p className="navbar-text">ABC</p>
                </li>
                <li onClick={()=>{}} 
                    style={{cursor: 'pointer'}} 
                    className={`list-group-item`}>
                        <p className="navbar-text">ABCD</p>
                </li>
                <li onClick={()=>{}} 
                    style={{cursor: 'pointer'}} 
                    className={`list-group-item`}>
                        <p className="navbar-text">ABCE</p>
                </li>
            </ul>
        )
    }
}

export default Pagelist