import React, { Component } from 'react'
import ProviderLogo from '../providerlogo/ProviderLogo.js'
import  './Card.css'
import { Link } from 'react-router-dom'


class Card extends Component{
	constructor(props){
		super(props)
		this.state = {
			compare: false,
		}
		this.handleInputChange=this.handleInputChange.bind(this)
	}
    
    
	handleInputChange(event) {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		this.props.onChange(this.props.id)
		this.setState({
			[name]: value
		})
	}

	render(){
		let checked = 'card cardContainer ' + (this.state.compare ? 'checked' : '')
		console.log('compare: ', this.state.compare)
		
		return(
			<div className={checked}>
				<div className="compare">
					<input
						key={this.props.id} 
						className="checkbox-compare" 
						type="checkbox" 
						name="compare"
						checked={this.props.checked}
						onChange={this.handleInputChange}
						disabled={this.props.disabled}
					></input>
					<span>Compare</span>
				</div>

				<div className="container">
					<ProviderLogo logo={this.props.insuranceProviderId}/>
					{/* {this.props.insuranceProviderName} */}
					<div className="cardInfo">
						<div>
							<b>{this.props.name}</b>
						</div>
						<div>
							<b>Sum:</b> {this.props.sum} SGD
						</div>
						<div>
							<b>Premium:</b> {this.props.premium} SGD
						</div>
					</div>
					<div>
						<Link to={'/detail'}>	<button onClick={() => this.props.onClick(this.props.item,this.props.id)} className="view-detail">View Detail</button> </Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Card