import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar.js'
import List from '../../List/List'
import { connect } from 'react-redux'
import { comparePlan } from '../../../actions'
import './BrowsePage.css'

const mapDispatchToProps = dispatch => {
	return {
		comparePlan: plan => dispatch(comparePlan(plan))
	}
}

class Browse extends Component {
	constructor(props){
		super(props)
		this.state = {
			compare: true,
			checked: [],
			insuranceProviderValue: 'default',
			serviceAreaValue: 'default',
			sortPremium: 'lowestToHighest'
		}

		this.getCheckboxState = this.getCheckboxState.bind(this)
		this.handleClick=this.handleClick.bind(this)
		this.handleSelectChange=this.handleSelectChange.bind(this)
	}

	handleClick(){
		this.props.comparePlan(this.state.checked)
	}

	handleSelectChange(event){
		this.setState({[event.target.name]: event.target.value})
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
		let compare = 'nav' + (this.state.checked.length<2 ? ' hidden' : '' )
		
		return (
			<div className="browseContainer">
				<Navbar compare={compare} compareOnClick={this.handleClick}/>
				<div className="listContainer">
					<main className="listWrapper">
						<List 
							getCheckboxState={this.getCheckboxState} 
							insuranceProvidervalue={this.state.insuranceProviderValue} 
							serviceAreaValue={this.state.serviceAreaValue}
							sort={this.state.sortPremium}
						/>
					</main>

					<aside className="sidebarFilter">

						<h2 className="filter">Filter</h2>

						<p>Provider Name</p>

						<select 
							className="selectFilter"
							name="insuranceProviderValue" 
							value={this.state.insuranceProviderValue} 
							onChange={this.handleSelectChange}
						>
							<option value="default">Insurance Name</option>
							<option value="HDFC_ERGO">HDFC Ergo</option>
							<option value="RELIGARE_HEALTH">Religare Health</option>
							<option value="RELIANCE_GENERAL">Reliance General</option>
						</select>

						<p>Service Area ID</p>

						<select 
							className="selectFilter"
							name="serviceAreaValue" 
							value={this.state.serviceAreaValue} 
							onChange={this.handleSelectChange}
						>
							<option value="default">Service Area</option>
							<option value="Asia">Asia</option>
							<option value="NonUSCanada">Non US Canada</option>
							<option value="World">World</option>
							<option value="NonUS">Non US</option>
							<option value="BAWorldwideNoUSCan">BA Worldwide No US Canada</option>
						</select>

						<h2 className="sorter">Sorter</h2>
						<p>Premium</p>

						<select
							className="selectFilter" 
							name="sortPremium" 
							value={this.state.sortPremium} 
							onChange={this.handleSelectChange}
						>
							<option value="lowestToHighest">Lowest to Highest</option>
							<option value="highestToLowest">Highest to Lowest</option>
						</select>

					</aside>
				</div>
			</div>
		)
	}
}

export default connect (null, mapDispatchToProps)(Browse)