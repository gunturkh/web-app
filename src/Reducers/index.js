import data from '../assets/data.json'
import { GET_CONTENT,SELECT_PLAN, COMPARE_PLAN } from '../Constants/action-types'

const initialState = {
	content: data.content,
	detail: {},
	compare:[]
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	case GET_CONTENT:
		return action.payload
	case SELECT_PLAN: 
		return {...state, detail:action.payload}
	case COMPARE_PLAN:
		return {
			...state,
			compare: action.payload
		}
	default: 
		return state
	}
}

export default rootReducer