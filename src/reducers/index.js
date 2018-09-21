import data from '../assets/data.json'

const initialState = {
	content: data.content
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	default: 
		return state
	}
}

export default rootReducer