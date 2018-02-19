import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as heroActions from '../actions/heroesActions'

@connect((store) => {
    return {
        heroes: store.heroR.heroes,
        status: store.statusR,
        selectedItem: store.heroR.hero
    }
}, (dispatch)=>{
    return {
        actions: bindActionCreators(heroActions, dispatch)
    }
})
export default class Wantedlist extends Component {
    selectItem(hero){
      this.props.actions.selectHeroes(hero)
    }
    render() {
        const { heroes, status, selectedItem } = this.props
        const listItems = heroes.slice(status.pageListStatus, status.maxListStatus).map( hero => <li onClick={(e)=>this.selectItem(hero)} style={{cursor: 'pointer'}} className={`list-group-item${hero.id==selectedItem.id?' active':''}`} key={hero.id} ><img src={`https:\/\/api.opendota.com${hero.icon}`} /> {hero.localized_name}</li>)
        return (
            <ul className="list-group" style={{padding: 6}}>
                {listItems}
            </ul>
        )
    }
}