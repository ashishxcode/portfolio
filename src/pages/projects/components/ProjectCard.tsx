import React from 'react';
import VirtualCampImage from '../../../assets/virtual-camp.png';

const ProjectCard = () => {
	return (
		<div className="projects-card">
			<div className="image-wrapper">
				<img className="card-image" alt="virtual camp" src={VirtualCampImage} />
			</div>
			<div className="content">
				<div className="content-header">
					<small className="sub-title">
						JAVASCRIPT + REACT + NODEJS + MONGODB
					</small>
					<h3 className="title">UnicornX</h3>
				</div>
				<div className="content-wrapper">
					<p>
						UnicornX is a offering a platform for creators from CreatorX to
						educate and engage with their audience through live and on-demand
						video streaming.
					</p>
					<button className="btn-text">View Live</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
