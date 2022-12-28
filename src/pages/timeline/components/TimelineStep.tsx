import React from 'react';

interface TimelineStepProps {
	week: {
		week: string;
		title: string;
		description: string;
	};
}

const TimelineStep: React.FC<TimelineStepProps> = ({ week }) => {
	return (
		<li className="cx-stepper__item">
			<div className="cx-stepper__content">
				<div className="cx-stepper__heading">
					<h2 className="cx-stepper__title">{week.week}</h2>
					<p className="sticker sticker-stroke text-primary">{week.title}</p>
				</div>
				<p className="cx-stepper__desc">{week.description}</p>
			</div>
		</li>
	);
};

export default TimelineStep;
