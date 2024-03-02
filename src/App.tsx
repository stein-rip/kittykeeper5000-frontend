import "./App.css";
import Home from "./components/Home";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
