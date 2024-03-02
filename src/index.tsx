import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";
import FavoritesContextProvider from "./context/FavoritesContextProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<FavoritesContextProvider>
				<App />
			</FavoritesContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
