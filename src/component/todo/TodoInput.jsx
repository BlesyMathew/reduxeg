import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoActions";

export default function TodoInput() {
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo(text));
		setText("");
	};
	return (
		<>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
				<button type="submit">Add</button>
			</form>
		</>
	);
}
