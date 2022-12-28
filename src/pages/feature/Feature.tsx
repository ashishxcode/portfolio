import React from 'react';
import Marquee from 'react-fast-marquee';
import './feature.css';
const Features = () => {
	const row = [
		'top class mentor',
		'guranteed growth',
		'7 day bootcamp',
		'24/7 support',
		'exclusive community',
		'free certificate',
	];
	return (
		<section id="feature">
			<header className="heading">
				<span className="text-primary sticker sticker-stroke">Why</span>
				<h1 className="text-uppercase">unicorn ? </h1>
			</header>
			<div className="feature-wrapper">
				<Marquee gradientColor={[196, 117, 244]} speed={50}>
					<div className="feature-row row-one">
						{row.map((item, index) => (
							<div className="feature-item" key={index}>
								{item}
							</div>
						))}
					</div>
				</Marquee>
			</div>
			<div className="feature-wrapper feature-wrapper-wide">
				<Marquee gradientColor={[18, 14, 20]} speed={50}>
					<div className="feature-row row-two">
						{row.map((item, index) => (
							<div className="feature-item" key={index}>
								{item}
							</div>
						))}
					</div>
				</Marquee>
			</div>

			<div className="feature-wrapper">
				<Marquee gradientColor={[18, 14, 20]} speed={50}>
					<div className="feature-row row-three">
						{row.map((item, index) => (
							<div className="feature-item" key={index}>
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
