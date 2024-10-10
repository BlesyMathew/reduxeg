import "./App.css";
import Counter from "./component/Counter";
import { Provider } from "react-redux";

import Todo from "./component/todo/Todo";
import { store } from "./redux";

function App() {
	// const rootReducer = combineReducers({ counterReducer, todoReducer });
	// const store = createStore(rootReducer);
	return (
		<div className="App">
			<Provider store={store}>
				<Counter />
				<Todo />
			</Provider>
		</div>
	);
}

export default App;
