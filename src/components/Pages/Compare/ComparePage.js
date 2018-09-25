import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import { connect } from 'react-redux'
import ProviderLogo from '../../ProviderLogo/ProviderLogo'
import './ComparePage.css'
import CurrencyFormat from 'react-currency-format'

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
						<b>Premium:</b>  <CurrencyFormat value={item.item.totalAmount.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
					</div>
					<div className="info">
						<b>Sum:</b> <CurrencyFormat value={item.item.sumInsured} displayType={'text'} thousandSeparator={true} prefix={'$'} />
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