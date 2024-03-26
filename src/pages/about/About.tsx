import React from 'react';
import ashishImage from '../../assets/ashish.png';
import './about.css';

const About = () => {
	return (
		<section id="about">
			<div className="about-container">
				<div className="about-content">
					<div className="about-title">
						<h1>👋</h1>
						<h2>
							It's me <span className="text-primary">ashish.</span>
						</h2>
					</div>
					<p className="about-text">
						I'm a self-taught developer with a passion for creating visually
						stunning and user-friendly web and mobile apps. My focus is on
						design-driven development, which allows me to deliver high-quality
						digital experiences that engage users and drive results. I have a
						deep understanding of the latest technologies and design trends,
					</p>
					<p className="about-text">
						My attention to detail is evident in every project I work on, from
						the smallest UI element to the overall user experience. I am also a
						great collaborator and communicator, I work closely with clients,
						designers and developers to understand their needs and bring their
						vision to life. Let's create something beautiful together!
					</p>

					<a href="mailto:ashishxcode@gmail.com" className="button">
						Email Me
					</a>
				</div>
				<div className="about-image">
					<img src={ashishImage} alt="Ashish Patel" />
				</div>
			</div>
		</section>
	);
};

export default About;
