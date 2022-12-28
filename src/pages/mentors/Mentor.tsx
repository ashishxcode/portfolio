import React from 'react';
import Marquee from 'react-fast-marquee';
import MentorMarqueeNormal from './component/MarqueeNormal';
import MentorMarqueeFilled from './component/MarqueeFilled';
import './mentor.css';
import MentorCard from './component/MentorCard';
import TanamyBhattImg from '../../assets/images/tanmay-bhat.jpeg';
import AppurvGuptaImg from '../../assets/images/appurv-gupta.jpeg';
import BassiImg from '../../assets/images/bassi.jpeg';
import ZakirKhan from '../../assets/images/zakir-khan.jpeg';
const Mentor = () => {
	const mentors = [
		{
			id: 2,
			name: 'Appurv Gupta',
			image: AppurvGuptaImg,
			description: 'Standup Comic',
		},
		{
			id: 3,
			name: 'Anubhav Bassi',
			image: BassiImg,
			description: 'Standup Comic',
		},
		{
			id: 1,
			name: 'Tanmay Bhat',
			image: TanamyBhattImg,
			description: 'Standup Comic, Youtuber',
		},
		{
			id: 4,
			name: 'Zakir Khan',
			image: ZakirKhan,
			description: 'Standup Comic, Actor',
		},
	];
	return (
		<section id="mentor">
			<Marquee gradient={false} speed={100} className="mentor-ribbon-normal">
				<MentorMarqueeNormal />
			</Marquee>
			<div className="mentor-wrapper">
				<h1 className="sticker text-primary heading">meet your guides</h1>

				<div className="mentor-container">
					{mentors.map((mentor, index) => {
						return <MentorCard mentor={mentor} key={index} />;
					})}
				</div>
			</div>
			<Marquee gradient={false} speed={100} className="mentor-ribbon-filled">
				<MentorMarqueeFilled />
			</Marquee>
		</section>
	);
};

export default Mentor;
