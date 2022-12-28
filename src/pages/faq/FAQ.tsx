import React, { useState } from 'react';
import FAQCard from './components/FAQCard';

import './faq.css';
const FAQ = () => {
	const [showMore, setShowMore] = useState(false);

	const faqData = [
		{
			question: 'What is Lorem Ipsum?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicin elit. Quisquam quod, voluptate, quia, voluptates quas voluptatibus aspernatur quae quidem voluptatum quos. Quisquam, quae. Quisquam',
		},
		{
			question: 'What is Lorem Ipsum?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicin elit. Quisquam quod, voluptate, quia, voluptates quas voluptatibus aspernatur quae quidem voluptatum quos. Quisquam, quae. Quisquam',
		},
		{
			question: 'What is Lorem Ipsum?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicin elit. Quisquam quod, voluptate, quia, voluptates quas voluptatibus aspernatur quae quidem voluptatum quos. Quisquam, quae. Quisquam',
		},
		{
			question: 'What is Lorem Ipsum?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicin elit. Quisquam quod, voluptate, quia, voluptates quas voluptatibus aspernatur quae quidem voluptatum quos. Quisquam, quae. Quisquam',
		},
		{
			question: 'What is Lorem Ipsum?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicin elit. Quisquam quod, voluptate, quia, voluptates quas voluptatibus aspernatur quae quidem voluptatum quos. Quisquam, quae. Quisquam',
		},
		{
			question: 'What is Lorem Ipsum?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicin elit. Quisquam quod, voluptate, quia, voluptates quas voluptatibus aspernatur quae quidem voluptatum quos. Quisquam, quae. Quisquam',
		},
		{
			question: 'What is Lorem Ipsum?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicin elit. Quisquam quod, voluptate, quia, voluptates quas voluptatibus aspernatur quae quidem voluptatum quos. Quisquam, quae. Quisquam',
		},
		{
			question: 'What is Lorem Ipsum?',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicin elit. Quisquam quod, voluptate, quia, voluptates quas voluptatibus aspernatur quae quidem voluptatum quos. Quisquam, quae. Quisquam',
		},
	];

	const toggle = () => setShowMore(!showMore);
	return (
		<section className="container" id="faq">
			<header className="heading  text-center">
				<h1 className="text-uppercase">Don't Know How to Start?</h1>
				<p className="sticker sticker-stroke text-primary">
					we are here to help you out
				</p>
			</header>

			<div className="faq-wrapper container-sm">
				{
					// slice the array to show only 5 items
					faqData.slice(0, showMore ? faqData.length : 5).map((item, index) => (
						<FAQCard key={index} faq={item} />
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
