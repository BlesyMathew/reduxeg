export const addTodo = (payload) => {
	return {
		type: "ADD",
		payload: payload,
	};
};

export const clearTodo = (payload) => {
	return {
		type: "CLEAR",
		payload: payload,
	};
};
