import React, { Component } from 'react'
import Navbar from '../navbar/Navbar.js'
import List from '../list/List.js'
class Browse extends Component {
	render(){
		return (
			<div>
				<Navbar/>
				<List/>
			</div>
		)
	}
}

export default Browse