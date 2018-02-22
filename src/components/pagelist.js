import React, {Component} from 'react'
import { connect } from 'react-redux'

import { 
    OPENAPILINK,
    DOTAICON,
    CATEGORY1,
    CATEGORY2,
    selectItemsArray,
    preDefinedMessage
} from '../actions'
import { setStatusItem } from '../actions/statusActions'
import { setStatusItemByAccount } from '../actions/axiosActions'

class Pagelist extends Component {    
    setImgToDefault(event) {
        event.target.src=DOTAICON
    }
    render() {
        const { 
            data, 
            status, 
            error,
            setItemProps
        } = this.props
        const displayArray = selectItemsArray(
            status.category, 
            status.searchItems, 
            status.searchItems, 
            status.searchItems
        )
        console.log(displayArray)
        if(!displayArray.items.length){
            const errorMessage = preDefinedMessage(status.category)
            return (
                <div className="alert alert-danger">
                    <strong>{errorMessage.first}</strong> {errorMessage.second}
                </div>)

        }
        const listItems = displayArray.items.slice(status.pageRangeFrom, status.pageRangeTo)
            .map( item => <li onClick={()=>{setItemProps(item, status.category)}} 
                style={{cursor: 'pointer'}} 
                className={`list-group-item${status.category!=CATEGORY1?' dark':''}${item.display_id==status.item.display_id?' active':''}`} 
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
const mapStoreToProps = (store) => {
    return {
        data: store.axiosR,
        error: store.axiosR.error,
        status: store.statusR
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setItemProps: (item, category) => {
            if(category==CATEGORY2)
                dispatch(setStatusItemByAccount(item))
            else
                dispatch(setStatusItem(item))
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Pagelist)