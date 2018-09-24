import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar.js'
import { connect } from 'react-redux'
import './DetailPage.css'
import HDFCErgo from '../../../assets/HDFCErgo.png'
import Religare from '../../../assets/Religare.png'
import RelianceGeneral from '../../../assets/RelianceGeneral.png'

const mapStateToProps = state => {
	return { detail: state.detail }
}

class Detail extends Component {
	constructor(props){
		super(props)
		this.logoPicker=this.logoPicker.bind(this)
		this.insuranceName=this.insuranceName.bind(this)
	}

	logoPicker(name){
		if(name==='HDFC_ERGO')
		{
			return HDFCErgo
		}
		else if (name==='RELIGARE_HEALTH')
		{
			return Religare
		}
		else if (name==='RELIANCE_GENERAL')
		{
			return RelianceGeneral
		}
	}
	
	insuranceName(name){
		if(name==='HDFC_ERGO')
		{
			return 'HDFCErgo'
		}
		else if (name==='RELIGARE_HEALTH')
		{
			return 'Religare Health'
		}
		else if (name==='RELIANCE_GENERAL')
		{
			return 'Reliance General'
		}
	}


	render(){
		console.log('Detail : ', this.props.detail)
		const detail = this.props.detail
		const MedicalFeatures = detail.MedicalFeatures
		const TravelFeatures = detail.TravelFeatures
		const insuranceName = this.insuranceName(detail.insuranceProviderId)
		const sumInsureds = detail.sumInsureds
		const planName = detail.planName
		const premium = detail.Premium
		const logo = this.logoPicker(this.props.detail.insuranceProviderId)
		
		return (
			<div className="flexContainer flexColumn fullHeight">
				<Navbar compare="nav hidden"/>
				<div className="flexContainer flexRow flexSpaceAround">
					<img src={logo} alt="insurance-logo" className="insurance-logo"></img>
					<div>{insuranceName}</div>
					<div>{premium}</div>
					<div>{planName}</div>
					<div>Sum Insureds: {sumInsureds}</div>
					<div>{MedicalFeatures.map((item,id)=>(<div key={id}>{item.benefitName}</div>))}</div>
					<div>{TravelFeatures.map((item,id)=>(<div key={id}>{item.benefitName}</div>))}</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Detail)