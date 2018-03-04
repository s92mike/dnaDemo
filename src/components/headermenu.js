import React from 'react'
import { DOTA_ICON } from '../redux/actions'
import { NavLink } from 'react-router-dom'
const Headermenu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img style={{width: 60, height: 'auto'}} src={DOTA_ICON} alt="" /></a>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  activeClassName="active" to="/searchlist">Demo App</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Headermenu