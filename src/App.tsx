import "./App.css";
import Favorites from "./components/Favorites";
import Header from "./components/Header";

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
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Navigate to="/" />} />
					<Route path="/cats/favorites" element={<Favorites />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
