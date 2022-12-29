import React from 'react';
import Marquee from 'react-fast-marquee';
import './feature.css';
const Features = () => {
	const row = [
		'HTML',
		'CSS',
		'JavaScript',
		'React',
		'Node',
		'TypeScript',
		'Tailwind',
		'Bootstrap',
		'Express',
		'MongoDB',
		'MYSQL',
		'POSTGRESQL',
	];
	return (
		<section id="feature">
			<header className="heading">
				<span className="text-primary sticker sticker-stroke">my</span>
				<h1 className="text-uppercase">Shields</h1>
			</header>
			<div className="feature-wrapper">
				<Marquee gradientColor={[18, 14, 20]} speed={50}>
					<div className="feature-row row-one">
						{row.map((item, index) => (
							<div className="feature-item sticker-stroke" key={index}>
								{item}
							</div>
						))}
					</div>
				</Marquee>
			</div>
			<div className="feature-wrapper feature-wrapper-wide">
				<Marquee gradientColor={[18, 14, 20]} speed={50} direction="right">
					<div className="feature-row row-two">
						{row.map((item, index) => (
							<div className="feature-item sticker-stroke" key={index}>
								{item}
							</div>
						))}
					</div>
				</Marquee>
			</div>
		</section>
	);
};

export default Features;
