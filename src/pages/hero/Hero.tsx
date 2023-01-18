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
						Designing with <span className="text-primary">precision,</span>
					</h1>
					<h1 className="text-center heading">
						Developing with <span className="text-primary">passion</span>
					</h1>
				</div>
				<a className="cta-container" href="#about" title="about">
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
							width="25"
							height="33"
							viewBox="0 0 25 33"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M13.2553 1.98496L13.2553 25.2754C13.8772 24.1473 14.6089 23.1465 15.4709 22.2635C17.4986 20.1864 20.1658 18.8448 23.5917 17.9674L24.0879 19.9049C20.8947 20.7227 18.5976 21.9237 16.902 23.6606C15.224 25.3795 14.0553 27.7049 13.2553 30.9274V32.4972L11.2553 32.4972V30.9211C10.4554 27.7019 9.28702 25.3784 7.61015 23.6606C5.91459 21.9237 3.61745 20.7227 0.424252 19.9049L0.920429 17.9674C4.34637 18.8448 7.01359 20.1864 9.04129 22.2635C9.90256 23.1458 10.6337 24.1457 11.2553 25.2726L11.2553 1.98496C11.2553 1.43268 11.703 0.984962 12.2553 0.984962C12.8076 0.984962 13.2553 1.43268 13.2553 1.98496Z"
								fill="white"
							/>
						</svg>
					</button>
				</a>
			</div>
		</section>
	);
};

export default Hero;
