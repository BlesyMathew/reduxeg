import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREEMENT, DECREEMENT, RESET } from "../redux/types/counterTypes";

export default function Counter() {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counterReducer.counter);

	return (
		<>
			<div>
				<button
					onClick={() => {
						dispatch({ type: INCREEMENT });
					}}
				>
					INCREEMENT
				</button>
				<button
					onClick={() => {
						dispatch({ type: DECREEMENT });
					}}
				>
					DECREEMENT
				</button>
				<button
					onClick={() => {
						dispatch({ type: RESET });
					}}
				>
					RESET
				</button>
			</div>
			<div>Counter:{counter}</div>
		</>
	);
}
