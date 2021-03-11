import React from "react";
import Container from "react-bootstrap/Container";
import Cards from "../component/Cards";

export const Home = () => {
	return (
		<>
			<Container>
				<h1>Characters</h1>
				<Cards type="characters" />
				<p>&nbsp;</p>
				<h1>Planets</h1>
				<Cards type="planets" />
			</Container>
		</>
	);
};