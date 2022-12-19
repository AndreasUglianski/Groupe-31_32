const defaultState = [];
const ADD_USER = 'ADD_USER';

export const addUser = (payload) => ({ type: ADD_USER, payload });

export const userReducer = (state = defaultState, action) => {
	if (action.type === ADD_USER) {
		return [
			...state,
			{
				id: Date.now(),
				...action.payload,
			},
		];
	} else {
		return state;
	}
};
