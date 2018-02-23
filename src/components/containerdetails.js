import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkObjectEmpty, DOTAICON } from '../actions'

class ContainerDetails extends Component {
    setImgToDefault(event) {
        event.target.src=DOTAICON
    }
    render() {
        const { selected } = this.props  
        if(checkObjectEmpty(selected)){
            return (
                <div className="alert alert-info" role="alert">
                    <h3>Nothing selected YET</h3>
                </div>
            )
        }
        return (
            <div className="p-2 row">
                <div className="card mx-auto" style={{width: '300px'}}>
                    <img className="card-img-top" style={{backgroundColor: '#212529'}} onError={this.setImgToDefault} src={selected.display_img} alt="item image" />
                    <div className="card-block">
                        <h4 className="card-title">{selected.display_name}</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        {selected.display_line.map((perline,i)=><li className="list-group-item" key={`line_${i}`}>{perline}</li>)}
                    </ul>                 
                </div>            
            </div>          
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        selected: store.statusR.item
    }
}

export default connect(mapStoreToProps)(ContainerDetails)