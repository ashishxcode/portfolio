import React, { useState } from 'react';
import FAQCard from './components/BlogsCard';

import './blogs.css';
const FAQ = () => {
	const [showMore, setShowMore] = useState(false);

	const faqData = [
		{
			thumbnail: 'https://picsum.photos/200/300',
			title: 'What is Lorem Ipsum?',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicin elit. Quisquam quod, voluptate, quia, voluptates quas voluptatibus aspernatur quae quidem voluptatum quos. Quisquam, quae. Quisquam',
			link: 'https://google.com',
		},
	];

	const toggle = () => setShowMore(!showMore);
	return (
		<section className="container" id="blogs">
			<header className="heading  text-center">
				<h1 className="text-uppercase">Recently Published</h1>
				<p className="sticker sticker-stroke text-primary">
					Learning by Writing
				</p>
			</header>

			<div className="blogs-wrapper">
				{
					// slice the array to show only 5 items
					faqData.slice(0, showMore ? faqData.length : 5).map((item, index) => (
						<FAQCard key={index} blogs={item} />
					))
				}

				{faqData.length > 5 && (
					<div
						className="text-primary text-center view-more "
						onClick={toggle}
						role="button"
					>
						{showMore ? 'View Less' : 'View More'}
					</div>
				)}
			</div>
		</section>
	);
};

export default FAQ;
