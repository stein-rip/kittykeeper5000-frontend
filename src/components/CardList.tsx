import { Cat } from "../models/Cat";
import Card from "./Card";
import "./CardList.css";

interface Props {
	allcats: Cat[];
}

const CardList = ({ allcats }: Props) => {
	return (
		<ul className="CardList">
			{allcats.map((item) => (
				<Card catProp={item} key={item.id} />
			))}
		</ul>
	);
};

export default CardList;
