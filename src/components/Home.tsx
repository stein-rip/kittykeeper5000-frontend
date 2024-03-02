import { useEffect, useState } from "react";
import { Cat } from "../models/Cat";
import { getCats } from "../services/CATAPIService";
import "./Home.css";
import { Link, useSearchParams } from "react-router-dom";
import CardList from "./CardList";

const Home = () => {
	const [cats, setCats] = useState<Cat[]>([]);
	const [searchParams] = useSearchParams();
	const name = searchParams.get("name");

	useEffect(() => {
		const fetchCats = async () => {
			try {
				const catData = await getCats();
				setCats(catData); // Update state with the result directly
			} catch (error) {
				console.error("Error fetching cat data:", error);
			}
		};

		fetchCats();
	}, [name]);

	const handleRefresh = async () => {
		try {
			const newCats = await getCats(); // Fetch new cat data from the API
			setCats(newCats);
		} catch (error) {
			console.error("Error refreshing cat data:", error);
		}
	};

	return (
		<div className="Home">
			<CardList allcats={cats} />
			<button onClick={handleRefresh}>proceed to the next kitty</button>
		</div>
	);
};

export default Home;
