import React, {Component} from 'react'
import { connect } from 'react-redux'

import { OPENAPILINK } from '../actions'
import { selectHeroes } from '../actions/heroesActions'
import { updateSearchItems, searchItemsTerms } from '../actions/statusActions'

class Pagelist extends Component {    
    render() {
        const { heroes, status, selectedItem, setItemProps } = this.props
        const listItems = status.searchItems.slice(status.pageListStatus, status.maxListStatus)
            .map( item => <li onClick={()=>{setItemProps(item)}} 
                    style={{cursor: 'pointer'}} 
                    className={`list-group-item${item.id==selectedItem.id?' active':''}`} 
                    key={item.id} >
                        <img src={`${OPENAPILINK+item.icon}`} /> {item.localized_name}
                </li>)
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
        status: store.statusR,
        selectedItem: store.heroR.hero
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setItemProps: (subject) => {
            dispatch(selectHeroes(subject))
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Pagelist)