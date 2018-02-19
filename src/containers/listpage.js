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
      return (
          <nav aria-label="Page navigation justify-content-center" className="text-xs-center">
            <ul className="pagination">
              <li className={`page-item${inActiveFirst}`}>
                <a onClick={this.prevPageButton.bind(this)} className="page-link" href="javascript:void(0)" aria-label="Previous">
                  PREV
                </a>
              </li>
              <li className={`page-item${inActiveLast}`}>
                <a onClick={this.nextPageButton.bind(this)} className="page-link" href="javascript:void(0)" aria-label="Next">
                  NEXT
                </a>
              </li>
            </ul>
          </nav>  
        )
    }
} 