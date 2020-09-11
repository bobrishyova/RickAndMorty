import React from 'react'

import './styles.css'

const PageHeader = ({
	titleName,
}) => {
	return (
		<div className="pageHeaderWithSearch">
			<p>{titleName}</p>
			<input 
				type="text" 
				placeholder="Search" 
				className="pageHeaderSearch" 
			/>
		</div>
	)
}

export default PageHeader