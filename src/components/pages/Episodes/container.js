import { connect } from 'react-redux'
import Episodes from './component'
import { fetchEpisode } from '../../../actions/actionEpisode'

const mapStateToProps = state => ({
	episodes: state.episodeReducer.episodes,
})

const mapDispatchToProps = dispatch => ({
	getFetchEpisode: (payload) => dispatch(fetchEpisode(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Episodes)