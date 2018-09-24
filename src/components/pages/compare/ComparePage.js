import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar.js'
import { connect } from 'react-redux'
import ProviderLogo from '../../providerlogo/ProviderLogo'
import './ComparePage.css'

const mapStateToProps = state => {
	return { compare: state.compare }
}

class Compare extends Component {
	
	render(){
		console.log('Compare Props: ', this.props.compare)
		let compareCard = this.props.compare.map((item,id) => (
			
			<div className="compareCard" key={id}>
				<ProviderLogo logo={item.item.insuranceProviderId}/>
				<div className="compareCardInfo">
					<div className="info">
						<b>Premium:</b> {item.item.totalAmount.amount} SGD
					</div>
					<div className="info">
						<b>Sum:</b> {item.item.sumInsured} SGD
					</div>
					<div  className="medical">
						<b>Medical Features:</b>{
							item.item.plan.planBenefitCategories.MedicalFeatures.map((data,id)=>(
								<li className="medicalLists" key={id}>{data.benefitName}</li>
							))}
					</div>
					<div className="travel">
						<b>Travel Features:</b> {
							item.item.plan.planBenefitCategories.TravelFeatures.map((data,id)=>(
								<li className="travelLists" key={id}>{data.benefitName}</li>
							))}
					</div>
				</div>
			</div>
		) 
		)
		return (
			<div className="compareContainer">
				<Navbar compare="nav hidden"/>
				<main className="compareWrapper">
					{compareCard}
				</main>
			</div>
		)
	}
}

export default connect (mapStateToProps)(Compare)