import React, {Component} from 'react'

class Pagelist extends Component {    
    render() {
        return (
            <ul className="list-group" style={{padding: 6}}>
                <li className={`list-group-item active`}>
                        Something for nothing
                </li>
            </ul>
        )
    }
}

export default (Pagelist)