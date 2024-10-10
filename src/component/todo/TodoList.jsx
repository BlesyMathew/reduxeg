import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { clearTodo } from "./todoActions";

export default function TodoList() {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todoReducer.todos);
	const handleClearList = () => {
		{
			dispatch(clearTodo());
		}
	};
	console.log("todos", todos);
	return (
		<>
			<div>
				{todos.map((todo) => (
					<TodoItem key={todos.id} {...todo} />
				))}
			</div>
			<div>
				<button onClick={handleClearList}>Clear</button>
			</div>
		</>
	);
}
