import React from 'react';
import './hero.css';
import Navbar from './components/Navbar';

const Hero = () => {
	return (
		<section id="hero">
			<div className="effect-left" />
			<div className="effect-right" />
			<Navbar />
			<div className="hero-content container-sm">
				<div className="heading-container">
					<h1 className="text-center heading">
						Bringing your ideas to <br />
						life through <span className="text-primary">&lt;code/&gt; </span>
					</h1>
				</div>
				<div className="cta-container">
					<button className="button-cta">
						<svg className="textcircle" viewBox="0 0 500 500">
							<title>Projects & client work 2020</title>
							<defs>
								<path
									id="textcircle"
									d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
								/>
							</defs>
							<text>
								<textPath
									xlinkHref="#textcircle"
									aria-label="Ashish Patel, Full Stack Developer"
									textLength="1000"
								>
									● Ashish Patel ● Full Stack Developer
								</textPath>
							</text>
						</svg>
						<svg
							className="arrow"
							width="30"
							height="31"
							viewBox="0 0 30 31"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M25.4921 11.2128L20.2461 16.5356L15 0L9.75393 16.5356L4.50786 11.2128L-1.97242e-09 15.7857L15 31L30 15.7857L25.4921 11.2128Z"
								fill-opacity="1"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
