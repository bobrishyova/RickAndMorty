import { FETCH_LOCATION } from './actionTypes'
const url = 'https://rickandmortyapi.com/api/location/'

export const fetchLocation = () => async dispatch => {
	const response = await fetch(url)
	const result = await response.json()
	const sortedLocations = result.results.map((location) => ({
		name: location.name,
		type: location.type,
		dimension: location.dimension,
	}))

	dispatch({
		type: FETCH_LOCATION,
		locationsInfo: result.info,
		locations: sortedLocations,
	})
}