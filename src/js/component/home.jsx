import React from "react";
import { Navbar } from './navbar';
import { Jumbotron } from './jumbotron';
import { Card } from './cards';
import { Footer } from "./footer";




const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
