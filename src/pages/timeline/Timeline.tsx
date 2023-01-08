import React from 'react';
import TimelineStep from './components/TimelineStep';

import './timeline.css';

const Timeline = () => {
	const experience = [
		{
			companyName: 'CultureX',
			role: 'Full Stack Developer',
			period: '2022 - Present',
			description:
				'Working on the CultureX platform as a full stack developer. I am responsible for the development of the frontend and backend of the platform. I am also responsible for leading the frontend team.',
			experience: [
				'Developed and maintained various web applications using React, NextJS, NodeJS, ExpressJS, and MySQL.',
				'Collaborated with a cross-functional team of designers, developers, and product managers to deliver high-quality products.',
				'Improved the performance of the platform by 30% by optimizing the codebase.',
				'Improved the user experience of the platform by 20% by implementing new features.',
			],
		},
		{
			companyName: 'CultureX',
			role: 'Associate Intern',
			period: 'Feb/22 - Apr/22',
			description:
				'While working as an intern, I was responsible for the development of the frontend of the platform. I also worked on the development of the backend of the platform.',
			experience: [
				'Developed several tools for internal teams to improve their productivity.',
			],
		},
		{
			companyName: '',
			role: 'Freelancer',
			period: 'Jan/21 - Feb/22',
			description:
				'Worked as a freelancer for multiple clients. I have worked on multiple projects which include web development and UI/UX design.',
			experience: [],
		},
	];

	return (
		<section id="timeline">
			<div className="heading">
				<h1>Experience</h1>
				<p className="sticker text-primary text-center sticker-stroke">
					I currently work for
				</p>
			</div>
			<div className="timeline-container container-sm">
				<div className="cx-stepper-blur-top"></div>
				<div className="cx-stepper">
					<ol>
						{experience.map((step, index) => {
							return <TimelineStep key={index} week={step} />;
						})}
					</ol>
				</div>
				<div className="cx-stepper-blur-bottom"></div>
			</div>
		</section>
	);
};

export default Timeline;
