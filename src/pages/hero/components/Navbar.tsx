import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import CreatorXSmallLogo from '../../../assets/creatorx-small.svg';
import './navbar.css';
const Navbar = () => {
	const hamburger = useRef<HTMLDivElement>(null);

	const openNavbar = () => {
		const navLinks = document.querySelector('.nav-links');
		const lines = document.querySelectorAll('.line');
		navLinks?.classList.toggle('active');
		lines.forEach((line) => {
			line.classList.toggle('active');
		});
	};

	return (
		<header id="navbar">
			<nav className="desktop-navbar">
				<div className="navbar-container">
					<Link to="" className="nav-link">
						contact
					</Link>
					<Link to="/" className="nav-link">
						about
					</Link>
					<Link to="/" className="nav-link">
						<img
							alt="unicorn logo"
							src="https://via.placeholder.com/150"
							width="50px"
							height="50px"
							className="nav-logo"
						/>
					</Link>
					<Link to="/" className="nav-link">
						mentors
					</Link>
					<Link to="/" className="nav-link">
						join
					</Link>
				</div>
			</nav>
			<nav className="mobile-navbar">
				<div className="navbar-container">
					<img
						alt="unicorn logo"
						src="https://via.placeholder.com/150"
						width="50px"
						height="50px"
						className="nav-logo nav-link"
					/>

					<div className="hamburger" onClick={openNavbar} ref={hamburger}>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</div>
				</div>

				<div className="nav-links">
					<Link to="/" className="nav-link">
						join
					</Link>
					<Link to="/" className="nav-link">
						mentors
					</Link>
					<Link to="/" className="nav-link">
						about
					</Link>
					<Link to="/" className="nav-link">
						contact
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
