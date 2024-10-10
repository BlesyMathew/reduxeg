import { INCREEMENT, DECREEMENT, RESET } from "./types/counterTypes";

const initialState = {
	counter: 0,
};

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREEMENT:
			return { counter: state.counter + 1 };

		case DECREEMENT:
			return { counter: state.counter - 1 };

		case RESET:
			return initialState;

		default:
			return state;
	}
};
