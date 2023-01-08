import React from 'react';
import VirtualCampImage from '../../assets/virtual-camp.png';
import PhysicalCampImage from '../../assets/physical-camp.png';
import './projects.css';

const Projects = () => {
	return (
		<section id="projects">
			<div className="heading">
				<h1 className="text-uppercase">Projects</h1>
				<p className="sticker text-primary sticker-stroke">Things I've built</p>
			</div>
			<div className="container projects-container">
				<div className="projects-card">
					<div className="image-wrapper">
						<img
							className="card-image"
							alt="virtual camp"
							src={VirtualCampImage}
						/>
					</div>
					<div className="content-wrapper">
						<h3>Physical Camp</h3>
						<p>
							Action-packed days on a getaway location among mega creators for
							community-building and networking like never before!
						</p>
					</div>
					<button className="projects-btn">Learn More</button>
				</div>
				<div className="projects-card">
					<div className="image-wrapper">
						<img
							className="card-image"
							alt="physical camp"
							src={PhysicalCampImage}
						/>
					</div>
					<div className="content-wrapper">
						<h3>Physical Camp</h3>
						<p>
							A 10-week itinerary for a knowledge presented by the best in the
							game to help you grow yourself and your business.
						</p>
					</div>
					<button className="projects-btn">Learn More</button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
