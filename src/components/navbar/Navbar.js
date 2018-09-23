import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component{

	render(){
		return (
			<div className="navbar">
				<div className="navbar-brand">
					<NavLink className="navbar-brand" to="/">Web App</NavLink>
				</div>
				<div className="navbar-link">
					<NavLink className="navbar-link" to="/browse">Browse</NavLink>
				</div>
			</div>
		)
	}
}

export default Navbar