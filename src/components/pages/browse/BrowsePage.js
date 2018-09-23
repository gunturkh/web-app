import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar.js'
import List from '../../list/List.js'
import ButtonCompare from '../../buttonCompare/ButtonCompare.js'
class Browse extends Component {
	render(){
		return (
			<div>
				<Navbar/>
				<ButtonCompare/>
				<List/>
			</div>
		)
	}
}

export default Browse