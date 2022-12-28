import React from 'react';
import '../mentor.css';
import StartIconDark from '../../../assets/icons/start-dark.svg';

const MentorMarqueeNormal = () => {
	const Mentor = () => (
		<div className="marquee-container-filled">
			<h2 className="text-uppercase title">Mentors</h2>
			<img src={StartIconDark} alt="Start Icon" />
		</div>
	);
	return (
		<>
			{[...Array(20)].map((_, i) => (
				<Mentor key={i} />
			))}
		</>
	);
};

export default MentorMarqueeNormal;
