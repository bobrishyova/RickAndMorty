import React, { useEffect } from 'react'
import CharacterItem from '../../blocks/CharacterItem'
import PageHeader from '../../blocks/PageHeader'
import { configItem } from './config'
import Pagination from '../../blocks/Pagination'

import './styles.css'

const Characters = ({
	getFetchCharacter,
	characters,
}) => {
  // console.log("characters", characters)
	useEffect(() => {
		getFetchCharacter()
	}, [getFetchCharacter])

	return (
		<div className="headerCharacters">
			<PageHeader
				titleName='Characters'
			/>
			<div className="characterInformation">
				<p>Name</p>
				<p>Status</p>
				<p>Species</p>
				<p>Gender</p>
			</div>
			<CharacterItem config={configItem} />
			<Pagination />
		</div>
	)
}

export default Characters