import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar.js'
import { connect } from 'react-redux'
import CurrencyFormat from 'react-currency-format'
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
		const detail = this.props.detail
		const MedicalFeatures = detail.MedicalFeatures
		const TravelFeatures = detail.TravelFeatures
		const insuranceName = detail.insuranceProviderName
		const sumInsureds = Number(detail.sumInsureds)
		const planName = detail.planName
		const premium = detail.Premium
		const logo = this.logoPicker(this.props.detail.insuranceProviderId)
		
		return (
			<div className="detailContainer">
				<Navbar compare="nav hidden"/>
				<div className="detailWrapper">
					<div className="card-detail">
						<img src={logo} alt="insurance-logo" className="insurance-logo"></img>
						<div className="detail-info-name"><b>{planName}</b></div>
						<div className="detail-info-space"><b>By :</b> {insuranceName}</div>
						<div className="detail-info-space"><b>Premium :</b> <CurrencyFormat value={premium}  displayType={'text'} thousandSeparator={true} prefix={'$'}/> </div>
						<div className="detail-info-space"><b>Sum Insureds :</b> <CurrencyFormat value={sumInsureds}  displayType={'text'} thousandSeparator={true} prefix={'$'}/> </div>
					</div>
					<div className="card-detail-features">
						<div className="detail-info"> 
							<div className="detail-info-space "><b className="title">Medical Features :</b> {MedicalFeatures.map((item,id)=>(<div key={id}><li className="feature">{item.benefitName}</li></div>))}</div>
						</div>
						<div className="detail-info">
							<div className="detail-info-space "><b className="title">Travel Features :</b> {TravelFeatures.map((item,id)=>(<div key={id}><li className="feature">{item.benefitName}</li></div>))}</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Detail)