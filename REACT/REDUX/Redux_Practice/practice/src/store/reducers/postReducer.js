const defaultState = [];

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

export const addPost = (payload) => ({ type: ADD_POST, payload });
export const deletePost = (payload) => ({ type: DELETE_POST, payload });

export const postReducer = (state = defaultState, action) => {
	if (action.type === ADD_POST) {
		return [
			...state,
			{
				id: Date.now(),
				...action.payload,
			},
		];
	} else if (action.type === DELETE_POST) {
		return state.filter((el) => el.id !== action.payload);
	} else {
		return state;
	}
};
