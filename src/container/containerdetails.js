import { connect } from 'react-redux'
import ContainerMainDetails from '../components/containermaindetails'

const mapStoreToProps = ({statusR: {item}}) => {
    return {
        selected: item
    }
}

export default connect(mapStoreToProps)(ContainerMainDetails)