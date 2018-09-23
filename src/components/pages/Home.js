import React, { Component } from 'react'
import Navbar from '../navbar/Navbar.js'
import { Link } from 'react-router-dom'

class Home extends Component {
	render(){
		return (
			<div>
				<Navbar/>
				<h1>Home</h1>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/browse">Browse</Link>
				</li>
				<li>
					<Link to="/compare">Compare</Link>
				</li>
				<li>
					<Link to="/detail">Detail</Link>
				</li>
				<hr/>
			</div>
		)
	}
}

export default Home