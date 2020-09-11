import { connect } from 'react-redux'
import Locations from './component'
import { fetchLocation } from '../../../actions/actionLocation'

const mapStateToProps = state => ({
	locations: state.locationReducer.locations,
})

const mapDispatchToProps = dispatch => ({
	getFetchLocation: (payload) => dispatch(fetchLocation(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Locations)