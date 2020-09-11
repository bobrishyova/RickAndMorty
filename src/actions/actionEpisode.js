import { FETCH_EPISODE } from './actionTypes'

const url = 'https://rickandmortyapi.com/api/episode/'

export const fetchEpisode = () => async dispatch => {
	const response = await fetch(url)
	const result = await response.json()
	const sortedEpisodes = result.results.map((episode) => ({
		name: episode.name,
		air_date: episode.air_date,
		episode: episode.episode,
	}))

	dispatch({
		type: FETCH_EPISODE,
		episodesInfo: result.info,
		episodes: sortedEpisodes, 
	})
}