import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card.js'
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
		this.compare=this.compare.bind(this)
	}

	handleSubmit(data,id,item){
		
		this.props.getCheckboxState(data,id,item)
	}

	onSelectedChange (item,index) {

		this.setState({
			checked: {
				...this.state.checked,
				[index]: !this.state.checked[index]
			}
		})

		this.handleSubmit(!this.state.checked[index],index,item)
		
	}

	handleClick(item,id){
		this.props.selectPlan({
			insuranceProviderId:item.insuranceProviderId,
			insuranceProviderName:item.plan.insuranceProviderName,
			planName: item.plan.planName,
			sumInsureds: item.plan.sumInsureds,
			amount: item.totalAmount.amount,
			MedicalFeatures: item.plan.planBenefitCategories.MedicalFeatures,
			TravelFeatures:  item.plan.planBenefitCategories.TravelFeatures,
			Premium: item.totalAmount.amount
		})
	}

	compare(a,b) {
		if(this.props.sort === 'highestToLowest') {
			if (a.totalAmount.amount > b.totalAmount.amount)
				return -1
			if (a.totalAmount.amount < b.totalAmount.amount)
				return 1
			return 0
		}
		else if (this.props.sort === 'lowestToHighest') {
			if (a.totalAmount.amount < b.totalAmount.amount)
				return -1
			if (a.totalAmount.amount > b.totalAmount.amount)
				return 1
			return 0
		}
	}
	

	render(){
		
		const checked = this.state.checked
		const checkedCount = Object.keys(checked).filter(key => checked[key]).length
		const disabled = checkedCount > 2
		
		let filteredList = data.content.filter(item=>{
			if(this.props.insuranceProvidervalue==='default') {
				
				if(this.props.serviceAreaValue==='default') return item
				else return item.plan.planEligibility.serviceAreaIds[0]===this.props.serviceAreaValue
			}
			else {

				if(this.props.serviceAreaValue==='default')return item.insuranceProviderId===this.props.insuranceProvidervalue
				
				else return ( item.insuranceProviderId===this.props.insuranceProvidervalue && item.plan.planEligibility.serviceAreaIds[0]===this.props.serviceAreaValue)
			}
		})

		let sortedList = filteredList.sort(this.compare)
		const list = 
		
		sortedList.map((item,id) => (
			
			<Card 
				key={id}
				id={id}
				insuranceProviderId={item.insuranceProviderId}
				insuranceProviderName={item.plan.insuranceProviderName}
				name={item.plan.planName}
				sum={item.plan.sumInsureds.reduce(function getSum(total, num) {
					return total + num
				})}
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