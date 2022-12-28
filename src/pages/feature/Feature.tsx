import React from 'react';
import Marquee from 'react-fast-marquee';
import './feature.css';
const Features = () => {
	const row = [
		'10-day Bootcamp',
		'Top-class Mentors',
		'Guaranteed Growth',
		'Improved Reach',
		'Exclusive Creator',
		'Skill Development',
		'Creator Centric',
		'10X Growth',
		'Community Building',
		'Networking',
		'Knowledge Sharing',
		'Getaway Location',
		'Interactive Sessions',
		'Time-bound webinars',
		'More Opportunities',
		'Creator’s Retreat',
		'Collab Openings',
		'Boosted Development',
		'Professional Guidance',
		'Fun Activities',
	];
	return (
		<section id="feature">
			<header className="heading">
				<span className="text-primary sticker sticker-stroke">Why</span>
				<h1 className="text-uppercase">unicorn ? </h1>
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

			<div className="feature-wrapper">
				<Marquee gradientColor={[18, 14, 20]} speed={50}>
					<div className="feature-row row-three">
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
