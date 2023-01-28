import React from 'react';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import './contact.css';

const Contact = () => {
	return (
		<section id="contact">
			<h1 className="title">Contact.</h1>
			<div className="contact-container">
				<div className="contact-content">
					<p>
						I enjoy working with people who are passionate about their work and
						are looking to make a difference in the world. If you have a project
						that you would like to discuss, please feel free to contact me.
					</p>
					<p>
						If you want to mail:{' '}
						<a href="mailto:ashishxcode@gmail.com">ashishxcode@gmail.com</a>
					</p>
					<p>
						If you want hear my voice:{' '}
						<a href="tel:+918758549166">+91 8758549166</a>
					</p>
					<p>If you want learn more about me: </p>
					<div className="icon-wrapper">
						<a
							href="https://linkedin.com/ashishxcode"
							target="_blank"
							rel="noreferrer"
						>
							<img src={LinkedinIcon} alt="" />
						</a>

						<a
							href="https://instagram.com/ashishxcode"
							target="_blank"
							rel="noreferrer"
						>
							<img src={InstagramIcon} alt="" />
						</a>
					</div>
				</div>

				<form
					className="contact-form"
					name="contact"
					method="POST"
					data-netlify="true"
				>
					<input
						className="form-control"
						type="text"
						placeholder="Name"
						required
					/>
					<input
						className="form-control"
						type="email"
						placeholder="Email"
						required
					/>
					<textarea
						className="form-control"
						placeholder="Message"
						rows={3}
						required
					></textarea>
					<button className="button" type="submit">
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
