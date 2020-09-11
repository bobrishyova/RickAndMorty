import React, { useState, useCallback } from 'react'

import './styles.css'

const Pagination = ({
	currentPage = 3,
	totalPage = 10,
}) => {
	const createPagination = useCallback(() => {
		const newArrayPages = []
		if (totalPage <= 4) {
			for (let i = 1; i <= totalPage; i++) {
				newArrayPages.push(i)
			}
			return newArrayPages
		}
		if (currentPage <= 3) {
			const forCondition = currentPage === 1 ? 2 : 1
			for (let i = 1; i <= currentPage + forCondition; i++) {
				newArrayPages.push(i)
			}
			newArrayPages.push('...', 10)
			return newArrayPages
		}
		if (currentPage >= totalPage - 2) {
			newArrayPages.push(1, '...')
			for (let i = currentPage - 1; i <= totalPage; i++) {
				newArrayPages.push(i)
			}
			return newArrayPages
		}
		if (3 < currentPage < totalPage - 2) {
			newArrayPages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPage)
			return newArrayPages
		}
		return []
	}
)

	return (
		<div className="divWithPagination">
			<div className="pageSwitch">&#171;</div>
			{createPagination().map((pagination) => (
				<div 
					key={pagination.toString()} 
					className={`divWithPage ${currentPage === pagination ? "selected" : ''} 
					${pagination === '...' ? "threeDotsStyle" : ''} `}
				>
					{pagination}
				</div>
			))}
			<div className="pageSwitch">&#187;</div>
		</div>
	)
}

export default Pagination