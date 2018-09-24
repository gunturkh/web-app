import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component{
	render(){
		return (
			<nav className="flexContainer Background front">
				<ul className="nav flexItem">
					<NavLink className="navBrand" to="/"><b>Web App</b></NavLink>
				</ul>
				<ul className="nav flexContainer flexEnd">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/browse">Browse</NavLink>
					<NavLink to="/compare" className={this.props.compare} onClick={this.props.compareOnClick}>Compare</NavLink>
					
				</ul>
			</nav>
		)
	}
}

export default Navbar