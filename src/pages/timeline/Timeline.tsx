import React from 'react';
import TimelineStep from './components/TimelineStep';

import './timeline.css';

const Timeline = () => {
	const timelineSteps = [
		{
			week: 'Week 1',
			title: 'Creative block day',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, doloremque ut, eius cum in repellat temporibus rem quod officia eligendi dolores necessitatibus at aperiam accusantium provident consequuntur eaque quaerat fuga.',
		},
		{
			week: 'Week 2',
			title: 'How manage your time',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, doloremque ut, eius cum in repellat temporibus rem quod officia eligendi dolores necessitatibus at aperiam accusantium provident consequuntur eaque quaerat fuga.',
		},
		{
			week: 'Week 3',
			title: 'Creative block day',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, doloremque ut, eius cum in repellat temporibus rem quod officia eligendi dolores necessitatibus at aperiam accusantium provident consequuntur eaque quaerat fuga.',
		},
		{
			week: 'Week 4',
			title: 'Creative block day',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, doloremque ut, eius cum in repellat temporibus rem quod officia eligendi dolores necessitatibus at aperiam accusantium provident consequuntur eaque quaerat fuga.',
		},
		{
			week: 'Week 5',
			title: 'Creative block day',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, doloremque ut, eius cum in repellat temporibus rem quod officia eligendi dolores necessitatibus at aperiam accusantium provident consequuntur eaque quaerat fuga.',
		},
	];

	return (
		<section id="timeline">
			<h1 className="heading">TIMELINE</h1>
			<div className="timeline-container container-sm">
				<div className="cx-stepper-blur-top"></div>
				<div className="cx-stepper">
					<ol>
						{timelineSteps.map((step, index) => {
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
