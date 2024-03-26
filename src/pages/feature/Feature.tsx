import React from 'react';
import Marquee from 'react-fast-marquee';
import CSS from '../../assets/icons/css.png';
import HTML from '../../assets/icons/html.png';
import JAVASCRIPT from '../../assets/icons/javascript.png';
import REACT from '../../assets/icons/react.png';
import NODE from '../../assets/icons/node.png';
import TYPESCRIPT from '../../assets/icons/typescript.png';
import TAILWIND from '../../assets/icons/tailwind.png';
import BOOTSTRAP from '../../assets/icons/bootstrap.png';
import MYSQL from '../../assets/icons/mysql.png';
import POSTGRESQL from '../../assets/icons/postgresql.png';

import './feature.css';
const Features = () => {
	const row1 = [
		<img className="skill-icon" src={HTML} alt="HTML" />,
		<img className="skill-icon" src={CSS} alt="CSS" />,
		<img className="skill-icon" src={JAVASCRIPT} alt="JAVASCRIPT" />,
		<img className="skill-icon" src={REACT} alt="REACT" />,
		<img className="skill-icon" src={NODE} alt="NODE" />,
	];

	const row2 = [
		<img className="skill-icon" src={TYPESCRIPT} alt="TYPESCRIPT" />,
		<img className="skill-icon" src={TAILWIND} alt="TAILWIND" />,
		<img className="skill-icon" src={BOOTSTRAP} alt="BOOTSTRAP" />,
		<img className="skill-icon" src={MYSQL} alt="MYSQL" />,
		<img className="skill-icon" src={POSTGRESQL} alt="POSTGRESQL" />,
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
						{row1.map((item, index) => (
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
						{row2.map((item, index) => (
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
