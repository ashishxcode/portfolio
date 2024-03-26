import React from 'react';
import '../mentor.css';
import StartIconLight from '../../../assets/icons/star-light.svg';

const MentorMarqueeNormal = () => {
	const Mentor = () => (
		<div className="marquee-container-normal">
			<h2 className="text-uppercase title">Mentors</h2>
			<img src={StartIconLight} alt="Start Icon" />
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
