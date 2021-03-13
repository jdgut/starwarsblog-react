import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

import logo from "../img/logo.png";

export const Nav = () => {
	const { store, actions } = useContext(Context);
	const favoritesList = store.favorites.map((favorite) => {
		const [id, type] = favorite.split("-");
		return (
			<Dropdown.Item className="d-flex justify-content-between" key={favorite} onClick={() => actions.removeFromFavorites(id,type )} >
				<label>{store[type][id].name}</label>
				<i class="fas fa-trash-alt"></i>
			</Dropdown.Item>
		)
	});

	/**
	 
	 */

	return (
		<Navbar bg="light" expand="lg" className="mb-3 d-flex justify-content-between">
			<Navbar.Brand className="mb-0 h1">
				<Link to="/"><img src={logo} alt={logo} className="logo" /></Link>
			</Navbar.Brand>
			<div className="favorites-wrapper">
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Favorites <span class="badge badge-secondary">{store.favorites.length}</span>
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{favoritesList.length > 0 && favoritesList}
						{
							favoritesList.length ==0 && 
								<Dropdown.Item>
									You haven't added favorites.
								</Dropdown.Item>
						}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</Navbar>
	);
};

export default Nav;