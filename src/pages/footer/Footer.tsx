import React from 'react';

import LinkedinIcon from '../../assets/icons/linkedin.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import './footer.css';

const Footer = () => {
	return (
		<div id="footer">
			<div className="container-sm">
				<div className="social-icon-wrapper">
					<h4>EAT | SLEEP | CODE | REPEAT</h4>
				</div>
			</div>

			<p className="footer-text">
				© {new Date().getFullYear()}&nbsp; Ashish Patel | All Rights Reserved
			</p>
		</div>
	);
};
export default Footer;
