import React from 'react';
import './hero.css';
import CreatorXLogo from '../../assets/creatorx.png';

import LunchGIF from '../../assets/launch.gif';
import Navbar from './components/Navbar';

const Hero = () => {
	return (
		<section id="hero">
			<div className="effect-left" />
			<div className="effect-right" />
			<Navbar />
			<div className="hero-content">
				<img alt="" src={LunchGIF} />

				<h1 className="text-center heading">
					THINK BIG. <br />
					CREATE WHAT'S <span className="text-primary">NEXT</span>
				</h1>
				<div className="cta" role="button">
					APPLY
				</div>
				<div>
					<p className="powered-by">powered by</p>
					<img
						className="creatorx-logo"
						alt=""
						src={CreatorXLogo}
						width="auto"
						height="50px"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
