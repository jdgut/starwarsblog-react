import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import logo from "../img/logo.png";

export const Nav = () => {
	return (
		<Navbar bg="light" expand="lg" className="mb-3">
			<Navbar.Brand className="mb-0 h1">
				<Link to="/"><img src={logo} alt={logo} className="logo" /></Link>
			</Navbar.Brand>
		</Navbar>
	);
};

export default Nav;