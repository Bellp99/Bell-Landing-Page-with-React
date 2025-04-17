import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import CardRow from "./CardRow";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<Hero />
		<CardRow />
		<Footer />
		</>
	);
};

export default Home;