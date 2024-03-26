import React from 'react';

interface TimelineStepProps {
	week: {
		companyName: string;
		period: string;
		role: string;
		description: string;
		experience: string[];
	};
}

const TimelineStep: React.FC<TimelineStepProps> = ({ week }) => {
	return (
		<li className="cx-stepper__item">
			<div className="cx-stepper__content">
				<div className="cx-stepper__heading">
					<p className="sticker sticker-stroke cx-stepper__title"></p>
					<h2 className="cx-stepper__title">
						{week.role}{' '}
						{week.companyName && (
							<span className=" text-primary">{`@${week.companyName}`}</span>
						)}
					</h2>
				</div>
				<h3 className="cx-stepper__week">{week.period}</h3>
				<p className="cx-stepper__desc">{week.description}</p>
				{week.experience.length > 0 && (
					<div className="cx-stepper__list-container">
						<h5>Highlights</h5>
						<ul className="cx-stepper__list">
							{week.experience.map((exp, index) => {
								return (
									<li key={index} className="cx-stepper__list-item">
										{exp}
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</div>
		</li>
	);
};

export default TimelineStep;
