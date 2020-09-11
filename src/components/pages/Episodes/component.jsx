import React, { useEffect } from 'react'
import PageHeader from '../../blocks/PageHeader'
import EpisodeItem from '../../blocks/EpisodeItem'
import { configItem } from './config'
import Pagination from '../../blocks/Pagination'

import './styles.css'

const Episodes = ({
	getFetchEpisode,
	episodes,
}) => {
	useEffect(() => {
		getFetchEpisode()
	}, [getFetchEpisode])

	return (
		<div className="headerEpisodes">
			<PageHeader 
				titleName="Episodes"
			/>
			<div className="episodesInformation">
				<p>Name</p>
				<p>Air Date</p>
				<p>Episode</p>
			</div>
			<EpisodeItem config={configItem} />
			<Pagination />
		</div>
	)
}

export default Episodes