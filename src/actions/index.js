import { GET_CONTENT, SELECT_PLAN, COMPARE_PLAN } from '../Constants/action-types'


export const getContent = content => ({
	type: GET_CONTENT,
	payload: {}
})
export const selectPlan = plan => ({
	type: SELECT_PLAN,
	payload: { 
		insuranceProviderId: plan.insuranceProviderId,
		insuranceProviderName: plan.insuranceProviderName,
		planName: plan.planName,
		sumInsureds: plan.sumInsureds,
		amount: plan.amount,
		MedicalFeatures: plan.MedicalFeatures,
		TravelFeatures: plan.TravelFeatures,
		Premium: plan.Premium
	}
})

export const comparePlan = item => ({
	type: COMPARE_PLAN,
	payload: item
})

