import { connect } from 'react-redux'

import Sidebar from '../components/sidebar'

const mapStoreToProps = ({statusR: { category }}) => {
    return {
        category
    }
}
export default connect(mapStoreToProps)(Sidebar)