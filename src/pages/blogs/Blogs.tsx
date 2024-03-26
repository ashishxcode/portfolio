import React from 'react';
import BlogCard from './components/BlogsCard';
import BlogCover from '../../assets/thumb/blog-cover.webp';

import './blogs.css';
const FAQ = () => {
	const blogList = [
		{
			thumbnail: `${BlogCover}`,
			title: 'Mastering the Art of Writing Effective GitHub Commit Messages',
			description: `There are no strict rules for writing commit messages but When working on a project on GitHub, it's important to communicate clearly and concisely about the changes you've madel...`,
			link: 'https://dev.to/ashishxcode/mastering-the-art-of-writing-effective-github-commit-messages-5d2p',
		},
	];

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
					blogList.map((item, index) => (
						<a href={item.link} target="_blank" rel="noreferrer" key={index}>
							<BlogCard key={index} blogs={item} />
						</a>
					))
				}

				{blogList.length >= 1 && (
					<div className="text-primary text-center view-more " role="button">
						<a
							href="https://dev.to/ashishxcode"
							target="_blank"
							rel="noreferrer"
						>
							Read More on Dev.to
						</a>
					</div>
				)}
			</div>
		</section>
	);
};

export default FAQ;
