import React from 'react';
import VirtualCampImage from '../../../assets/virtual-camp.png';

interface ProjectProps {
	project: {
		thumbnail: string;
		title: string;
		description: string;
		techStack: string[];
		liveLink: string;
	};
	key: number;
}
const ProjectCard: React.FC<ProjectProps> = ({
	project: { thumbnail, title, description, techStack, liveLink },
	key,
}) => {
	return (
		<div className="projects-card" key={key}>
			<div className="image-wrapper">
				<img className="card-image" alt="virtual camp" src={thumbnail} />
			</div>
			<div className="content">
				<div className="content-header">
					<small className="sub-title">{techStack.join('+ ')}</small>
					<h3 className="title">{title}</h3>
				</div>
				<div className="content-wrapper">
					<p>{description}</p>
					{liveLink && (
						<a
							className="btn-text"
							href={liveLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
