import React, {Component} from 'react'
import { connect } from 'react-redux'

import { 
    OPENAPILINK,
    selectItemsArray
} from '../actions'
import { selectHeroes } from '../actions/heroesActions'
import { searchItemsTerms } from '../actions/statusActions'
import { getPlayers } from '../actions/playerActions'

class Pagelist extends Component {    
    render() {
        const { 
            heroes, 
            status, 
            selectedItem, 
            setItemProps,
            heroErr,
            players
        } = this.props
        const displayArray = selectItemsArray(status.category, status.searchItems, players)
        const listItems = displayArray.items.slice(status.pageRangeFrom, status.pageRangeTo)
            .map( item => <li onClick={()=>{setItemProps(item)}} 
                    style={{cursor: 'pointer'}} 
                    className={`list-group-item${item.id==selectedItem.id?' active':''}`} 
                    key={item.id} >
                        <img src={`${OPENAPILINK+item.icon}`} /> {item.localized_name}
                </li>)
        if(!listItems.length){
            return (
                <div className="alert alert-danger">
                    <strong>Denied!!!</strong> You Got Nothing!!!
                    {heroErr}
                </div>)

        }
        return (
            <ul className="list-group" style={{padding: 6}}>
                {listItems}
            </ul>
        )
    }
}
const mapStoreToProps = (store) => {
    return {
        heroes: store.heroR.heroes,
        heroErr: store.heroR.error,
        status: store.statusR,
        selectedItem: store.heroR.hero,
        players: store.playerR.players
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setItemProps: (subject) => {
            dispatch(selectHeroes(subject))
        },
        setPlayersProps: () => {
            dispatch(getPlayers())
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Pagelist)