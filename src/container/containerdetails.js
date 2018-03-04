import { connect } from 'react-redux'
import ContainerMainDetails from '../commons/containermaindetails'

const mapStoreToProps = ({statusR: {item}}) => {
    return {
        selected: item
    }
}

export default connect(mapStoreToProps)(ContainerMainDetails)