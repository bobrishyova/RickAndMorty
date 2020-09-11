import { connect } from 'react-redux'
import Characters from './component'
import { fetchCharacter } from '../../../actions/actionCharacter'

const mapStateToProps = state => ({
	characters: state.characterReducer.characters,
})

const mapDispatchToProps = dispatch => ({
	getFetchCharacter: (payload) => dispatch(fetchCharacter(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)