import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

/** Boostrap Components */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/sass/index.scss';
import Container from 'react-bootstrap/Container';


import { Home } from "./views/home";

import injectContext from "./store/appContext";

import  Navbar  from "./component/navbar";
import  Footer  from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
    <>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
          <Container fluid >
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
          </Container>
				</ScrollToTop>
			</BrowserRouter>
    </>
	);
};

export default injectContext(Layout);