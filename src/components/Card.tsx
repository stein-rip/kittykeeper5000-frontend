import { Link } from "react-router-dom";
import { Cat } from "../models/Cat";
import "./Card.css";

interface Prop {
	cat: Cat;
}
const Card = ({ cat }: Prop) => {
	return (
		<li className="Card">
			<Link to={`/${encodeURIComponent(cat.id)}`}>
				<img src={cat.url} />
			</Link>

			<p>{cat.name}</p>
		</li>
	);
};

export default Card;
