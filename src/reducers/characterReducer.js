import { FETCH_CHARACTER } from '../actions/actionTypes'

const initialState = {
	characters: [],
	charactersInfo: {},
}

const characterReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_CHARACTER:
			return {
				...state,
				characters: action.characters,
				charactersInfo: action.charactersInfo,
			}
		default:
			return state
	}
}

export default characterReducer