import { FETCH_EPISODE } from '../actions/actionTypes'

const initialState = {
	episodes: [],
	episodesInfo: {},
}

const episodeReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_EPISODE:
			return {
				...state,
				episodes: action.episodes,
				episodesInfo: action.episodesInfo,
			}
		default:
			return state
	}
}

export default episodeReducer