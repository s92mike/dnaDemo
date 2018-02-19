import React, { Component } from 'react'
import { connect } from 'react-redux'

import { OPENAPILINK } from '../actions'
import { selectHeroes } from '../actions/heroesActions'

import Itemsearch from './itemsearch'

class Maincontainer extends Component {
    componentWillMount() {
        this.props.selectHeroesProps(this.props.heroes.heroes[0])
    }
    render() {
        const { hero } = this.props.heroes
        return (
            <div className="col-8 p-2 border">
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
                <Itemsearch />
                <div className="p-2 well">
                    <img src={`${OPENAPILINK+hero.img}`} /><br/>
                    <h5>{hero.localized_name}</h5>
                    <h6>Statistics: </h6>
                    <div style={{height: 'auto', width: '100%', minHeight: 150}}>
                        {`Primary Attribute: ${String(hero.primary_attr).toUpperCase()}`}<br/>
                        {`Attack Type: ${hero.attack_type}`}<br/>
                        {`Roles: ${Array(hero.roles).join(", ")}`}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        heroes: store.heroR
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectHeroesProps: (hero) => {
            dispatch(selectHeroes(hero))
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Maincontainer)