import React from 'react';
import ProjectCard from './components/ProjectCard';
import './projects.css';

const Projects = () => {
	return (
		<section id="projects">
			<div className="heading">
				<h1 className="text-uppercase">Projects</h1>
				<p className="sticker text-primary sticker-stroke">Things I've built</p>
			</div>
			<div className="container projects-container">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</section>
	);
};

export default Projects;
