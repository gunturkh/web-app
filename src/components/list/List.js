import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../card/Card.js'
import data from '../../assets/data.json'
import PropTypes from 'prop-types'
import { selectPlan } from '../../actions'
import './List.css'

const mapDispatchToProps = dispatch => {
	return {
		selectPlan: plan => dispatch(selectPlan(plan))
	}
}

const mapStateToProps = state => {
	return { content: state.content }
}

class ConnectedList extends Component{
	constructor(props) {
		super (props)
		this.state = {
			compare: [],
			disableCheckBox: [],
			checked: {}
		}

		this.handleSubmit=this.handleSubmit.bind(this)
		this.handleClick=this.handleClick.bind(this)
		this.onSelectedChange=this.onSelectedChange.bind(this)
	}

	handleSubmit(data,id,item){
		
		this.props.getCheckboxState(data,id,item)
	}

	onSelectedChange (item,index ) {

		// if(this.state.checked[index]===true) console.log(`Checkbox ${index}: ${this.state.checked[index]}`)
		
		
		this.setState({
			checked: {
				...this.state.checked,
				[index]: !this.state.checked[index]
			}
		})
		console.log(`Checkbox ID (${index}) : ${!this.state.checked[index]}`)

		this.handleSubmit(!this.state.checked[index],index,item)
		
	}

	handleClick(item,id){
		this.props.selectPlan({
			insuranceProviderId:item.insuranceProviderId,
			planName: item.plan.planName,
			sumInsureds: item.plan.sumInsureds,
			amount: item.totalAmount.amount,
			MedicalFeatures: item.plan.planBenefitCategories.MedicalFeatures,
			TravelFeatures:  item.plan.planBenefitCategories.TravelFeatures
		})
	}

	render(){
		
		const checked = this.state.checked
		const checkedCount = Object.keys(checked).filter(key => checked[key]).length
		const disabled = checkedCount > 2
		const list = 
		data.content.map((item,id) => (
			
			<Card 
				key={id}
				id={id}
				insuranceProviderId={item.insuranceProviderId}
				name={item.plan.planName}
				sum={item.plan.sumInsureds}
				premium={item.totalAmount.amount}
				onClick={this.handleClick}
				onChange={()=>this.onSelectedChange(item,id)}
				item={item}
				checked={checked[id] || false}
				disabled={!checked[id] && disabled}
			/>
		)
		)
		return (
			<ul className="list-group list-group-flush">
				{list}
			</ul>
		)
	}
}


ConnectedList.propTypes = {
	content: PropTypes.array
}

const List = connect( mapStateToProps, mapDispatchToProps)(ConnectedList)

export default List