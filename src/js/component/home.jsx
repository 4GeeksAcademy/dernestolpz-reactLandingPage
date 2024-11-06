import React from "react";
import { NavbarComponent } from './navbar';
import { JumbotronComponent } from './jumbotron';
import { CardComponent } from './cards';
import { FooterComponent } from "./footer";




const Home = () => {
	return (
		<div>
			<NavbarComponent />
			<JumbotronComponent />
			<div className="container">
				<div className="row">
					<CardComponent />
				</div>
			</div>
			<FooterComponent />
		</div>
	);
};

export default Home;
