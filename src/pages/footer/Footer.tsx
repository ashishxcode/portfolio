import React from 'react';
import CreatorXLogo from '../../assets/creatorx.png';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import './footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container-sm">
				<div className="footer-header">
					<h1>unicorn</h1>
					<h1>X</h1>
					<img className="logo" alt="" src={CreatorXLogo} />
				</div>
				<div className="social-icon-wrapper">
					<div className="icon-wrapper">
						<a
							href="https://linkedin.com/company/culturex-art"
							target="_blank"
							rel="noreferrer"
						>
							<img src={LinkedinIcon} alt="" />
						</a>

						<a
							href="https://instagram.com/culturex.art"
							target="_blank"
							rel="noreferrer"
						>
							<img src={InstagramIcon} alt="" />
						</a>
					</div>
					<h5 className="username">@CultureX.art</h5>

					<p>Linkedin | Instagram</p>
				</div>
				<h4>Made with ❤️ in Bharat</h4>
			</div>
		</div>
	);
};
export default Footer;
