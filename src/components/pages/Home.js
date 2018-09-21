import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Home extends Component {
	render(){
		return (
			<div>
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