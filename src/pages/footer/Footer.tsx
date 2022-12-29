import React from 'react';

import LinkedinIcon from '../../assets/icons/linkedin.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import './footer.css';

const Footer = () => {
	return (
		<div id="footer">
			<div className="container-sm">
				<div className="social-icon-wrapper">
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
					<h5 className="username">@ashishxcode</h5>

					<p>Linkedin | Instagram</p>
				</div>
				<h4>EAT | SLEEP | CODE | REPEAT</h4>
			</div>
		</div>
	);
};
export default Footer;
