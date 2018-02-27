import React, {Component} from 'react'
import { connect } from 'react-redux'

import { 
    OPEN_DOTA_API_LINK,
    DOTA_ICON,
    CATEGORY1,
    CATEGORY2,
    selectItemsArray,
    preDefinedMessage
} from '../actions'
import { setStatusItem } from '../actions/statusActions'
import { setStatusItemByAccount } from '../actions/axiosActions'

class Pagelist extends Component {    
    setImgToDefault(event) {
        event.target.src=DOTA_ICON
    }
    render() {
        const { 
            data, 
            status, 
            SET_ITEMProps
        } = this.props
        const selectedDisplay = selectItemsArray(status.category, status.searchItems, status.searchItems, status.searchItems)
        if(!selectedDisplay.items.length){
            const errorMessage = preDefinedMessage(status.category)
            return (
                <div className="alert alert-danger">
                    <strong>{errorMessage.first}</strong> {errorMessage.second}
                </div>)

        }
        const listItems = selectedDisplay.items.slice(status.pageRangeFrom, status.pageRangeTo)
            .map( item => <li onClick={()=>{SET_ITEMProps(item, status.category)}} 
                style={{cursor: 'pointer'}} 
                className={`list-group-item${item.display_id==status.item.display_id?' active':''}`} 
                key={item.display_id} >
                    <img onError={this.setImgToDefault} style={{width: 30, height: 'auto'}} src={`${item.display_icon}`} /><p className="navbar-text">{item.display_name}</p>
            </li>)
        return (
            <ul className="list-group" style={{padding: 6}}>
                {listItems}
            </ul>
        )
    }
}
const mapStoreToProps = ({axiosR, statusR}) => {
    return {
        data: axiosR,
        status: statusR
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SET_ITEMProps: (item, category) => {
            if(category==CATEGORY2)
                dispatch(setStatusItemByAccount(item))
            else
                dispatch(setStatusItem(item))
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Pagelist)