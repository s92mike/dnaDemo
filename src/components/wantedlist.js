import React, {Component} from 'react'
import { connect } from 'react-redux'
@connect((store) => {
    return {
        heroes: store.heroR.heroes,
        status: store.statusR
    }
})
export default class Wantedlist extends Component {
    render() {
        const { heroes, status } = this.props
        const listItems = heroes.slice(status.pageListStatus, status.maxListStatus).map( hero => <li className="list-group-item" key={hero.id} >{hero.localized_name}</li>)
        return (
            <ul className="list-group" style={{padding: 6}}>
                {listItems}
            </ul>
        )
    }
}