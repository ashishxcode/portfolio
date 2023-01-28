import React from 'react';
import ProjectCard from './components/ProjectCard';
import OutreachCover from '../../assets/thumb/outreach.svg';
import BingeWatchCover from '../../assets/thumb/binge-watch.svg';
import UnicornXCover from '../../assets/thumb/unicornx.svg';
import './projects.css';

const Projects = () => {
	const projects = [
		{
			thumbnail: OutreachCover,
			title: 'Outreach',
			description:
				"This webapp, built using MERN Stack. Outreach developer community.It's include features like user can create post, like, comment, update profile, delete post, delete comment, delete account, etc.",
			techStack: ['React', 'Node', 'Express', 'MongoDB'],
			liveLink: 'https://outreach.herokuapp.com/',
		},
		{
			thumbnail: BingeWatchCover,
			title: 'Binge Watch',
			description:
				'This is API based webapp, built using REACT. Binge Watch is a web app that allows users to search and filter movies and TV shows. ',
			techStack: ['React', 'HTML', 'CSS'],
			liveLink: 'https://bingewatch.netlify.app/',
		},
		{
			thumbnail: UnicornXCover,
			title: 'UnicornX',
			description:
				'UnicornX is a offering a platform for creators from CreatorX to educate and engage with their audience through live and on-demand video streaming.',
			techStack: ['React', 'HTML', 'CSS'],
			liveLink: 'https://unicornx.netlify.app/',
		},
	];

	return (
		<section id="work">
			<div className="heading">
				<h1 className="text-uppercase">Projects</h1>
				<p className="sticker text-primary sticker-stroke">Things I've built</p>
			</div>
			<div className="container projects-container">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={{
							thumbnail: project.thumbnail || 'https://via.placeholder.com/150',
							title: project.title,
							description: project.description,
							techStack: project.techStack,
							liveLink: project.liveLink,
						}}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
