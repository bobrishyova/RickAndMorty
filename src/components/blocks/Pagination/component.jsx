import React, { useState, useCallback, useEffect } from 'react'
import qs from 'query-string'
import { useLocation, useHistory } from 'react-router-dom'

import './styles.css'

const Pagination = ({
	totalPage,
}) => {
	const { search, pathname } = useLocation()
	const { push } = useHistory()
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		const page = +qs.parse(search).page
		setCurrentPage(page || 1)
	}, [search, setCurrentPage])

	const handleSetCurrentPage = useCallback((page) => () => {
		push({
			pathname,
			search: qs.stringify({
				page,
			})
		})
	}, [pathname])

	const createPagination = useCallback(() => {
		const newArrayPages = []
		if (!totalPage) {
			return []
		}
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
			newArrayPages.push('...', totalPage)
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
			<div
				className="pageSwitch" 
				onClick={handleSetCurrentPage(currentPage >= 2 ? currentPage - 1 : 1)}
			>
				&#171;
			</div>
			{createPagination().map((pagination) => (
				<div 
					// key={pagination.toString()} 
					onClick={handleSetCurrentPage(pagination)}
					className={`divWithPage ${currentPage === pagination ? "selected" : ''} 
					${pagination === '...' ? "threeDotsStyle" : ''} `}
				>
					{pagination}
				</div>
			))}
			<div 
				className="pageSwitch"
				onClick={handleSetCurrentPage(currentPage <= totalPage - 1 ? currentPage + 1 : totalPage)}
			>&#187;</div>
		</div>
	)
}

export default Pagination