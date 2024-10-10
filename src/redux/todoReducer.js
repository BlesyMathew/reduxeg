const initialState = {
	todos: [{ id: new Date().getTime(), text: "Test", completed: true }],
};

export const todoReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "ADD":
			return {
				todos: [
					...state.todos,
					{ id: new Date().getTime(), text: payload, completed: false },
				],
			};
		case "CLEAR":
			return initialState;

		default:
			return state;
	}
};
