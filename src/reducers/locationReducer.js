import { FETCH_LOCATION } from '../actions/actionTypes'

const initialState = {
	locations: [],
	locationsInfo: {},
}

const locationReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_LOCATION:
			return {
				...state,
				locations: action.locations,
				locationsInfo: action.locationsInfo,
			}
		default:
			return state
	}
}

export default locationReducer

