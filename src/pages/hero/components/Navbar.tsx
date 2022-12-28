import React, { useRef } from 'react';
import CreatorXSmallLogo from '../../../assets/creatorx-small.svg';
import './navbar.css';
const Navbar = () => {
	const hamburger = useRef<HTMLDivElement>(null);

	// open navbar on mobile when hamburger is clicked
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
					<p className="nav-link">contact</p>
					<p className="nav-link">about</p>
					<img
						alt="unicorn logo"
						src="https://via.placeholder.com/150"
						width="50px"
						height="50px"
						className="nav-logo nav-link"
					/>
					<p className="nav-link">mentors</p>
					<p className="nav-link">join</p>
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
					<p className="nav-link">join</p>
					<p className="nav-link">mentors</p>
					<p className="nav-link">about</p>
					<p className="nav-link">contact</p>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
