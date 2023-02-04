const defaultState = [];

const LOAD_RANDOM_PROMOTIONS = 'LOAD_RANDOM_PROMOTIONS';

export const randomPromotionProducts = (payload) => ({
	type: LOAD_RANDOM_PROMOTIONS,
	payload: payload.sort(() => 0.5 - Math.random()).slice(0, 3)});

export const randomPromotionsReducer = (state = defaultState, action) => {
	if (action.type === LOAD_RANDOM_PROMOTIONS) {
		return action.payload;
		
	} else {
		return state;
	}
};
