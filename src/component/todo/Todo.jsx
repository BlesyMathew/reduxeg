import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {
	return (
		<div>
			<h1>Todo Example</h1>
			<TodoInput />
			<TodoList />
		</div>
	);
}
