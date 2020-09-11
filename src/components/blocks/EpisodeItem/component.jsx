import React from 'react'

import './styles.css'

const EpisodeItem = ({
	config = [],
}) => {
	return (
		<div className="divWithEpisodeInformation">
			{config.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</div>
	)
}

export default EpisodeItem