import { connect } from 'react-redux'

import Sidebar from '../commons/sidebar'

const mapStoreToProps = ({statusR: { category }}) => {
    return {
        category
    }
}
export default connect(mapStoreToProps)(Sidebar)