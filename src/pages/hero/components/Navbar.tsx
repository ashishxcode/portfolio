import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
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
					<a href="#about" className="nav-link">
						about
					</a>
					<a href="#work" className="nav-link">
						work
					</a>
					<a href="/">
						<img
							alt="unicorn logo"
							src={Logo}
							width="50px"
							height="50px"
							className="nav-logo"
						/>
					</a>
					<a href="#blogs" className="nav-link">
						blogs
					</a>
					<a href="#" className="nav-link">
						contact
					</a>
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
