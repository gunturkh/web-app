import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar.js'
import List from '../../list/List.js'

class Browse extends Component {
	constructor(props){
		super(props)
		this.state = {
			compare: true,
			checked: []
		}

		this.getCheckboxState = this.getCheckboxState.bind(this)
	}

	getCheckboxState(data,id,item){

		if(data===true){
			this.setState({
				checked: [
					...this.state.checked, 
					{
						id: id,
						data: data,
						item: item
					}
				]
			})
		}
		else if(data===false){
			let filtered = this.state.checked.filter(item =>{
				return item.id!==id
			})
			
			this.setState({
				checked: filtered
			})
		}
	}
	render(){
		console.log('State: ', this.state.checked)
		
		let compare = 'nav' + (this.state.checked.length<2 ? ' hidden' : '' )
		
		return (
			<div>
				<Navbar compare={compare} compareOnClick={this.state.checked}/>
				<List getCheckboxState={this.getCheckboxState}/>
			</div>
		)
	}
}

export default Browse