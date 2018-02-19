import React, { Component } from 'react'
import { connect } from 'react-redux'

import { OPENAPILINK } from '../actions'
import { selectHeroes } from '../actions/heroesActions'

import Itemsearch from './itemsearch'
import Searchcategories from './searchcategories'

class Maincontainer extends Component {
    componentWillMount() {
        this.props.selectHeroesProps(this.props.heroes.heroes[0])
    }
    render() {
        const { hero } = this.props.heroes
        return (
            <div className="col-8 p-2 border">
                <Searchcategories />
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