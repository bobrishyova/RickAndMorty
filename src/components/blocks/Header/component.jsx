import React, { Fragment } from 'react'
import logo from '../../../images/logo.png'
import Characters from '../../pages/Characters'
import { Link } from 'react-router-dom'

import './styles.css'

const Header = () => {
	const linksHeader = {
		textDecoration: "none",
		color: "#ffffff",
	}
	return (
		<Fragment>
			<div className="header">
				<img className="logoRickAndMorty" src={logo} alt="Rick And Morty"/>
				<ul className="navRickAndMorty">
					<Link style={linksHeader} to="/characters">
						<li>Characters</li>
					</Link>
					<Link style={linksHeader} to="/locations">
						<li>Locations</li>
					</Link>
					<Link style={linksHeader} to="/episodes">
						<li>Episodes</li>
					</Link>
				</ul>
			</div>
		</Fragment>
	)
}

export default Header