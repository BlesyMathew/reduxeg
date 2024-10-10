import React from "react";

export default function TodoItem({ completed, text, id }) {
	const doneToggle = () => {};
	const deleteToggle = () => {};
	console.log("text", text);
	return (
		<>
			<div>
				<p>{text}</p>
			</div>
			<div>
				<button onClick={doneToggle}>DONE</button>
				<button onClick={deleteToggle}>Delete</button>
			</div>
		</>
	);
}
