import React, { Component } from 'react'
import './ProviderLogo.css'
import HDFCErgo from '../../assets/HDFCErgo.png'
import Religare from '../../assets/Religare.png'
import RelianceGeneral from '../../assets/RelianceGeneral.png'



class ProviderLogo extends Component {
	constructor(props){
		super(props)
		this.logoPicker = this.logoPicker.bind(this)
		this.insuranceName = this.insuranceName.bind(this)
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
		const insuranceName = this.insuranceName(this.props.logo)
		let logo = this.logoPicker(this.props.logo)
		return(
			<div>
				<div>
					<img src={logo} alt="Logo" className="logo"></img>
				</div>
				<div className="name">
					{insuranceName}
				</div>
			</div>
		)
	}
}

export default ProviderLogo