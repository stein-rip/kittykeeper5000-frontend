import { Link } from "react-router-dom";
import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const Header = () => {
	const { user } = useContext(AuthContext);
	return (
		<header className="Header">
			<h1 className="hello">KITTYKEEPER5000</h1>
			<div className="catNav">
				<Link to="/">
					<div className="goBack">Back</div>
				</Link>
				<ul>
					<Link to="/cats/favorites">
						<li>Saved</li>
					</Link>
				</ul>
			</div>
			{user ? (
				<button onClick={signOut}>Sign out</button>
			) : (
				<button onClick={signInWithGoogle}>Sign in with Google</button>
			)}
		</header>
	);
};

export default Header;
