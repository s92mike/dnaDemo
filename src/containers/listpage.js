import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { PAGEMAX } from '../actions'
import * as actionFunctions from '../actions/statusActions'

@connect((store)=>{
  return{
     status: store.statusR,
     heroes: store.heroR.heroes
  }
}, (dispatch)=>{
  return {
    action: bindActionCreators(actionFunctions, dispatch)
  }
})
export default class Listpage extends Component {
    nextPageButton(){ 
      this.props.action.nextPageList(this.props.status.pageListStatus, this.props.status.maxListStatus)
    }  
    prevPageButton(){
      this.props.action.prevPageList(this.props.status.pageListStatus, this.props.status.maxListStatus)
    }
    render() {
      const { status, heroes } = this.props
      const inActiveFirst = !status.pageListStatus?" disabled":""
      const inActiveLast = status.maxListStatus>=heroes.length?" disabled":""
      const listNum = heroes.slice((status.maxListStatus-PAGEMAX),status.maxListStatus-3).map(item=><li className="page-item" key={item.id}><a className="page-link" href="javascript:void(0)">{(item.id)+1}</a></li>)
      return (
          <nav aria-label="Page navigation" className="text-xs-center">
            <ul className="pagination">
              <li className={`page-item${inActiveFirst}`}>
                <a onClick={this.prevPageButton.bind(this)} className="page-link" href="javascript:void(0)" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              {listNum}
              <li className={`page-item${inActiveLast}`}>
                <a onClick={this.nextPageButton.bind(this)} className="page-link" href="javascript:void(0)" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>  
        )
    }
}