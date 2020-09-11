import { FETCH_CHARACTER } from './actionTypes'
const url = 'https://rickandmortyapi.com/api/character/'

export const fetchCharacter = () => async dispatch => {
	const response = await fetch(url)
	const result = await response.json()
	const sortedCharacters = result.results.map((character) => ({
		name: character.name,
		status: character.status,
		species: character.species,
		gender: character.gender,
	}))

	dispatch({
		type: FETCH_CHARACTER,
		charactersInfo: result.info,
		characters: sortedCharacters,
	})
}