import { Link } from "react-router-dom";
import { Cat } from "../models/Cat";
import "./Card.css";
import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import AuthContext from "../context/AuthContext";

interface Props {
	catProp: Cat;
}
const Card = ({ catProp }: Props) => {
	const { addFavoriteHandler, deleteFavoriteHandler, isFav } =
		useContext(FavoritesContext);
	const { user } = useContext(AuthContext);
	return (
		<li className="Card">
			<h3 className="catName">{catProp.id}</h3>
			{catProp.url ? (
				<Link to={`/cats/${catProp.id}`}>
					<img src={catProp.url} alt={catProp.id} />
				</Link>
			) : (
				<img alt="not found" />
			)}
			{user &&
				(isFav(catProp.id) ? (
					<button onClick={() => deleteFavoriteHandler(catProp.id)}>
						Delete
					</button>
				) : (
					<button onClick={() => addFavoriteHandler({ cat: catProp })}>
						Keep
					</button>
				))}
		</li>
	);
};

export default Card;
