import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component{
	// constructor(props){
	// 	super(props)
	// }

	render(){
		return (
			<nav className="flexContainer Background">
				<ul className="nav flexItem flexStart">
					<NavLink to="/">Web App</NavLink>
				</ul>
				<ul className="nav flexContainer flexEnd">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/browse">Browse</NavLink>
					<NavLink to="/compare" className={this.props.compare} onClick={()=>{console.log(this.props.compareOnClick)}}>Compare</NavLink>
					
				</ul>
			</nav>
		)
	}
}

export default Navbar