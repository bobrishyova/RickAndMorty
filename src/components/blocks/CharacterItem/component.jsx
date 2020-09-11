import React from 'react'

import './styles.css'

const CharacterItem = ({
	config = [],
}) => {
	return (
		<div className="divWithCharacterInformation">
			{config.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</div>
	)
}

export default CharacterItem