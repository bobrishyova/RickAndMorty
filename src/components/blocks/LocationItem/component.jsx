import React from 'react'

import './styles.css'

const LocationItem = ({
	config = [],
}) => {
	return (
		<div className="divWithLocationInformation">
			{config.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</div>
	)
}

export default LocationItem