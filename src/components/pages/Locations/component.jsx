import React, { useEffect } from 'react'
import PageHeader from '../../blocks/PageHeader'
import LocationItem from '../../blocks/LocationItem'
import { configItem } from './config'
import Pagination from '../../blocks/Pagination'

import './styles.css'

const Locations = ({
	getFetchLocation,
	locations,
}) => {
  // console.log("locations", locations)
	useEffect(() => {
		getFetchLocation()
	}, [getFetchLocation])
	return (
		<div className="headerLocations">
			<PageHeader 
				titleName="Locations"
			/>
			<div className="locationsInformation">
				<p>Name</p>
				<p>Type</p>
				<p>Dimension</p>
			</div>
			<LocationItem config={configItem} />
			<Pagination />
		</div>
	)
}

export default Locations