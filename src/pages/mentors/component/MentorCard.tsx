import React from 'react';

interface Mentor {
	id: number;
	name: string;
	image: string;
	description: string;
}
const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => {
	return (
		<div className="mentor-card">
			<div className="mentor-card-image">
				<img src={mentor.image} alt="mentor" />
			</div>
			<div className="mentor-card-content">
				<h2 className="text-primary">{mentor.name}</h2>
				<p className="text-secondary">{mentor.description}</p>
			</div>
		</div>
	);
};

export default MentorCard;
