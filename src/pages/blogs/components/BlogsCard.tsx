import React from 'react';

interface FAQCardProps {
	blogs: {
		thumbnail: string;
		title: string;
		description: string;
		link: string;
	};
}
const FAQCard: React.FC<FAQCardProps> = ({ blogs }) => {
	return (
		<article className="blogs-card">
			<div className="blogs-thumbnail-wrapper">
				<img
					src={blogs.thumbnail}
					alt={blogs.title}
					className="blogs-thumbnail"
				/>
			</div>
			<div className="blogs-content-wrapper">
				<h3 className="blogs-title">{blogs.title}</h3>
				<p>{blogs.description}</p>
			</div>
		</article>
	);
};

export default FAQCard;
