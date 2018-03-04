import React from 'react'
import { DOTA_ICON } from '../redux/actions'
import { NavLink } from 'react-router-dom'
const Headermenu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">EPE Auto Supply</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  activeClassName="active" to="/inventory">Item List</NavLink>
                </li>                
                <li className="nav-item">
                    <NavLink className="nav-link"  activeClassName="active" to="/vendor">Vendor Center</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  activeClassName="active" to="/customer">Customer Center</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  activeClassName="active" to="/reports">Reports</NavLink>
                </li>
            </ul>
          </div>
        </nav>
    )
}
export default Headermenu